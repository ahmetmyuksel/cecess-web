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
            current: "Current Plan"
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
            remove: "Remove"
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
            export: {
                title: "Export Data",
                desc: "Download your financial data as a CSV file.",
                button: "Export CSV"
            },
            import: {
                title: "Import Data",
                desc: "Import transactions from a CSV file.",
                button: "Import CSV"
            },
            delete: {
                desc: "Permanently delete transaction data older than one year.",
                button: "Delete Data"
            }
        },
        deleteAccount: {
            title: "Delete Account",
            desc: "Permanently delete your account and all of your data. This action is irreversible.",
            button: "Delete My Account"
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
        balance: "Current Balance"
    },
    transactions: {
        title: "All Transactions",
        addTransaction: "+ Add Transaction",
        editTransaction: "Edit Transaction",
        deleteSelected: "Delete",
        deleteConfirm: "Are you sure you want to delete {count} transactions?",
        rows: "Rows:",
        of: "of",
        form: {
            name: "Transaction Name",
            category: "Category",
            amount: "Amount",
            date: "Date",
            cancel: "Cancel",
            add: "Add Transaction",
            save: "Save"
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
        addManual: "+ Add Manual",
        linkBank: "Link Bank Account",
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
        modals: {
            add: "Add Manual Account",
            edit: "Edit Account",
            deleteConfirm: "Are you sure you want to delete this account? This will also delete related transactions."
        },
        form: {
            name: "Account Name",
            type: "Account Type",
            currency: "Currency",
            currentBalance: "Current Balance",
            initialBalance: "Initial Balance",
            cancel: "Cancel",
            add: "Add Account",
            update: "Update Account"
        }
    },
    categories: {
        title: "Categories",
        subtitle: "Manage your spending categories (Drag handle to reorder).",
        addCategory: "+ Add Category",
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
        modals: {
            add: "Add Category",
            edit: "Edit Category"
        },
        form: {
            name: "Name",
            type: "Type",
            icon: "Icon",
            pickIcon: "Pick an Icon",
            cancel: "Cancel",
            save: "Save",
            saving: "Saving..."
        }
    },
    importFlow: {
        title: "Import File",
        subtitle: "Upload and import your financial data from a CSV or Excel file.",
        upload: {
            title: "Upload File",
            desc: "Select your transaction file to get started.",
            currency: "Currency:",
            clickToUpload: "Click to Upload",
            orDragDrop: "or drag and drop",
            supportedFormats: "Supported formats: CSV, Excel (.xls, .xlsx)"
        },
        instructions: {
            title: "Instructions",
            step1: "Upload your file containing transaction data.",
            step2: "Map the columns from your file to our system fields (Date, Description, Amount).",
            step3: "Review and categorize your transactions before finalizing."
        },
        mapping: {
            title: "Map Columns",
            subtitle: "Match your file columns to the correct data fields.",
            columnMapping: "Column Mapping",
            warning: "Please verify the <strong>Live Preview</strong> below to ensure columns are mapped correctly. Incorrect mapping may lead to missing dates or amounts.",
            mapTo: "Map to",
            livePreview: "Live Preview",
            previewDesc: "See how your data looks with the current mapping.",
            buttons: {
                back: "Back",
                next: "Next: Arrange Categories →"
            },
            headers: {
                date: "Date",
                description: "Description",
                amount: "Amount"
            },
            placeholders: {
                selectColumn: "Select column...",
                searchColumn: "Search column...",
                noColumn: "No column found.",
                unmapped: "Unmapped"
            }
        },
        arrange: {
            title: "Arrange Categories",
            subtitle: "Review and assign categories to your imported transactions.",
            buttons: {
                back: "Back",
                analyze: "Analyzing...",
                aiCategorize: "AI Auto-Categorize",
                finish: "Finish Importing"
            },
            newCategories: {
                title: "New Categories Found",
                desc: "The AI identified these new categories. Click to add them to your list (transactions will not be auto-assigned).",
                add: "+ Add"
            },
            importedTransactions: {
                title: "Imported Transactions",
                desc: "We've imported {count} transactions. Please categorize them below."
            },
            table: {
                date: "Date",
                description: "Description",
                amount: "Amount",
                category: "Category"
            },
            placeholders: {
                selectCategory: "Select category...",
                searchCategory: "Search category...",
                noCategory: "No category found."
            },
            alerts: {
                allCategorized: "All transactions are already categorized!",
                errorAI: "An error occurred during AI categorization.",
                uncategorizedWarn: "You have {count} uncategorized transactions. Continue?",
                success: "Successfully imported {count} transactions!"
            },
            aiPopup: {
                title: "Unlock AI Power",
                desc: "You must have a Premium or Pro plan to use this feature.",
                button: "Upgrade Plan"
            }
        }
    },
    public: {
        nav: {
            home: "Home",
            pricing: "Pricing",
            privacy: "Privacy",
            faq: "FAQ",
            login: "Log in",
            signup: "Sign up",
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
            lastUpdated: "Last Updated: December 10, 2025",
            intro: "Welcome to cecess. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our web application. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.",
            sections: {
                info: {
                    title: "1. Information We Collect",
                    body: [
                        "We may collect information about you in a variety of ways. The information we may collect via the Application includes:",
                        "Personal Data: Personally identifiable information, such as your name, email address, and telephone number (optional), and demographic information, such as your age, gender, and interests, that you voluntarily give to us when you register with the Application.",
                        "Financial Data: We utilize Stripe, a secure third-party payment processor, to handle payment information. We do not store your credit card details or bank account numbers on our servers. We may process transaction data that you explicitly import for expense tracking purposes, which remains under your control."
                    ]
                },
                use: {
                    title: "2. Use of Your Information",
                    body: [
                        "Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Generally, we use information collected about you via the Application to:",
                        "Create and manage your account.",
                        "Process your subscriptions securely via Stripe.",
                        "Email you regarding your account or updates.",
                        "Provide you with customer support.",
                        "Analyze usage trends to improve your experience."
                    ]
                },
                disclosure: {
                    title: "3. Disclosure of Your Information",
                    body: [
                        "We generally do not share your personal information with third parties, except in specific situations:",
                        "By Law or to Protect Rights: If we believe the release of information is necessary to respond to legal process, to investigate potential violations, or to protect the rights, property, and safety of others, we may share your information as permitted or required by applicable law.",
                        "Third-Party Service Providers: We may share necessary information with third parties that perform services for us, such as payment processing (Stripe), data analysis, email delivery, and hosting services."
                    ]
                },
                security: {
                    title: "4. Security of Your Information",
                    body: [
                        "We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse."
                    ]
                },
                rights: {
                    title: "5. Your Rights and Choices",
                    body: [
                        "You have certain rights regarding your personal information. You may review or change the information in your account or delete your account at any time via the settings page.",
                        "Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. Some information may be retained in our files for a limited period to prevent fraud, troubleshoot problems, or comply with legal requirements."
                    ]
                },
                passwordSecurity: {
                    title: "5. Password Security",
                    body: [
                        "Your password security is our top priority. We do not store your credentials directly. Instead, we use Supabase Auth, which employs industry-standard Bcrypt hashing to strictly secure your password. This means even we cannot see your password."
                    ]
                },
                changes: {
                    title: "6. Changes to This Privacy Policy",
                    body: [
                        "We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page."
                    ]
                },
                contact: {
                    title: "8. Contact Us",
                    body: [
                        "If you have questions or comments about this Privacy Policy, please refer to the support section in your profile settings."
                    ]
                }
            }
        },
        terms: {
            title: "Terms of Service",
            lastUpdated: "Last Updated: December 10, 2025",
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
                    title: "4. Payment and Subscriptions",
                    body: [
                        "Some parts of the Service are billed on a subscription basis. You will be billed in advance on a recurring and periodic basis (such as monthly or annually).",
                        "Payments are processed securely via Stripe. We do not store your payment information on our servers."
                    ]
                },
                cancellation: {
                    title: "5. Cancellation and Termination",
                    body: [
                        "You may cancel your subscription at any time via your account settings. Your service will continue until the end of the current billing period.",
                        "We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms."
                    ]
                },
                liability: {
                    title: "6. Limitation of Liability",
                    body: [
                        "In no event shall cecess, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service."
                    ]
                },
                contact: {
                    title: "7. Contact Us",
                    body: [
                        "If you have any questions about these Terms, please visit the support section in your profile settings."
                    ]
                }
            }
        },
        accountDeletion: {
            title: "Account Deletion Instructions",
            lastUpdated: "Last Updated: April 3, 2026",
            intro: "At cecess, we believe you should have full control over your data. If you decide to no longer use our services, you can easily delete your account and all associated data.",
            sections: {
                mobileApp: {
                    title: "1. Deleting Your Account (Mobile App)",
                    body: [
                        "Account deletion is intentionally restricted to the cecess mobile app to ensure your security and verify your device.",
                        "To delete your account:",
                        "1. Open the cecess mobile application on your iOS or Android device.",
                        "2. Log in to the account you wish to delete.",
                        "3. Navigate to Settings (the gear icon on your profile page).",
                        "4. Tap on 'Profile' and select 'Delete My Account'.",
                        "5. Read the warning carefully and confirm your choice to permanently erase your data."
                    ]
                },
                dataHandling: {
                    title: "2. How We Handle Your Data",
                    body: [
                        "Upon confirming the deletion, your request is processed immediately.",
                        "What is deleted: Your account profile, all associated transaction history, custom budgets, categories, and sync records are permanently removed from our active database.",
                        "What is retained: We may retain certain minimal logs temporarily strictly for security audits, legal compliance, or to prevent fraudulent activity (such as abuse of free trials), as required by law. These logs are not used for any commercial purpose and are automatically purged over time."
                    ]
                },
                contact: {
                    title: "3. Need Help?",
                    body: [
                        "If you no longer have access to the mobile app or encounter any issues deleting your account securely, please contact our support team at support@cecess.com. Be prepared to verify your identity before any manual deletion request is processed."
                    ]
                }
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
