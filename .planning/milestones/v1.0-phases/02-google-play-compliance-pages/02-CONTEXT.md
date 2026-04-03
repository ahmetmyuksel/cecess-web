# Phase 2: Google Play Compliance Pages - Context

**Gathered:** 2026-04-03
**Status:** Ready for planning

<domain>
## Phase Boundary

Create/update Privacy Policy, Terms of Service, and Account Deletion pages with explicit language required by Google Play financial app audits. All content must use the i18n system (EN + TR).

</domain>

<decisions>
## Implementation Decisions

### Privacy Policy Content
- **D-01:** Must explicitly state: "Financial data is processed via Google Gemini AI for transaction categorization"
- **D-02:** Must state: "Data is encrypted in Supabase (PostgreSQL with encryption at rest and in transit)"
- **D-03:** Must state: "We do not sell user data to third parties"
- **D-04:** Must state: "Users can delete their account and all associated data at any time" (Right to be Forgotten)
- **D-05:** Must list data collected: email, name, transaction data, account info, device info
- **D-06:** Must include contact information for privacy inquiries

### Terms of Service Content
- **D-07:** Define subscription tiers with pricing:
  - Free: 100 transactions, basic categorization, 1 AI request/day
  - Premium Monthly: €4.99/mo, Premium Yearly: €49.90/yr
  - Pro Monthly: €12.99/mo, Pro Yearly: €129.90/yr
- **D-08:** Define AI usage limits: Free = 1 request/day, Premium = unlimited, Pro = unlimited + advanced analysis
- **D-09:** Payments processed via Google Play (RevenueCat) — no web payments
- **D-10:** Refund policy follows Google Play's standard refund terms

### Account Deletion Page
- **D-11:** Text-only instructions page — no actual deletion functionality on web
- **D-12:** Steps: Open Cecess app → Settings → Delete Account → Confirm
- **D-13:** Mention that all data (profile, transactions, accounts, categories, reports) will be permanently deleted
- **D-14:** Include estimated processing time and contact email for support

### i18n
- **D-15:** All text in EN + TR locale files
- **D-16:** Update existing `features/i18n/locales/en.ts` and `tr.ts` with compliance page strings
- **D-17:** Each page accessible at `/privacy`, `/terms`, `/account-deletion`

### Agent's Discretion
- Legal formatting and section structure
- Whether to add a "Last Updated" date header per page

</decisions>

<canonical_refs>
## Canonical References

### Google Play Requirements
- Google Play Developer Policy Center — Financial services policy
- Privacy policy must match Data Safety Form declarations

### Existing Code
- `features/public/components/privacy-view.tsx` — Existing privacy page (UPDATE)
- `features/public/components/terms-view.tsx` — Existing terms page (UPDATE)
- `app/privacy/page.tsx` — Privacy route (EXISTS)
- `app/terms/page.tsx` — Terms route (EXISTS)
- `features/i18n/locales/en.ts` — English translations (UPDATE)
- `features/i18n/locales/tr.ts` — Turkish translations (UPDATE)

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `PublicNavbar` component — used on all public pages
- `Footer` component — used on all public pages
- `LanguageProvider` — wraps page for i18n context
- Existing privacy-view.tsx and terms-view.tsx as starting templates

### Established Patterns
- Public pages use `LanguageProvider` with `forcedLanguage` or auto-detect
- All public page text should go through `useLanguage()` hook → `t.section.key`

### Integration Points
- New `/account-deletion` route needs to be created in `app/`
- Sidebar/navbar may need "Account Deletion" link in footer

</code_context>

<specifics>
## Specific Ideas

- Privacy Policy must pass Google's financial app audit — be explicit, not generic
- Founder is a banking professional — language should reflect fintech credibility

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 02-google-play-compliance-pages*
*Context gathered: 2026-04-03*
