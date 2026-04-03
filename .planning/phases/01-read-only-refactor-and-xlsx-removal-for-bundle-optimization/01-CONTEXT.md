# Phase 1: Read-only refactor and xlsx removal for bundle optimization - Context

**Gathered:** 2026-04-03
**Status:** Ready for planning

<domain>
## Phase Boundary

Complete removal of import/export libraries (xlsx, papaparse) and all data mutation features (CRUD) from the web dashboard. The dashboard acts as a strict read-only viewer for financial data managed entirely in the mobile app.
</domain>

<decisions>
## Implementation Decisions

### Action Button UX
- **D-01:** Completely remove all action buttons related to data mutation (e.g., "Add Transaction", "Import", "+ Manual Add", "Upload File"). Do not keep them as disabled buttons.

### Settings / Profile Management
- **D-02:** Keep the profile form fields strictly read-only to show the user's current profile data.
- **D-03:** Add a prominent banner to the Profile section stating that the web version is read-only, and that all edits must be made via the mobile app.

### the agent's Discretion
- Exactly how the read-only banner is styled (presumably using an info alert or shadcn banner to look clean and professional).
- Adapting empty states to guide users to the app when they have no records.
</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### General Guidelines
- `.planning/PROJECT.md` — Project definition, emphasizing identical branding to mobile and strict Read-Only web requirements.
- `.planning/REQUIREMENTS.md` — Specific clean up requirements (CLN-01 to CLN-05) specifying the removal of write operations and import wizard from the dashboard.
</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- ReadonlyStatus component (`src/components/ui/readonly-status.tsx`) already exists and can be adapted/reused for the profile section banner.
- Existing forms should simply have their inputs marked `disabled` or `readOnly`.

### Integration Points
- `/features/transactions/components/transactions-view.tsx`
- `/features/accounts/components/accounts-view.tsx`
- `/features/categories/components/categories-view.tsx`
- `/features/settings/components/settings-view.tsx`
</code_context>

<specifics>
## Specific Ideas

- Just add a banner to the profile section that states the web version is only read-only.
- Completely nuke any UI component dealing with adding constraints. 
</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed completely within the phase scope.
</deferred>
