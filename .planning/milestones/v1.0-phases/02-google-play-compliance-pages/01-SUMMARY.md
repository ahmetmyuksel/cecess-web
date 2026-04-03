---
plan: 01-Update i18n Compliance Content (EN + TR)
phase: 02-google-play-compliance-pages
status: completed
author: Antigravity
date: 2026-04-03
---

# Plan Summary: Update i18n Compliance Content

## Objective
Rewrote the privacy policy, terms of service, and account deletion i18n content to comply with Google Play financial app audit requirements. Removed all Stripe references and added disclosures for Gemini AI, Supabase encryption, and RevenueCat.

## Key Files Created/Modified
- `features/i18n/locales/en.ts`: Updated privacy, terms, and account deletion sections.
- `features/i18n/locales/tr.ts`: Translated and updated Turkish compliance content.

## Implementation Details
- **Privacy Policy**: Explicitly mentions Google Gemini AI for categorization, Supabase (AES-256) for storage, and RevenueCat for payments. Added Right to be Forgotten section.
- **Terms of Service**: Defined Free, Premium, and Pro tiers with EUR pricing. Added AI usage limits (1/day for Free, unlimited for others).
- **Account Deletion**: Verified instructions for mobile app-based deletion and data removal scope.
- **Cleanup**: Removed all "Stripe" references from compliance sections.

## Verification Results
- `npm run build`: Success (Exit code 0).
- `grep` checks: Confirmed presence of all mandatory compliance strings and absence of Stripe.

## Self-Check
- [x] All tasks executed
- [x] Content available in EN and TR
- [x] Zero Stripe references in target sections
- [x] Build passes
