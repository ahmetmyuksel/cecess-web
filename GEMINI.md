Markdown

# Project Rules & Architecture Standards (`agents.md`)

Bu dosya, proje için **TEK GERÇEKLİK KAYNAĞIDIR**. Tüm geliştirme süreci, kod üretimi ve mimari kararlar bu kurallara katı bir şekilde uymalıdır.

## 1. Teknoloji Yığını ve Kısıtlamalar

* **Framework:** Next.js 14+ (App Router)
* **Dil:** TypeScript (Strict Mode)
* **Stil:** Tailwind CSS
* **UI Kit:** shadcn/ui (Radix Primitives tabanlı)
* **İkonlar:** Lucide React
* **Form & Validasyon:** React Hook Form + Zod
* **State Yönetimi:** URL Search Params (Server State) & React Hooks (Local State)
* **KURAL:** **Harici kütüphane eklemek yasaktır.** (Örn: Zustand, Tanstack Query, Axios vb. kullanılmayacak. Sadece Native `fetch`, `Server Actions` ve `React Context` yeterlidir.)

---

## 2. Mimari Yapı: Feature-Based + Clean Architecture

Proje, **Feature-Based** (Özellik Tabanlı) bir klasör yapısına ve **Clean Architecture** prensiplerine (Services, Actions, UI ayrımı) sahiptir.

### Dizin Yapısı (`src/`)

