---
wave: 1
depends_on: []
files_modified:
  - app/profile/dashboard/page.tsx
  - features/dashboard/components/dashboard-overview.tsx
  - app/profile/transactions/page.tsx
  - features/transactions/components/transactions-view.tsx
  - app/profile/accounts/page.tsx
  - features/accounts/components/accounts-view.tsx
  - app/profile/categories/page.tsx
  - features/categories/components/categories-view.tsx
autonomous: true
requirements: [DB-01, DB-02, DB-03, DB-04, DB-05, DB-06]
---

# Phase 4, Plan 1: Dashboard Refinement & Polish

## Objective
Following Phase 1's functional strip of write operations, this phase focuses on polishing the UI of the read-only dashboard. The existing sidebar layout is preserved, but all data-entry forms are replaced with "Manage in App" indicators, and the data tables are refined for view-only optimization.

## Tasks

### 1. Polish Dashboard Overview
<read_first>
- app/profile/dashboard/page.tsx
- features/dashboard/components/dashboard-overview.tsx
</read_first>

<action>
Modify `features/dashboard/components/dashboard-overview.tsx` to display basic user statistics (total accounts, recent transactions). Add a clear disclaimer banner at the top of the dashboard: "Cecess Web is read-only. To manage your finances, add transactions, or change your subscription, please use the Cecess mobile app." (Use i18n for the string).
</action>

<acceptance_criteria>
- `features/dashboard/components/dashboard-overview.tsx` contains the text "Manage" or an i18n key for the disclaimer banner.
</acceptance_criteria>

### 2. Polish Data Views (Transactions, Accounts, Categories)
<read_first>
- features/transactions/components/transactions-view.tsx
- features/accounts/components/accounts-view.tsx
- features/categories/components/categories-view.tsx
</read_first>

<action>
For all three views:
- Ensure the data tables are beautifully formatted using standard `shadcn/ui` DataTables.
- Where the "Add Row" or "Actions" columns used to be, remove the column definitions entirely.
- In empty states (when no data exists), standard "No data found. Add data via the mobile app." messages should be shown using i18n.
</action>

<acceptance_criteria>
- Data table column definitions do not contain an `actions` column with edit/delete buttons.
- Empty states reference the mobile app.
</acceptance_criteria>

## Verification
- Run `npm run build` to ensure the views compile successfully.
- Manually test rendering the `/profile/dashboard` route and ensuring the info banner renders.
