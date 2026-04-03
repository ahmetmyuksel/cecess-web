---
wave: 1
depends_on: []
files_modified:
  - .github/workflows/validate.yml
  - vercel.json
  - PROJECT_STRUCTURE.md
  - STORE_CHECKLIST.md
autonomous: true
requirements: [CICD-01, CICD-02, CICD-03, CICD-04, CICD-05, CICD-06, DOC-01, DOC-02]
---

# Phase 5, Plan 1: CI/CD & Documentation

## Objective
Establish the automated build validation pipeline via GitHub Actions, configure Vercel for production deployments, and write critical project documentation for both the architecture and the Google Play submission process.

## Tasks

### 1. Configure GitHub Actions
<read_first>
- package.json
</read_first>

<action>
Create `.github/workflows/validate.yml`.
Configure a workflow triggered on push to `main` and all `pull_requests`.
Use `ubuntu-latest` and `actions/setup-node@v4` with Node 20.
Run `npm ci`, `npm run lint`, and `npm run build` to validate code quality and typing.
</action>

<acceptance_criteria>
- `.github/workflows/validate.yml` exists.
- The file contains `npm run build` and `npm run lint`.
</acceptance_criteria>

### 2. Configure Vercel
<read_first>
- package.json
</read_first>

<action>
Create `vercel.json` in the root directory.
Configure it for a Next.js framework deployment including standard build settings: `"framework": "nextjs"`.
</action>

<acceptance_criteria>
- `vercel.json` exists in the root.
- `cat vercel.json | grep nextjs` returns a match.
</acceptance_criteria>

### 3. Create Project Documentation
<read_first>
- resets_db.sql (for understanding DB schema if needed)
</read_first>

<action>
Create `PROJECT_STRUCTURE.md`: Document the directory layout (app vs features), the separation of concerns (Domain -> Service -> Hook -> Component), and tech stack.
Create `STORE_CHECKLIST.md`: A markdown checklist specifically for the Google Play submission for a financial app. Include steps like generating an AAB, running the 14-day closed test with 20 testers, filling the Data Safety Form, entering the Privacy Policy URL, and completing the Financial Features Declaration.
</action>

<acceptance_criteria>
- `PROJECT_STRUCTURE.md` exists and describes "App vs Features".
- `STORE_CHECKLIST.md` exists and contains "20 testers".
</acceptance_criteria>

## Verification
- Run `npm run build` locally to verify codebase is sound.
- Ensure all markdown files are well-formatted.
