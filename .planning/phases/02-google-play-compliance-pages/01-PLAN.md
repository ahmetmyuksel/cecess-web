---
wave: 1
depends_on: []
files_modified:
  - features/i18n/locales/en.ts
  - features/i18n/locales/tr.ts
  - features/i18n/types.ts
autonomous: true
requirements: [COMP-01, COMP-02, COMP-03, COMP-04, COMP-05, COMP-06, COMP-07, COMP-08]
---

# Phase 2, Plan 1: Update i18n Compliance Content (EN + TR)

## Objective
Rewrite the privacy policy, terms of service, and account deletion i18n content to comply with Google Play financial app audit requirements. Remove all Stripe references, add Gemini AI processing disclosure, Supabase encryption, RevenueCat payment processing, subscription tier definitions, and AI usage limits.

## Tasks

### 1. Update English Privacy Policy Content
<read_first>
- features/i18n/locales/en.ts (lines 445-508, the `privacy` section under `public`)
- features/i18n/types.ts (to understand Dictionary type shape)
</read_first>

<action>
Replace the `public.privacy` section in `features/i18n/locales/en.ts`. The new content MUST include:

**Section 1 — Information We Collect:**
- "Personal Data: Name, email address, phone number (optional), date of birth, gender"
- "Financial Data: Transaction records, account names, balances, custom categories, and budgets that you create within the application"
- "Device Data: Device type, operating system, app version, and anonymized usage analytics"

**Section 2 — How We Use Your Information:**
- "Transaction categorization is powered by Google Gemini AI. Your transaction descriptions are sent to Google's Gemini API for automated categorization. No personally identifiable information is included in these requests."
- "Create, maintain, and secure your account"
- "Process subscription payments via Google Play (RevenueCat)"

**Section 3 — Data Storage & Security:**
- "Your data is stored in Supabase (PostgreSQL) with encryption at rest (AES-256) and encryption in transit (TLS 1.2+)."
- "Passwords are hashed using Bcrypt via Supabase Auth — we never store plaintext credentials."

**Section 4 — Third-Party Sharing:**
- "We do not sell, trade, or rent your personal data to third parties."
- Service providers: "Google Gemini AI (transaction categorization), Supabase (database and authentication), RevenueCat (subscription management via Google Play)"

**Section 5 — Your Rights (Right to Be Forgotten):**
- "You can delete your account and all associated data at any time through the Cecess mobile application (Settings → Delete Account)."
- "Upon deletion, the following data is permanently removed: profile information, transaction history, account records, custom categories, AI-generated reports, and all related metadata."

**Section 6 — Contact:**
- "For privacy inquiries, contact us at support@cecess.com"

Update `lastUpdated` to "Last Updated: April 3, 2026"
</action>

<acceptance_criteria>
- `features/i18n/locales/en.ts` contains the exact string `Google Gemini AI`
- `features/i18n/locales/en.ts` contains the exact string `Supabase (PostgreSQL)`
- `features/i18n/locales/en.ts` contains the exact string `encryption at rest (AES-256)`
- `features/i18n/locales/en.ts` contains the exact string `We do not sell, trade, or rent your personal data`
- `features/i18n/locales/en.ts` contains the exact string `RevenueCat`
- `features/i18n/locales/en.ts` contains the exact string `support@cecess.com`
- `features/i18n/locales/en.ts` does NOT contain the string `Stripe` anywhere in the privacy section
</acceptance_criteria>

### 2. Update English Terms of Service Content
<read_first>
- features/i18n/locales/en.ts (lines 510-563, the `terms` section under `public`)
</read_first>

<action>
Replace the `public.terms` section in `features/i18n/locales/en.ts`. The new content MUST include:

**Section 4 — Subscription Tiers & Pricing:**
- "Free Plan: Up to 100 transactions, basic categorization, 1 AI categorization request per day"
- "Premium Plan: Unlimited transactions, advanced categorization, unlimited AI requests. Monthly: €4.99/month. Yearly: €49.90/year (save ~17%)"
- "Pro Plan: Everything in Premium plus AI-generated financial reports, advanced analytics, and priority support. Monthly: €12.99/month. Yearly: €129.90/year (save ~17%)"

**Section 5 — Payment Processing:**
- "All subscription payments are processed exclusively through Google Play via RevenueCat. Cecess does not process payments directly on the web."
- "Refund policy follows Google Play's standard refund terms."

**Section 6 — AI Features & Usage Limits:**
- "Free users: 1 AI categorization request per day"
- "Premium users: Unlimited AI categorization requests"
- "Pro users: Unlimited AI categorization plus AI-generated financial analysis reports"
- "AI features are powered by Google Gemini and may produce inaccurate results. Users should verify AI-generated categorizations."

