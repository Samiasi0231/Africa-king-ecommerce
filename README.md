# Adé Atelier — React + Vite + TypeScript + Tailwind + shadcn/ui

A bespoke tailoring storefront, converted from the original design-component
(`.dc.html`) pages into a fully structured React app.

## Stack

- React 19 + Vite + TypeScript
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- shadcn/ui-style components (hand-written to match the shadcn pattern —
  `cva` variants + `cn()` — since the CLI's registry isn't reachable from
  this environment; drop in real shadcn components any time with
  `npx shadcn add <name>`, they'll follow the same conventions)
- React Router
- lucide-react icons
- `@fontsource-variable/inter` for body text; Bodoni Moda (Google Fonts) for
  display serif headings, matching the original design

## Getting started

```bash
npm install
npm run dev
```

Build for production (type-checks first):

```bash
npm run build
npm run preview
```

## Folder structure

```
src/
  pages/            One folder per route, each with an index.tsx orchestrator
    home/
    catalogue/
    product/
    fitting/
    dashboard/
    cart/
    checkout/
    <page>/components/   Page-specific pieces, kept small and focused
  components/        Shared components used across multiple pages
    ui/               shadcn-style primitives (button, input, card, etc.)
    layout/           Header, Footer, Layout (wraps routes via <Outlet />)
  context/           ShopContext — shared bag/cart state (persisted to
                     localStorage under ade.bag.v1) and currency formatting
  hooks/             useFlash (toast timer), usePromoCode
  data/              Mock data: catalogue, orders, fitting options, checkout
                     shipping/payment options
  types/             Shared TypeScript interfaces (Product, Order, BagLine…)
  lib/               utils.ts — the cn() class-merging helper
```

## Design rules this project follows

- No inline styles anywhere — everything is Tailwind utility classes.
  Dynamic per-item values that would normally need `style={{ ... }}` (image
  crop position, colour swatches) are instead stored as literal Tailwind
  class strings in the mock data (e.g. `pos: "object-top"`,
  `swatch: "bg-[#25314A]"`), so Tailwind's scanner picks them up at build
  time.
- No `sx()` or CSS-string styling utility.
- Pages stay thin — each `pages/<name>/index.tsx` just wires together
  smaller components from `pages/<name>/components/`.
- Routing is nested under `Layout` (`components/layout/Layout.tsx`), which
  renders `Header`/`Footer` once via `<Outlet />` instead of every page
  importing them. `Header`/`Footer` read the current route to vary the
  announcement banner / footer variant, replacing the per-page props the
  original design used. Checkout keeps its own minimal header/footer (as
  the original design did) and sits outside `Layout`.

## Images

The original design referenced images that weren't included in the source
files. Add them to `public/img/` using the filenames listed in
`public/img/README.txt` and they'll show up automatically.

## Notes

- Currency defaults to NGN (`ShopProvider currency="NGN"` in `main.tsx`).
- Full product-detail content (description panels, gallery, made-to-measure
  pricing) was only authored for "The Ìjọba Three-Piece" in the original
  design. Other catalogue items fall back to generic content — see
  `PRODUCT_DETAILS` in `src/data/catalogue.ts`.
- No API calls, Axios, or SWR — all data is mocked in `src/data/`, per
  project rules. Wiring up real endpoints later just means replacing the
  mock imports in each page with fetch calls / a query hook.
