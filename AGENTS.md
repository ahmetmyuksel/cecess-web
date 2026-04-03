## TL;DR — NON-NEGOTIABLE RULES

- Domain → Service → Hook → Component sırası BOZULMAZ
- Service = API encapsulations (Client by default, Server only with explicit request)
- Client component API çağırmaz
- Default shadcn UI KULLANILIR
- Tema SADECE globalden değişir
- Component görsel tasarım içermez
- Duplicate = mimari ihlal

# AGENTS.md — Generic Frontend Architecture & Development Protocol
(Next.js App Router / React / Server–Client Aware)

Bu belge, domain-driven frontend uygulamalarında çalışan
tüm geliştiricilerin ve AI ajanlarının uyması gereken
KESİN mimari ve geliştirme kurallarını tanımlar.

Bu protokol ihlal edilirse:
- Mimari bozulur
- Kod tekrar eder
- UI ve state zamanla çürür

Kurallar tartışmasızdır.

----------------------------------------------------------------------
# 1. TEMEL İLKELER
----------------------------------------------------------------------

- Sistem her zaman TEK bir ana domain etrafında kurulur.
- Duplicate kod YASAKTIR.
- UI, domain veya data-layer logic içeremez.
- API entegrasyonu yalnızca service katmanında yapılır.
- Hook’lar yalnızca state + async flow yönetir.
- Domain katmanı tamamen PURE’dur (side-effect yok).
- Component’ler sunum odaklıdır, iş mantığı içermez.

----------------------------------------------------------------------
# 2. MİMARİ KATMANLARI (ZORUNLU)
----------------------------------------------------------------------

Kod her zaman aşağıdaki 4 katmana ayrılır:

1) Domain Layer  
   `/features/<feature>/domain/`

   - Types (entity, value object)
   - Pure business logic
   - Domain helpers
   - Backend modelleriyle birebir uyum

2) Service Layer  
   `/services/`

   - Tüm API çağrıları burada yapılır
   - Endpoint sözleşmeleri burada tanımlanır
   - UI ve state bağımlılığı OLAMAZ
   - Client-side fetch veya Server Action olabilir

3) Hooks Layer  
   `/features/<feature>/hooks/`

   - Asenkron iş akışı
   - State yönetimi
   - Service → UI köprü katmanı
   - Domain modellerini UI’a hazırlar

4) View Layer  
   `/features/<feature>/components/`
   `/app/**`

   - Sadece render
   - Props-driven
   - Domain ve API bilmez
   - Sadece hook’lardan veri alır

----------------------------------------------------------------------
# 3. KATMANLAR ARASI KURALLAR (MUTLAK)
----------------------------------------------------------------------

- UI → Service erişemez
- UI → Domain erişemez
- Hook → UI render edemez
- Domain → hiçbir katmanı bilmez

İhlal varsa:
Kod çalışsa bile YANLIŞTIR.

----------------------------------------------------------------------
# 4. FEATURE TEKİLLİĞİ (SINGLE SOURCE OF TRUTH)
----------------------------------------------------------------------

Her feature için:

- Tek domain modeli
- Tek ana hook
- Tek ana UI implementasyonu

Aynı kavramın:
- ikinci UI’ı
- ikinci hook’u
- ikinci domain modeli

YASAKTIR.

----------------------------------------------------------------------
# 5. API KURALLARI
----------------------------------------------------------------------

- API çağrıları yalnızca `services/*.ts` içinde yapılır
- fetch / axios doğrudan çağrılamaz
- Service fonksiyonları net sözleşme döner:

Başarılı:
- Domain tipi

Hata:
- Hook katmanında yakalanır

----------------------------------------------------------------------
# 6. HOOK KURALLARI
----------------------------------------------------------------------

- İsimlendirme: `useX`
- UI bağımlılığı YASAK
- Hook çıktısı her zaman şu şemadadır:

{
  data,
  loading,
  error,
  ...actions
}

Hook şunları YAPABİLİR:
- State yönetmek
- API akışını yönetmek
- Domain → UI mapping yapmak

Hook şunları YAPAMAZ:
- Toast / modal / navigation
- Animation
- Render kararı

----------------------------------------------------------------------
# 7. COMPONENT KURALLARI
----------------------------------------------------------------------

Component’ler:

- Sadece render eder
- Domain bilmez
- API bilmez
- Minimal UI state tutabilir (open, selected vb.)

YASAK:
- API çağrısı
- Domain kararı
- İş akışı yönetimi

----------------------------------------------------------------------
# 8. UYGULAMA AKIŞI (FLOW)
----------------------------------------------------------------------

Her kullanıcı akışı şu sırayı izler:

1) UI etkileşimi
2) Domain modeli oluşur
3) Hook tetiklenir
4) Service çağrılır
5) State güncellenir
6) UI yeniden render edilir