Remove ALL Stripe references from the terms section.
Update `lastUpdated` to "Last Updated: April 3, 2026"
</action>

<acceptance_criteria>
- `features/i18n/locales/en.ts` terms section contains `€4.99/month`
- `features/i18n/locales/en.ts` terms section contains `€12.99/month`
- `features/i18n/locales/en.ts` terms section contains `€49.90/year`
- `features/i18n/locales/en.ts` terms section contains `€129.90/year`
- `features/i18n/locales/en.ts` terms section contains `1 AI categorization request per day`
- `features/i18n/locales/en.ts` terms section contains `Google Play`
- `features/i18n/locales/en.ts` terms section does NOT contain the string `Stripe`
</acceptance_criteria>

### 3. Update English Account Deletion Content
<read_first>
- features/i18n/locales/en.ts (lines 564-596, `accountDeletion` section)
</read_first>

<action>
Update `public.accountDeletion` in en.ts. Must include:
- Steps: "Open Cecess app → Settings → Profile → Delete My Account → Confirm"
- Data scope: "profile, transactions, accounts, categories, reports, and all metadata"
- Processing time: "Your data deletion request is processed immediately upon confirmation."
- Fallback: "support@cecess.com" for users who cannot access mobile app

This section already exists with good content. Verify it matches requirements, adjust if needed.
</action>

<acceptance_criteria>
- `features/i18n/locales/en.ts` accountDeletion section contains `support@cecess.com`
- `features/i18n/locales/en.ts` accountDeletion section contains `Delete My Account`
- `features/i18n/locales/en.ts` accountDeletion section contains `permanently`
</acceptance_criteria>

### 4. Create Turkish Translations for All Compliance Content
<read_first>
- features/i18n/locales/tr.ts (entire public section)
- features/i18n/locales/en.ts (updated public section as source)
</read_first>

<action>
Mirror EXACTLY the same section structure from en.ts into tr.ts for `public.privacy`, `public.terms`, and `public.accountDeletion`. ALL content must be translated to professional Turkish. Key translations:

- "Privacy Policy" → "Gizlilik Politikası"
- "Terms of Service" → "Kullanım Koşulları" 
- "Account Deletion" → "Hesap Silme"
- "Google Gemini AI" → "Google Gemini AI" (keep brand names in English)
- "Supabase" → "Supabase" (brand name)
- "RevenueCat" → "RevenueCat" (brand name)
- "We do not sell" → "Kişisel verilerinizi üçüncü taraflara satmıyor, takas etmiyor veya kiralamıyoruz."
- "encryption at rest" → "durağan halde şifreleme"
- "encryption in transit" → "aktarım sırasında şifreleme"
- Pricing: Keep EUR amounts in same format (€4.99, €12.99 etc)

Remove ALL Stripe references from tr.ts privacy and terms sections.
</action>

<acceptance_criteria>
- `features/i18n/locales/tr.ts` contains the exact string `Google Gemini AI`
- `features/i18n/locales/tr.ts` contains the exact string `Supabase`
- `features/i18n/locales/tr.ts` contains the exact string `RevenueCat`
- `features/i18n/locales/tr.ts` contains `€4.99`
- `features/i18n/locales/tr.ts` contains `Gizlilik Politikası` 
- `features/i18n/locales/tr.ts` does NOT contain the string `Stripe` in privacy or terms sections
- `features/i18n/locales/tr.ts` privacy/terms/accountDeletion have identical section keys as en.ts
</acceptance_criteria>

### 5. Verify i18n Type Compatibility  
<read_first>
- features/i18n/types.ts
</read_first>

<action>
Run `npm run build` to verify no TypeScript errors from the updated locale files. The Dictionary type must accept the new section keys. If section keys were renamed (not just content changed), update the type accordingly.
</action>

<acceptance_criteria>
- `npm run build` exits with code 0
- No TypeScript errors related to i18n types
</acceptance_criteria>

## Verification
- `npm run build` must succeed with zero type errors
- grep for "Stripe" in en.ts and tr.ts returns zero matches in privacy/terms sections
- All 8 COMP requirements addressed: COMP-01 (Gemini AI), COMP-02 (Supabase encryption), COMP-03 (no selling), COMP-04 (RTBF), COMP-05 (tiers), COMP-06 (AI limits), COMP-07 (deletion page), COMP-08 (i18n)

## must_haves
- Privacy policy explicitly mentions Google Gemini AI processing
- Privacy policy explicitly mentions Supabase encryption
- Terms of Service defines all three tiers with EUR pricing
- Terms of Service defines AI usage limits per tier
- Account deletion instructions reference mobile app flow
- All content available in both EN and TR
- Zero Stripe references remaining in compliance pages
