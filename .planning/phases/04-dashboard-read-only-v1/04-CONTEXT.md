# Phase 4: Dashboard Read-Only V1 - Context

**Gathered:** 2026-04-03
**Status:** Ready for planning

<domain>
## Phase Boundary

Refactor the authenticated dashboard to be a read-only viewer. Users can log in (Google/Email) and view their profile, transactions, accounts, categories, and subscription status. No create/edit/delete operations. Existing sidebar design is preserved.

</domain>

<decisions>
## Implementation Decisions

### Authentication
- **D-01:** Keep existing Supabase auth (Google + Email login)
- **D-02:** Auth flow: login → redirect to /profile/dashboard
- **D-03:** Keep existing middleware for protected routes

### Dashboard Views (Read-Only)
- **D-04:** Profile page shows: name, email, subscription tier, language, currency — all read-only
- **D-05:** Transactions page: table/list of transactions with date, amount, category, description, merchant — read-only
- **D-06:** Accounts page: account name, type, balance, currency — read-only
- **D-07:** Categories page: category name, type (income/expense), icon — read-only
- **D-08:** Subscription page: current tier (Free/Premium/Pro), "Manage in App" message

### Sidebar & Navigation
- **D-09:** Keep existing sidebar design and menu structure
- **D-10:** Remove Import menu item (Phase 1 already did this)
- **D-11:** Menu items: Dashboard, Transactions, Accounts, Categories, Reports, Settings, Subscription
- **D-12:** Reports can show existing reports from DB (read-only) or placeholder "Generate reports in app"

### Data Fetching
- **D-13:** All data comes from Supabase via RLS (auth.uid() = user_id)
- **D-14:** Use Supabase client-side with anon key through hooks
- **D-15:** No server actions for data fetching (keep it simple)

### i18n
- **D-16:** All dashboard text through i18n system
- **D-17:** Language selector available in dashboard header or settings

### Agent's Discretion
- Pagination vs infinite scroll for transaction list
- Whether to show charts/graphs on dashboard overview

</decisions>

<canonical_refs>
## Canonical References

### Database Schema
- `reset_db.sql` — Complete database schema with all tables and RLS policies

### Existing Code
- `app/profile/layout.tsx` — Dashboard layout with sidebar (KEEP)
- `app/profile/dashboard/` — Dashboard page (REFACTOR)
- `app/profile/transactions/` — Transactions page (REFACTOR to read-only)
- `app/profile/accounts/` — Accounts page (REFACTOR to read-only)
- `app/profile/categories/` — Categories page (REFACTOR to read-only)
- `app/profile/settings/` — Settings page (REFACTOR to read-only)
- `app/profile/subscription/` — Subscription page (REFACTOR, Phase 1 work)
- `app/profile/reports/` — Reports page (REFACTOR to read-only)
- `components/sidebar.tsx` — Sidebar navigation (KEEP)
- `components/header.tsx` — Dashboard header (KEEP)
- `features/auth/hooks/use-user.tsx` — User context provider (KEEP)
- `utils/supabase/` — Supabase client utilities (KEEP)

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `Sidebar` component with profile info and navigation
- `Header` component with user menu
- `ProtectedLayout` for auth gating
- `useUser` hook for current user context
- Supabase server/client utilities in `utils/supabase/`
- shadcn/ui components (tables, cards, badges, etc.)

### Established Patterns
- Profile layout fetches user + profile in server component, passes to client
- Protected routes use `ProtectedLayout` wrapper
- Data displayed in shadcn DataTable components
- Feature pages follow: action → service → hook → component pattern

### Integration Points
- All profile pages nested under `app/profile/` with shared layout
- Sidebar renders from `components/sidebar.tsx` with initialProfile prop
- Auth middleware protects `/profile/*` routes

</code_context>

<specifics>
## Specific Ideas

- Keep the existing dashboard design — it's already good
- Just make everything read-only (remove action buttons, forms, modals)
- User said "suanki menuler design güzel" (current menu design is nice)

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 04-dashboard-read-only-v1*
*Context gathered: 2026-04-03*
