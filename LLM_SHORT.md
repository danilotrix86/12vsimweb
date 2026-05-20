# LLM Context — 12V Sim (short)

> **Read this first** for project context. Full detail: [`LLM.md`](LLM.md). **Update both files** when behavior, architecture, or scope changes.

## 1. What this is

Browser-based drag-and-drop **12 V DC** electrical simulator (car, camper, boat, off-grid, etc.). Users prototype wiring, run steady-state DC simulation, catch blown fuses, voltage drop, wire overload, brown-outs. **Static SPA** — no backend. Designs: LocalStorage, JSON export/import, share via URL hash (`#d=<base64>`). Deploy `dist/` to any static host.

## 2. Status

**Phase 1 (MVP) — complete.** Modified Nodal Analysis DC solver, canvas, palette, inspector, autosave, multi-design library, share URL, multi-select, Design Review score (0–100), cable routing with AWG/mm² + length on every edge, animated energized wires, fault detection + locale explanations.

**Major component families (all in Phase 1):**
- **Sources:** `battery` (5 chemistry presets), `chargeSource` (6 presets: alternator, shore, solar, wind, etc.)
- **Switching:** `switch` (9 presets), `selector`, `rotary`, `relay` (7 presets), `mosfetSwitch`, `controller` (PWM/RGB)
- **Protection:** `fuse` (8 presets), `fusebox`, `circuitBreaker`, `groundFaultProtection`, `surgeProtector`, `reversePolarityProtection`
- **Distribution:** `busbar`, `switchPanel`, `distributionPanel`, `terminalBlock`, `groundingPoint`, `junctionBox`
- **Loads:** `load`, `lamp` (4 presets), `appliance` (11 presets), `dimmer`, `potentiometer`
- **Monitoring:** `voltmeter`, `ammeter`, `wattmeter`, `shunt`, `batteryMonitor`, `multimeter`, `oscilloscope` (all preset-driven)

**Editor QoL:** rotation, pole-flip, duplicate, context menu, magnetic snap, resizable nodes, palette search + info popover, guided tour.

**Not yet:** Phase 2 transients / I²t fuses / SOC; Phase 3 expanded library; Phase 4 BOM / schematic mode. See §9.

## 3. Tech stack

React 18 + TypeScript + Vite 6 · `@xyflow/react` v12 · Zustand v5 · Tailwind v4 (`src/index.css`) · i18n via `src/locales/en.json` + `t()` in `src/i18n.ts` · Optional Supabase cloud backup (env-gated, `src/cloud.ts`).

Commands: `npm run dev` (5173) · `npm run build` · `npm run lint` (= `tsc --noEmit`).

## 4. File map (essential)

```
src/
  App.tsx           Layout, autosave, boot (URL hash > library > starter), CableEdgeUiProvider
  store.ts          Zustand: nodes/edges/sim/library/cableBundles + all actions
  starterDesign.ts  Default template payload
  library.ts        Multi-design LocalStorage (boat12v.library.v1)
  persistence.ts    Autosave, export/import, share URL encode/decode
  migrateEdges.ts   Backfill AWG/length on every load
  sim/
    types.ts        ComponentType, Port, SimResults, ReviewIssue…
    schema.ts       COMPONENT_LIBRARY + presets + getPortsForNode + AWG/mm²
    netlist.ts      Graph → electrical nodes (Union-Find)
    mna.ts          MNA DC solver + iterative fuse/relay/breaker trips
    review.ts       Design Review (6 weighted categories)
  components/
    Toolbar.tsx, Palette.tsx, Canvas.tsx, Inspector.tsx, StatusBar.tsx
    DesignReview.tsx, DesignsModal.tsx, Tour.tsx, WireConfigModal.tsx
    nodes/ComponentNode.tsx   Single renderer for all types
    edges/CableEdge.tsx       Polyline routing, waypoints, bundles
```

**Adding components:** see §11 in full doc. Tier A = 6 files; Tier B = ~14 files; Tier C = preset table + locale only.

## 5. Architecture

```
Palette (drag) → Canvas (drop) → ComponentNode ← schema.ts
       ↓
React Flow events → store.ts (nodes/edges)
       ↓ (sim running, on every change)
netlist.ts → mna.ts (solveDC) → review.ts → SimResults
       ↓
ComponentNode badge + Inspector + StatusBar + edge animation + DesignReview
```

Persistence: `App.tsx` 250 ms debounced subscribe → LocalStorage (+ optional 5 s cloud sync).

## 6. Critical gotchas (read before editing)

