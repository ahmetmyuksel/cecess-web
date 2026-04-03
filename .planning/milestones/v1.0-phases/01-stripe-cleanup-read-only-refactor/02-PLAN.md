---
wave: 1
depends_on: []
files_modified:
  - features/transactions/actions/transaction-actions.ts
  - features/transactions/components/transactions-view.tsx
  - features/accounts/actions/account-actions.ts
  - features/accounts/components/accounts-view.tsx
  - features/categories/actions/categories-action.ts
  - features/categories/components/categories-view.tsx
  - features/settings/actions/settings-action.ts
  - features/settings/components/profile-view.tsx
  - features/ai/actions/generate-report-action.ts
  - features/reports/components/reports-view.tsx
autonomous: true
requirements: [CLN-03, CLN-04]
---

# Phase 1, Plan 2: Read-Only Dashboard Conversion

## Objective
Remove all write (create, update, delete) operations from the web dashboard features to enforce the read-only requirement. Users are only allowed to manage data via the mobile application.

## Tasks

### 1. Strip Transactions Write Operations
<read_first>
- features/transactions/actions/transaction-actions.ts
- features/transactions/components/transactions-view.tsx
</read_first>

<action>
Modify `features/transactions/actions/transaction-actions.ts` to keep only the read/fetch actions (e.g. fetching transactions). Remove all create, update, and delete actions.
Modify `features/transactions/components/transactions-view.tsx` to remove any UI components related to adding, editing, or deleting transactions (forms, modals, action buttons in the data table).
</action>

<acceptance_criteria>
- `grep -rI "createTransaction" features/transactions/actions/` returns no results or is removed.
- `features/transactions/components/transactions-view.tsx` has no "New Transaction" buttons or delete actions.
</acceptance_criteria>

### 2. Strip Accounts Write Operations
<read_first>
- features/accounts/actions/account-actions.ts
- features/accounts/components/accounts-view.tsx
</read_first>

<action>
Modify `features/accounts/actions/account-actions.ts` to keep only the fetch actions.
Modify `features/accounts/components/accounts-view.tsx` to remove any account creation, edit, or delete functionality. The view should only display the existing accounts in a list or table.
</action>

<acceptance_criteria>
- `grep -rI "createAccount" features/accounts/actions/` returns no results.
- `features/accounts/components/accounts-view.tsx` has no "Add Account" button.
</acceptance_criteria>

### 3. Strip Categories Write Operations
<read_first>
- features/categories/actions/categories-action.ts
- features/categories/components/categories-view.tsx
</read_first>

<action>
Modify `features/categories/actions/categories-action.ts` to keep only the fetch actions.
Modify `features/categories/components/categories-view.tsx` to remove any category creation, edit, or delete functionality. It should only display categories.
</action>

<acceptance_criteria>
- `grep -rI "createCategory" features/categories/actions/` returns no results.
- `features/categories/components/categories-view.tsx` has no "New Category" button.
</acceptance_criteria>

### 4. Refactor Settings & Reports
<read_first>
- features/settings/actions/settings-action.ts
- features/settings/components/profile-view.tsx
- features/ai/actions/generate-report-action.ts
- features/reports/components/reports-view.tsx
</read_first>

<action>
Modify `features/settings/actions/settings-action.ts` to remove any profile editing logic if present on the web.
Modify `features/settings/components/profile-view.tsx` to remove edit forms, displaying profile information as read-only.
Delete `features/ai/actions/generate-report-action.ts` completely (report generation is now mobile-only).
Modify `features/reports/components/reports-view.tsx` to only display existing reports from the database or show a banner indicating reports are generated via the mobile app.
</action>

<acceptance_criteria>
- File `features/ai/actions/generate-report-action.ts` no longer exists.
- `features/settings/components/profile-view.tsx` doesn't contain input fields or save buttons, only display elements.
</acceptance_criteria>

## Verification
- Run `npm run build` to ensure the Next.js app builds cleanly.
- There should be no unresolved imports pointing to deleted actions.
