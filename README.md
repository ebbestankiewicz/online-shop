# Sunday Market

An online shop built for the Noroff **JavaScript Frameworks** course assignment.
Browse products, search and sort, add items to a persistent cart and check out.

**Live demo:** https://online-shop-tau-red.vercel.app/

## Features

- Product list fetched from the Noroff Online Shop API, with discount badges and ratings
- Product detail pages with description, tags and reviews
- Live search with a keyboard-accessible results dropdown
- Sorting by price, rating and name
- Shopping cart persisted in localStorage, with adjustable quantities, undo on remove and total cost
- Checkout success page that clears the cart
- Contact form with TypeScript-based validation
- Loading skeletons, error fallback and custom 404 pages
- Responsive layout for mobile, tablet and desktop

## Tech stack

| Tool                        | Why                                                                                                                                                                                                            |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Next.js 16 (App Router)** | Server Components fetch product data on the server for fast first loads and good SEO. File-based routing, `loading.tsx`, `error.tsx` and `not-found.tsx` give loading and error states with little extra code. |
| **TypeScript (strict)**     | Typed API responses, props and state catch mistakes before they reach the browser.                                                                                                                             |
| **Tailwind CSS v4**         | Fast to build with, while a custom theme (colours, fonts, radius) keeps the design consistent and distinct.                                                                                                    |
| **Zustand**                 | Small global store for the cart with built-in `persist` middleware. Less boilerplate than Context + useReducer.                                                                                                |
| **Sonner**                  | Lightweight, accessible toast notifications.                                                                                                                                                                   |

## Project structure

```
src/
├── app/                  # Routes (pages, layouts, loading/error/not-found)
│   ├── product/[id]/     # Dynamic product detail route
│   ├── cart/
│   ├── checkout/success/
│   └── contact/
├── components/
│   ├── layout/           # Header, Footer, Logo, navigation
│   ├── product/          # ProductCard, PriceTag, Rating, SearchBar ...
│   ├── cart/             # CartView, CartItemRow, CartSummary
│   ├── contact/          # ContactForm
│   └── ui/               # Generic components: TextField, QuantityControl
├── hooks/                # Custom hooks (useHasMounted)
├── lib/                  # API service layer
├── store/                # Zustand cart store and selectors
├── types/                # Interfaces for API data and cart
└── utils/                # Pure helpers: price, search, sort, validation
```

### Architecture decisions

- **Separation of concerns:** all API calls live in `lib/api.ts`. Components never call `fetch` directly.
- **Server first:** pages are Server Components. Only parts that need interactivity or browser storage are Client Components (`"use client"`).
- **Derived state:** cart count, total and savings are calculated with selectors, not stored, so there is one source of truth.
- **Pure functions** for search, sorting, pricing and validation, kept outside React so they are easy to reuse and test.

## Getting started

Requires Node.js 20.9 or newer.

```bash
git clone https://github.com/ebbestankiewicz/online-shop.git
cd online-shop
npm install
npm run dev
```

Open http://localhost:3000.

| Script          | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Create a production build    |
| `npm run start` | Run the production build     |
| `npm run lint`  | Lint the code                |

## API

[Noroff Online Shop API](https://docs.noroff.dev/docs/v2/basic/online-shop):

- `GET /online-shop` – all products
- `GET /online-shop/<id>` – a single product

## Author

Ebbe Stankiewicz – [GitHub](https://github.com/ebbestankiewicz)
