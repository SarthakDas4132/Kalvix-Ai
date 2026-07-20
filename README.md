# M-Auxis.ai Marketing Website (v1) 👋

Welcome to the **M-Auxis.ai** marketing landing page codebase. This project features a universal design combining high-contrast **Neo-Brutalist** aesthetics with smooth, Framer-style scroll interactions, custom timeline stepper processes, comparison matrices, and fully responsive layouts optimized for all viewport sizes (desktop, tablet, and mobile).

---

## 🚀 Tech Stack

The app is built on a universal framework codebase supporting both Web and Native compilation targets:

### Core Framework
* **Expo SDK (`~56.0.12`)**: Universal app platform allowing native mobile and web compilations from a single codebase.
* **Expo Router (`~56.2.11`)**: File-based router supporting static page generation (SSG) for high-performance web pages.
* **React Native Web (`~0.21.0`)**: Bridges React Native UI components to native browser DOM nodes.
* **React & React DOM (`19.2.3`)**: Core library driving UI rendering.
* **TypeScript (`~6.0.3`)**: Ensures strict static typing across components and configurations.

### Animations & Inertial Scroll
* **Framer Motion (`^12.40.0`)**: Powers spring-physics layout animations, hover states, timelines, and dynamic slide transitions.
* **Lenis (`^1.3.23`)**: Normalizes scrolling speeds and adds smooth inertial scrolling to simulate premium visual designs.

### Typography & Styling
* **Fonts**: Loaded via Google Fonts & Fontshare APIs:
  * *Clash Display*: Display headers (`--font-display`)
  * *Satoshi*: General copy and body text (`--font-satoshi`)
  * *Oswald*: Labels, menus, and badges (`--font-oswald`)
* **Styling Paradigm**: Uses a custom-engineered vanilla design system in `src/global.css` (defining neo-brutalist utility classes like `.neo-card`, `.neo-btn`, `.badge-sticker`) combined with dynamic, viewport-reactive React inline styles.

---

## 🛠️ Getting Started

### 1. Installation
Install project dependencies locally:
```bash
npm install
```

### 2. Run Local Development Server
Start the local bundler on port `3000`:
```bash
npm run dev
```
This launches the server at [http://localhost:3000/](http://localhost:3000/).

---

## ⚡ Production & Deployment

### 1. Compile Web Static Build
To build the application for static web servers, run:
```bash
npm run build
```
This runs `expo export -p web` which compiles and outputs the optimized static HTML, CSS, and JS routes into the `dist/` directory.

### 2. Vercel Deployment Config
The repository is pre-configured with a custom `vercel.json` for zero-configuration, plug-and-play deployment. It overrides Vercel's default framework presets using these properties:
* **Build Command**: `npm run build`
* **Output Directory**: `dist`
* **Routing Rewrites**: Redirects fallback URLs to `/index.html` to prevent any browser reload/route 404 errors (Single Page App routing).

---

## 📁 Directory Structure

* `src/app/index.web.tsx` - Main web home page layout containing all sections.
* `src/components/sections/` - Individual visual page components (e.g. `navbar`, `hero`, `pricing`, `process`, etc. using `.web.tsx`).
* `src/components/ui/` - Universal graphic illustrations and animations.
* `src/hooks/use-breakpoint.ts` - Custom screen breakpoint detection hook for responsive states.
* `src/global.css` - Design system variables, tokens, and utility styles.
* `vercel.json` - Vercel deployment pipeline configurations.