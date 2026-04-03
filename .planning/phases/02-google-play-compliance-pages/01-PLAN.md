---
wave: 1
depends_on: []
files_modified:
  - features/i18n/locales/en.ts
  - features/i18n/locales/tr.ts
  - features/public/components/privacy-view.tsx
  - features/public/components/terms-view.tsx
  - features/public/components/account-deletion-view.tsx
  - app/account-deletion/page.tsx
autonomous: true
requirements: [COMP-01, COMP-02, COMP-03, COMP-04, COMP-05, COMP-06, COMP-07, COMP-08]
---

# Phase 2, Plan 1: Google Play Compliance Pages

## Objective
Create and update the mandatory Google Play compliance pages (Privacy Policy, Terms of Service, Account Deletion) with all explicit financial app requirements. Ensure all content is fully translated via the i18n system.

## Tasks

### 1. Update i18n Locales
<read_first>
- features/i18n/locales/en.ts
- features/i18n/locales/tr.ts
</read_first>

<action>
Add the following keys and comprehensive translations to both `en.ts` and `tr.ts` under a new section for `compliance`, or extend existing ones.
Must cover:
- Privacy explicitly detailing: Gemini AI usage, Supabase data encryption, no third-party selling, and Right to be Forgotten (Account Deletion rights).
- Terms explicitly detailing: The three subscription tiers (Free, Premium, Pro) with their specific transaction limits, AI usage limits, and EUR pricing, and noting mobile-only payment via Google Play.
- Account Deletion instructions: Steps to delete via the mobile app (Settings -> Delete Account -> Confirm), and noting the permanent deletion of all data.
</action>

<acceptance_criteria>
- `features/i18n/locales/en.ts` contains the string `Gemini AI`.
- `features/i18n/locales/en.ts` contains the string `Supabase`.
- `features/i18n/locales/tr.ts` contains all Turkish equivalents for the compliance pages.
</acceptance_criteria>

### 2. Update Privacy & Terms Views
<read_first>
- features/public/components/privacy-view.tsx
- features/public/components/terms-view.tsx
- app/privacy/page.tsx
- app/terms/page.tsx
</read_first>

<action>
Refactor `features/public/components/privacy-view.tsx` and `features/public/components/terms-view.tsx` to read their structured content dynamically from the updated i18n keys via the `useLanguage()` hook.
</action>

<acceptance_criteria>
- `features/public/components/privacy-view.tsx` imports `useLanguage`.
- `features/public/components/privacy-view.tsx` renders dynamic translation strings instead of hardcoded English/Turkish text.
</acceptance_criteria>

### 3. Implement Account Deletion Page
<read_first>
- features/public/components/privacy-view.tsx (for structural reference)
</read_first>

<action>
Create a new view component `features/public/components/account-deletion-view.tsx` using the standard `PublicNavbar` and `Footer`. Render the multi-step instructions for account deletion using the new i18n keys.
Create the route at `app/account-deletion/page.tsx` mapping to this view.
</action>

<acceptance_criteria>
- `features/public/components/account-deletion-view.tsx` exists and uses `useLanguage`.
- `app/account-deletion/page.tsx` exists and correctly exports the page component.
</acceptance_criteria>

## Verification
- Pre-render check: running `npm run build` must succeed to ensure the i18n keys are perfectly typing-aligned.
