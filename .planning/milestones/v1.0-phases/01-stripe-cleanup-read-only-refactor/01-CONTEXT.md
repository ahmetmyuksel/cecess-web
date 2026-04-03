# Phase 1: Stripe Cleanup & Read-Only Refactor - Context

**Gathered:** 2026-04-03
**Status:** Ready for planning

<domain>
## Phase Boundary

Remove all Stripe/payment code from the web codebase and disable all write (create/edit/delete) operations in the dashboard. The web becomes a read-only viewer — all CRUD happens on the mobile app.

</domain>

<decisions>
## Implementation Decisions

### Stripe Removal
- **D-01:** Delete `utils/stripe.ts` entirely
- **D-02:** Delete `features/subscription/services/stripe-service.ts` and `stripe-customer-service.ts`
- **D-03:** Delete `features/subscription/actions/stripe-action.ts`
- **D-04:** Remove `@stripe/stripe-js` and `stripe` from `package.json`
- **D-05:** Delete `app/api/webhooks/` directory (Stripe webhooks)
- **D-06:** Delete `STRIPE_SETUP.md` doc

### Subscription View Refactor
- **D-07:** Refactor `features/subscription/components/subscription-view.tsx` to show read-only subscription tier info from Supabase `profiles.subscription_tier` — no checkout/portal buttons
- **D-08:** Update `features/subscription/services/subscription-service.ts` to only read subscription_tier from profiles table

### Write Operations Removal
- **D-09:** Strip all create/edit/delete actions from `features/transactions/actions/transaction-actions.ts` — keep only read
- **D-10:** Strip write operations from `features/accounts/actions/account-actions.ts` and `accounts-action.ts`
- **D-11:** Strip write operations from `features/categories/actions/categories-action.ts`
- **D-12:** Remove import wizard entirely (`features/import/` directory and `app/profile/import/`)
- **D-13:** Remove AI report generation (`features/ai/actions/generate-report-action.ts`) — reports come from mobile
- **D-14:** Remove settings write actions (`features/settings/actions/settings-action.ts`) — profile editing is mobile-only

### Dashboard UI Cleanup
- **D-15:** Remove all "Add", "Edit", "Delete" buttons from transaction, account, and category views
- **D-16:** Keep existing sidebar navigation structure and menu items
- **D-17:** Remove "Import" menu item from sidebar

### Agent's Discretion
- How to handle the `@google/generative-ai` dependency — remove if only used for import categorization, keep if needed elsewhere
- Email service (`features/email/`) — keep or remove based on usage

</decisions>

<canonical_refs>
## Canonical References

No external specs — requirements fully captured in decisions above.

### Codebase Files to Modify/Delete
- `utils/stripe.ts` — Stripe client initialization (DELETE)
- `features/subscription/services/stripe-service.ts` — Stripe sync service (DELETE)
- `features/subscription/services/stripe-customer-service.ts` — Stripe customer creation (DELETE)
- `features/subscription/actions/stripe-action.ts` — Stripe server actions (DELETE)
- `features/subscription/components/subscription-view.tsx` — Subscription UI (REFACTOR to read-only)
- `features/import/` — Import wizard directory (DELETE)
- `features/transactions/actions/transaction-actions.ts` — Transaction CRUD (strip writes)
- `features/accounts/actions/` — Account CRUD (strip writes)
- `features/categories/actions/categories-action.ts` — Category CRUD (strip writes)
- `package.json` — Remove Stripe deps
- `components/sidebar.tsx` — Remove Import menu item

</canonical_refs>

<code_context>
## Existing Code Insights

### Files to Delete
- `utils/stripe.ts` — 5 lines, Stripe client init
- `features/subscription/services/stripe-service.ts` — Full Stripe subscription sync
- `features/subscription/services/stripe-customer-service.ts` — Customer creation
- `features/subscription/actions/stripe-action.ts` — Server actions for checkout/portal/sync
- `features/import/` — Entire import wizard feature
- `app/api/webhooks/` — Webhook handlers
- `app/profile/import/` — Import page route

### Files to Refactor (strip writes, keep reads)
- `features/transactions/` — Has full CRUD, keep only read service/actions
- `features/accounts/` — Has full CRUD, keep only read
- `features/categories/` — Has full CRUD, keep only read
- `features/subscription/components/subscription-view.tsx` — Remove Stripe checkout, show tier info only
- `components/sidebar.tsx` — Remove import menu item

### Integration Points
- `package.json` — Remove `@stripe/stripe-js`, `stripe`, possibly `@google/generative-ai`, `resend`

</code_context>

<specifics>
## Specific Ideas

No specific requirements — straightforward cleanup operation.

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 01-stripe-cleanup-read-only-refactor*
*Context gathered: 2026-04-03*