Bu sıra TERSİNE ÇEVRİLEMEZ.

----------------------------------------------------------------------
# 9. CONTAINER SAYFALAR
----------------------------------------------------------------------

Container sayfalar:

- Feature logic içermez
- Sadece feature’ları birleştirir
- UI glue görevi görür

Kendi domain’i OLAMAZ.

----------------------------------------------------------------------
# 10. KOD TARZI
----------------------------------------------------------------------

- Component dosyaları: PascalCase
- Diğer tüm dosyalar: kebab-case
- Import path’ler absolute
- State çoğaltılamaz
- UI sade tutulur

----------------------------------------------------------------------
# 11. AI AGENT DAVRANIŞ STANDARTLARI
----------------------------------------------------------------------

AI’nın görevi:

1) Duplicate kod üretmemek
2) Mimari ihlal etmemek
3) Katman sınırlarını korumak
4) Domain-first düşünmek
5) Her feature’da şu sırayı izlemek:

Domain → Service → Hook → Component → Page

AI ASLA:
- Component içinde API öneremez
- Domain’i UI’a taşıyamaz
- “Pratik olsun” gerekçesiyle shortcut yapamaz

----------------------------------------------------------------------
# 12. GELİŞTİRME SIRASI (ZORUNLU)
----------------------------------------------------------------------

Yeni bir feature her zaman şu sırayla geliştirilir:

1) Domain tanımı
2) Service tasarımı
3) Hook (state + async flow)
4) UI componentleri
5) Page entegrasyonu

Aksi sıra MİMARİ İHLALDİR.

----------------------------------------------------------------------
# 13. KIRMIZI ÇİZGİLER
----------------------------------------------------------------------

❌ Duplicate UI  
❌ Duplicate domain modeli  
❌ API’nin component’te kullanılması  
❌ Domain logic’in UI’a sızması  
❌ Shortcut çözümler  

Bu hatalar kod reddi sebebidir.

----------------------------------------------------------------------
# 14. SERVER / CLIENT AYRIMI (NEXT.JS MUTLAKLARI)
----------------------------------------------------------------------

Next.js iki farklı runtime içerir:
- Server Runtime
- Browser Runtime

Bu ayrım katmanlardan DAHA ÜST SEVİYE bir kuraldır.

TEMEL KURAL:
AI, kullanıcı açıkça istemedikçe
server request YAPAMAZ.

Server Component, Server Action veya
server-side fetch kullanımı
explicit talimat gerektirir.

“Uygun olur”, “daha iyi”, “best practice”
gibi gerekçeler GEÇERSİZDİR.

------------------
14.1 Server Component
------------------

Server Component şunları YAPABİLİR:

NOT:
Server Component olmasına rağmen,
kullanıcı açıkça istemedikçe
service çağrısı veya server-side fetch YAPILMAZ.

- Service çağırmak
- İlk data fetch yapmak
- Auth / cache / revalidate kullanmak

Server Component şunları YAPAMAZ:
- useState / useEffect
- Custom hook çağırmak
- Event handler tanımlamak
- Browser API kullanmak

------------------
14.2 Client Component
------------------

Client Component bilinçli olarak işaretlenir:

'use client'

Client Component şunları YAPABİLİR:
- Hook çağırmak
- UI state yönetmek
- Interaction / animation

Client Component şunları YAPAMAZ:
- Service çağırmak
- API endpoint çağırmak
- Domain logic çalıştırmak

Client → Server geçişi:
SADECE hook üzerinden olur.

------------------
14.3 Service Katmanı
------------------

