import { Dictionary } from "../types";

export const en: Dictionary = {
    sidebar: {
        dashboard: "Dashboard",
        transactions: "Transactions",
        accounts: "Accounts",
        categories: "Categories",
        importFile: "Import File",
        settings: "Settings",
        subscription: "Subscription",
        signOut: "Sign Out",
        freePlan: "Free Plan",
        reports: "Reports",
        loading: "Loading...",
        guestUser: "Guest User"
    },
    subscriptionPage: {
        title: "Subscription Plans",
        subtitle: "Choose the plan that fits your needs.",
        currentPlan: "Current Plan",
        monthly: "Monthly",
        yearly: "Yearly",
        savePercent: "Save 20%",
        plans: {
            title: "{tier} Plan",
            descriptions: {
                free: "Forever Free. No time limits. (50 tx limit)",
                premium: "Unlimited power. Import data & Multi-currency.",
                pro: "Ultimate automation. AI Insights & Priority Support."
            }
        },
        actions: {
            upgrade: "Upgrade",
            upgradeYearly: "Upgrade to Yearly",
            downgrade: "Downgrade",
            current: "Current Plan",
            activePlan: "Your Active Plan",
            upgradeInApp: "Manage in Mobile App"
        },
        features: {
            unlimitedTransactions: "Unlimited Transactions",
            exportData: "Export to CSV/Excel",
            advancedCharts: "Advanced AI Analytics",
            multiCurrency: "Multi-currency Support",
            prioritySupport: "Priority Support",
            aiInsights: "AI-supported Categorization"
        }
    },
    settings: {
        title: "Settings",
        subtitle: "Manage your account and preferences.",
        save: "Save Changes",
        preferences: {
            title: "Preferences",
            currency: "Currency",
            language: "Language"
        },
        profile: {
            title: "Profile",
            subtitle: "Manage your public profile and private information.",
            username: "Username",
            email: "Email Address",
            dob: "Date of Birth",
            phone: "Phone Number",
            gender: "Gender",
            changePassword: "Change Password...",
            recommended: "Recommended: Square JPG, PNG.",
            changePhoto: "Change Photo",
            remove: "Remove",
            personalInfo: "Personal Information",
            contactInfo: "Contact Information",
            preferences: "Preferences",
            notifications: "Notifications",
            managementTitle: "Account Management",
            managementDesc: "To manage your account, update your profile, change your password, or delete your account, please use the Cecess mobile application.",
            manageInApp: "Profile settings are managed in the mobile app"
        },
        notifications: {
            title: "Notifications",
            weekly: {
                title: "Weekly Summary",
                desc: "Receive a summary of your weekly income and expenses via email."
            },
            budget: {
                title: "Budget Alerts",
                desc: "Get notified when you are close to exceeding your budget."
            },
            updates: {
                title: "Product Updates",
                desc: "Stay informed about new features and updates."
            }
        },
        data: {
            title: "Data Management",
            delete: {
                desc: "Permanently delete transaction data older than one year.",
                button: "Delete Data"
            }
        },
        supportContact: "Need help? Contact us at info@cecess.com",
        modals: {
            password: {
                title: "Change Password",
                current: "Current Password",
                new: "New Password",
                confirm: "Confirm New Password",
                submit: "Update Password",
                cancel: "Cancel"
            },
            success: {
                title: "Success!",
                desc: "Your changes have been saved successfully.",
                button: "Close"
            }
        }
    },
    dashboard: {
        welcome: "Welcome back, {name}!",
        overview: "Here's your financial overview for {range}.",
        incomeVsExpense: "Income vs. Expense",
        expenseByCategory: "Expense by Category",
        spendingByCategory: "Spending by Category",
        noTransactions: "No transactions found for this period.",
        balance: "Current Balance",
        status: {
            readonly: "Read-Only (Synced with App)",
            manageInApp: "Please use the Cecess mobile app to add, edit or delete data."
        },
        empty: {
            generic: "No data found yet. Sync your finances from the mobile app."
        }
    },
    transactions: {
        title: "All Transactions",
        rows: "Rows:",
        of: "of",
        form: {
            name: "Transaction Name",
            category: "Category",
            amount: "Amount",
            date: "Date"
        }
    },
    common: {
        loading: "Loading...",
        range: {
            thisMonth: "This Month",
            last30Days: "Last 30 Days",
            thisYear: "This Year",
            custom: "Custom Range",
            from: "From",
            to: "To",
            filter: "Filter"
        },
        table: {
            date: "Date",
            transaction: "Transaction",
            category: "Category",
            amount: "Amount",
            totalIncome: "Total Income",
            percentIncome: "% Income",
            totalExpense: "Total Expense",
            percentExpense: "% Expense",
            netAmount: "Net Amount",
            actions: "Actions"
        },
        types: {
            income: "Income",
            expense: "Expense"
        },
        actions: {
            save: "Save",
            cancel: "Cancel",
            delete: "Delete",
            edit: "Edit",
            remove: "Remove",
            changePhoto: "Change Photo",
            close: "Close"
        }
    },
    accounts: {
        title: "Accounts",
        subtitle: "Manage your financial accounts.",
        noAccounts: {
            title: "No accounts yet",
            desc: "Link your bank account or add one manually to start tracking your finances.",
            start: "Start Now"
        },
        table: {
            name: "Account Name",
            type: "Account Type",
            balance: "Balance",
            actions: "Actions"
        },
        form: {
            name: "Account Name",
            type: "Account Type",
            currency: "Currency",
            currentBalance: "Current Balance",
            initialBalance: "Initial Balance"
        }
    },
    categories: {
        title: "Categories",
        subtitle: "Manage your spending categories (Drag handle to reorder).",
        sort: {
            manual: "Manual",
            name: "Name",
            type: "Type"
        },
        table: {
            name: "Category Name",
            type: "Type",
            actions: "Actions"
        },
        form: {
            name: "Name",
            type: "Type",
            icon: "Icon",
            pickIcon: "Pick an Icon"
        }
    },
    auth: {
        login: {
            title: "Welcome back",
            subtitle: "Log in to your account to continue.",
            divider: "or",
            emailLabel: "Email",
            emailPlaceholder: "you@example.com",
            passwordLabel: "Password",
            passwordPlaceholder: "Enter your password",
            rememberMe: "Remember me",
            forgotPassword: "Forgot Password?",
            submit: "Log in",
            submitting: "Logging in..."
        },
        forgotPassword: {
            backToLogin: "Back to Login",
            title: "Reset Password",
            subtitle: "Enter your email and we'll send you a link to reset your password.",
            emailLabel: "Email Address",
            emailPlaceholder: "you@example.com",
            successTitle: "Check your email",
            successDescription: "We have sent a password reset link to your email address.",
            submit: "Send reset link",
            submitting: "Sending..."
        },
        resetPassword: {
            title: "Set New Password",
            subtitle: "Enter your new password below to secure your account.",
            passwordLabel: "New Password",
            passwordPlaceholder: "Min. 8 chars (A-Z, 0-9, symbol)",
            confirmPasswordLabel: "Confirm Password",
            confirmPasswordPlaceholder: "Re-enter password",
            submit: "Update password",
            submitting: "Updating..."
        }
    },
    public: {
        nav: {
            home: "Home",
            pricing: "Pricing",
            privacy: "Privacy",
            faq: "FAQ",
            login: "Log in",
            googleLogin: "Sign in with Google",
            profile: "Profile",
            logout: "Logout",
        },
        hero: {
            title: "Your expenses,\ncategorised with AI",
            subtitle: "Enjoy intuitive tools that empower you to manage, track, and understand your finances effortlessly. Take control of your money today.",
            cta: "Get Started Free",
            secondaryCta: "How it works",
        },
        features: {
            title: "Understand where your money goes",
            subtitle: "Simple, convenient features for effortless financial management. Track in real time and handle transactions seamlessly on one easy-to-use platform.",
            list: {
                budgets: {
                    title: "Create budgets and take control",
                    desc: "Set spending limits and get notifications if any threshold in your budget is close.",
                },
                savings: {
                    title: "Build habits and save money",
                    desc: "cecess insights help you identify savings opportunities and build healthier spending habits.",
                },
                recurring: {
                    title: "Track your recurring expenses",
                    desc: "Never miss a payment. Easily manage subscriptions and recurring bills all in one place.",
                },
                ai: {
                    title: "Automate categorization with AI",
                    desc: "Every transaction is classified in real time so you always know where your money goes.",
                },
            },
        },
        pricing: {
            title: "Find the perfect plan for your needs",
            subtitle: "Start for free and upgrade as you grow.",
            monthly: "Monthly",
            annual: "Annually",
            discount: "Save 20%",
            plans: {
                free: {
                    name: "Free",
                    desc: "For individuals starting to track their expenses.",
                    cta: "Get Started",
                },
                premium: {
                    name: "Premium",
                    desc: "For those who want to optimize their finances.",
                    cta: "Get Started",
                },
                pro: {
                    name: "Pro",
                    desc: "For power users and small businesses.",
                    cta: "Get Started",
                },
            },
            compare: "Compare all features",
        },
        faq: {
            title: "Frequently Asked Questions",
            subtitle: "Find answers to common questions about our services, features, pricing, and more.",
            search: "Search for a question...",
            items: {
                q1: {
                    q: "What kind of AI is used for categorization?",
                    a: "We use a proprietary machine learning model trained on millions of financial transactions to automatically and accurately categorize your expenses. It learns from your corrections to become even smarter over time.",
                    cat: "Features"
                },
                q2: {
                    q: "Can I create custom spending categories?",
                    a: "Yes. You can create, rename, and delete custom categories to match how you budget and track spending.",
                    cat: "Features"
                },
                q3: {
                    q: "Does the app track recurring payments and subscriptions?",
                    a: "Absolutely. Recurring payments and subscriptions are detected automatically, helping you avoid missed renewals and spot savings opportunities.",
                    cat: "Features"
                },
                q4: {
                    q: "Do you offer a free trial for premium features?",
                    a: "Yes. New users receive a 14-day free trial of premium features with no credit card required.",
                    cat: "Pricing"
                },
                q5: {
                    q: "How do I update my linked bank accounts?",
                    a: "Navigate to Account Settings → Connections to add, refresh, or remove linked institutions at any time. Changes sync instantly.",
                    cat: "Account Management"
                },
                q6: {
                    q: "How is my financial data protected?",
                    a: "We use bank-grade encryption, periodic security reviews, and never sell your data. You can disconnect accounts whenever you choose.",
                    cat: "Security"
                },
                q7: {
                    q: "How can I contact support?",
                    a: "You can find our contact email address in the Settings section of your profile.",
                    cat: "Support"
                }
            },
            categories: {
                features: "Features",
                pricing: "Pricing",
                account: "Account Management",
                security: "Security",
                support: "Support"
            },
            noResults: "No results found for this search. Try another keyword or category.",
        },
        privacy: {
            title: "Privacy Policy",
            lastUpdated: "Last Updated: April 3, 2026",
            intro: "Welcome to cecess. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and associated web services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.",
            sections: {
                info: {
                    title: "1. Information We Collect",
                    body: [
                        "We may collect information about you in a variety of ways. The information we may collect via the Application includes:",
                        "Personal Data: Name, email address, phone number (optional), date of birth, gender.",
                        "Financial Data: Transaction records, account names, balances, custom categories, and budgets that you create within the application.",
                        "Device Data: Device type, operating system, app version, and anonymized usage analytics."
                    ]
                },
                use: {
                    title: "2. How We Use Your Information",
                    body: [
                        "Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we use information collected about you to:",
                        "Create, maintain, and secure your account.",
                        "Transaction categorization is powered by Google Gemini AI. Your transaction descriptions are sent to Google's Gemini API for automated categorization. No personally identifiable information is included in these requests.",
                        "Process subscription payments via Google Play (RevenueCat).",
                        "Email you regarding your account or updates.",
                        "Provide you with customer support.",
                        "Analyze usage trends to improve your experience."
                    ]
                },
                disclosure: {
                    title: "3. Data Storage & Security",
                    body: [
                        "Your data is stored in Supabase (PostgreSQL) with encryption at rest (AES-256) and encryption in transit (TLS 1.2+).",
                        "Passwords are hashed using Bcrypt via Supabase Auth — we never store plaintext credentials."
                    ]
                },
                security: {
                    title: "4. Third-Party Sharing",
                    body: [
                        "We do not sell, trade, or rent your personal data to third parties.",
                        "We may share information strictly with service providers necessary to operate our service: Google Gemini AI (transaction categorization), Supabase (database and authentication), RevenueCat (subscription management via Google Play).",
                        "By Law or to Protect Rights: If we believe the release of information is necessary to respond to legal process, to investigate potential violations, or to protect the rights, property, and safety of others, we may share your information as permitted or required by applicable law."
                    ]
                },
                rights: {
                    title: "5. Your Rights (Right to Be Forgotten)",
                    body: [
                        "You can delete your account and all associated data at any time through the Cecess mobile application (Settings → Delete Account).",
                        "Upon deletion, the following data is permanently removed: profile information, transaction history, account records, custom categories, AI-generated reports, and all related metadata.",
                        "Some minimal logs may be retained temporarily for security audits and legal compliance as required by law. These logs are not used for any commercial purpose and are automatically purged over time."
                    ]
                },
                passwordSecurity: {
                    title: "6. Password Security",
                    body: [
                        "Your password security is our top priority. We do not store your credentials directly. Instead, we use Supabase Auth, which employs industry-standard Bcrypt hashing to strictly secure your password. This means even we cannot see your password."
                    ]
                },
                changes: {
                    title: "7. Changes to This Privacy Policy",
                    body: [
                        "We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page."
                    ]
                },
                contact: {
                    title: "8. Contact Us",
                    body: [
                        "For privacy inquiries, contact us at support@cecess.com."
                    ]
                }
            }
        },
        terms: {
            title: "Terms of Service",
            lastUpdated: "Last Updated: April 3, 2026",
            intro: "Welcome to cecess. By accessing or using our website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.",
            sections: {
                acceptance: {
                    title: "1. Acceptance of Terms",
                    body: [
                        "By creating an account or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms.",
                        "We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the service after any changes constitutes your acceptance of the new Terms."
                    ]
                },
                use: {
                    title: "2. Use of Service",
                    body: [
                        "You agree to use cecess only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the service.",
                        "You must provide accurate and complete information when creating an account and keep this information up to date."
                    ]
                },
                account: {
                    title: "3. User Accounts",
                    body: [
                        "You are responsible for maintaining the security of your account and password. cecess cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.",
                        "You are responsible for all content posted and activity that occurs under your account."
                    ]
                },
                payment: {
                    title: "4. Subscription Tiers & Pricing",
                    body: [
                        "Free Plan: Up to 100 transactions, basic categorization, 1 AI categorization request per day.",
                        "Premium Plan: Unlimited transactions, advanced categorization, unlimited AI requests. Monthly: €4.99/month. Yearly: €49.90/year (save ~17%).",
                        "Pro Plan: Everything in Premium plus AI-generated financial reports, advanced analytics, and priority support. Monthly: €12.99/month. Yearly: €129.90/year (save ~17%)."
                    ]
                },
                cancellation: {
                    title: "5. Payment Processing",
                    body: [
                        "All subscription payments are processed exclusively through Google Play via RevenueCat. Cecess does not process payments directly on the web.",
                        "Refund policy follows Google Play's standard refund terms.",
                        "You may cancel your subscription at any time via Google Play. Your service will continue until the end of the current billing period."
                    ]
                },
                liability: {
                    title: "6. AI Features & Usage Limits",
                    body: [
                        "Free users: 1 AI categorization request per day.",
                        "Premium users: Unlimited AI categorization requests.",
                        "Pro users: Unlimited AI categorization plus AI-generated financial analysis reports.",
                        "AI features are powered by Google Gemini and may produce inaccurate results. Users should verify AI-generated categorizations.",
                        "In no event shall cecess, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service."
                    ]
                },
                contact: {
                    title: "7. Contact Us",
                    body: [
                        "If you have any questions about these Terms, please contact us at support@cecess.com."
                    ]
                }
            }
        },
        accountDeletion: {
            title: "Account Deletion Instructions",
            lastUpdated: "Last Updated: April 3, 2026",
            intro: "At cecess, we respect your right to privacy and offer a clear path to delete your account and all associated personal data. To comply with Google Play's Right to be Forgotten requirements, please follow the steps below.",
            sections: {
                mobileApp: {
                    title: "How to Delete Your Account",
                    body: [
                        "Step 1: Open the cecess mobile application on your device.",
                        "Step 2: Sign in to your account.",
                        "Step 3: Navigate to 'Settings' via the profile tab.",
                        "Step 4: Tap on 'Delete My Account' at the bottom of the menu.",
                        "Step 5: Confirm your decision. Your account and all associated data will be processed for immediate deletion."
                    ]
                },
                dataHandling: {
                    title: "What Data is Deleted?",
                    body: [
                        "Upon confirmation, the following data is permanently removed from our active databases: your user profile (name, email), all transaction history, account records, custom categories, and generated financial reports.",
                        "We do not retain copies of your financial data once the deletion is processed."
                    ]
                },
                contact: {
                    title: "Manual Deletion Request",
                    body: [
                        "If you are unable to access the mobile application, you can request manual account deletion by emailing us at support@cecess.com from the email address associated with your account. We will process your request within 48 hours."
                    ]
                }
            }
        },
        landing: {
            hero: {
                title: "Manage Your Financial Future with AI",
                subtitle: "Track your wealth, categorize with Gemini, and grow your net worth with a professional, privacy-first dashboard.",
                ctaMain: "Get Started",
                ctaSecondary: "See Pricing"
            },
            trustBar: "Join 10,000+ users transforming their personal finance",
            features: {
                title: "Everything you need to grow",
                subtitle: "Powerful features to help you understand your financial health at a glance.",
                items: {
                    dashboard: {
                        title: "Smart Dashboard",
                        description: "Get a bird's eye view of your finances with intuitive charts and real-time updates."
                    },
                    ai: {
                        title: "AI Categorization",
                        description: "Automatically tag and organize your transactions using our private Gemini models."
                    },
                    currency: {
                        title: "Multi-Currency",
                        description: "Track accounts in USD, EUR, TRY, and more. Global net worth calculated instantly."
                    },
                    import: {
                        title: "Smart Import",
                        description: "Import records from any bank. No unstable direct bank connections required."
                    },
                    analytics: {
                        title: "Advanced Analytics",
                        description: "Deep dive into spending habits, trends, and projections with Pro reports."
                    },
                    security: {
                        title: "Private & Secure",
                        description: "Your data is yours. AES-256 encryption. We meet strict privacy standards."
                    }
                }
            },
            cta: {
                title: "Ready to take control?",
                subtitle: "Join thousands of users organizing their financial life with cecess.",
                button: "Get Started Now"
            }
        },
        cookieConsent: {
            text: "We use cookies to improve your experience. By clicking 'Accept', you consent to our use of cookies.",
            accept: "Accept",
            reject: "Reject"
        },
        footer: {
            tagline: "A passion for demystifying personal finance for everyone.",
            product: "Product",
            company: "Company",
            social: "Social Media",
        },
    },
};
