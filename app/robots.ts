import type { MetadataRoute } from "next";

const SITE_URL = "https://cecess.net";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: [
                    "/profile/",
                    "/api/",
                    "/auth/",
                    "/reset-password",
                    "/forgot-password",
                    "/login",
                ],
            },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
    };
}
