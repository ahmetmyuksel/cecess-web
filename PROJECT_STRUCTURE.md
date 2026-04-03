# Project Structure: Cecess Web

This document outlines the architectural patterns and directory structure of the Cecess Web application.

## Core Architecture
The project follows a **Feature-Based + Clean Architecture** pattern, strictly separating presentation from business logic following the `AGENTS.md` protocol.

### Layers:
1.  **Domain Layer** (`features/<name>/domain/`): Pure business logic, types, and helpers.
2.  **Service Layer** (`features/<name>/actions/` or `services/`): API/Supabase communication (Server Actions).
3.  **Hooks Layer** (`features/<name>/hooks/`): State management and async flow.
4.  **View Layer** (`features/<name>/components/`): Presentational components.

---

## Directory Layout

### `/app`
Next.js App Router. Contains entry points, layouts, and route definitions. Orchestrates features but contains minimal logic.
- `(auth)/`: Authentication-related routes.
- `dashboard/`: Main application dashboard.
- `proxy.ts`: Next.js request interception (formerly middleware.ts).
- `api/`: External integration endpoints (e.g., webhooks).

### `/features`
The heart of the application logic. Each subdirectory represents a domain area.
- `auth/`: Login, registration, and session management.
- `dashboard/`: Financial data visualization.
- `subscription/`: Tier status and RevenueCat sync UI.
- `i18n/`: Internationalization (TR/EN) system.
- `public/`: Compliance pages (Privacy, Terms, Account Deletion).

### `/components`
Global shared UI components, primarily built with **shadcn/ui** and **Lucide React**.

### `/hooks`
Global, non-feature-specific React hooks (e.g., `use-media-query`, `use-scroll-animation`).

### `/lib`
Global configuration and client initializations.
- `supabase.ts`: Supabase client config.
- `utils.ts`: Tailwind merging and class utilities.

### `/types`
Global TypeScript interfaces and utility types.

### `/utils`
General helper functions (formatting, validation, etc.).

---

## Key Technologies
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Kit**: shadcn/ui
- **Auth/DB**: Supabase
- **Package Manager**: pnpm

---
*Last Updated: 2026-04-03*
