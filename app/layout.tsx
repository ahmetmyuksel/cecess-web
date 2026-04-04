import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import logo from "@/assets/images/logo.png";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "cecess",
  description: "Cecess ile varliklarini takip et, islemlerini AI ile kategorize et ve finansal durumunu tek bir dashboard uzerinden yonet.",
  icons: {
    icon: [{ url: logo.src, type: "image/png" }],
    shortcut: [{ url: logo.src, type: "image/png" }],
    apple: [{ url: logo.src, type: "image/png" }],
  },
};

import { UserProvider } from "@/features/auth/hooks/use-user";
import { LanguageProvider } from "@/features/i18n/context/language-context";
import { CookieConsent } from "@/features/public/components/cookie-consent";
import { PublicNavWrapper } from "@/components/layout/public-nav-wrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UserProvider>
          <LanguageProvider>
            <PublicNavWrapper>
                {children}
                <CookieConsent />
            </PublicNavWrapper>
          </LanguageProvider>
        </UserProvider>
      </body>
    </html>
  );
}