/services/* dosyaları:

- API çağrılarını yönetir
- Client component veya hook tarafından çağrılabilir
- "use server" direktifi ile Server Action olarak da tanımlanabilir (Sadece istendiğinde)

Varsayılan service davranışı:
Client-side API client.

Server Action kullanımı:
YALNIZCA kullanıcı açıkça isterse.

------------------
14.4 Hook Runtime Ayrımı
------------------

Hook’lar iki tiptir:

1) Server Hook
   - Server component’te kullanılır
   - Async data hazırlığı yapar
   - UI state içermez

2) Client Hook (varsayılan)
   - Client component’te kullanılır
   - Async flow + state yönetir
   - Client component’te kullanılır
   - Async flow + state yönetir
   - Client Hook’lar service katmanını çağırır.
   - UI (component) service katmanını ASLA çağırmaz.

------------------
14.5 Page / Layout Dosyaları
------------------

`app/**/page.tsx`:

- Feature değildir
- Domain değildir
- Logic merkezi değildir

Görevi:
- Composition
- Boundary çizmek
- Server → Client geçişini yapmak

Logic ve decision YASAKTIR.

------------------
14.6 AUTHENTICATION İSTİSNASI (BİLİNÇLİ)
------------------

Aşağıdaki kullanım BİLİNÇLİ ve GEÇERLİ bir istisnadır:

- app/**/layout.tsx içinde
- Kullanıcının authenticated olup olmadığını belirlemek için
- Backend’e localhost üzerinden yapılan
- initial auth / session kontrolü

Bu kontrol:

- Client-first kuralının İSTİSNASIDIR
- UX ve güvenlik gereği server-side yapılır
- Explicit kullanıcı talimatı gerektirmez

Bu istisna SADECE:
- initial auth state tespiti
için geçerlidir.

Başka hiçbir server request bu gerekçeyle yazılamaz.


----------------------------------------------------------------------
# 15. GENEL AMAÇ
----------------------------------------------------------------------

Bu mimari:

- Tutarlı
- Genişletilebilir
- Bakımı düşük maliyetli
- Domain-driven
- Server/Client sınırları net

frontend uygulamalar üretmek içindir.

Her yeni geliştirme:
Bu yapıyı güçlendirmeli,
ASLA zayıflatmamalıdır.


----------------------------------------------------------------------
# 16. UX / UI STRATEJİSİ (DEFAULT SHADCN MODE)
----------------------------------------------------------------------

Bu projede UX yaklaşımı şudur:

- shadcn/ui varsayılan tasarımı KABUL EDİLİR
- UI stabil, sade ve predictable olmalıdır
- Component bazlı stil oynaması minimumda tutulur
- Tema ve görünüm GLOBAL olarak yönetilir

Bu bilinçli bir tercihtir.

----------------------------------------------------------------------
# 16.1 SHADCN KULLANIM PRENSİBİ
----------------------------------------------------------------------

shadcn/ui:

- Bu projede DESIGN SYSTEM’dır
- Override edilmesi gereken bir şey değildir
- Default davranışı korunur

Kurallar:

- shadcn componentleri default haliyle kullanılır
- className yalnızca layout ve spacing için eklenir
- Renk, font, radius, shadow component içinde değiştirilmez

Component bazlı görsel tasarım YASAKTIR.

----------------------------------------------------------------------
# 16.2 TEMA YÖNETİMİ (GLOBAL)
----------------------------------------------------------------------

Görsel değişiklikler SADECE şuralardan yapılır:

- globals.css
- tailwind.config.js
- CSS variables (--background, --primary, vb.)

Aşağıdakiler YASAKTIR:

- Component içinde renk tanımlamak
- Component içinde font-size oynamak
- Component içinde shadow / radius değiştirmek

UI değişecekse:
→ Tema değişir  
→ Component değişmez

----------------------------------------------------------------------
# 16.3 TAILWIND KULLANIM SINIRI
----------------------------------------------------------------------

Tailwind bu projede:

- Layout
- Spacing
- Alignment

için kullanılır.

YASAK:

- Görsel stil üretmek
- Renk sistemi kurmak
- Typography override etmek

Örnek DOĞRU kullanım:
flex / grid / gap / padding / margin

Örnek YANLIŞ kullanım:
text-red-500 / bg-blue-600 / text-lg / font-semibold

----------------------------------------------------------------------
# 16.4 SPACING VE DÜZEN
----------------------------------------------------------------------

Varsayılan shadcn spacing korunur.

Ek olarak yalnızca şu ölçek kullanılabilir:

4 / 8 / 16 / 24 / 32

Rastgele spacing UX ihlalidir.

----------------------------------------------------------------------
# 16.5 GÖRSEL HİYERARŞİ NASIL SAĞLANIR
----------------------------------------------------------------------

Bu projede görsel hiyerarşi:

- shadcn component türleriyle
- layout yerleşimiyle
- boşluk kullanımıyla

sağlanır.

Typography ve renk ile hiyerarşi yaratmaya ÇALIŞILMAZ.

----------------------------------------------------------------------
# 16.6 UX POLISH SINIRI
----------------------------------------------------------------------

Bu projede UX polish:

- Aşırı değildir
- Animasyon zorunlu değildir
- “Göze sokulan” tasarım YASAKTIR

Amaç:

- Kurumsal
- Stabil
- Tahmin edilebilir
- Sessiz UX

----------------------------------------------------------------------
# 16.7 UX KALİTE KRİTERİ
----------------------------------------------------------------------

Şu soru sorulur:

"Bu ekran sade, stabil ve uzun vadede
sorun çıkarmadan kullanılabilir mi?"

Cevap EVET ise:
UX doğrudur.

“Çok havalı mı?” sorusu
bu projede ANLAMSIZDIR.

----------------------------------------------------------------------
# 16.8 AI DAVRANIŞ KURALI (KRİTİK)
----------------------------------------------------------------------

AI:

- Default shadcn kullanmaktan çekinemez
- Gereksiz stil ekleyemez
- Component bazlı tasarım icat edemez

AI’nın görevi:
Tasarım yapmak DEĞİL,
tasarım sistemini doğru kullanmaktır.
