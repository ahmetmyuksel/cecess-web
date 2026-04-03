# Phase 01: Read-only refactor and xlsx removal for bundle optimization - Research

**Objective:** "What do I need to know to PLAN this phase well?"

## Investigation

The goal is to complete the removal of import/export libraries (`xlsx`, `papaparse`) and any remaining mutational functions, transitioning the web app fully into a Read-Only viewer.

### 1. `xlsx` and `papaparse` Dependencies
- Both `xlsx` and `papaparse` are present in `package.json` under `dependencies`.
- `grep_search` confirmed there are NO `.tsx` or `.ts` files importing `xlsx` or `papaparse` in the `src/` or `features/` directory anymore. The features using them were likely deleted or commented out previously.
- **Action Needed:** Run `pnpm remove xlsx papaparse` to uninstall them and update `pnpm-lock.yaml`, thus fixing the bundle size issues.

### 2. Mutational UI Components
- **Transactions & Accounts:** `transactions-view.tsx`, `accounts-view.tsx`, and `categories-view.tsx` are ALREADY in a read-only state. They implement the `<ReadonlyStatus />` banner, and the action buttons like "+ Add Transaction" have been removed.
- **Settings/Profile:** `settings-view.tsx` and `profile-view.tsx` also use disabled inputs and the read-only banner. The text correctly points users to the mobile app for managing their profile.
- **Residual Modals:** Found `features/accounts/components/bank-selector-modal.tsx`. Since linking accounts is a mutation, this file should likely be deleted.

### 3. Localization (i18n)
- `features/i18n/locales/en.ts` and `tr.ts` contain extensive translation blocks for data mutations that are no longer supported on the web:
  - `importFlow` section (entire node can be deleted).
  - `settings.data.export`, `settings.data.import`, `settings.deleteAccount` sections.
  - `transactions.form`, `transactions.addTransaction`, `transactions.editTransaction`, `transactions.deleteSelected`.
  - `categories.form`, `categories.modals`, `categories.addCategory`.
  - `accounts.modals`, `accounts.form`, `accounts.addManual`, `accounts.linkBank`.

## Validation Architecture

To ensure the phase goal is met, we must verify the following:
1. `xlsx` and `papaparse` are removed from `package.json`.
2. The project builds successfully without them (`pnpm build`).
3. No lingering mutation-related components exist. 
4. The web dashboard correctly acts as a viewer with no capability to modify data.

## RESEARCH COMPLETE
