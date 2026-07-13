# Frontend Practice Dashboard

A collection of 17 interactive frontend examples accessible through a single
dashboard. Covers vanilla HTML/CSS/JS, React components, and console-output
exercises — all with zero install.

## Quick Start

Open `dashboard.html` in a modern browser:

```
# Recommended: use a local server so iframe-based examples work
python -m http.server 8000
# then open http://localhost:8000/dashboard.html
```

If you open via `file://`, a yellow banner will remind you that vanilla-HTML
examples (iframe) need a local server. React and console examples still work.

## Dashboard Architecture

`dashboard.html` is a single-file SPA with two views:

1. **Dashboard Grid** — 17 cards in a responsive CSS Grid. Click any card to
   explore.
2. **Detail View** — loads and runs the selected example using one of three
   strategies, then displays a "Back to Dashboard" button to return.

### Three Loading Strategies

| Strategy | Type | How it works |
|---|---|---|
| **Vanilla** (8 examples) | HTML/CSS/JS | Loads the example's `index.html` inside an `<iframe>`. Preserves full interactivity. Requires a local server due to same-origin policy. |
| **React** (7 examples) | React 18 + JSX | Fetches source JS, strips ES module imports/exports, inlines CSS and constants, then transpiles and renders with CDN-hosted React + Babel standalone. No build step needed. |
| **Console** (2 examples) | Console output | Overrides `console.log/error/warn`, executes the example's JS, waits up to 2 seconds for async output, then displays captured logs in a styled dark console panel. |

## Example Registry

| Directory | Display Name | Type | One-Line Description (planned) |
|---|---|---|---|
| `autocpmplate` | Auto Complete | Vanilla | Type-ahead suggestion dropdown with keyboard navigation |
| `calendar` | Calendar | Vanilla | Monthly date picker with navigation controls |
| `collapse` | Collapse | React | Accordion-style expandable/collapsible panels |
| `currying` | Currying | Console | Compose functions using currying pattern |
| `debounce` | Debounce | Vanilla | Debounced input with configurable delay |
| `draggle` | Draggable | React | Drag and drop elements built with React |
| `eventloop_example` | Event Loop Example | Console | Visualize microtask vs macrotask execution order |
| `five_stars_rating` | Five Stars Rating | React | Interactive star rating component |
| `infinity_scroll` | Infinite Scroll | React | Infinite scroll with dynamic data loading |
| `keyboard` | Keyboard | Vanilla | Virtual keyboard with key event handling |
| `limit_tasks` | Limit Tasks | Vanilla | Task queue with configurable concurrency limit |
| `rendor1000data` | Render 1000 Data | Vanilla | Efficient rendering of 1,000 data rows |
| `spiral-grid` | Spiral Grid | Vanilla | CSS Grid spiral layout pattern |
| `throttle` | Throttle | Vanilla | Throttled event handler with configurable rate |
| `tic tac toe` | Tic-Tac-Toe | React | Classic Tic-Tac-Toe game built with React |
| `todo-ai` | Todo List | React | AI-powered todo list with CRUD operations |
| `user-form` | User Form | React | Dynamic user registration form with validation |

## Planned Visual Improvements

The following enhancements are designed but not yet implemented (see
[PRD](.forge-workspace/prd.md) and [design notes](.forge-workspace/design.md)):

- **Card Grid Visual Redesign** (planned) — modern color palette (navy/indigo
  header, soft blue-tinted background), card redesign with gradient top-border
  accents, type badges ("React" / "Vanilla" / "Console") on each card, hover
  animations with accent-color glow, and one-line descriptions below card names.
- **Detail View Polish** (planned) — animated loading skeleton replacing plain
  "Loading..." text, styled console panel with log-level colors and a "No output"
  state, consistent padding and layout across all three example types, and
  styled error states with icons.
- **Responsive Grid** (planned) — 4-5 columns on desktop, 2-3 on tablet
  (~768px), 1-2 on mobile (~480px).

## Constraints

- **Zero install** — no npm, no build step, no local server required (React and
  console examples work over `file://`; vanilla iframe examples need a server).
- **CDN dependencies only** — React 18 UMD, ReactDOM 18 UMD, and Babel
  standalone are loaded from unpkg CDN on first React example click.
