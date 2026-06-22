# Framer-Like Visual Features & Development Aspects Guide

This website combines the dynamic, visual luxury of **Framer** websites with the speed, developer control, and scale of a custom **Next.js (App Router)** codebase. It replicates the premium physics-based animations, layout transitions, and scroll effects that typically define elite Framer landing pages.

Below is an overview of what this website has implemented, how it maps to Framer design patterns, and the critical rules/aspects to keep in mind for future maintenance.

---

## 1. Core Framer-Style Technologies Utilized

Instead of static, boxy layouts, the codebase leverages specialized modern libraries to construct fluid, spring-based interaction layers:

| Technology / Library | Purpose in this Website | Framer Equivalent |
| :--- | :--- | :--- |
| **`framer-motion` (v12)** | The driving engine for spring-based physics, scroll-linked transforms (`useScroll`, `useTransform`), dynamic layout changes (`layout` prop), and element exits (`AnimatePresence`). | Framer’s built-in animation canvas (which is itself powered by Framer Motion). |
| **`lenis` (v1.3)** | Smooth inertial scrolling that normalizes mouse wheel, trackpad, and touch velocity. | Framer's default elastic page scrolling. |
| **`tailwindcss` (v4)** | Next-gen utility-first CSS handling layouts, dark mode variables, and hardware-accelerated 3D perspective grids. | Framer’s styling pane and auto-layout system. |
| **`next-themes` (v0.4)** | Client-side dark/light mode toggle with immediate storage syncing. | Framer’s theme toggle components. |
| **`lucide-react` (v1.14)** | Scalable, clean vector iconography matching modern SaaS design systems. | Framer Icon sets. |

---

## 2. Framer-Like Visual Design Patterns Implemented

The codebase implements several signature visual hooks that define high-end Framer landing pages:

