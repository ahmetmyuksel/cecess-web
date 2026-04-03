---
wave: 2
depends_on: [01-PLAN.md]
files_modified:
  - features/i18n/locales/en.ts
  - features/i18n/locales/tr.ts
  - features/public/components/landing-view.tsx
  - features/public/components/feature-card.tsx
autonomous: true
requirements: [LAND-03, LAND-04, LAND-05]
---

# Phase 3, Plan 2: Landing Page Content Sections

## Objective
Implement the Features grid, the Pricing section with explicit tiers from user requirements, the Trust/Security section (dark mode), and the final Download App CTA section.

## Tasks

### 1. Update i18n Locales for Sections
<read_first>
- features/i18n/locales/en.ts
- features/i18n/locales/tr.ts
</read_first>

<action>
Add strings for the Features section, Trust/Security section, and exactly these three pricing tiers:
- Free: 100 txn limit, Basic categorization, 1 AI request/day
- Premium: Unlimited txn, Detailed charts, Budget alerts
- Pro: Advanced AI analysis, Future forecasts, Data export (Excel/PDF)
</action>

<acceptance_criteria>
- `features/i18n/locales/en.ts` contains the string `1 AI request/day` or its mapping.
</acceptance_criteria>

### 2. Implement the Sections in LandingView
<read_first>
- features/public/components/landing-view.tsx
- features/public/components/feature-card.tsx
</read_first>

<action>
Extend `landing-view.tsx` downward:
1. **Features Section**: Wrap 3x2 `FeatureCard` grid using `useIntersectionObserver` for fade-up animations.
2. **Pricing Section**: Create three side-by-side cards. The Premium card is visually highlighted. Use "Download to Subscribe" as the button action on all cards.
3. **Trust & Security Section**: A dark background section with lock icons detailing Bank-Level Encryption and Privacy explicitly.
4. **Final CTA**: Large block at the bottom with App Store badges.

Ensure every section uses the scroll animation hook.
</action>

<acceptance_criteria>
- `features/public/components/landing-view.tsx` contains `ref={` mapping to different scroll observers.
- `landing-view.tsx` layout renders the 4 distinct structural nodes described above.
</acceptance_criteria>

## Verification
- Load page locally, scroll down slowly, verify that all sections trigger fade-in-up animations exactly as they come into the viewport.
