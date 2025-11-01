# AppScrip Shop - Shop Page

This page displays a list of products fetched from an external API using Next.js Server Components.

## Features

- Async data fetching from [FakeStore API](https://fakestoreapi.com/)
- Reusable `ProductList` component for rendering items
- Modular CSS styling with scoped classes

## Tech Stack

- Next.js 13+ (App Router)
- React
- CSS Modules
- FakeStore API
- lucide react icons

## How It Works

1. `getProducts()` fetches data from `https://fakestoreapi.com/products`.
2. The `Shop` component awaits the data before rendering.
3. The fetched products are passed to `ProductList` as props.
4. The page displays a title, description, and a grid of products.

## Usage

1. Install dependencies:

```bash
   npm install
```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open the app in your browser:
   ```
   http://localhost:3000/
   ```

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js)
