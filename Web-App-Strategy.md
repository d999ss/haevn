# Haevn Web App Strategy

## Context & Starting Point

The current documentation and architecture are heavily iOS-centric—UI in **SwiftUI**, reactive layer in **Combine**, and a mobile-first phased roadmap.
For a web prototype we must translate that foundation, not duplicate it. Below is a deep, design-studio-friendly plan answering each open question and turning the iOS spec into a coherent web track.

---

## 1. Web-specific UI/UX designs

| Deliverable                                                | Why it differs from iOS                                                                                     | What we'll create                                                     |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| **Responsive component library (Figma → React Storybook)** | Mouse/keyboard, larger viewports, no native tab bars                                                        | 12-column grid, fluid spacing tokens, interactive states, ARIA labels |
| **Desktop information architecture**                       | Home dashboard tiles must expand into data-dense panels; nav moves from bottom tab bar to left rail/top bar | Sitemap, labeled wireflows for 1440/1280/1024 widths                  |
| **Touch-optimized tablet layouts**                         | 70 % of park visitors use iPads in-venue                                                                    | Alternate breakpoint variants with larger hit-targets                 |
| **Motion & micro-interaction specs**                       | Hover, focus, drag states absent on iOS                                                                     | Lottie/Framer prototypes showing hover cards, keyboard shortcuts      |
| **Empty/error/loading patterns**                           | Perceived latency higher on web                                                                             | Skeleton loaders, optimistic UI for bookings                          |

**Process**

1. **Audit & tokenize** the existing Figma mobile file → extract colors, typography, icon set into a shared *Haevn-Design-Tokens* library.
2. **Create breakpoint kits**: `≥1440`, `1280`, `1024`, `768`, `≤480`.
3. **Map each of the 13 modules** to page templates; flag modules that collapse/merge on wide desktop (e.g., Wallet widget lives inside Profile side-panel).
4. **Run 48-hour click-through usability test** with two personas (first-time guest, returning member) before dev sprint.

---

## 2. Web technology stack decision

