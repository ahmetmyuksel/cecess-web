import type { Metadata } from "next";

const SITE_URL = "https://cecess.net";
const SITE_NAME = "cecess";
const DEFAULT_DESCRIPTION = "Track your assets, categorize transactions with AI, and manage your finances from a single dashboard.";
const DEFAULT_DESCRIPTION_TR = "Varliklarini takip et, islemlerini AI ile kategorize et ve finansal durumunu tek bir dashboard uzerinden yonet.";
const OG_IMAGE = `${SITE_URL}/cecess-logo.png`;

export const siteConfig = {
    url: SITE_URL,
    name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    descriptionTr: DEFAULT_DESCRIPTION_TR,
    ogImage: OG_IMAGE,
    email: "info@cecess.net",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.cecess.app",
};

export const baseMetadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: "cecess - Smart Personal Finance Tracker",
        template: "%s | cecess",
    },
    description: DEFAULT_DESCRIPTION,
    applicationName: SITE_NAME,
    keywords: [
        "personal finance",
        "expense tracker",
        "budget app",
        "money management",
        "AI categorization",
        "financial dashboard",
        "asset tracking",
        "income tracker",
        "cecess",
    ],
    authors: [{ name: "cecess" }],
    creator: "cecess",
    publisher: "cecess",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        alternateLocale: "tr_TR",
        url: SITE_URL,
        siteName: SITE_NAME,
        title: "cecess - Smart Personal Finance Tracker",
        description: DEFAULT_DESCRIPTION,
        images: [
            {
                url: OG_IMAGE,
                width: 1200,
                height: 630,
                alt: "cecess - Personal Finance Tracker",
                type: "image/png",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "cecess - Smart Personal Finance Tracker",
        description: DEFAULT_DESCRIPTION,
        images: [OG_IMAGE],
        creator: "@cecess",
    },
    alternates: {
        canonical: SITE_URL,
    },
    category: "finance",
};

/**
 * Helper to create page-specific metadata that merges with base config
 */
export function createPageMetadata({
    title,
    description,
    path = "",
    noIndex = false,
}: {
    title: string;
    description: string;
    path?: string;
    noIndex?: boolean;
}): Metadata {
    const url = `${SITE_URL}${path}`;

    return {
        title,
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: `${title} | cecess`,
            description,
            url,
            images: [
                {
                    url: OG_IMAGE,
                    width: 1200,
                    height: 630,
                    alt: `cecess - ${title}`,
                },
            ],
        },
        twitter: {
            title: `${title} | cecess`,
            description,
        },
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
    };
}