```text
src/
├── app/                 # Routing & Entry Points (Sadece Next.js Route tanımları)
│   ├── (auth)/          # Route Grupları
│   ├── dashboard/
│   ├── api/             # SADECE Webhook veya harici entegrasyon için (Genelde boş kalmalı)
│   ├── layout.tsx       # Root Layout
│   └── page.tsx         # Landing Page
├── features/            # TÜM İŞ MANTIĞI VE DOMAIN KODLARI
│   ├── [feature-name]/  # Örn: auth, todo, profile
│   │   ├── components/  # Feature'a özel UI Componentleri
│   │   ├── actions/     # Server Actions (Client için Entry Point)
│   │   ├── services/    # Business Logic & DB Queries (Server Internal)
│   │   ├── hooks/       # Custom React Hooks (Client Logic)
│   │   ├── schemas/     # Zod Şemaları & DTOs (Shared)
│   │   ├── utils/       # Helper fonksiyonlar
│   │   └── types.ts     # Feature'a özel Tip Tanımları
├── components/          # Global / Shared UI (Button, Input, Modal vs.)
├── hooks/               # Global Hooks (use-media-query, use-scroll vs.)
├── lib/                 # Global Config (DB connection, utils, auth config)
└── types/               # Global Utility Types

3. Katmanların Sorumlulukları (Strict Separation)

Veri akışı tek yönlüdür: UI -> Hook -> Action -> Service -> DB.
A. Schemas (features/[name]/schemas/) - SHARED

    Amaç: Client ve Server arasındaki veri kontratıdır (Contract).

    Kullanım: Zod kütüphanesi ile form validasyonu ve API input doğrulaması için tek bir şema tanımlanır ve her iki tarafta kullanılır.

B. Services (features/[name]/services/) - SERVER ONLY

    Amaç: Saf iş mantığı ve veritabanı iletişimi.

    Kurallar:

        Asla NextResponse, FormData veya redirect içermez.

        Sadece saf TypeScript fonksiyonlarıdır.

        Hata durumunda throw ile hata fırlatır.

        Veritabanı objelerini (Date, Decimal) Client'ın anlayacağı primitive tiplere dönüştürür (DTO).

C. Actions (features/[name]/actions/) - SERVER ENTRY

    Amaç: Client ile Server arasındaki köprüdür.

    Kurallar:

        Dosya 'use server' ile başlar.

        Zorunlu Akış:

            Auth Check (Kullanıcı giriş yapmış mı?)

            Validation (Zod safeParse ile input kontrolü)

            Service Çağrısı (İş mantığını çalıştır)

            Revalidation (revalidatePath ile cache güncelle)

            Return Standard Response (Aşağıdaki ActionResponse yapısı)

D. Hooks (features/[name]/hooks/) - CLIENT LOGIC

    Amaç: UI bileşenlerini mantıktan arındırmak (Logicless Components).

    Kurallar:

        'use client' ile başlar.

        Server Action'ları çağırır, loading durumlarını yönetir, toast mesajlarını tetikler.

E. Components (features/[name]/components/) - UI

    Amaç: Sadece veriyi göstermek ve kullanıcı etkileşimini almak.

    Kurallar:

        Mümkün olduğunca "Dumb" (aptal) olmalı, mantığı hook'tan almalıdır.

        Stiller için sadece Tailwind classları kullanılır.

4. Kritik Kurallar ve Standartlar
1. Standart Action Cevabı (Global Type)

Tüm Server Action'lar kesinlikle bu yapıyı döndürmelidir. Hata fırlatarak Client'ı kırmak yasaktır.
TypeScript

// src/types/index.ts
export type ActionResponse<T = void> = {
  success: boolean;
  data?: T;
  error?: string; // Genel hata mesajı
  fieldErrors?: Record<string, string[]>; // Form alanı hataları (Zod)
};

2. Veri Serileştirme (Serialization)

Server Component'ten Client Component'e veri geçerken (Props) veya Action'dan dönerken:

    Date objeleri -> .toISOString()

    BigInt -> String veya Number

    Bu dönüşümler Service katmanında yapılmalıdır.

3. Page.tsx Rolü

page.tsx dosyaları birer Orkestratördür.

    Veriyi çeker (Service katmanını kullanarak).

    Client Component'e veriyi pass eder.

    Asla karmaşık UI render etmez, sadece Layout ve Component yerleşimi yapar.

5. Örnek İmplementasyon: "Login Feature"

Aşağıdaki yapı, tüm feature geliştirmelerinde şablon olarak kullanılacaktır.
1. Schema (src/features/auth/schemas/login-schema.ts)
TypeScript

import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Geçersiz email"),
  password: z.string().min(6, "Şifre en az 6 karakter olmalı"),
});

export type LoginInput = z.infer<typeof loginSchema>;

2. Service (src/features/auth/services/auth-service.ts)
TypeScript

import { db } from "@/lib/db"; // Varsayılan DB
import { LoginInput } from "../schemas/login-schema";

export const verifyUser = async (input: LoginInput) => {
  const user = await db.user.findUnique({ where: { email: input.email } });
  
  if (!user || user.password !== input.password) {
    throw new Error("Hatalı kullanıcı adı veya şifre");
  }
  
  // DTO Dönüşümü (Password hariç dön)
  return { id: user.id, name: user.name, email: user.email };
};

3. Action (src/features/auth/actions/login-action.ts)
TypeScript

"use server";

import { ActionResponse } from "@/types";
import { loginSchema } from "../schemas/login-schema";
import { verifyUser } from "../services/auth-service";

export async function loginAction(
  prevState: ActionResponse, 
  formData: FormData
): Promise<ActionResponse> {
  // 1. Validasyon
  const validatedFields = loginSchema.safeParse(Object.fromEntries(formData));
  
  if (!validatedFields.success) {
    return { 
      success: false, 
      fieldErrors: validatedFields.error.flatten().fieldErrors 
    };
  }

  try {
    // 2. Service
    await verifyUser(validatedFields.data);
    
    // 3. Başarılı (Burada cookie set edilebilir veya redirect yapılabilir)
    return { success: true };
    
  } catch (error) {
    // 4. Hata Yönetimi
    return { success: false, error: (error as Error).message };
  }
}

4. Hook (src/features/auth/hooks/use-login.ts)
TypeScript

"use client";

import { useFormState } from "react-dom";
import { loginAction } from "../actions/login-action";
import { useEffect } from "react";
import { toast } from "sonner"; // veya use-toast

const initialState: ActionResponse = { success: false };

export const useLogin = () => {
  const [state, action] = useFormState(loginAction, initialState);

  useEffect(() => {
    if (!state.success && state.error) {
      toast.error(state.error);
    }
  }, [state]);

  return { state, action };
};

5. Component (src/features/auth/components/login-form.tsx)
TypeScript

"use client";

import { useLogin } from "../hooks/use-login";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const LoginForm = () => {
  const { state, action } = useLogin();

  return (
    <form action={action} className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" placeholder="ornek@site.com" />
        {state.fieldErrors?.email && <p className="text-red-500 text-sm">{state.fieldErrors.email}</p>}
      </div>
      
      <div>
        <Label htmlFor="password">Şifre</Label>
        <Input id="password" name="password" type="password" />
        {state.fieldErrors?.password && <p className="text-red-500 text-sm">{state.fieldErrors.password}</p>}
      </div>

      <Button type="submit">Giriş Yap</Button>
    </form>
  );
};

6. Kodlama Kontrol Listesi (Checklist)

Kod üretirken aşağıdaki sorulara "EVET" cevabı verilebilmelidir:

    Bu kod bir Server mantığı mı içeriyor? -> services klasörüne taşıdım mı?

    Client ve Server arasında veri taşıyor muyum? -> schemas klasöründe Zod şeması var mı?

    UI içinde karmaşık useEffect veya state var mı? -> hooks klasörüne taşıdım mı?

    Component stilini Tailwind ile, yapısını Shadcn ile mi kurdum?

    Extra bir kütüphane (npm install) yapmadan bu işi çözdüm mü?

    any kullanmaktan kaçındım mı ve tüm tipleri tanımladım mı?

<!-- GSD:project-start source:PROJECT.md -->
## Project

**Cecess Web**

Cecess Web is the professional web presence for Cecess, an AI-driven personal finance mobile app targeting the Turkish and global market. The web ecosystem at cecess.net serves two purposes: (1) a high-conversion, fintech-grade marketing landing page with app store links to drive mobile downloads, and (2) a read-only user dashboard where authenticated users can view their financial data (transactions, accounts, categories, reports) synced from the mobile app via Supabase. The site also hosts Google Play compliance pages (Privacy Policy, Terms of Service, Account Deletion instructions) required for app store approval.

**Core Value:** The web must look like a legitimate, trust-worthy fintech startup — not a hobby project — to pass Google's strict financial app audits and convert visitors into mobile app users.

### Constraints

- **Tech Stack**: Next.js 16 + TypeScript + Tailwind + shadcn/ui — no external state libraries (no Zustand, Tanstack Query, Axios)
- **i18n**: All user-facing strings must go through the i18n system (TR + EN). No hardcoded strings.
- **Architecture**: Must follow AGENTS.md rules — Domain → Service → Hook → Component → Page flow
- **UI**: Default shadcn/ui with global theme only. No component-level visual overrides.
- **Auth**: Supabase Google/Email login. Client components cannot call services directly.
- **Security**: .env.local contains SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY
- **No web payments**: All payment flows removed; subscription info displayed as read-only from DB
<!-- GSD:project-end -->

<!-- GSD:stack-start source:STACK.md -->
## Technology Stack

Technology stack not yet documented. Will populate after codebase mapping or first phase.
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

Conventions not yet established. Will populate as patterns emerge during development.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

Architecture not yet mapped. Follow existing patterns found in the codebase.
<!-- GSD:architecture-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->

<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
