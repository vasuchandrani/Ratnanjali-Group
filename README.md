<<<<<<< HEAD
# Ratnanjali-Group
=======
# Ratnanjali Group — Real Estate Landmarks & Portfolios

A modern, highly-polished web application showcasing the real estate portfolio of the **Ratnanjali Group**. Crafted with clean aesthetics, micro-animations, and full responsiveness, the platform highlights the group's nearly two decades of excellence in development across Ahmedabad.

---

## 🏗️ Project Overview

Ratnanjali Group is a real estate house known for building landmarks and creating value. This platform showcases their capabilities and portfolio across four major development disciplines:
1. **Residential:** Towering apartments and heritage villas.
2. **Commercial:** Prestige showrooms, offices, and garden workspaces.
3. **Hospitality:** Weekend estates, resorts, and nature clubhouses.
4. **Mixed-Use:** Integrated destinations bridging working, living, and leisure.

The user interface features a sleek dark mode design system, premium typography, slide animations, scroll-based revelations, and high-quality imagery hosted on Sanity.io.

---

## 🛠️ Technology Stack

The project is built using modern front-end technologies:

* **Core Framework:** [React 19](https://react.dev/)
* **Routing & Meta/SSR Framework:** [TanStack Start](https://tanstack.com/router/v1/docs/start/overview) & [TanStack React Router](https://tanstack.com/router) (file-based routing)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **UI Components:** [Radix UI](https://www.radix-ui.com/) & [shadcn/ui](https://ui.shadcn.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Asset Hosting:** [Sanity.io CDN](https://sanity.io/)
* **Build System:** [Vite](https://vite.dev/)

---

## 📁 Directory Structure

```text
├── src/
│   ├── components/       # Reusable UI & Page Section Components
│   │   ├── home/         # Hero, Featured, Process, Stats, CTA components
│   │   ├── site/         # Layout shells (Header, Footer, Logo, ScrollReveal)
│   │   └── ui/           # Radix primitives and shadcn components
│   ├── data/             # Static configurations & project metadata
│   ├── hooks/            # Custom hooks (e.g. mobile responsiveness)
│   ├── lib/              # Client error reporting & utilities
│   ├── routes/           # File-based routes (index, about, projects, contact, expertise)
│   ├── styles.css        # Main tailwind base styling
│   ├── router.tsx        # TanStack router setup
│   └── server.ts         # Nitro/Vite SSR entrypoint wrapper
├── root/                 # Static assets directory (images, layouts)
├── public/               # Public assets & search-engine crawlers configuration
└── vite.config.ts        # Vite custom bundler configuration
```

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

### Prerequisites

Ensure you have **Node.js** (v18+) and one of the package managers (**npm**, **yarn**, or **bun**) installed.

### Installation

1. Clone or navigate into the workspace directory:
   ```bash
   cd visionary-heights-main
   ```

2. Install dependencies:
   ```bash
   npm install
   # or using Bun
   bun install
   ```

### Running Locally

To spin up the local development server:

```bash
npm run dev
```

The app will start and be available at:
* **Local:** `http://localhost:8080/`

### Building for Production

To create an optimized production bundle:

```bash
npm run build
```

This compiles the static app assets, preparing it for hosting (e.g. Cloudflare Pages or similar serverless platforms).

---

## 🎨 Design & Interaction Details

* **Color Palette:** harmonious stone-soft backgrounds, deep charcoal text, and soft gold accents.
* **Scroll Animations:** Integrated custom scroll reveal animations (`RevealOnScroll`) to provide a premium storytelling experience.
* **SEO Best Practices:** Auto-injected page metadata (title, description, and preview cards) managed per-route via TanStack Start routing APIs.
>>>>>>> 1e73283 (Add Prototype)
