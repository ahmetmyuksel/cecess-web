# Phase 3: Landing Page Redesign - Context

**Gathered:** 2026-04-03
**Status:** Ready for planning

<domain>
## Phase Boundary

Complete redesign of cecess.net landing page inspired by Mobit (https://mobit.framer.website/). Scroll-triggered fade-in animations, mobile app mockup showcase, app store badges, feature highlights, subscription plan display, and professional fintech aesthetic. Must convert visitors to mobile app downloads.

</domain>

<decisions>
## Implementation Decisions

### Design Inspiration & Style
- **D-01:** Inspired by Mobit Framer template — light cream/white background, centered hero, clean sections
- **D-02:** Color palette: Keep existing blue/slate scheme but the agent has discretion on dark mode sections
- **D-03:** Scroll animations: Fade-in-up effect using native Intersection Observer API + CSS transitions (zero dependencies)
- **D-04:** Typography: Use existing Geist font from layout

### Hero Section
- **D-05:** Centered heading with trust bar at top (like Mobit's "Founded in..." bar)
- **D-06:** Phone mockup image using placeholder: `https://framerusercontent.com/images/WqI8uAuW6KKCKrmpIrPldBN5M.png?width=1642&height=1642`
- **D-07:** Two CTAs: "Download App" (primary, links to app stores) and "See Pricing" (secondary, scrolls to pricing section)
- **D-08:** App Store + Google Play badges visible in hero or download section

### Page Sections (scroll order)
- **D-09:** Section structure:
  1. Trust bar (top) — "Your finances are safe with us" type messaging
  2. Hero — Headline + phone mockup + CTAs
  3. Features grid — 6 features with icons (AI categorization, multi-currency, smart import, budget alerts, analytics, privacy)
  4. Subscription Plans — Free / Premium / Pro with feature comparison
  5. Security/Trust section — dark background, encryption/privacy messaging
  6. Download CTA — Final push with app store badges
  7. Footer — links to Privacy, Terms, FAQ

### Subscription Plans Display
- **D-10:** Three-tier pricing cards:
  - **Free:** 100 transactions, basic categorization, 1 AI request/day
  - **Premium:** €4.99/mo or €49.90/yr — unlimited transactions, detailed charts & filtering, budget limits & alerts
  - **Pro:** €12.99/mo or €129.90/yr — advanced AI financial analysis, future budget forecasts, Excel/PDF export
- **D-11:** Premium card highlighted as "Most Popular"
- **D-12:** "Download to Subscribe" button (not web checkout)

### Content Strategy
- **D-13:** Keep it simple — AI features, security, download links
- **D-14:** Visitor should think "let me try this" — not be overwhelmed with details
- **D-15:** All text through i18n (EN + TR)

### Technical Implementation
- **D-16:** Custom `useScrollAnimation` hook using Intersection Observer (no external dependencies per project constraint)
- **D-17:** CSS transitions with `opacity` and `transform: translateY()` for GPU-composited performance
- **D-18:** `will-change: opacity, transform` on animated elements
- **D-19:** Responsive: mobile-first design

### Agent's Discretion
- Exact animation timing/easing curves
- Whether to add a "How It Works" 3-step section
- Dark mode for trust/security section

</decisions>

<canonical_refs>
## Canonical References

### Inspiration
- Mobit Framer template: https://mobit.framer.website/ — Layout, animation style, section structure

### Existing Code
- `features/public/components/landing-view.tsx` — Current landing page (REWRITE)
- `features/public/components/public-navbar.tsx` — Navbar (UPDATE for new sections)
- `features/public/components/feature-card.tsx` — Feature card component (UPDATE)
- `features/public/components/footer.tsx` — Footer (UPDATE)
- `features/public/components/pricing-view.tsx` — Existing pricing view (content reusable)
- `features/i18n/locales/en.ts` — English translations (UPDATE with new landing strings)
- `features/i18n/locales/tr.ts` — Turkish translations (UPDATE with new landing strings)
- `app/page.tsx` — Landing page route (UPDATE)
- `app/globals.css` — Global styles for animations (UPDATE)

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `PublicNavbar` — header navigation with login/signup links
- `Footer` — site footer with privacy/terms/faq links
- `FeatureCard` — basic card component with icon/title/description
- `LanguageProvider` — i18n context provider
- `useLanguage()` hook — text translation access
- Lucide React icons — already imported and used

### Established Patterns
- Landing is a client component (`"use client"`)
- Uses `LanguageProvider` with `forcedLanguage`
- Features grid uses `FeatureCard` with Lucide icons

### Integration Points
- `app/page.tsx` wraps `LandingView` in `LanguageProvider`
- Navbar has login/signup/dashboard links based on `isLoggedIn` prop
- Footer links to /privacy, /terms, /faq

</code_context>

<specifics>
## Specific Ideas

- Mobit-style hero with centered phone mockup and hand-held aesthetic
- Fade-in-up animations on scroll for each section (like Mobit)
- Trust bar at very top of page
- Subscription plans with exact tier features specified by user:
  - Free: 100 txn limit, basic categorization, 1 AI/day
  - Premium: unlimited txn, charts & filtering, budget alerts
  - Pro: advanced AI analysis, forecasts, Excel/PDF export
- "Yağlandır ballandır" (make it rich and appealing) — the landing should feel premium and polished

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 03-landing-page-redesign*
*Context gathered: 2026-04-03*
