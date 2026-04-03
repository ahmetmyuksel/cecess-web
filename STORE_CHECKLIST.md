# Google Play Submission Checklist: Cecess

This checklist outlines the mandatory steps for submitting the Cecess application to the Google Play Store, with a focus on strict financial app audit requirements.

## 1. Build Generation
- [ ] **Release AAB**: Generate the Android App Bundle (`.aab`) in Android Studio.
- [ ] **Proguard/R8**: Ensure code shrinking and obfuscation is enabled.
- [ ] **Version Code**: Increment `versionCode` in `build.gradle` before every release.

## 2. Testing Requirements (Mandatory for new accounts)
- [ ] **20 Testers**: Recruit 20 individual testers to join the Closed Testing track.
- [ ] **14-Day Minimum**: Testers must opt-in and use the app for **14 consecutive days**.
- [ ] **Feedback Loop**: Collect and respond to feedback within the Google Play Console.

## 3. Financial Features Declaration
- [ ] **Features List**: Explicitly declare all financial features (Transaction viewing, Category tracking, Budgeting).
- [ ] **Authority Document**: Provide documentation if requested regarding your status as a financial service (if applicable, else mark as personal management tool).
- [ ] **AI Disclosure**: Disclose the use of Gemini AI for financial data processing.

## 4. App Content & Data Safety
- [ ] **Data Safety Form**:
    - [ ] Declare data encryption (Supabase).
    - [ ] Declare data types collected (Financial info, Contact info, Device IDs).
    - [ ] Declare data sharing (No third-party sharing).
- [ ] **Privacy Policy**: Ensure the URL matches the one on the landing page (`/privacy`).
- [ ] **Rating Questionnaire**: Complete the IARC questionnaire.

## 5. Store Listing
- [ ] **Screenshots**: High-resolution screenshots showing the financial dashboard and AI features.
- [ ] **Feature Graphic**: 1024 x 500 image.
- [ ] **Descriptions**: Clear, professional descriptions in TR and EN.

---

## Google Play Audit Critical Items
> [!IMPORTANT]
> - Ensure **Account Deletion** instructions are present both in the app and on the web (`/account-deletion`).
> - No links to external payment methods (Google Play billing/RevenueCat only).
> - All AI disclaimers must be visible during first-time use.

---
*Last Updated: 2026-04-03*
