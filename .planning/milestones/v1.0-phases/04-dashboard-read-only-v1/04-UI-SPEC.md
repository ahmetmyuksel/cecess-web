# UI Design Contract: Phase 04 - Dashboard Read-Only V1

**Phase:** 04-dashboard-read-only-v1
**Status:** DRAFT (requires gsd-ui-checker review)

## 1. Visual Strategy
The dashboard must transition from a functional "edit-ready" interface to a polished, premium "view-only" experience. The goal is to make the read-only nature feel like a security/privacy feature rather than a technical limitation.

- **Core Aesthetic:** Minimalist Fintech. High white space, slate-900 typography, blue-600 accents.
- **Read-Only Enforcement:** All actionable buttons (Add, Edit, Delete, Sort via Drag-and-Drop) are removed. 
- **Global Status:** A persistent "Read-Only" or "Synced from App" badge should be visible to provide context.

## 2. Layout & Spacing
Using the established Responsive Dashboard layout.

| Element | Width / Behavior | Spacing (px) |
|---------|------------------|--------------|
| Sidebar | Fixed (280px) / Collapsible on Mobile | gap-4 |
| Main Content | Fluid (flex-1) | p-6 lg:p-8 |
| Header | Fixed (h-16), Sticky | px-4 |
| Data Cards | Grid (1, 2, or 3 cols based on screen) | gap-6 |

## 3. Component Specifications

### 3.1 Dashboard Overview (`/profile/dashboard`)
- **Metric Cards:** Use shadcn `Card` with subtle borders. 
  - *Metrics:* Net Worth (primary), Total Cash, Total Debt, Monthly Spending.
- **Recent Transactions:** A simplified list view (top 5) using the `TransactionRow` component.
- **Account Summary:** Small horizontal cards showing the top 3 accounts by balance.

### 3.2 Transactions View (`/profile/transactions`)
- **Table:** Full-width `DataTable` using `shadcn/ui`.
- **Columns:** Date, Merchant/Description, Category (with icon), Amount (colored +/-), Account.
- **Interaction:** Row clicking is disabled (no "View Details" modal unless requested).
- **Search:** A simple client-side filter input at the top right.

### 3.3 Accounts & Categories (`/profile/accounts`, `/profile/categories`)
- **Grid Layout:** Each account/category as a card.
- **Elements:** Icon/Emoji, Label, Subtitle (Type/Balance).
- **Read-Only Guard:** No "+" button in the header.

### 3.4 Subscription Status (`/profile/subscription`)
- **Hero Card:** Large card describing the current plan.
- **Feature List:** Checkmarks for what's included.
- **App CTA:** "To upgrade or manage your subscription, please use the Cecess mobile app." (Linked to App Store/Play Store).

## 4. Typography & Color
| Token | Value | Mapping |
|-------|-------|---------|
| Primary | #2563eb | blue-600 (Logo & Action links) |
| Slate-Dark | #0f172a | slate-900 (Headings) |
| Slate-Soft | #64748b | slate-500 (Subtitles/Muted) |
| Font (Body) | Inter / sans-serif | text-slate-600 |
| Font (Data) | JetBrains Mono (optional) | Monospace for numbers |

## 5. Copywriting (i18n Keys)
All dashboard content must use the `dashboard` namespace.

| Context | Key | TR | EN |
|---------|-----|----|----|
| Read-Only | `dashboard.status.readonly` | Sadece Görüntüleme (Uygulama ile Senkronize) | Read-Only (Synced with App) |
| Empty State | `dashboard.empty.generic` | Henüz veri bulunmuyor. | No data found yet. |
| Manage in App | `dashboard.actions.manageInApp` | Mobil uygulamadan yönetin | Manage in mobile app |

## 6. Interaction Passwords
- **No Mutations:** Any tool attempting to add a `POST`, `PUT`, or `DELETE` path to these dashboard routes is blocked.
- **Hover States:** Links should have `hover:text-blue-600` transition.
- **Loading:** Use `shadcn/ui` Skeleton loaders for all data grid transitions.

---
**## UI-SPEC COMPLETE**
*Verified against user preference "suanki menuler design güzel"*
