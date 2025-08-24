This is a [Next.js](https://nextjs.org) project.

## Getting Started

After cloning the repository, run the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


## Project Setup

This project is a Next.js 15 + React 19 app styled with Tailwind CSS v4 and Radix-based UI components. Dev server runs with Turbopack.

### Prerequisites
- Node.js 18+ (recommend LTS)
- pnpm (recommended)

### Install
```bash
pnpm install
```

### Development
```bash
pnpm dev
# visit http://localhost:3000
```

### Production build
```bash
pnpm build
pnpm start
```

### Linting
```bash
pnpm lint
```

## URL Paths
Four primary routes are available:

- `/` — Home (site landing)
- `/dashboard` — Dashboard (with sidebar layout)
- `/dashboard/listing` — Listing table and drawer
- `/projects/[slug]` — Project details page
  - Example slugs: `kochi-skyline-apartments`, `kochi-marina-residences`, `kochi-greens-villas`