### A. 3D Scroll Perspective Tilt Mockups
* **File Reference:** [`hero.tsx`](file:///d:/JMD%20Internship/Website/LawDesk/v3/legalrobe-landing/src/components/sections/hero.tsx)
* **How it works:** When at the top of the page, the main dashboard image is rotated forward (`rotateX: 25deg`) and scaled down slightly. As the user scrolls, `useScroll` and `useTransform` map the vertical scroll progress to rotate the image flat (`rotateX: 0deg`) and scale it up. 
* **Framer Equivalent:** Scroll-linked 3D transforms.

### B. Adaptive Floating Header (Glassmorphism Pill)
* **File Reference:** [`navbar.tsx`](file:///d:/JMD%20Internship/Website/LawDesk/v3/legalrobe-landing/src/components/layout/navbar.tsx)
* **How it works:** The header begins as a transparent, wide navbar at the top of the page. Once the scroll position exceeds 20px, it dynamically morphs into a floating, centered glassmorphic capsule with backdrop blur and drop shadows. The transition is managed smoothly using Framer Motion's `layout` attribute.
* **Framer Equivalent:** Scroll-reactive sticky nav bars.

### C. Scroll-Linked Interactive Timeline (Step Progress)
* **File Reference:** [`features.tsx`](file:///d:/JMD%20Internship/Website/LawDesk/v3/legalrobe-landing/src/components/sections/features.tsx)
* **How it works:** A vertical timeline line draws itself downward as the viewport scrolls. When individual feature steps cross the center line of the screen, the numbered circles dynamically change color (border, background, and text colors transform simultaneously using `useTransform` and scroll progress mapping).
* **Framer Equivalent:** Scroll-linked path animations and viewport trigger states.

### D. Magnetic Physics Cursor-Pull
* **File References:** [`magnetic.tsx`](file:///d:/JMD%20Internship/Website/LawDesk/v3/legalrobe-landing/src/components/ui/magnetic.tsx) & [`floating-contact.tsx`](file:///d:/JMD%20Internship/Website/LawDesk/v3/legalrobe-landing/src/components/ui/floating-contact.tsx)
* **How it works:** Hovering near interactive elements triggers a subtle magnetic pull toward the mouse cursor. This uses high-damping spring physics (`useSpring`) to handle raw mouse coordinates (`clientX`, `clientY`) without jitter.
* **Framer Equivalent:** Magnetic field components.

### E. Infinite Loop Masked Marquee
* **File Reference:** [`marquee.tsx`](file:///d:/JMD%20Internship/Website/LawDesk/v3/legalrobe-landing/src/components/sections/marquee.tsx)
* **How it works:** A horizontally scrolling ticker runs infinitely. It uses an linear ease loop (`animate={{ x: ["0%", "-50%"] }}`) combined with CSS masking (`mask-image: linear-gradient(...)`) to smoothly fade out the text near the left and right edges.
* **Framer Equivalent:** Infinite Ticker component with gradient masks.

### F. Spring-Animated Sliding Tabs
* **File References:** [`showcase.tsx`](file:///d:/JMD%20Internship/Website/LawDesk/v3/legalrobe-landing/src/components/sections/showcase.tsx) & [`pricing.tsx`](file:///d:/JMD%20Internship/Website/LawDesk/v3/legalrobe-landing/src/components/sections/pricing.tsx)
* **How it works:** When switching between Mobile/Web views or Annual/Monthly plans, the background active pill slides smoothly behind the text using `layout` or target transitions.
* **Framer Equivalent:** Interactive visual switchers with spring sliders.

### G. Accordion Collapsing with Search Highlights
* **File Reference:** [`faq.tsx`](file:///d:/JMD%20Internship/Website/LawDesk/v3/legalrobe-landing/src/components/sections/faq.tsx)
* **How it works:** Collapsing/expanding FAQs slide open vertically via `AnimatePresence` height mappings. When users search, elements animate layout updates in real-time, and matched terms are dynamically wrapped in `<mark>` tags.
* **Framer Equivalent:** Smart FAQ widgets with spring expanding cards.

---

## 3. Development Aspects to Keep in Mind (Guidelines for Coders)

When modifying or expanding the codebase, make sure to adhere to these rules and architectures to keep the animations smooth and bug-free:

### ⚠️ A. Client-Side Hooks vs Server-Side Rendering (RSC)
* **Rule:** Since Next.js uses React Server Components by default, any component utilizing `framer-motion`, `lenis`, event listeners, or hooks (`useState`, `useEffect`) **must** start with the `"use client"` directive.
* **Impact:** Place core styling/structures in server components where possible, and wrap interactive elements in Client Component wrappers to optimize Initial Page Load (LCP).

### 🛠️ B. Lenis Smooth Scroll Offset Management
* **Rule:** Lenis intercepts native browser scrolling. If you use standard hash navigation (e.g., `<a href="#features">`), the instant jump will bypass the smooth scroll animation.
* **Solution:** The `LenisProvider` in [`lenis-provider.tsx`](file:///d:/JMD%20Internship/Website/LawDesk/v3/legalrobe-landing/src/components/lenis-provider.tsx) intercepts hash navigation automatically and calls `lenis.scrollTo(target, { offset: -90 })` to execute smooth, calculated scroll displacements. Keep this offset value aligned with the sticky navbar height.

### 🔌 C. Prevent Hydration Mismatches (SSR vs. Client State)
* **Rule:** Dynamic features like detecting theme preferences (`next-themes`) or viewport sizes can cause hydration mismatches between Server HTML and Client HTML.
* **Solution:** Always wrap theme-dependent or layout-dependent HTML triggers in a `mounted` state check. For example:
  ```typescript
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  
  // Use 'mounted && isDark' to render classes/assets safely
  ```

### ⚡ D. Hardware Acceleration (3D Performance)
* **Rule:** Heavy animations (such as the tilting dashboard in [`hero.tsx`](file:///d:/JMD%20Internship/Website/LawDesk/v3/legalrobe-landing/src/components/sections/hero.tsx)) can cause page redraw stutters if not hardware accelerated.
* **Solution:** 
  * Use CSS properties like `transform-gpu` to force CPU-to-GPU offloading.
  * Define `transformStyle: "preserve-3d"` on wrapper containers.
  * Stick to animating composite-only CSS properties: `transform` (translation, scale, rotation) and `opacity`. Avoid animating properties that cause layout reflows (like `width`, `height`, or `margin`) during scroll.

### 🎨 E. Merging Dynamic Tailwind Classes
* **Rule:** When passing dynamic styles as props to animated components, simple string concatenation can cause overlapping utility clashes (e.g. conflicting backgrounds or paddings).
* **Solution:** Use the `cn(...)` utility located in [`utils.ts`](file:///d:/JMD%20Internship/Website/LawDesk/v3/legalrobe-landing/src/lib/utils.ts) (which combines `clsx` and `tailwind-merge`):
  ```typescript
  import { cn } from "@/lib/utils"
  
  export function MyComponent({ className }) {
    return (
      <div className={cn("base-classes default-color", className)} />
    )
  }
  ```

### 🔍 F. Keep SEO & JSON-LD Structured Data Intact
* **Rule:** Unlike simple Framer sites, this application features robust SEO configurations directly in [`layout.tsx`](file:///d:/JMD%20Internship/Website/LawDesk/v3/legalrobe-landing/src/app/layout.tsx), including OpenGraph tags, dynamic theme-based favicons, and schema graphs (JSON-LD).
* **Impact:** When modifying the FAQ questions or branding details, ensure the metadata objects and `@type: FAQPage` structured data in `RootLayout` are kept synchronised to maximize search engine indexing and Google Rich Result badges.
