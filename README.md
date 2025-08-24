# Real Estate Platform Frontend

This is a [Next.js](https://nextjs.org) project built for a high-priority sprint to deliver a pixel-perfect, AI-augmented frontend for a real estate management platform. It includes a public **Buyer Module** for property search and exploration, and a private **Builder Dashboard** for managing projects, media, and leads. The project leverages Next.js 15, React 19, Tailwind CSS v4, Radix UI components, and Turbopack.

## Sprint Context

- Built to demonstrate:
  - High-fidelity translation of Figma designs into accessible UI.
  - Modular, scalable, and performant component architecture.
  - Effective use of AI tools to accelerate development.
  - Clear decision-making within a 4–6 hour time constraint.

## Tech Stack

- Framework: Next.js 15, React 19
- Styling: Tailwind CSS v4
- UI Components: Radix UI (accessible, reusable)
- Dev Server: Turbopack
- Package Manager: pnpm
- Node.js: 18+ (LTS recommended)

## Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- pnpm (`npm install -g pnpm`)

### Installation

- Clone the repository:
  ```bash
  git clone https://github.com/<your-username>/<your-repo>.git
  cd <your-repo>

- Install dependencies: pnpm install

### Development

- Run the development server: pnpm dev
- Open http://localhost:3000 to view the app.

### Production Build

- Build and start the production server: pnpm build
pnpm start

Below is the content formatted in Markdown with ## headings and - bullet points for a GitHub README, incorporating the provided context in a clear and structured manner.
markdown## Real Estate Platform README

## Overview
This project is a real estate platform with distinct **Buyer** and **Builder** modules, built to provide a seamless experience for property browsing and management. The platform leverages modern frameworks and AI tools to ensure rapid development, accessibility, and performance.

---

## Features

### Buyer Module

#### Project Listing Page
- Search bar with filters for location and property type (e.g., 1BHK, 2BHK, 3BHK).
- Responsive grid layout displaying property cards with images, location, price, and details.
- "Popular Properties" sections showcasing top properties across multiple cities.

#### Project Description Page
- Large image gallery with thumbnail navigation for immersive property previews.
- Detailed project information including title, location, price, quick action buttons, and a contact form.
- Filterable property configurations (e.g., 1BHK, 2BHK) for tailored browsing.
- "Explore Neighbourhood" section with a list of amenities and an interactive map view.
- Related "Popular Properties" section for cross-promotion.

#### Search Integration
- Keyword and filter-based search delivering real-time results for efficient property discovery.

### Builder Dashboard

#### Overview
- Displays key metrics (views, leads, CTRs) visualized with line graphs.
- Snapshot cards highlighting critical statistics for quick insights.
- Previews of recently added projects for easy monitoring.

#### Projects Table
- Sortable table with columns for project name, location, leads, and status.
- Status indicators (active/inactive) for quick project tracking.
- Quick action buttons for editing or viewing projects.

#### Project Detail View
- Editable fields for project description, pricing, and media uploads.
- Image gallery management with upload, reorder, and delete functionality.
- Detailed specifications and amenities list for comprehensive project representation.

#### Leads View
- Displays buyer inquiries with sorting filters and export functionality for lead management.

---

## URL Paths
- `/`: Home (landing page).
- `/dashboard`: Builder dashboard with sidebar layout.
- `/dashboard/listing`: Projects table with management drawer.
- `/projects/[slug]`: Project details (e.g., `/projects/kochi-skyline-apartments`, `/projects/kochi-marina-residences`, `/projects/kochi-greens-villas`).

---

## AI Tool Usage
AI tools were utilized to enhance development speed and quality:
- **GitHub Copilot**: Generated boilerplate code for React components, Tailwind CSS styles, and Next.js route handlers, saving ~30% development time.
- **Figma-to-React Plugin, Codia**: Converted Figma designs to JSX for pixel-perfect UI implementation.
- **AI Linters**: Integrated ESLint with AI plugins to identify accessibility and performance issues early.
- **Documentation**: AI-assisted Markdown drafting for this README, manually refined for clarity.

---

## Task Breakdown
Development tasks were completed within a 4–6 hour timeframe:
- **Buyer Module – Project Listing**: 1.5h (component creation, grid layout, filter logic).
- **Buyer Module – Project Description**: 1.5h (image gallery, dynamic content, responsive design).
- **Buyer Module – Search Integration**: 1h (search bar, filter state management).
- **Builder Dashboard – Project Management**: 1.5h (table, sortable columns, action buttons).
- **Builder Dashboard – Asset Management**: 1.5h (image upload, drag-and-drop reordering).
- **Builder Dashboard – Leads View**: 1h (lead table, export functionality).

---

## Assets
- **Figma Designs**: [Figma Link](#) (replace with actual link).
- **Live Preview**: [Vercel Link](#) (to be added post-deployment).

---

## Notes
- **Accessibility**: Built with Radix UI to ensure ARIA compliance and full keyboard navigation support.
- **Performance**: Utilizes lazy-loaded images and Next.js SSR for fast page rendering.
- **Modularity**: Reusable components shared across buyer and builder modules for maintainability.
- **Resources**:
  - [Next.js Documentation](https://nextjs.org/docs)
  - [Learn Next.js](https://nextjs.org/learn)

---

## Contributing
To contribute to the project, follow these steps:
- Fork the repository.
- Create a feature branch (`git checkout -b feature/YourFeature`).
- Commit your changes (`git commit -m 'Add YourFeature'`).
- Push to the branch (`git push origin feature/YourFeature`).
- Open a Pull Request.