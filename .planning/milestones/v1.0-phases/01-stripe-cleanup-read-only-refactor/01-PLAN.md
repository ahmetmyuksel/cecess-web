---
wave: 1
depends_on: []
files_modified:
  - package.json
  - utils/stripe.ts
  - features/subscription/services/stripe-service.ts
  - features/subscription/services/stripe-customer-service.ts
  - features/subscription/actions/stripe-action.ts
  - app/api/webhooks/
  - features/subscription/components/subscription-view.tsx
  - features/subscription/services/subscription-service.ts
  - components/sidebar.tsx
  - features/import/
  - app/profile/import/
autonomous: true
requirements: [CLN-01, CLN-02, CLN-05]
---

# Phase 1, Plan 1: Stripe & Import Cleanup

## Objective
Remove all Stripe-related dependencies and files from the codebase to align with mobile-only payment architectures using RevenueCat. Additionally, remove the Import wizard from the dashboard since the web dashboard is becoming read-only.

## Tasks

### 1. Remove Stripe Dependencies
<read_first>
- package.json
</read_first>

<action>
Remove `@stripe/stripe-js` and `stripe` packages from `package.json`.
</action>

<acceptance_criteria>
- `cat package.json | grep stripe` returns no matches.
</acceptance_criteria>

### 2. Delete Stripe Specific Files
<read_first>
- utils/stripe.ts
</read_first>

<action>
Delete the following files and directories completely:
- `utils/stripe.ts`
- `features/subscription/services/stripe-service.ts`
- `features/subscription/services/stripe-customer-service.ts`
- `features/subscription/actions/stripe-action.ts`
- `app/api/webhooks/`
</action>

<acceptance_criteria>
- File `utils/stripe.ts` no longer exists.
- Directory `app/api/webhooks/` no longer exists.
</acceptance_criteria>

### 3. Refactor Subscription View & Service
<read_first>
- features/subscription/components/subscription-view.tsx
- features/subscription/services/subscription-service.ts
</read_first>

<action>
Replace the current `subscription-view.tsx` content with a simple, read-only UI. Remove `syncStripeStatusAction`, `createCheckoutSessionAction`, and `createCustomerPortalAction` imports. Fetch `profiles.subscription_tier` from the DB using a streamlined `subscription-service.ts` and display the current tier. Display "Manage in App" for subscription changes.
</action>

<acceptance_criteria>
- `features/subscription/components/subscription-view.tsx` does not import any stripe actions.
- Features `subscription_tier` is safely rendered.
</acceptance_criteria>

### 4. Remove Import Wizard
<read_first>
- components/sidebar.tsx
</read_first>

<action>
Delete the `features/import/` and `app/profile/import/` directories completely.
Modify `components/sidebar.tsx` to remove the "Import" or "İçe Aktar" link.
</action>

<acceptance_criteria>
- Directory `features/import/` no longer exists.
- `components/sidebar.tsx` no longer contains the path `/profile/import`.
</acceptance_criteria>

## Verification
- Run `npm install` and ensure it runs successfully.
- Run `npm run build` and ensure TS compiler has no Stripe errors about missing types.
