import { DynamicFaqView } from "@/features/public/components/dynamic-views";
import { createPageMetadata } from "@/lib/seo";
import { FAQPageJsonLd } from "@/components/seo/json-ld";

export const metadata = createPageMetadata({
    title: "FAQ",
    description: "Frequently asked questions about cecess. Learn how to track expenses, manage accounts, use AI categorization, and more.",
    path: "/faq",
});

const faqItems = [
    {
        question: "How does the AI feature work?",
        answer: "cecess uses Google Gemini AI to help you manage your finances smarter. The AI analyzes your income and expenses to generate a personalized financial health score, spending insights, warnings, and actionable tips.",
    },
    {
        question: "Is there a trial period?",
        answer: "cecess offers a generous Free plan that never expires, no credit card required. You can track up to 100 transactions, use AI-powered Smart Import, scan bills with OCR, and access basic reports.",
    },
    {
        question: "Can I connect my bank account directly?",
        answer: "cecess does not connect directly to your bank account by design. Instead, you can upload CSV or Excel exports, use Smart Import to scan bank statements with AI, scan receipts using on-device OCR, or add transactions manually.",
    },
    {
        question: "Can I delete my account permanently?",
        answer: "Yes. You can permanently delete your account from Profile. After two confirmation steps, all your data is completely and irreversibly removed from our servers.",
    },
    {
        question: "How is my data secured?",
        answer: "All data is transmitted over encrypted HTTPS/TLS connections. We use Supabase with Row-Level Security, meaning only you can access your own data. Bill scanning with OCR runs entirely on your device.",
    },
];

export default function FaqPage() {
    return (
        <>
            <FAQPageJsonLd items={faqItems} />
            <DynamicFaqView />
        </>
    );
}