| Topic | Rule |
|-------|------|
| Ground | Electrical node 0; synthesized if missing |
| Topology-only | `busbar`, `ground`, `terminalBlock`, `groundingPoint`, `junctionBox` — no MNA branch |
| Fuse/breaker trips | Iterative loop in `solveDC` (max 8); trips persist via `persistBlownState` + `blownAt` |
| Every edge | Must have `{ awg, lengthM > 0 }`; created via `WireConfigModal` on connect |
| Port colours | `positive`=red, `negative`=slate, `signal`=amber, `wiper`=violet, `ground`=green, `neutral`=slate |
| `POLARIZED` set | Duplicated in `ComponentNode.tsx`, `Inspector.tsx`, `Canvas.tsx` — keep in sync |
| Dynamic ports | Add deps to `useUpdateNodeInternals` effect or handles go stale |
| Cell grids | Use absolute `k/(n+1)*100%`, NOT flex (fusebox, switchPanel) |
| Zustand selectors | Return stable primitives, not new arrays/objects each call |
| `isDefault` guard | `library.ts` + `DesignsModal.tsx` + `Toolbar.tsx` — three places |
| Alarms vs Review | Alarms = runtime faults; Review = design-quality grade — don't merge |
| Cloud | Never block solver; env-gated; errors swallowed |

**Port current sign:** leaving component = positive. Edge animation uses signed current for direction.

## 7. Solver (brief)

Modified Nodal Analysis: node voltages + voltage-source currents. Resistors + batteries/charge sources as V+series-R. `R_OPEN = 1e9`, `GMIN = 1e-9`. Gaussian elimination (`matrix.ts`). Phase 1 fully linear. Iterative loops: fuse/breaker trips, relay coil pickup/dropout, RPP polarity, distribution panel main breaker.

## 8. Faults detected

| Alarm | Trigger |
|-------|---------|
| `fuseBlown` | \|I\| > fuse rating |
| `breakerTripped` | Circuit breaker or distribution panel channel |
| `distributionPanelMainTripped` | Σ branch I > main rating |
| `gfpTripped` | Leakage > sensitivity |
| `surgeEvent` | V > clamp (sacrificial) |
| `reversePolarity` | Wrong polarity on RPP |
| `relayOverloaded` / `switchOverloaded` | Contact I > rating |
| `wireOverloaded` | \|I\| > AWG ampacity |
| `brownOut` | Load V < minV |
| `sourceOverloaded` | Charge source I > limit |
| `meterOverrange` | Instrument out of range |
| `singularCircuit` | Matrix singular |

StatusBar shows alarm + optional `alarms.explanations.*`. Components get red ring + fault badge. Reset via Toolbar "Reset Faults".

**Design Review categories (weights):** fuse-protection 30, wire-margin 25, voltage-drop 20, fuse-sizing 10, battery-runtime 10, topology 5.

## 9. Not implemented (don't hallucinate)

- Time stepping / transients / battery SOC drain / motor inrush
- I²t fuse curves (instantaneous trip only)
- BOM export / schematic render mode
- Test runner
- Dark/light theme toggle

## 10. When making changes

1. `Read` before edit; `StrReplace` for edits
2. Run `npx tsc -b` + `ReadLints`; fix what you introduced
3. **Update `LLM.md` and `LLM_SHORT.md`** for behavior/architecture/i18n changes
4. New components → `schema.ts` first; params auto-appear in Inspector
5. Don't bypass selection rules in §6 without strong reason
6. Keep bundle lean (~536 KB JS / 161 KB gzip)

## 11. Adding a component (summary)

| Tier | When | Files |
|------|------|-------|
| **A — Primitive** | Fixed ports, generic body | `types.ts`, `schema.ts`, `mna.ts`, `review.ts`, `en.json` (+ optional `POLARIZED` ×3) |
| **B — Complex** | Dynamic ports, per-channel state, custom body | Tier A + `netlist.ts`, store actions, `ComponentNode` body, `Inspector` editor, `useUpdateNodeInternals` deps |
| **C — Preset variant** | Same type, different defaults/visuals | One row in `*_PRESETS` table + `en.json` (+ optional MiniMap colour) |

Copy closest sibling for Tier B. Full step-by-step checklist: [`LLM.md` §11](LLM.md).

**Preset-driven types today:** `lamp`, `controller`, `switch`, `rotary`, `battery`, `chargeSource`, `relay`, `fuse`, `appliance`, all meters, protection presets.

## 12. i18n key patterns

- UI: `toolbar.*`, `palette.*`, `inspector.*`, `status.*`
- Alarms: `alarms.*` + `alarms.explanations.*`
- Review: `review.issues.*` + `review.suggestions.*` (siblings, not nested)
- Components: `components.<type>.*` wired through `schema.ts` (`C.<type>…`)

## 13. LocalStorage keys

| Key | Purpose |
|-----|---------|
| `boat12v.library.v1` | Multi-design library |
| `boat12v.design.v1` | Legacy single-slot (crash recovery) |
| `boat12v.paletteCollapsed.v1` | Palette category collapse state |
| `boat12v.tourSeen.v1` | Guided tour completed |
| `boat12v.cloud.anonId.v1` | Cloud backup attribution |

Default template id: `d_default` (protected, resettable, not deletable).
