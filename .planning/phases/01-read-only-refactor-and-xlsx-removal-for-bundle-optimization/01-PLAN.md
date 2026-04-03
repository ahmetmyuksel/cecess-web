---
wave: 1
depends_on: []
files_modified: 
  - "package.json"
  - "features/i18n/locales/en.ts"
  - "features/i18n/locales/tr.ts"
autonomous: true
requirements_addressed: ["CLN-01", "CLN-02", "CLN-03", "CLN-04", "CLN-05"]
---

# Plan 01: Read-Only Refactor & Dependency Cleanup

<objective>
Execute the complete removal of data mutation UI/features from the web dashboard, ensuring strict read-only nature, and uninstall `xlsx` & `papaparse` to drastically optimize Cloudflare Pages bundle sizes.
</objective>

<verification>
pnpm ls xlsx papaparse || echo "Not found - Passed"
grep -q "importFlow" features/i18n/locales/en.ts && exit 1 || echo "Passed"
</verification>

<must_haves>
- `xlsx` and `papaparse` are uninstalled and absent from lockfiles.
- Unused translation dictionaries for data mutations (e.g. `importFlow`, forms, modals) are deleted from i18n files.
- Leftover mutation components (like `bank-selector-modal.tsx`) are completely removed.
</must_haves>

<tasks>

<task>
<read_first>
- package.json
</read_first>
<action>
Execute `npm uninstall xlsx papaparse stripe @stripe/stripe-js` (or `pnpm remove ...`) to remove the heavy import/export dependencies. Update lockfiles. (Stripe may already be removed, but run the command for certainty).
</action>
<acceptance_criteria>
`package.json` dependencies block does not contain `xlsx` or `papaparse`.
</acceptance_criteria>
</task>

<task>
<read_first>
- features/i18n/locales/en.ts
- features/i18n/locales/tr.ts
</read_first>
<action>
In both `features/i18n/locales/en.ts` and `tr.ts`:
- Delete the entire `importFlow` object.
- Delete `settings.data.export`, `settings.data.import`, and `settings.deleteAccount` objects.
- In `transactions`, delete `addTransaction`, `editTransaction`, `deleteSelected`, `deleteConfirm`, and the `form` object.
- In `categories`, delete `addCategory`, `modals`, and `form` objects.
- In `accounts`, delete `addManual`, `linkBank`, `modals`, and `form` objects.
</action>
<acceptance_criteria>
`grep -q "importFlow" features/i18n/locales/en.ts` returns exit code 1 (not found).
</acceptance_criteria>
</task>

<task>
<read_first>
- features/accounts/components/bank-selector-modal.tsx
</read_first>
<action>
Delete the file `features/accounts/components/bank-selector-modal.tsx` as it's an unused mutation modal in a read-only dashboard. Also confirm any other `import-*.tsx` or `add-*.tsx` files are removed if found.
</action>
<acceptance_criteria>
`features/accounts/components/bank-selector-modal.tsx` does not exist in the filesystem.
</acceptance_criteria>
</task>

</tasks>
