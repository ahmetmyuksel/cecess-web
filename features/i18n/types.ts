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
            export: {
                title: string;
                desc: string;
                button: string;
            };
            import: {
                title: string;
                desc: string;
                button: string;
            };
            delete: {
                desc: string;
                button: string;
            };
        };
        deleteAccount: {
            title: string;
            desc: string;
            button: string;
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
    };
    transactions: {
        title: string;
        addTransaction: string;
        editTransaction: string;
        deleteSelected: string;
        deleteConfirm: string;
        rows: string;
        of: string;
        form: {
            name: string;
            category: string;
            amount: string;
            date: string;
            cancel: string;
            add: string;
            save: string;
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
        addManual: string;
        linkBank: string;
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
        modals: {
            add: string;
            edit: string;
            deleteConfirm: string;
        };
        form: {
            name: string;
            type: string;
            currency: string;
            currentBalance: string;
            initialBalance: string;
            cancel: string;
            add: string;
            update: string;
        };
    };
    categories: {
        title: string;
        subtitle: string;
        addCategory: string;
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
        modals: {
            add: string;
            edit: string;
        };
        form: {
            name: string;
            type: string;
            icon: string;
            pickIcon: string;
            cancel: string;
            save: string;
            saving: string;
        };
    };
    importFlow: {
        title: string;
        subtitle: string;
        upload: {
            title: string;
            desc: string;
            currency: string;
            clickToUpload: string;
            orDragDrop: string;
            supportedFormats: string;
        };
        instructions: {
            title: string;
            step1: string;
            step2: string;
            step3: string;
        };
        mapping: {
            title: string;
            subtitle: string;
            columnMapping: string;
            warning: string;
            mapTo: string;
            livePreview: string;
            previewDesc: string;
            buttons: {
                back: string;
                next: string;
            };
            headers: {
                date: string;
                description: string;
                amount: string;
            };
            placeholders: {
                selectColumn: string;
                searchColumn: string;
                noColumn: string;
                unmapped: string;
            };
        };
        arrange: {
            title: string;
            subtitle: string;
            buttons: {
                back: string;
                analyze: string;
                aiCategorize: string;
                finish: string;
            };
            newCategories: {
                title: string;
                desc: string;
                add: string;
            };
            importedTransactions: {
                title: string;
                desc: string;
            };
            table: {
                date: string;
                description: string;
                amount: string;
                category: string;
            };
            placeholders: {
                selectCategory: string;
                searchCategory: string;
                noCategory: string;
            };
            alerts: {
                allCategorized: string;
                errorAI: string;
                uncategorizedWarn: string;
                success: string;
            };
            aiPopup: {
                title: string;
                desc: string;
                button: string;
            };
        };
    };
    public: {
        nav: {
            home: string;
            pricing: string;
            privacy: string;
            faq: string;
            login: string;
            signup: string;
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
