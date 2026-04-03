# Cecess Web

## What This Is

Cecess Web is the professional web presence for Cecess, an AI-driven personal finance mobile app targeting the Turkish and global market. The web ecosystem at cecess.net serves two purposes: (1) a high-conversion, fintech-grade marketing landing page with app store links to drive mobile downloads, and (2) a read-only user dashboard where authenticated users can view their financial data (transactions, accounts, categories, reports) synced from the mobile app via Supabase. The site also hosts Google Play compliance pages (Privacy Policy, Terms of Service, Account Deletion instructions) required for app store approval.

## Core Value

The web must look like a legitimate, trust-worthy fintech startup — not a hobby project — to pass Google's strict financial app audits and convert visitors into mobile app users.

## Requirements

### Validated

<!-- Shipped and confirmed valuable. -->

- ✓ Next.js 16 App Router with TypeScript — existing
- ✓ Supabase auth integration (Email/Google login) — existing
- ✓ Feature-based architecture (features/{auth, profile, public, i18n, ...}) — existing
- ✓ i18n system with EN + TR locales — existing
- ✓ Protected dashboard routes under /profile/* — existing
- ✓ Sidebar navigation with dashboard sections — existing
- ✓ Privacy Policy page — existing (Updated in Phase 02)
- ✓ Terms of Service page — existing (Updated in Phase 02)
- ✓ Pricing information page — existing
- ✓ FAQ page — existing
- ✓ Cookie consent component — existing
- ✓ shadcn/ui design system — existing
- ✓ Tailwind CSS styling — existing
- ✓ Account Deletion instructions page (text-only) — Validated in Phase 02
- ✓ Privacy Policy updated with Gemini AI, Supabase encryption, RTBF — Validated in Phase 02
- ✓ Terms of Service updated with subscription tiers and AI limits — Validated in Phase 02
- ✓ Translation-ready structure (no hardcoded strings) — Validated in Phase 02

### Active

<!-- Current scope. Building toward these. -->

- [ ] Phase 01: Build Recovery & Layout Refactor
- [ ] Phase 02: Signup Cleanup & Pricing Updates
- [ ] Phase 03: Landing Page & Market Badges
- [ ] Phase 04: Google Login
- [ ] Phase 05: Bundle Optimization
- [ ] Phase 06: Bugfixes
- [ ] Fix double refresh (LanguageProvider)
- [ ] Move Navbar to shared layout for smooth navigation
- [ ] Market badges on landing page (Apple/Google)
- [ ] Pricing structure (€4.99/mo, €49.90/yr; €12.99/mo, €129.90/yr) + toggle
- [ ] Remove all "Signup" related code and buttons
- [ ] Implement Google Login on web
- [ ] Package size <24MB audit

### Out of Scope

<!-- Explicit boundaries. Includes reasoning to prevent re-adding. -->

- Web payments / checkout — All monetization is through RevenueCat (Google Play IAP) on mobile
- Account deletion functionality on web — Deletion is mobile-only (RTBF compliance via app)
- Dashboard write operations (create/edit/delete transactions) — Web is read-only; users do CRUD on mobile
- Real-time data sync — Dashboard shows data from Supabase, no real-time subscriptions needed for V1
- Mobile app development — Handled in separate Flutter codebase
- Direct bank connections (Plaid/Open Banking) — Import is mobile-only via CSV/Excel
- MFA / TOTP on web — Security handled by Supabase Auth defaults
- Admin panel — Not needed for V1

## Context

- **Founder**: Banking professional — site must reflect fintech credibility
- **Mobile app**: Flutter app nearly ready for Google Play submission
- **Backend**: Supabase (PostgreSQL) with strict RLS (auth.uid() = user_id)
- **Database schema**: profiles, transactions, accounts, categories, reports, audit_logs, transaction_rules, deleted_users (see reset_db.sql)
- **AI Engine**: Gemini API via Supabase Edge Functions for transaction categorization (mobile-side)
- **Monetization**: RevenueCat (Google Play IAP)
  - Premium Monthly: €4.99/mo, Premium Yearly: €49.90/yr
  - Pro Monthly: €12.99/mo, Pro Yearly: €129.90/yr
  - Webhook at /functions/v1/revenuecat-webhook updates subscription_tier in Supabase
- **Current deployment**: VM with Docker, migrating primary to Vercel
- **Git**: Clean repo at https://github.com/ahmetmyuksel/cecess-web.git
- **Existing code**: Has legacy Stripe integration to be removed
- **Live site**: https://cecess.net/ (current landing page needs redesign)

## Constraints

- **Tech Stack**: Next.js 16 + TypeScript + Tailwind + shadcn/ui — no external state libraries (no Zustand, Tanstack Query, Axios)
- **i18n**: All user-facing strings must go through the i18n system (TR + EN). No hardcoded strings.
- **Architecture**: Must follow AGENTS.md rules — Domain → Service → Hook → Component → Page flow
- **UI**: Default shadcn/ui with global theme only. No component-level visual overrides.
- **Auth**: Supabase Google/Email login. Client components cannot call services directly.
- **Security**: .env.local contains SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY
- **No web payments**: All payment flows removed; subscription info displayed as read-only from DB

## Key Decisions

<!-- Decisions that constrain future work. Add throughout project lifecycle. -->

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Remove Stripe completely from web | Payments moved to RevenueCat mobile IAP | — Pending |
| Dashboard is read-only on web | Web is viewer, mobile is primary CRUD interface | — Pending |
| Keep Docker alongside Vercel | Flexibility — Docker as fallback, Vercel as primary | — Pending |
| Scroll-animated landing page redesign | Current landing is too generic; needs fintech-grade feel with app mockup | — Pending |
| Account deletion instructions-only on web | Actual deletion happens in mobile app per RTBF | ✓ Validated in Phase 02 |
| Landing page placeholder mockup | Use provided placeholder image until real app screenshots are ready | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-03 after Bugfixes milestone initiation*
