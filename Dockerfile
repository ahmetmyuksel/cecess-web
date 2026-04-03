# --- 1. Builder Aşaması ---
FROM node:20-alpine AS builder
WORKDIR /app

# PNPM'i aktif et (En kritik satır burası)
# Node 20 ile Corepack gelir, bunu açarak pnpm'i kurmadan kullanabiliriz.
RUN corepack enable && corepack prepare pnpm@latest --activate

# Sadece bağımlılık dosyalarını kopyala (Cache bozulmasın diye)
COPY package.json pnpm-lock.yaml ./

# Bağımlılıkları yükle
# npm ci yerine pnpm install --frozen-lockfile kullanılır
RUN pnpm install --frozen-lockfile

ARG NEXT_PUBLIC_API_BASE_URL
ENV NEXT_PUBLIC_API_BASE_URL=$NEXT_PUBLIC_API_BASE_URL

# Kaynak kodları kopyala
COPY . .

# Build al (Standalone modu next.config.ts'de açık olmalı!)
RUN pnpm run build

# --- 2. Runner Aşaması ---
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ARG APP_VERSION
ENV APP_VERSION=$APP_VERSION

ARG APP_ENV
ENV APP_ENV=$APP_ENV

ARG NEXT_PUBLIC_API_BASE_URL
ENV NEXT_PUBLIC_API_BASE_URL=$NEXT_PUBLIC_API_BASE_URL

# Güvenlik için kullanıcı oluştur
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Sadece gerekli dosyaları kopyala
COPY --from=builder /app/public ./public

# Standalone klasörünü kopyala
# Bu klasör pnpm ile kurulmuş olsa bile gerekli node_modules'u içinde barındırır
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# PNPM start'a gerek yok, standalone mod direkt node ile çalışır
CMD ["node", "server.js"]