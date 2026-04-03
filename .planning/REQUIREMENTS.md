# Requirements: Cecess Web

**Defined:** 2026-04-03
**Core Value:** The web must look like a legitimate, trust-worthy fintech startup to pass Google's strict financial app audits and convert visitors into mobile app users.

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Cleanup

- [ ] **CLN-01**: All Stripe dependencies removed from package.json (@stripe/stripe-js, stripe)
- [ ] **CLN-02**: All Stripe-related code removed (utils/stripe.ts, checkout flows, webhook handlers)
- [ ] **CLN-03**: All dashboard write operations removed (create/edit/delete for transactions, accounts, categories)
- [ ] **CLN-04**: Import wizard removed or disabled (write operation, mobile-only feature)
- [ ] **CLN-05**: Subscription/pricing pages updated to reflect RevenueCat (mobile-only payments, no web checkout)

### Landing Page

- [ ] **LAND-01**: Scroll-animated hero section with headline and mobile app mockup image
- [ ] **LAND-02**: App Store and Google Play download badges with placeholder links
- [ ] **LAND-03**: Feature sections that appear on scroll with fade/slide animations
- [ ] **LAND-04**: Trust signals section (security, encryption, privacy mentions)
- [ ] **LAND-05**: CTA section driving users to download the mobile app
- [ ] **LAND-06**: All landing page text uses i18n system (EN + TR, no hardcoded strings)
- [ ] **LAND-07**: Responsive design for mobile, tablet, and desktop
- [ ] **LAND-08**: Professional fintech-grade visual design (not hobby project)

### Compliance Pages

- [ ] **COMP-01**: Privacy Policy states Gemini AI processes financial data
- [ ] **COMP-02**: Privacy Policy states data is encrypted in Supabase
- [ ] **COMP-03**: Privacy Policy states no third-party selling of user data
- [ ] **COMP-04**: Privacy Policy states users can delete account/data anytime (RTBF)
- [ ] **COMP-05**: Terms of Service defines subscription tiers (Free/Premium/Pro) with pricing in EUR
- [ ] **COMP-06**: Terms of Service defines AI usage limits (1/day Free, Unlimited Premium+)
- [ ] **COMP-07**: Account Deletion page with clear instructions (deletion via mobile app)
- [ ] **COMP-08**: All compliance pages use i18n system (EN + TR)

### Dashboard

- [ ] **DASH-01**: User can log in via Supabase (Google or Email)
- [ ] **DASH-02**: User can view their profile information (read-only)
- [ ] **DASH-03**: User can view transaction history (read-only)
- [ ] **DASH-04**: User can view account balances (read-only)
- [ ] **DASH-05**: User can view categories (read-only)
- [ ] **DASH-06**: User can view subscription tier status (read-only)
- [ ] **DASH-07**: Dashboard uses existing sidebar navigation design
- [ ] **DASH-08**: All dashboard text uses i18n system (EN + TR)

### CI/CD & Deployment

- [ ] **CICD-01**: GitHub Actions workflow for build validation on push/PR
- [ ] **CICD-02**: GitHub Actions workflow for lint check
- [ ] **CICD-03**: Vercel deployment pipeline configuration
- [ ] **CICD-04**: Docker and Docker Compose files updated and functional
- [ ] **CICD-05**: Code pushed to clean GitHub repo (ahmetmyuksel/cecess-web.git)

### Documentation

- [ ] **DOC-01**: PROJECT_STRUCTURE.md summarizing the architecture
- [ ] **DOC-02**: STORE_CHECKLIST.md for Google Play submission (AAB build, 20 testers, 14-day rule)

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### Dashboard Enhancements

- **DASHV2-01**: Report viewing with charts (monthly spending breakdown)
- **DASHV2-02**: Data export (CSV/Excel) from web dashboard
- **DASHV2-03**: Real-time data sync via Supabase subscriptions

### Landing Page Enhancements

- **LANDV2-01**: Real app screenshots replacing placeholder mockup
- **LANDV2-02**: Testimonials from real users
- **LANDV2-03**: Blog / financial tips section
- **LANDV2-04**: SEO optimization with structured data

### Security Enhancements

- **SECV2-01**: MFA/TOTP for sensitive web actions
- **SECV2-02**: Rate limiting on auth endpoints

## Out of Scope

| Feature | Reason |
|---------|--------|
| Web payment processing | All monetization via RevenueCat mobile IAP |
| Account deletion on web | Deletion is mobile-only per RTBF compliance |
| Transaction CRUD on web | Web is read-only; CRUD is mobile-only |
| Direct bank connections | Import via CSV/Excel is mobile-only |
| Admin panel | Not needed for V1 |
| Real-time subscriptions | Read-only dashboard doesn't need live updates |
| Multiple languages beyond TR/EN | Two languages sufficient for launch market |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| CLN-01 | Phase 1 | Pending |
| CLN-02 | Phase 1 | Pending |
| CLN-03 | Phase 1 | Pending |
| CLN-04 | Phase 1 | Pending |
| CLN-05 | Phase 1 | Pending |
| COMP-01 | Phase 2 | Pending |
| COMP-02 | Phase 2 | Pending |
| COMP-03 | Phase 2 | Pending |
| COMP-04 | Phase 2 | Pending |
| COMP-05 | Phase 2 | Pending |
| COMP-06 | Phase 2 | Pending |
| COMP-07 | Phase 2 | Pending |
| COMP-08 | Phase 2 | Pending |
| LAND-01 | Phase 3 | Pending |
| LAND-02 | Phase 3 | Pending |
| LAND-03 | Phase 3 | Pending |
| LAND-04 | Phase 3 | Pending |
| LAND-05 | Phase 3 | Pending |
| LAND-06 | Phase 3 | Pending |
| LAND-07 | Phase 3 | Pending |
| LAND-08 | Phase 3 | Pending |
| DASH-01 | Phase 4 | Pending |
| DASH-02 | Phase 4 | Pending |
| DASH-03 | Phase 4 | Pending |
| DASH-04 | Phase 4 | Pending |
| DASH-05 | Phase 4 | Pending |
| DASH-06 | Phase 4 | Pending |
| DASH-07 | Phase 4 | Pending |
| DASH-08 | Phase 4 | Pending |
| CICD-01 | Phase 5 | Pending |
| CICD-02 | Phase 5 | Pending |
| CICD-03 | Phase 5 | Pending |
| CICD-04 | Phase 5 | Pending |
| CICD-05 | Phase 5 | Pending |
| DOC-01 | Phase 5 | Pending |
| DOC-02 | Phase 5 | Pending |

**Coverage:**
- v1 requirements: 30 total
- Mapped to phases: 30
- Unmapped: 0 ✓

---
*Requirements defined: 2026-04-03*
*Last updated: 2026-04-03 after initial definition*
