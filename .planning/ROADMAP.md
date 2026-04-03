# Roadmap: Cecess Web

**Created:** 2026-04-03
**Milestone:** v1.0 — Web Presence & Google Play Compliance
**Phases:** 5
**Requirements:** 30

## Overview

| # | Phase | Goal | Requirements | Success Criteria |
|---|-------|------|--------------|------------------|
| 1 | Stripe Cleanup & Read-Only Refactor | Remove payment code and convert dashboard to read-only | CLN-01..05 | 5 |
| 2 | Google Play Compliance Pages | Privacy, Terms, Account Deletion — audit-ready | COMP-01..08 | 4 |
| 3 | Landing Page Redesign | Scroll-animated, fintech-grade landing with app mockup | LAND-01..08 | 5 |
| 4 | Dashboard Read-Only V1 | Authenticated read-only viewer for user financial data | DASH-01..08 | 5 |
| 5 | CI/CD, Deployment & Documentation | GitHub Actions, Cloudflare Pages, Docker, docs, push to repo | CICD-01..05, DOC-01..02 | 4 |

---

## Phase 1: Stripe Cleanup & Read-Only Refactor

**Goal:** Remove all Stripe/payment dependencies and convert the web dashboard to read-only mode. This is the foundation — every other phase depends on a clean, buildable codebase.

**Requirements:** CLN-01, CLN-02, CLN-03, CLN-04, CLN-05

**UI hint:** no

**Success criteria:**
1. `npm run build` succeeds with zero Stripe references
2. No `@stripe/stripe-js` or `stripe` in `package.json`
3. No `utils/stripe.ts` file exists
4. All transaction/account/category create/edit/delete actions removed or disabled
5. Import wizard removed or disabled (mobile-only feature)

---

## Phase 2: Google Play Compliance Pages

**Goal:** Create/update Privacy Policy, Terms of Service, and Account Deletion pages with explicit language required by Google Play financial app audits. All content must be i18n-ready (EN + TR).

**Requirements:** COMP-01, COMP-02, COMP-03, COMP-04, COMP-05, COMP-06, COMP-07, COMP-08

**UI hint:** yes

**Success criteria:**
1. Privacy Policy explicitly mentions Gemini AI data processing, Supabase encryption, no third-party selling, and RTBF
2. Terms of Service defines all subscription tiers with EUR pricing and AI usage limits
3. Account Deletion page provides clear step-by-step instructions for mobile deletion
4. All pages render correctly in both EN and TR

---

## Phase 3: Landing Page Redesign

**Goal:** Complete redesign of cecess.net landing page with scroll-triggered animations, mobile app mockup image, app store badges, trust signals, and professional fintech aesthetic. Must convert visitors to mobile app downloads.

**Requirements:** LAND-01, LAND-02, LAND-03, LAND-04, LAND-05, LAND-06, LAND-07, LAND-08

**UI hint:** yes

**Success criteria:**
1. Hero section with headline + mobile phone mockup image visible on load
2. App Store and Google Play badges visible and linked
3. At least 3 sections animate on scroll (fade-in/slide-up via Intersection Observer)
4. Responsive across mobile/tablet/desktop breakpoints
5. All text strings come from i18n locale files (no hardcoded English/Turkish)

---

## Phase 4: Dashboard Read-Only V1

**Goal:** Authenticated users can view their profile, transactions, accounts, categories, and subscription status in a clean read-only dashboard using the existing sidebar design.

**Requirements:** DASH-01, DASH-02, DASH-03, DASH-04, DASH-05, DASH-06, DASH-07, DASH-08

**UI hint:** yes

**Success criteria:**
1. Supabase login (Google + Email) works and redirects to dashboard
2. Profile page shows user info from profiles table (read-only)
3. Transactions page shows transaction history with date/amount/category/description
4. Accounts page shows account names, types, and balances
5. No create/edit/delete buttons or forms exist in the dashboard

---

## Phase 5: CI/CD, Deployment & Documentation

**Goal:** Set up automated build/deploy pipeline with GitHub Actions + Cloudflare Pages, keep Docker updated, create project documentation, and push everything to the clean GitHub repo.

**Requirements:** CICD-01, CICD-02, CICD-03, CICD-04, CICD-05, DOC-01, DOC-02

**UI hint:** no

**Success criteria:**
1. GitHub Actions runs build + lint on push to main and PRs
2. Cloudflare Pages deployment pipeline configured (wrangler.toml or Pages Dashboard integration)
3. Docker build succeeds with updated Dockerfile
4. PROJECT_STRUCTURE.md exists with architecture summary
5. STORE_CHECKLIST.md exists with Google Play submission steps (AAB, 20 testers, 14-day rule)

---

*Roadmap created: 2026-04-03*
*Last updated: 2026-04-03 after initial creation*
