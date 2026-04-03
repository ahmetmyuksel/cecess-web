# Research Summary: Cecess Web Refactor

## Stack Decision

**Existing stack is correct — no changes needed:**
- Next.js 16 (App Router) + TypeScript + Tailwind CSS + shadcn/ui
- Supabase (Auth + PostgreSQL + RLS)
- Deployment: Vercel (primary) + Docker (fallback)

**Key addition for landing page:**
- Scroll animations via native **Intersection Observer API + CSS transitions** (zero dependencies)
- No Framer Motion or GSAP needed — project constraint forbids external dependencies
- The approach: custom `useIntersectionObserver` hook + CSS classes for fade/slide animations

**Removal:**
- `@stripe/stripe-js` and `stripe` packages — replaced by RevenueCat (mobile-only)
- `utils/stripe.ts` — delete entirely

## Features: Table Stakes vs Differentiators

### Table Stakes (Must Have for Google Play Approval)
1. **Privacy Policy** — must explicitly mention Gemini AI data processing, Supabase encryption, no third-party selling, account/data deletion rights
2. **Terms of Service** — subscription tiers, AI usage limits (1/day Free, unlimited Premium), refund policy
3. **Account Deletion Instructions** — clear steps, accessible from web
4. **Professional Landing Page** — must look like legitimate fintech, not hobby project

### Table Stakes (Web Dashboard)
1. **Read-only data viewer** — profile, transactions, accounts, categories
2. **Supabase auth** — Google/Email login
3. **Responsive design** — mobile + desktop
4. **i18n** — Turkish + English

### Differentiators (Conversion-Focused)
1. **Scroll-animated landing** — sections appear on scroll, parallax effects
2. **Mobile app mockup showcase** — phone frame with app screenshots
3. **App Store/Play Store badges** — direct download links
4. **Trust signals** — security badges, encryption mentions, banking-grade language

## Architecture: Brownfield Considerations

### What Exists and Works
- Feature-based directory structure (`features/*`)
- i18n system with context provider + locale files
- Auth flow (login, signup, forgot-password, reset-password)
- Protected layout with sidebar + header
- Profile dashboard shell

### What Needs Refactoring
1. **Landing page** — complete redesign with scroll animations
2. **Dashboard features** — strip write operations, keep read-only
3. **Stripe removal** — clean out all payment code
4. **Privacy/Terms** — update content for Google Play compliance
5. **CI/CD** — add GitHub Actions + Vercel pipeline

### Build Order (Dependencies)
1. Stripe removal & cleanup (unblocks everything)
2. Compliance pages (Privacy, Terms, Deletion) — independent
3. Landing page redesign — independent
4. Dashboard read-only refactor — depends on Stripe removal
5. CI/CD & deployment — depends on clean build
6. Documentation — after all code changes

## Pitfalls

### 1. Google Play Rejection for Vague Policy Language
- **Risk**: Using generic privacy policy templates
- **Prevention**: Be extremely specific about Gemini AI usage, Supabase storage, encryption at rest/transit
- **Phase**: Compliance pages phase

### 2. Scroll Animation Performance
- **Risk**: Heavy JS-based animations causing jank on mobile
- **Prevention**: Use CSS transitions + GPU-composited properties (opacity, transform only). Use `will-change` sparingly.
- **Phase**: Landing page phase

### 3. i18n String Leakage
- **Risk**: Hardcoded English strings in new components
- **Prevention**: All text must go through `useLanguage()` hook. PR review checklist item.
- **Phase**: All phases

### 4. Docker/Vercel Environment Drift
- **Risk**: Docker build works but Vercel fails (or vice versa)
- **Prevention**: Keep `Dockerfile` and `vercel.json` aligned. Test both in CI.
- **Phase**: CI/CD phase

### 5. Supabase Client Misconfiguration
- **Risk**: Using `NEXT_PUBLIC_` prefix for service role key or exposing anon key incorrectly
- **Prevention**: Server-side client uses `SUPABASE_SERVICE_ROLE_KEY` (never exposed). Client-side uses `SUPABASE_ANON_KEY` via `NEXT_PUBLIC_` prefix if needed.
- **Phase**: Dashboard phase

---
*Research completed: 2026-04-03*
