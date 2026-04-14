import { siteConfig } from "@/lib/seo";

type JsonLdProps = {
    data: Record<string, unknown>;
};

export function JsonLd({ data }: JsonLdProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

export function OrganizationJsonLd() {
    return (
        <JsonLd
            data={{
                "@context": "https://schema.org",
                "@type": "Organization",
                name: siteConfig.name,
                url: siteConfig.url,
                logo: siteConfig.ogImage,
                email: siteConfig.email,
                sameAs: [siteConfig.playStoreUrl],
            }}
        />
    );
}

export function SoftwareApplicationJsonLd() {
    return (
        <JsonLd
            data={{
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: siteConfig.name,
                applicationCategory: "FinanceApplication",
                operatingSystem: "Android, Web",
                offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                },
                description: siteConfig.description,
                url: siteConfig.url,
                installUrl: siteConfig.playStoreUrl,
            }}
        />
    );
}

export function FAQPageJsonLd({ items }: { items: { question: string; answer: string }[] }) {
    return (
        <JsonLd
            data={{
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: items.map((item) => ({
                    "@type": "Question",
                    name: item.question,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: item.answer,
                    },
                })),
            }}
        />
    );
}

export function WebPageJsonLd({ title, description, path }: { title: string; description: string; path: string }) {
    return (
        <JsonLd
            data={{
                "@context": "https://schema.org",
                "@type": "WebPage",
                name: title,
                description,
                url: `${siteConfig.url}${path}`,
                isPartOf: {
                    "@type": "WebSite",
                    name: siteConfig.name,
                    url: siteConfig.url,
                },
            }}
        />
    );
}
