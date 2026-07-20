# Tech Stack — Mauxis.ai Marketing Website (v1)

A full reference of every technology, library, and design decision used in this project. Update this file whenever a new dependency is added or removed.

---

## ⚙️ Core Framework

| Technology | Version | Purpose |
|---|---|---|
| **Expo** | `~56.0.12` | Universal app framework (web + mobile) |
| **Expo Router** | `~56.2.11` | File-based routing for web and native |
| **React** | `19.2.3` | UI rendering library |
| **React DOM** | `19.2.3` | Web-specific React renderer |
| **React Native** | `0.85.3` | Native mobile rendering |
| **React Native Web** | `~0.21.0` | Bridges React Native components to the browser DOM |

> **Pattern:** Web-specific files use the `.web.tsx` extension. Mobile/native screens use plain `.tsx`. This keeps universal builds compiling cleanly without platform conflicts.

---

## 🌐 Web Dev Server

| Command | Detail |
|---|---|
| `npm run dev` | Starts the Expo Metro bundler in web mode on `http://localhost:3000` |
| Equivalent command | `expo start --web --port 3000` |

---

## 🎨 Animations & Motion

| Library | Version | Purpose |
|---|---|---|
| **Framer Motion** | `^12.40.0` | Page animations, `AnimatePresence`, spring transitions, scroll-driven effects |
| **Lenis** | `^1.3.23` | Smooth inertia-based scroll (replaces native browser scroll on web) |
| **React Native Reanimated** | `4.3.1` | Native-side animations for mobile |

### How Framer Motion is used
- Navbar hide/show on scroll (`motion.header` + `y` translate)
- Dropdown menu card slide-in/out (`AnimatePresence` + `scale`/`opacity`)
- Section entrance animations (fade up, stagger children)
- Spring-based interactive micro-interactions

### How Lenis is used
- Initialized in `src/app/index.web.tsx` via `useEffect`
- Drives the global `requestAnimationFrame` scroll loop
- Intercepts `<a href="#">` hash link clicks for offset-corrected smooth scroll

---

## 🖋️ Typography (Fonts)

All fonts are loaded via CSS `@import` in `src/global.css`.

| Font | Source | Usage |
|---|---|---|
| **Clash Display** | Fontshare API | Hero headings, display text (`--font-display`) |
| **Satoshi** | Fontshare API | Body copy, paragraphs, general UI (`--font-satoshi`) — default body font |
| **Oswald** | Google Fonts | Labels, buttons, nav links, uppercase accents (`--font-oswald`) |
| **Inter** | Google Fonts | Fallback font alongside Clash Display |

### CSS Font Variables
```css
--font-display: 'Clash Display', 'Inter', sans-serif;
--font-satoshi: 'Satoshi', sans-serif;
--font-oswald: 'Oswald', sans-serif;
--font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
```

---

## 🎨 Design System

### Color Palette — Neo-Brutalist

| Variable | Hex | Role |
|---|---|---|
| `--bg-cream` | `#fefae7` | Page background |
| `--bg-white-pure` | `#fffef5` | Card backgrounds |
| `--color-dark` | `#181a12` | Text, borders, shadows |
| `--color-dark-purple` | `#3b001b` | Footer background |
| `--color-yellow` | `#ffe878` | Primary accent, CTA buttons |
| `--color-green` | `#c0ecbf` | Secondary accent, MENU button |
| `--color-pink` | `#f09fa8` | Highlight, hover chevrons |
| `--color-purple` | `#cdabeb` | Feature cards |
| `--color-blue` | `#c7caff` | Feature cards |
| `--color-peach` | `#fae0be` | Feature cards, footer text |

### Global CSS Classes
| Class | Purpose |
|---|---|
| `.neo-btn` | Primary pill button with neo-brutalist offset shadow |
| `.neo-card` | Bordered card with offset box-shadow |
| `.badge-sticker` | Rotated label badges (pink, green, blue variants) |
| `.scallop-divider-down` | Repeating SVG wave section divider (top) |
| `.scallop-divider-up` | Repeating SVG wave section divider (bottom) |
| `.bg-dot-grid` | Radial dot grid background overlay |

---

## 🔧 Utility Libraries

| Library | Version | Purpose |
|---|---|---|
| **lucide-react** | `^1.18.0` | SVG icon set (used for arrows, chevrons, etc.) |
| **TypeScript** | `~6.0.3` | Static typing across the entire codebase |

---

## 📁 Project Structure

```
v1/
├── src/
│   ├── app/
│   │   ├── index.tsx           # Native mobile home screen
│   │   └── index.web.tsx       # Web home page (Lenis + all sections)
│   ├── components/
│   │   ├── sections/           # Page sections (.web.tsx for web DOM)
│   │   │   ├── navbar.web.tsx
│   │   │   ├── hero.web.tsx
│   │   │   ├── features.web.tsx
│   │   │   ├── services.web.tsx
│   │   │   ├── benefits.web.tsx
│   │   │   ├── portfolio.web.tsx
│   │   │   ├── process.web.tsx
│   │   │   ├── comparison.web.tsx
│   │   │   ├── testimonials.web.tsx
│   │   │   ├── pricing.web.tsx
│   │   │   ├── about.web.tsx
│   │   │   ├── faq.web.tsx
│   │   │   └── footer.web.tsx
│   │   └── ui/
│   │       └── cartoon-illustrations.web.tsx  # Inline SVG artwork
│   ├── global.css              # Design tokens, resets, global CSS classes
│   └── constants/
├── assets/                     # Static images and icons
├── package.json
├── tsconfig.json
├── app.json                    # Expo app config
└── TECHSTACK.md                # ← This file
```

---

## 🚫 Deliberate Non-choices

| Tool | Reason not used |
|---|---|
| **Tailwind CSS** | Avoided due to universal build compiler conflicts with React Native; uses Vanilla CSS instead |
| **Styled Components** | Not needed — inline styles + `global.css` utility classes cover the design system |
| **Redux / Zustand** | No global state management needed at this stage |
| **Next.js** | Expo Router provides equivalent file-based routing for universal (web + native) targets |

---

## 🔄 Updating This File

Whenever you add or remove a dependency, update the relevant table above. Key things to keep in sync:
- New `npm install` packages → add to the relevant section
- Font changes → update the Typography section
- New global CSS classes → add to the Design System section
- New page sections → update the Project Structure tree
