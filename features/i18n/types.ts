export type Dictionary = {
    sidebar: {
        dashboard: string;
        transactions: string;
        accounts: string;
        categories: string;
        importFile: string;
        settings: string;
        subscription: string;
        signOut: string;
        freePlan: string;
        reports: string;
        loading: string;
        guestUser: string;
    };
    subscriptionPage: {
        title: string;
        subtitle: string;
        currentPlan: string;
        monthly: string;
        yearly: string;
        savePercent: string;
        plans: {
            title: string;
            descriptions: {
                free: string;
                premium: string;
                pro: string;
            };
        };
        actions: {
            upgrade: string;
            upgradeYearly: string;
            downgrade: string;
            current: string;
            activePlan: string;
            upgradeInApp: string;
        };
        features: {
            unlimitedTransactions: string;
            exportData: string;
            advancedCharts: string;
            multiCurrency: string;
            prioritySupport: string;
            aiInsights: string;
        };
    };
    settings: {
        title: string;
        subtitle: string;
        save: string;
        preferences: {
            title: string;
            currency: string;
            language: string;
        };
        profile: {
            title: string;
            subtitle: string;
            username: string;
            email: string;
            dob: string;
            phone: string;
            gender: string;
            changePassword: string;
            recommended: string;
            changePhoto: string;
            remove: string;
            personalInfo: string;
            contactInfo: string;
            preferences: string;
            notifications: string;
            managementTitle: string;
            managementDesc: string;
            manageInApp: string;
        };
        notifications: {
            title: string;
            weekly: {
                title: string;
                desc: string;
            };
            budget: {
                title: string;
                desc: string;
            };
            updates: {
                title: string;
                desc: string;
            };
        };
        data: {
            title: string;
            delete: {
                desc: string;
                button: string;
            };
        };
        supportContact: string;
        modals: {
            password: {
                title: string;
                current: string;
                new: string;
                confirm: string;
                submit: string;
                cancel: string;
            };
            success: {
                title: string;
                desc: string;
                button: string;
            };
        };
    };
    dashboard: {
        welcome: string;
        overview: string;
        incomeVsExpense: string;
        expenseByCategory: string;
        spendingByCategory: string;
        noTransactions: string;
        balance: string;
        status: {
            readonly: string;
            manageInApp: string;
        };
        empty: {
            generic: string;
        };
    };
    transactions: {
        title: string;
        rows: string;
        of: string;
        form: {
            name: string;
            category: string;
            amount: string;
            date: string;
        };
    };
    common: {
        loading: string;
        range: {
            thisMonth: string;
            last30Days: string;
            thisYear: string;
            custom: string;
            from: string;
            to: string;
            filter: string;
        };
        table: {
            date: string;
            transaction: string;
            category: string;
            amount: string;
            totalIncome: string;
            percentIncome: string;
            totalExpense: string;
            percentExpense: string;
            netAmount: string;
            actions: string;
        };
        types: {
            income: string;
            expense: string;
        };
        actions: {
            save: string;
            cancel: string;
            delete: string;
            edit: string;
            remove: string;
            changePhoto: string;
            close: string;
        };
    };
    accounts: {
        title: string;
        subtitle: string;
        noAccounts: {
            title: string;
            desc: string;
            start: string;
        };
        table: {
            name: string;
            type: string;
            balance: string;
            actions: string;
        };
        form: {
            name: string;
            type: string;
            currency: string;
            currentBalance: string;
            initialBalance: string;
        };
    };
    categories: {
        title: string;
        subtitle: string;
        sort: {
            manual: string;
            name: string;
            type: string;
        };
        table: {
            name: string;
            type: string;
            actions: string;
        };
        form: {
            name: string;
            type: string;
            icon: string;
            pickIcon: string;
        };
    };
    auth: {
        login: {
            title: string;
            subtitle: string;
            divider: string;
            emailLabel: string;
            emailPlaceholder: string;
            passwordLabel: string;
            passwordPlaceholder: string;
            rememberMe: string;
            forgotPassword: string;
            submit: string;
            submitting: string;
        };
        forgotPassword: {
            backToLogin: string;
            title: string;
            subtitle: string;
            emailLabel: string;
            emailPlaceholder: string;
            successTitle: string;
            successDescription: string;
            submit: string;
            submitting: string;
        };
        resetPassword: {
            title: string;
            subtitle: string;
            passwordLabel: string;
            passwordPlaceholder: string;
            confirmPasswordLabel: string;
            confirmPasswordPlaceholder: string;
            submit: string;
            submitting: string;
        };
    };
    public: {
        nav: {
            home: string;
            pricing: string;
            privacy: string;
            faq: string;
            login: string;
            googleLogin: string;
            profile: string;
            logout: string;
        };
        hero: {
            title: string;
            subtitle: string;
            cta: string;
            secondaryCta: string;
        };
        features: {
            title: string;
            subtitle: string;
            list: {
                budgets: { title: string; desc: string; };
                savings: { title: string; desc: string; };
                recurring: { title: string; desc: string; };
                ai: { title: string; desc: string; };
            };
        };
        pricing: {
            title: string;
            subtitle: string;
            monthly: string;
            annual: string;
            discount: string;
            plans: {
                free: { name: string; desc: string; cta: string; };
                premium: { name: string; desc: string; cta: string; };
                pro: { name: string; desc: string; cta: string; };
            };
            compare: string;
        };
        faq: {
            title: string;
            subtitle: string;
            search: string;
            items: {
                q1: { q: string; a: string; cat: string };
                q2: { q: string; a: string; cat: string };
                q3: { q: string; a: string; cat: string };
                q4: { q: string; a: string; cat: string };
                q5: { q: string; a: string; cat: string };
                q6: { q: string; a: string; cat: string };
                q7: { q: string; a: string; cat: string };
            };
            categories: {
                features: string;
                pricing: string;
                account: string;
                security: string;
                support: string;
            };
            noResults: string;
        };
        privacy: {
            title: string;
            lastUpdated: string;
            intro: string;
            sections: {
                info: { title: string; body: string[] };
                use: { title: string; body: string[] };
                disclosure: { title: string; body: string[] };
                security: { title: string; body: string[] };
                passwordSecurity: { title: string; body: string[] };
                rights: { title: string; body: string[] };
                changes: { title: string; body: string[] };
                contact: { title: string; body: string[] };
            };
        };
        terms: {
            title: string;
            lastUpdated: string;
            intro: string;
            sections: {
                acceptance: { title: string; body: string[] };
                use: { title: string; body: string[] };
                account: { title: string; body: string[] };
                payment: { title: string; body: string[] };
                cancellation: { title: string; body: string[] };
                liability: { title: string; body: string[] };
                contact: { title: string; body: string[] };
            };
        };
        accountDeletion: {
            title: string;
            lastUpdated: string;
            intro: string;
            sections: {
                mobileApp: { title: string; body: string[] };
                dataHandling: { title: string; body: string[] };
                contact: { title: string; body: string[] };
            };
        };
        landing: {
            hero: {
                title: string;
                subtitle: string;
                ctaMain: string;
                ctaSecondary: string;
            };
            trustBar: string;
            features: {
                title: string;
                subtitle: string;
                items: {
                    dashboard: { title: string; description: string };
                    ai: { title: string; description: string };
                    currency: { title: string; description: string };
                    import: { title: string; description: string };
                    analytics: { title: string; description: string };
                    security: { title: string; description: string };
                };
            };
            cta: {
                title: string;
                subtitle: string;
                button: string;
            };
        };
        cookieConsent: {
            text: string;
            accept: string;
            reject: string;
        };
        footer: {
            tagline: string;
            product: string;
            company: string;
            social: string;
        };
    };
};

export type Language = "en" | "tr";
