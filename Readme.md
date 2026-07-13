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

If you open via `file://`, a yellow banner will remind you that iframe-based
examples (vanilla and React) need a local server. Console examples work
either way.

## Dashboard Architecture

`dashboard.html` is a single-file SPA with two views:

1. **Dashboard Grid** — 17 cards in a responsive CSS Grid (4-5 columns on
   desktop, 2-3 on tablet, 1-2 on mobile). Each card shows an icon, name,
   one-line description, and a color-coded type badge.
2. **Detail View** — loads and runs the selected example, then displays a
   "Back to Dashboard" button to return.

### Loading Strategies

| Strategy | Type | How it works |
|---|---|---|
| **iframe** (15 examples) | Vanilla HTML + React | Loads the example's `index.html` inside an `<iframe>`. Preserves full interactivity. Requires a local server due to same-origin policy. (React examples are currently loaded via an inline Babel pipeline; switching to iframe is planned — see below.) |
| **Console** (2 examples) | Console output | Overrides `console.log/error/warn`, executes the example's JS, waits up to 2 seconds for async output, then displays captured logs in a styled dark console panel with log-level coloring. |

## Example Registry

| Directory | Display Name | Type | Description |
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

## Visual Design

The dashboard uses a modern design system:

- **Color palette** — navy/indigo header, soft blue-tinted page background,
  white cards with accent-colored top borders per example type
- **Type badges** — pill-shaped tags on each card: indigo for React, emerald
  for Vanilla, amber for Console
- **Card hover effects** — translate-up + colored glow shadow matching the
  example type
- **Loading skeleton** — animated shimmer placeholders replace plain "Loading..."
  text while React and console examples load
- **Console panel** — dark-themed with a "Console Output" header, color-coded
  log prefixes (green for log, red for error, yellow for warn), and a styled
  "No output to display" state
- **Error states** — styled error containers with a warning icon and
  consistent typography
- **Responsive grid** — 4-5 columns on desktop (>=1024px), 2-3 on tablet,
  1-2 on mobile (<600px)

## Planned: React Standalone Pages

Currently React examples are loaded via a complex source-transformation
pipeline inside `dashboard.html` that strips ES module syntax, inlines CSS and
constants, and transpiles JSX with Babel standalone. This pipeline is fragile
and will be replaced (see `req-8090509e` on the board):

- **Each React example gets its own `index.html`** — a self-contained page
  that loads React/Babel from CDN, fetches and transforms its own `index.js`,
  and renders the component. Opening `collapse/index.html` directly will render
  the Collapse component without the dashboard.
- **Dashboard switches to iframe** — React examples use the same `<iframe>`
  mechanism as vanilla examples. The `loadReact()` function and React/Babel CDN
  scripts are removed from `dashboard.html`.
- **Result** — the dashboard becomes a pure launcher with no React-specific
  rendering code, and every React example is independently openable.

## Constraints

- **Zero install** — no npm, no build step. Console examples work over
  `file://`; iframe-based examples (vanilla and React) need a local server.
- **CDN dependencies only** — React 18 UMD, ReactDOM 18 UMD, and Babel
  standalone are loaded from unpkg CDN. After the React standalone pages
  change (planned), the dashboard itself will no longer load these CDN scripts.
