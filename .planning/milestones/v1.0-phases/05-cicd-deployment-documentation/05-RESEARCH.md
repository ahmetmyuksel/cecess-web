# Phase 5: CI/CD, Deployment & Documentation - Research

Created: 2026-04-03
Status: In Progress

## Objective
Research the technical implementation for a GitHub Actions CI pipeline, Vercel deployment strategy (CLI-based), and documentation requirements for Google Play compliance.

## Research Questions

### 1. GitHub Actions + pnpm
Next.js projects using pnpm require specific setup in GitHub Actions.
- Which version of `pnpm/action-setup` is best?
- How to cache pnpm store efficiently?
- What are the exact build and lint commands for this project?

### 2. Vercel CLI Deployment
The context specifies using `vercel deploy --prebuilt --prod`.
- What are the steps for the "prebuilt" flow in GitHub Actions?
- How to handle environment variables during the build phase on Vercel vs. GitHub Actions?
- Which secrets are absolutely required for the Vercel CLI to work?

### 3. Docker Maintenance
- Checking the current `Dockerfile` for potential issues with the latest Next.js/pnpm.
- Ensuring `.dockerignore` excludes unnecessary files like `.planning/` and `.git/`.

### 4. Google Play Compliance Documentation
- What is the latest set of requirements for "Financial Features" declaration?
- Verifying the "20 testers / 14 days" rule specifics for a new developer account.

## Technical Findings (Draft)

### CI/CD Pipeline (GitHub Actions)
```yaml
# Draft structure
name: Validate & Deploy
on: [push, pull_request]
jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
        with:
          version: 9
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'pnpm'
      - run: pnpm install --frozen-lockfile
      - run: pnpm lint
      - run: pnpm build
```

### Vercel Integration
To use `--prebuilt`, we must run `vercel build` in GitHub Actions.
This requires `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID`.

### Docker
Dockerfile already uses `node:20-alpine` and `pnpm`. It seems solid.

### Documentation
- `PROJECT_STRUCTURE.md`: Map the `./features` and `./app` structure.
- `STORE_CHECKLIST.md`: Crucial for app store approval.

## Next Steps
- Finalize the GitHub Action YAML.
- Define the `vercel.json` content.
- Plan the documentation outline.
