# Lab 2 — Server & Client Components (Standalone, Railway-connected)

This is a **complete, runnable Next.js project** for Lab 2 — not just an
overlay of a few files. Unzip it and run it directly.

## What's inside
```
Lab02_Server_Client_Components/
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── .env.example
├── .gitignore
├── prisma/
│   ├── schema.prisma      -> Product + Category models
│   └── seed.ts            -> sample data
├── lib/
│   └── prisma.ts          -> Prisma client singleton
└── app/
    ├── layout.tsx
    ├── page.tsx            -> home page, links to /products
    ├── globals.css
    └── (shop)/products/
        ├── page.tsx        -> Server Component, fetches products
        ├── ProductGrid.tsx -> Client Component, Add to Cart
        └── SearchBar.tsx   -> Client Component, search input
```

## Setup — run these in order

```bash
cd Lab02_Server_Client_Components
npm install
cp .env.example .env
```

Now open `.env` and paste your real Railway connection string
(Railway dashboard -> Postgres service -> Connect tab -> Postgres Connection URL).

```bash
npx prisma db push
npx prisma generate
npm run seed
npm run dev
```

Open `http://localhost:3000` in your browser.