| Layer         | Recommendation                                                                   | Rationale (aligned with Bttr's craft standards)                                                                                   |
| ------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **Framework** | **Next.js 14 + React 18 (App Router)**                                           | SSR + SPA in one; file-based routing mirrors iOS module boundaries; out-of-the-box image & font optimization                      |
| **Styling**   | **Tailwind CSS + Radix UI primitives**                                           | Utility classes accelerate pixel-perfect brand work; Radix provides accessible, unstyled components we can skin to Haevn          |
| **State/API** | **TanStack Query + tRPC**                                                        | Automatic caching, offline-first hooks, end-to-end type safety connecting to existing Node/Go REST (we'll wrap with tRPC routers) |
| **Auth**      | **Auth.js (formerly NextAuth) with Apple & Google providers + magic-link email** | Minimal session boilerplate, JWT under the hood, works with same issuing keys as mobile                                           |
| **Video**     | **Mux Player React SDK**                                                         | Handles HLS adaptive streaming & multi-angle easily, maps to FlowState sources                                                    |
| **CI/CD**     | **Vercel** preview branches + **GitHub Actions** test matrix                     | Instant shareable URLs for client sign-off; matches our existing Vercel doc site                                                  |
| **Quality**   | **TypeScript strict, ESLint + Prettier, Playwright e2e**                         | Enforces Bttr's "no broken windows" code discipline                                                                               |

---

## 3. Web-specific feature prioritization (MVP → V2)

| Priority tier       | Web module                                                                            | Notes / differences vs iOS                                            |
| ------------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| **Day-0 MVP**       | Auth, Booking Calendar, Booking Confirmation + QR, Surf Replay Viewer, Home Dashboard | Core revenue & retention loops; QR is printable & wallet-compatible   |
| **Post-MVP**        | Membership Dashboard, Crew Hub (read-only), Retail Drops (browse-only)                | Lower interaction frequency on desktop—can follow after beta feedback |
| **Nice-to-have V2** | Full F&B ordering, Real-time POS sync view, Admin Staff Panel                        | Requires deeper integration & venue Wi-Fi reliability                 |

Any iOS-only gesture or native capability (e.g., Apple Pay sheet, haptic feedback) gets a web-specific alternative (Stripe Elements, hover animation).

---

## 4. Responsive design requirements

| Breakpoint       | Primary devices                     | Key layout rules                                                           |
| ---------------- | ----------------------------------- | -------------------------------------------------------------------------- |
| **≥1440 px**     | 27–32″ monitors (staff back-office) | Fixed left nav, max-1200-px content band, 24 px grid gutter                |
| **1280–1439 px** | 15-inch laptops                     | Collapse left nav to icons, retain 3-card dashboard row                    |
| **1024–1279 px** | iPad landscape, small laptops       | Convert nav to top bar, stack dashboard cards 2×2                          |
| **768–1023 px**  | iPad portrait                       | Touch-optimized; font-scale +12  %; hide non-essential columns             |
| **≤480 px**      | Mobile Web fallback                 | Re-use SwiftUI component anatomy for parity; hide video multi-angle picker |

Accessibility targets: WCAG 2.2 AA, prefers-reduced-motion, full keyboard navigation.

---

## 5. Authentication flow (web)

1. **Provider buttons** on `/login`: Apple JS (app-associated domain verified), Google OAuth 2, Email magic-link.
2. **Auth.js** stores **http-only secure cookies** containing signed JWT (same signing key as mobile backend).
3. **CSRF protection** via double-submit cookie; all mutating POST routes wrapped with `csrf()` middleware.
4. **Session refresh** uses silent `/_refresh` endpoint every 25 min; front-end hooks (`useSession`) auto-retry.
5. **Edge cases**:

   * Apple "Sign in with Web" requires Services ID + redirect origin whitelisting.
   * If user tries SSO with an email already bound to another method, show *Account Linking* screen.
   * On shared devices, add *"Quick Guest Mode"* that mirrors iOS Guest Profile but expires after 2 h inactivity.

---

## 6. Proposed timeline & team allocation (parallel to iOS track)

| Week    | Design (Bttr)                                               | Engineering                                             | Milestones                  |
| ------- | ----------------------------------------------------------- | ------------------------------------------------------- | --------------------------- |
| **0–1** | Responsive IA workshop, token extraction                    | Scaffold Next.js repo, configure Auth.js sandbox        | Base repo + design tokens   |
| **2–3** | Hi-fi desktop & tablet mockups for Auth, Booking, Dashboard | Build shared layout, navigation shell, Auth flow        | Live alpha at `/auth`       |
| **4–5** | Booking calendar usability testing, iterate                 | Integrate Booking API, implement TanStack Query caching | Bookings end-to-end demo    |
| **6–7** | Replay viewer design + motion                               | Integrate Mux Player, multi-angle toggle                | Video playback beta         |
| **8**   | Accessibility & performance polish                          | Lighthouse ≥ 90, keyboard nav QA                        | Public demo link for client |

---

## 7. Toolchain & rituals that showcase Bttr's strengths

| Arena                        | Tool / Ritual                                            | How it amplifies Bttr's "meticulous design" reputation          |
| ---------------------------- | -------------------------------------------------------- | --------------------------------------------------------------- |
| **Design <> Dev handshake**  | Figma Tokens → Style-Dictionary → Tailwind config        | Single source of visual truth, zero drift                       |
| **Component QA**             | Chromatic visual regression                              | Pixel-perfect snapshots every PR                                |
| **Performance**              | Vercel Analytics, Web Vitals overlay in staging          | Data-driven design tweaks (image sizes, LCP targets)            |
| **Stakeholder transparency** | Auto-generated Storybook docs with live props playground | Clients explore components interactively, accelerating feedback |
