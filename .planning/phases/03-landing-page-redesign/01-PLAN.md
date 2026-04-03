---
wave: 1
depends_on: []
files_modified:
  - hooks/use-scroll-animation.ts
  - app/globals.css
  - features/i18n/locales/en.ts
  - features/i18n/locales/tr.ts
  - features/public/components/public-navbar.tsx
  - features/public/components/landing-view.tsx
autonomous: true
requirements: [LAND-01, LAND-02, LAND-06, LAND-07, LAND-08]
---

# Phase 3, Plan 1: Landing Page Foundation & Hero

## Objective
Implement the native scroll animation hooks and base styling, set up the i18n keys for the landing page, and build the Hero section showcasing the mobile app mockup (Mobit style) with app store download badges.

## Tasks

### 1. Create Scroll Animation Hook
<read_first>
- app/globals.css
</read_first>

<action>
Create `hooks/use-scroll-animation.ts`.
Implement `useIntersectionObserver` combining `IntersectionObserver` and React's `useRef`, returning a ref and a visibility boolean.
In `app/globals.css`, add base utility classes for animations (e.g., `.animate-fade-up`, `.hidden-anim`) matching the Mobit fade-up standard.
</action>

<acceptance_criteria>
- `hooks/use-scroll-animation.ts` exists and exports `useIntersectionObserver`.
- `app/globals.css` contains `.animate-fade-up`.
</acceptance_criteria>

### 2. Update i18n Locales for Landing
<read_first>
- features/i18n/locales/en.ts
- features/i18n/locales/tr.ts
</read_first>

<action>
Add a `landing` section to both locale files. Include keys for:
- Hero headline ("AI ile Finansal Geleceğini Yönet")
- Subheadline
- CTA buttons ("Download from App Store", "See Pricing")
- Trust bar texts
</action>

<acceptance_criteria>
- `features/i18n/locales/en.ts` contains `landing: {` and `hero: {`.
</acceptance_criteria>

### 3. Build Mobit-style Hero Section
<read_first>
- features/public/components/landing-view.tsx
- features/public/components/public-navbar.tsx
</read_first>

<action>
Modify `features/public/components/landing-view.tsx`. Remove the existing implementation.
Build a new layout:
- Include a very top "Trust Bar".
- Hero container with centered typography.
- Two CTA buttons side by side using `shadcn/ui` buttons.
- A large phone mockup image directly below the text: `https://framerusercontent.com/images/WqI8uAuW6KKCKrmpIrPldBN5M.png?width=1642&height=1642`.
All text must come from `useLanguage()`.
</action>

<acceptance_criteria>
- `features/public/components/landing-view.tsx` imports the framerusercontent placeholder image URL.
- The component uses `useIntersectionObserver` for fade-in animations on load/scroll.
</acceptance_criteria>

## Verification
- Load `npm run dev` and ensure the landing page shows the hero image properly and transitions smoothly without external errors.
