import { Dictionary } from "../types";

export const tr: Dictionary = {
    sidebar: {
        dashboard: "Kontrol Paneli",
        transactions: "İşlemler",
        accounts: "Hesaplar",
        categories: "Kategoriler",
        importFile: "Veri Yükle",
        settings: "Ayarlar",
        subscription: "Abonelik",
        signOut: "Çıkış Yap",
        freePlan: "Ücretsiz Plan",
        reports: "Raporlar",
        loading: "Yükleniyor...",
        guestUser: "Misafir Kullanıcı"
    },
    subscriptionPage: {
        title: "Abonelik Planları",
        subtitle: "Bütçenize ve ihtiyaçlarınıza uygun planı seçin.",
        currentPlan: "Mevcut Plan",
        monthly: "Aylık",
        yearly: "Yıllık",
        savePercent: "%20 Tasarruf Et",
        plans: {
            title: "{tier} Plan",
            descriptions: {
                free: "Sonsuza Kadar Ücretsiz. Süre sınırı yok (50 işlem).",
                premium: "Sınırsız güç. Veri İçe Aktarma ve Çoklu Para Birimi.",
                pro: "En üst düzey otomasyon. AI Öngörüleri ve Öncelikli Destek."
            }
        },
        actions: {
            upgrade: "Yükselt",
            upgradeYearly: "Yıllık Plana Geç",
            downgrade: "Düşür",
            current: "Mevcut Plan",
            activePlan: "Aktif Planınız",
            upgradeInApp: "Uygulamadan Yönet"
        },
        features: {
            unlimitedTransactions: "Sınırsız İşlem",
            exportData: "Excel/CSV Dışa Aktarma",
            advancedCharts: "Gelişmiş AI Analizler",
            multiCurrency: "Çoklu Para Birimi",
            prioritySupport: "Öncelikli Destek",
            aiInsights: "AI Destekli Kategorizasyon"
        }
    },
    settings: {
        title: "Ayarlar",
        subtitle: "Hesabınızı ve tercihlerinizi yönetin.",
        save: "Değişiklikleri Kaydet",
        preferences: {
            title: "Tercihler",
            currency: "Para Birimi",
            language: "Dil"
        },
        profile: {
            title: "Profil",
            subtitle: "Herkese açık profilinizi ve kişisel bilgilerinizi yönetin.",
            username: "Kullanıcı Adı",
            email: "E-posta Adresi",
            dob: "Doğum Tarihi",
            phone: "Telefon Numarası",
            gender: "Cinsiyet",
            changePassword: "Şifre Değiştir...",
            recommended: "Önerilen: Kare JPG, PNG.",
            changePhoto: "Fotoğraf değiştir",
            remove: "Kaldır",
            personalInfo: "Kişisel Bilgiler",
            contactInfo: "İletişim Bilgileri",
            preferences: "Tercihler",
            notifications: "Bildirimler",
            managementTitle: "Hesap Yönetimi",
            managementDesc: "Hesabınızı yönetmek, profilinizi güncellemek, şifrenizi değiştirmek veya hesabınızı silmek için lütfen Cecess mobil uygulamasını kullanın.",
            manageInApp: "Profil ayarları mobil uygulamadan yönetilir"
        },
        notifications: {
            title: "Bildirimler",
            weekly: {
                title: "Haftalık Özet",
                desc: "Haftalık gelir ve gider özetinizi e-posta ile alın."
            },
            budget: {
                title: "Bütçe Uyarıları",
                desc: "Bütçenizi aşmaya yaklaştığınızda bildirim alın."
            },
            updates: {
                title: "Ürün Güncellemeleri",
                desc: "Yeni özellikler ve güncellemelerden haberdar olun."
            }
        },
        data: {
            title: "Veri Yönetimi",
            delete: {
                desc: "Bir yıldan eski işlem verilerini kalıcı olarak silin.",
                button: "Verileri Sil"
            }
        },
        supportContact: "Yardıma mı ihtiyacınız var? Bize ulaşın: info@cecess.com",
        modals: {
            password: {
                title: "Şifre Değiştir",
                current: "Mevcut Şifre",
                new: "Yeni Şifre",
                confirm: "Yeni Şifreyi Onayla",
                submit: "Şifreyi Güncelle",
                cancel: "İptal"
            },
            success: {
                title: "Başarılı!",
                desc: "Değişiklikleriniz başarıyla kaydedildi.",
                button: "Kapat"
            }
        }
    },
    dashboard: {
        welcome: "Hoş geldin, {name}!",
        overview: "{range} için finansal genel bakışınız.",
        incomeVsExpense: "Gelir vs. Gider",
        expenseByCategory: "Kategoriye Göre Gider",
        spendingByCategory: "Kategoriye Göre Harcama",
        noTransactions: "Bu dönem için işlem bulunamadı.",
        balance: "Güncel Bakiye",
        status: {
            readonly: "Sadece Görüntüleme (Uygulama ile Senkronize)",
            manageInApp: "Veri eklemek, düzenlemek veya silmek için lütfen Cecess mobil uygulamasını kullanın."
        },
        empty: {
            generic: "Henüz veri bulunamadı. Finansal verilerinizi mobil uygulamadan senkronize edin."
        }
    },
    reports: {
        title: "Yapay Zeka Finansal Raporu",
        subtitle: "Kaydedilen raporlar dogrudan hesap verilerinizden yuklenir.",
        monthEmpty: "Kayitli rapor yok",
        generateInApp: "Uygulamada Olustur",
        recentReports: "Son Raporlar",
        hide: "Gizle",
        showAll: "Tumunu Goster",
        noReportsTitle: "Henuz rapor yok",
        noReportsDescription: "Mobil uygulamada olusturulan raporlar, reports tablosuna kaydedildiginde burada gorunecek.",
        executiveSummary: "Yonetici Ozeti",
        financialHealth: "Finansal Saglik",
        spendingBreakdown: "Harcama Dagilimi",
        noCategoryData: "Kategori verisi bulunamadi.",
        detectedSubscriptions: "Tespit Edilen Abonelikler",
        noSubscriptions: "Tekrarlayan abonelik tespit edilmedi.",
        recommendations: "CFO Onerileri",
        generateAlert: "Rapor olusturma sadece mobil uygulamada kullanilabilir.",
        chart: {
            loading: "Trendler yukleniyor...",
            emptyTitle: "Henuz harcama verisi yok",
            emptyDescription: "Zaman icindeki harcama trendlerinizi burada gormek icin islem eklemeye baslayin.",
            title: "Harcama Trendleri",
            subtitle: "Giderlerinizi zaman icinde takip edin.",
            totalSpending: "Toplam Harcama",
            lastMonths: "Son 6 Ay",
            recordedExpenses: "Degerler kaydedilen giderlere gore hesaplanir"
        }
    },
    transactions: {
        title: "Tüm İşlemler",
        rows: "Satır:",
        of: "/",
        form: {
            name: "İşlem Adı",
            category: "Kategori",
            amount: "Tutar",
            date: "Tarih (İsteğe Bağlı)"
        }
    },
    common: {
        loading: "Yükleniyor...",
        range: {
            thisMonth: "Bu Ay",
            last30Days: "Son 30 Gün",
            thisYear: "Bu Yıl",
            custom: "Özel Aralık",
            from: "Başlangıç",
            to: "Bitiş",
            filter: "Filtrele"
        },
        table: {
            date: "Tarih",
            transaction: "İşlem",
            category: "Kategori",
            amount: "Tutar",
            totalIncome: "Toplam Gelir",
            percentIncome: "% Gelir",
            totalExpense: "Toplam Gider",
            percentExpense: "% Gider",
            netAmount: "Net Tutar",
            actions: "İşlemler"
        },
        types: {
            income: "Gelir",
            expense: "Gider"
        },
        actions: {
            save: "Kaydet",
            cancel: "İptal",
            delete: "Sil",
            edit: "Düzenle",
            remove: "Kaldır",
            changePhoto: "Fotoğraf Değiştir",
            close: "Kapat"
        }
    },
    accounts: {
        title: "Hesaplar",
        subtitle: "Finansal hesaplarınızı yönetin.",
        noAccounts: {
            title: "Henüz hesap yok",
            desc: "Finansal takibe başlamak için banka hesabınızı bağlayın veya manuel olarak ekleyin.",
            start: "Şimdi Başla"
        },
        table: {
            name: "Hesap Adı",
            type: "Hesap Türü",
            balance: "Bakiye",
            actions: "İşlemler"
        },
        form: {
            name: "Hesap Adı",
            type: "Hesap Türü",
            currency: "Para Birimi",
            currentBalance: "Güncel Bakiye",
            initialBalance: "Başlangıç Bakiyesi"
        }
    },
    categories: {
        title: "Kategoriler",
        subtitle: "Harcama kategorilerinizi yönetin (Sıralamak için sürükleyin).",
        sort: {
            manual: "Manuel",
            name: "İsim",
            type: "Tür"
        },
        table: {
            name: "Kategori Adı",
            type: "Tür",
            actions: "İşlemler"
        },
        form: {
            name: "Ad",
            type: "Tür",
            icon: "İkon",
            pickIcon: "İkon Seç"
        }
    },
    auth: {
        login: {
            title: "Tekrar hoş geldin",
            subtitle: "Devam etmek için hesabına giriş yap.",
            divider: "veya",
            emailLabel: "E-posta",
            emailPlaceholder: "ornek@eposta.com",
            passwordLabel: "Şifre",
            passwordPlaceholder: "Şifrenizi girin",
            rememberMe: "Beni hatırla",
            forgotPassword: "Şifremi Unuttum",
            submit: "Giriş Yap",
            submitting: "Giriş yapılıyor..."
        },
        forgotPassword: {
            backToLogin: "Girişe Dön",
            title: "Şifre Sıfırla",
            subtitle: "E-posta adresinizi girin, size şifre sıfırlama bağlantısı gönderelim.",
            emailLabel: "E-posta Adresi",
            emailPlaceholder: "ornek@eposta.com",
            successTitle: "E-postanı kontrol et",
            successDescription: "Şifre sıfırlama bağlantısı e-posta adresinize gönderildi.",
            submit: "Sıfırlama Bağlantısı Gönder",
            submitting: "Gönderiliyor..."
        },
        resetPassword: {
            title: "Yeni Şifre Belirle",
            subtitle: "Hesabını güvenceye almak için yeni şifreni aşağıya gir.",
            passwordLabel: "Yeni Şifre",
            passwordPlaceholder: "En az 8 karakter girin",
            confirmPasswordLabel: "Şifreyi Onayla",
            confirmPasswordPlaceholder: "Şifrenizi tekrar girin",
            submit: "Şifreyi Güncelle",
            submitting: "Güncelleniyor..."
        }
    },
    public: {
        nav: {
            home: "Anasayfa",
            pricing: "Fiyatlandırma",
            privacy: "Gizlilik",
            faq: "SSS",
            login: "Giriş Yap",
            googleLogin: "Google ile Giriş Yap",
            profile: "Profil",
            logout: "Çıkış Yap",
        },
        hero: {
            title: "Harcamalarınız,\nAI ile kategorize edildi",
            subtitle: "Finansmanızı zahmetsizce yönetmenizi, takip etmenizi ve anlamanızı sağlayan sezgisel araçların keyfini çıkarın. Paranızı bugün kontrol altına alın.",
            cta: "Ücretsiz Başla",
            secondaryCta: "Nasıl Çalışır",
        },
        features: {
            title: "Paranızın nereye gittiğini anlayın",
            subtitle: "Zahmetsiz finansal yönetim için basit, kullanışlı özellikler. Gerçek zamanlı takip edin ve işlemleri tek bir kullanımı kolay platformda sorunsuz bir şekilde yönetin.",
            list: {
                budgets: {
                    title: "Bütçeler oluşturun ve kontrolü ele alın",
                    desc: "Harcama limitleri belirleyin ve bütçenizde herhangi bir eşiğe yaklaşırsanız bildirim alın.",
                },
                savings: {
                    title: "Alışkanlıklar oluşturun ve tasarruf edin",
                    desc: "cecess içgörüleri, tasarruf fırsatlarını belirlemenize ve daha sağlıklı harcama alışkanlıkları oluşturmanıza yardımcı olur.",
                },
                recurring: {
                    title: "Tekrarlayan harcamalarınızı takip edin",
                    desc: "Hiçbir ödemeyi kaçırmayın. Abonelikleri ve tekrarlayan faturaları tek bir yerden kolayca yönetin.",
                },
                ai: {
                    title: "AI ile kategorizasyonu otomatikleştirin",
                    desc: "Her işlem gerçek zamanlı olarak sınıflandırılır, böylece paranızın nereye gittiğini her zaman bilirsiniz.",
                },
            },
        },
        pricing: {
            title: "İhtiyaçlarınız için mükemmel planı bulun",
            subtitle: "Ücretsiz başlayın ve büyüdükçe yükseltin.",
            monthly: "Aylık",
            annual: "Yıllık",
            discount: "~%17 Tasarruf",
            perMonth: "/ay",
            perYear: "/yıl",
            footnote: "Gösterilen fiyatlar varsayılan değerlerdir. Güncel fiyatlar RevenueCat üzerinden çekilir.",
            plans: {
                free: {
                    name: "Ücretsiz",
                    desc: "Harcamalarını takip etmeye başlayan bireyler için.",
                    cta: "Başla",
                },
                premium: {
                    name: "Premium",
                    desc: "Finansmanını optimize etmek isteyenler için.",
                    cta: "Hemen Başla",
                },
                pro: {
                    name: "Pro",
                    desc: "Güçlü kullanıcılar ve küçük işletmeler için.",
                    cta: "Hemen Başla",
                },
            },
            compare: "Tüm özellikleri karşılaştır",
            features: {
                transactionLimit: "İşlem Limiti",
                manualEntry: "Manuel İşlem Girişi",
                manualCsvExcelImport: "Manuel CSV / Excel İçeri Aktarma",
                ocrScan: "Fatura Tarama (OCR)",
                basicReports: "Temel Raporlar (Harcama, Gelir, Tekrar Eden)",
                aiRequestFree: "AI Akıllı İçeri Aktarma (Excel, CSV, PDF, JPEG)",
                multiCurrency: "Çoklu Para Birimi",
                detailedCharts: "Detaylı Grafikler & Filtreleme",
                budgetAlerts: "Bütçe Limitleri & Uyarılar",
                unlimitedAiCategorization: "Sınırsız AI Otomatik Kategorilendirme",
                aiInsightsHub: "AI Insights Hub & Geçmiş",
                excelCsvExport: "Excel / CSV Dışa Aktarma",
                prioritySupport: "Öncelikli Destek",
                unlimitedTransactions: "Sınırsız İşlem",
                unlimitedAiRequests: "Sınırsız AI İstek",
            },
            values: {
                unlimited: "Sınırsız",
                onePerWeek: "1/hafta",
                onePerTwoWeeks: "2 haftada 1",
                comingSoon: "Yakında",
            },
        },
        faq: {
            title: "Sıkça Sorulan Sorular",
            subtitle: "Hizmetlerimiz, özelliklerimiz, fiyatlandırmamız ve daha fazlası hakkında sık sorulan soruların yanıtlarını bulun.",
            search: "Bir soru arayın...",
            items: {
                q1: {
                    q: "AI özelliği nasıl çalışır?",
                    a: "cecess, finanslarınızı daha akıllı yönetmeniz için Google Gemini AI kullanır. AI, gelir ve giderlerinizi analiz ederek kişiselleştirilmiş bir finansal sağlık puanı (0–100), harcama analizleri, uyarılar ve uygulanabilir ipuçları üretir -tamamı tercih ettiğiniz dilde. Ayrıca banka ekstrelerinizi (PDF veya görsel) okuyup işlemlerinizi otomatik olarak çıkarabilen Akıllı İçe Aktarma özelliğini de destekler. İçe aktarma sırasında AI, işlemlerinizi akıllıca kategorize eder ve gerektiğinde yeni kategoriler önerir. Ücretsiz planda haftada 1 AI isteği hakkınız vardır. Premium ve Pro kullanıcılar sınırsız AI erişiminden yararlanır.",
                    cat: "Features"
                },
                q2: {
                    q: "Deneme süresi var mı?",
                    a: "cecess, süresi dolmayan cömert bir Ücretsiz plan sunar -kredi kartı gerekmez. Ücretsiz plan ile 100'e kadar işlem takip edebilir, haftada 1 AI destekli Akıllı İçe Aktarma kullanabilir, OCR ile fatura tarayabilir ve temel raporlara erişebilirsiniz. Daha fazlasına hazır olduğunuzda, App Store veya Google Play üzerinden istediğiniz zaman Premium veya Pro'ya yükseltebilirsiniz. Herhangi bir taahhüt yoktur -aboneliğinizi istediğiniz zaman iptal edebilirsiniz.",
                    cat: "Pricing"
                },
                q3: {
                    q: "Banka hesabımı doğrudan bağlayabilir miyim?",
                    a: "cecess, banka hesabınıza doğrudan bağlanmaz ve bu tasarım gereğidir -banka bilgileriniz sizde kalır. Bunun yerine verilerinizi içe aktarmak için esnek yollar sunarız: bankanızdan CSV veya Excel dışa aktarımlarını yükleyebilir, Akıllı İçe Aktarma ile banka ekstrelerinizi (PDF veya fotoğraf) AI destekli çıkarma ile taratabilir, cihaz üzerinde OCR ile fiş ve faturaları tarayabilir veya işlemleri manuel olarak ekleyebilirsiniz. Finansal verileriniz, banka giriş bilgilerinizi paylaşmadan cecess'e aktarılır.",
                    cat: "Features"
                },
                q4: {
                    q: "Hesabımı kalıcı olarak silebilir miyim?",
                    a: "Evet. Hesabınızı Profil → Hesabı Sil yolunu izleyerek kalıcı olarak silebilirsiniz. İki onay adımından sonra, işlemler, kategoriler, AI analizleri ve profiliniz dahil tüm verileriniz sunucularımızdan tamamen ve geri dönüşü olmayacak şekilde kaldırılır. Aktif bir aboneliğiniz varsa, hesabınızı silmeden önce App Store veya Google Play üzerinden iptal ettiğinizden emin olun.",
                    cat: "Account Management"
                },
                q5: {
                    q: "Verilerim nasıl güvende tutuluyor?",
                    a: "Güvenliğiniz önceliğimizdir. Tüm veriler şifreli HTTPS/TLS bağlantıları üzerinden iletilir. Veritabanı düzeyinde bile yalnızca sizin verilerinize erişebilmenizi sağlayan Satır Düzeyinde Güvenlik (RLS) ile Supabase kullanıyoruz. Ödemeler, PCI Seviye 1 uyumluluğuna sahip Apple ve Google uygulama mağazaları üzerinden işlenir; kart bilgilerinizi asla görmez veya saklamayız. AI banka ekstrelerinizi işlerken, hesap numaraları ve isimler gibi kişisel bilgiler açıkça hariç tutulur. OCR ile fatura tarama tamamen cihazınızda çalışır -fiş görselleriniz hiçbir sunucuya yüklenmez.",
                    cat: "Security"
                }
            },
            categories: {
                features: "Özellikler",
                pricing: "Fiyatlandırma",
                account: "Hesap Yönetimi",
                security: "Güvenlik",
                support: "Destek"
            },
            noResults: "Bu arama için sonuç bulunamadı. Başka bir anahtar kelime veya kategori deneyin.",
        },
        privacy: {
            title: "Gizlilik Politikası",
            lastUpdated: "Son Güncelleme: 3 Nisan 2026",
            intro: "cecess'e hoş geldiniz. Gizliliğinizi korumaya kararlıyız. Bu Gizlilik Politikası, mobil uygulamamızı ve ilgili web hizmetlerimizi kullandığınızda bilgilerinizi nasıl topladığımızı, kullandığımızı, ifşa ettiğimizi ve koruduğumuzu açıklar. Lütfen bu gizlilik politikasını dikkatlice okuyun. Bu gizlilik politikasının şartlarını kabul etmiyorsanız, lütfen uygulamaya erişmeyin.",
            sections: {
                info: {
                    title: "1. Topladığımız Bilgiler",
                    body: [
                        "Hakkınızdaki bilgileri çeşitli şekillerde toplayabiliriz. Uygulama aracılığıyla toplayabileceğimiz bilgiler şunları içerir:",
                        "Kişisel Veriler: Ad, e-posta adresi, telefon numarası (isteğe bağlı), doğum tarihi, cinsiyet.",
                        "Finansal Veriler: Uygulama içinde oluşturduğunuz işlem kayıtları, hesap adları, bakiyeler, özel kategoriler ve bütçeler.",
                        "Cihaz Verileri: Cihaz türü, işletim sistemi, uygulama sürümü ve anonimleştirilmiş kullanım analitiği."
                    ]
                },
                use: {
                    title: "2. Bilgilerinizi Nasıl Kullanıyoruz",
                    body: [
                        "Hakkınızda doğru bilgilere sahip olmak, size sorunsuz, verimli ve özelleştirilmiş bir deneyim sunmamızı sağlar. Özellikle, hakkınızda toplanan bilgileri şu amaçlarla kullanırız:",
                        "Hesabınızı oluşturmak, sürdürmek ve güvence altına almak.",
                        "İşlem kategorizasyonu Google Gemini AI tarafından desteklenmektedir. İşlem açıklamalarınız otomatik kategorizasyon için Google Gemini API'sine gönderilir. Bu isteklere kişisel olarak tanımlanabilir hiçbir bilgi dahil edilmez.",
                        "Google Play (RevenueCat) aracılığıyla abonelik ödemelerini işlemek.",
                        "Hesabınız veya güncellemeler hakkında size e-posta göndermek.",
                        "Size müşteri desteği sağlamak.",
                        "Deneyiminizi geliştirmek için kullanım eğilimlerini analiz etmek."
                    ]
                },
                disclosure: {
                    title: "3. Veri Depolama ve Güvenlik",
                    body: [
                        "Verileriniz Supabase (PostgreSQL) üzerinde durağan halde şifreleme (AES-256) ve aktarım sırasında şifreleme (TLS 1.2+) ile saklanır.",
                        "Parolalar Supabase Auth aracılığıyla Bcrypt kullanılarak hashlenir -düz metin kimlik bilgilerini asla saklamıyoruz."
                    ]
                },
                security: {
                    title: "4. Üçüncü Taraf Paylaşımı",
                    body: [
                        "Kişisel verilerinizi üçüncü taraflara satmıyor, takas etmiyor veya kiralamıyoruz.",
                        "Bilgileri yalnızca hizmetimizi işletmek için gerekli olan hizmet sağlayıcılarla paylaşabiliriz: Google Gemini AI (işlem kategorizasyonu), Supabase (veritabanı ve kimlik doğrulama), RevenueCat (Google Play aracılığıyla abonelik yönetimi).",
                        "Yasa Gereği veya Hakları Korumak İçin: Hakkınızdaki bilgilerin yayınlanmasının yasal sürece yanıt vermek, olası ihlalleri araştırmak veya başkalarının haklarını, mülkiyetini ve güvenliğini korumak için gerekli olduğuna inanırsak, bilgilerinizi geçerli yasaların izin verdiği veya gerektirdiği şekilde paylaşabiliriz."
                    ]
                },
                rights: {
                    title: "5. Haklarınız (Unutulma Hakkı)",
                    body: [
                        "Cecess mobil uygulaması üzerinden istediğiniz zaman hesabınızı ve ilgili tüm verileri silebilirsiniz (Ayarlar → Hesabı Sil).",
                        "Silme işlemi sonrasında şu veriler kalıcı olarak kaldırılır: profil bilgileri, işlem geçmişi, hesap kayıtları, özel kategoriler, AI tarafından oluşturulan raporlar ve ilgili tüm meta veriler.",
                        "Yasal zorunluluklar gereği güvenlik denetimleri ve yasal uyumluluk için bazı minimal loglar geçici olarak saklanabilir. Bu loglar hiçbir ticari amaçla kullanılmaz ve zamanla otomatik olarak silinir."
                    ]
                },
                passwordSecurity: {
                    title: "6. Parola Güvenliği",
                    body: [
                        "Parola güvenliğiniz bizim için en büyük önceliktir. Kimlik bilgilerinizi doğrudan saklamıyoruz. Bunun yerine, parolanızı sıkı bir şekilde korumak için endüstri standardı Bcrypt hashing yöntemini kullanan Supabase Auth'u kullanıyoruz. Bu, parolanızı bizim bile göremeyeceğimiz anlamına gelir."
                    ]
                },
                changes: {
                    title: "7. Bu Gizlilik Politikasındaki Değişiklikler",
                    body: [
                        "Örneğin uygulamalarımızdaki değişiklikleri yansıtmak veya diğer operasyonel, yasal veya düzenleyici nedenlerle bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Herhangi bir değişikliği bu sayfada yeni Gizlilik Politikasını yayınlayarak size bildireceğiz."
                    ]
                },
                contact: {
                    title: "8. Bize Ulaşın",
                    body: [
                        "Gizlilik sorularınız için bize info@cecess.com adresinden ulaşabilirsiniz."
                    ]
                }
            }
        },
        terms: {
            title: "Kullanım Koşulları",
            lastUpdated: "Son Güncelleme: 3 Nisan 2026",
            intro: "cecess'e hoş geldiniz. Web sitemize ve hizmetlerimize erişerek veya bunları kullanarak, bu Kullanım Koşullarına ve yürürlükteki tüm yasalara ve düzenlemelere bağlı kalmayı kabul edersiniz. Bu koşullardan herhangi birini kabul etmiyorsanız, bu siteyi kullanmanız veya siteye erişmeniz yasaktır.",
            sections: {
                acceptance: {
                    title: "1. Koşulların Kabulü",
                    body: [
                        "Bir hesap oluşturarak veya hizmetlerimizi kullanarak, bu Koşulları okuduğunuzu, anladığınızı ve bunlara bağlı kalmayı kabul ettiğinizi beyan edersiniz.",
                        "Bu Koşulları herhangi bir zamanda önceden bildirimde bulunmaksızın güncelleme veya değiştirme hakkını saklı tutarız. Herhangi bir değişiklikten sonra hizmeti kullanmaya devam etmeniz, yeni Koşulları kabul ettiğiniz anlamına gelir."
                    ]
                },
                use: {
                    title: "2. Hizmetin Kullanımı",
                    body: [
                        "cecess'i yalnızca yasal amaçlarla ve başkalarının hizmeti kullanma ve hizmetten yararlanma haklarını ihlal etmeyecek, kısıtlamayacak veya engellemeyecek bir şekilde kullanmayı kabul edersiniz.",
                        "Bir hesap oluştururken doğru ve eksiksiz bilgi vermeli ve bu bilgileri güncel tutmalısınız."
                    ]
                },
                account: {
                    title: "3. Kullanıcı Hesapları",
                    body: [
                        "Hesabınızın ve parolanızın güvenliğini sağlamaktan siz sorumlusunuz. cecess, bu güvenlik yükümlülüğüne uymamanızdan kaynaklanan herhangi bir kayıp veya hasardan sorumlu tutulamaz.",
                        "Hesabınız altında yayınlanan tüm içerikten ve gerçekleşen tüm etkinliklerden siz sorumlusunuz."
                    ]
                },
                payment: {
                    title: "4. Abonelik Planları ve Fiyatlandırma",
                    body: [
                        "Ücretsiz Plan: 100'e kadar işlem, temel kategorizasyon, günde 1 AI kategorizasyon isteği.",
                        "Premium Plan: Sınırsız işlem, gelişmiş kategorizasyon, sınırsız AI isteği. Aylık: €4.99/ay. Yıllık: €49.90/yıl (~%17 tasarruf).",
                        "Pro Plan: Premium'daki her şey artı AI destekli finansal raporlar, gelişmiş analitik ve öncelikli destek. Aylık: €12.99/ay. Yıllık: €129.90/yıl (~%17 tasarruf)."
                    ]
                },
                cancellation: {
                    title: "5. Ödeme İşlemleri",
                    body: [
                        "Tüm abonelik ödemeleri yalnızca RevenueCat aracılığıyla Google Play üzerinden işlenir. Cecess web üzerinden doğrudan ödeme almaz.",
                        "İade politikası Google Play'in standart iade koşullarına tabidir.",
                        "Aboneliğinizi istediğiniz zaman Google Play üzerinden iptal edebilirsiniz. Hizmetiniz mevcut fatura döneminin sonuna kadar devam edecektir."
                    ]
                },
                liability: {
                    title: "6. AI Özellikleri ve Kullanım Limitleri",
                    body: [
                        "Ücretsiz kullanıcılar: Günde 1 AI kategorizasyon isteği.",
                        "Premium kullanıcılar: Sınırsız AI kategorizasyon isteği.",
                        "Pro kullanıcılar: Sınırsız AI kategorizasyon artı AI destekli finansal analiz raporları.",
                        "AI özellikleri Google Gemini tarafından desteklenmektedir ve hatalı sonuçlar üretebilir. Kullanıcılar AI tarafından oluşturulan kategorizasyonları doğrulamalıdır.",
                        "cecess, yöneticileri, çalışanları, ortakları, acenteleri, tedarikçileri veya iştirakleri, Hizmete erişiminizden veya Hizmeti kullanımınızdan veya kullanamamanızdan kaynaklanan kâr, veri, kullanım, iyi niyet veya diğer maddi olmayan kayıplar dahil ancak bunlarla sınırlı olmamak üzere hiçbir doğrudan, dolaylı, arızi, özel, sonuçsal veya cezai hasardan sorumlu olmayacaktır."
                    ]
                },
                contact: {
                    title: "7. Bize Ulaşın",
                    body: [
                        "Bu Koşullar hakkında herhangi bir sorunuz varsa, lütfen bize info@cecess.com adresinden ulaşın."
                    ]
                }
            }
        },
        accountDeletion: {
            title: "Hesap Silme Talimatları",
            lastUpdated: "Son Güncelleme: 13 Nisan 2026",
            intro: "cecess'te gizlilik hakkınıza saygı duyuyoruz ve hesabınızı ve ilgili tüm kişisel verilerinizi silmek için net bir yol sunuyoruz. Google Play'in Unutulma Hakkı gereksinimlerine uymak için aşağıdaki yöntemlerden herhangi birini kullanabilirsiniz.",
            sections: {
                mobileApp: {
                    title: "Seçenek 1: Mobil Uygulama Üzerinden Silme",
                    body: [
                        "Adım 1: Cihazınızda cecess mobil uygulamasını açın.",
                        "Adım 2: Hesabınıza giriş yapın.",
                        "Adım 3: Ayarlar'a gidin.",
                        "Adım 4: Profil Bilgileri'ne dokunun.",
                        "Adım 5: Alt kısımdaki 'Hesabımı Sil' seçeneğine dokunun.",
                        "Adım 6: Silme onayını vererek kararınızı doğrulayın.",
                        "Hesabınız ve ilgili tüm veriler kalıcı olarak ve anında silinecektir."
                    ]
                },
                dataHandling: {
                    title: "Hangi Veriler Silinir?",
                    body: [
                        "Onayınızın ardından şu veriler sunucularımızdan kalıcı olarak kaldırılır: kullanıcı profiliniz (ad, e-posta, telefon, doğum tarihi), tüm işlem geçmişi, hesap kayıtları, özel kategoriler, AI tarafından oluşturulan raporlar ve öngörüler ile ilgili tüm meta veriler.",
                        "Silme işlemi tamamlandıktan sonra finansal verilerinizin kopyalarını tutmuyoruz."
                    ]
                },
                emailRequest: {
                    title: "Seçenek 2: E-posta ile Silme Talebi",
                    body: [
                        "Mobil uygulamaya erişemiyorsanız, hesap silme talebinizi e-posta ile gönderebilirsiniz.",
                        "Kayıtlı e-posta adresinizden info@cecess.net adresine 'Hesap Silme Talebi' konu başlığıyla bir e-posta gönderin.",
                        "Talebiniz 3 iş günü içerisinde işleme alınacaktır."
                    ]
                },
                webForm: {
                    title: "Seçenek 3: Silme Talep Formu",
                    body: [
                        "Aşağıdaki formu doldurarak da hesap silme talebinde bulunabilirsiniz. Lütfen kayıtlı e-posta adresinizi ve talebinizin nedenini belirtin."
                    ]
                }
            },
            form: {
                email: "Kayıtlı E-posta",
                emailPlaceholder: "Kayıtlı e-posta adresinizi girin",
                reason: "Silme Nedeni",
                reasonPlaceholder: "Hesabınızı neden silmek istediğinizi belirtin (isteğe bağlı)",
                submit: "Silme Talebi Gönder",
                success: "Silme talebiniz başarıyla gönderildi. 3 iş günü içerisinde işleme alınacaktır."
            }
        },
        landing: {
            hero: {
                title: "AI ile Finansal Geleceğini Yönet",
                subtitle: "Varlıklarını takip et, Gemini ile kategorize et ve gizlilik odaklı, profesyonel dashboard ile net değerini artır.",
                ctaMain: "Hemen Başla",
                ctaSecondary: "Fiyatlandırma"
            },
            trustBar: "Kişisel finansını dönüştüren 10.000'den fazla kullanıcıya katılın",
            features: {
                title: "Büyümek için ihtiyacınız olan her şey",
                subtitle: "Finansal sağlığınızı bir bakışta anlamanıza yardımcı olacak güçlü özellikler.",
                items: {
                    dashboard: {
                        title: "Akıllı Dashboard",
                        description: "Sezgisel grafikler ve gerçek zamanlı güncellemelerle finansal durumunuza kuş bakışı bakın."
                    },
                    ai: {
                        title: "AI Kategorizasyon",
                        description: "Özel Gemini modellerimizi kullanarak işlemlerinizi otomatik olarak etiketleyin ve düzenleyin."
                    },
                    currency: {
                        title: "Çoklu Döviz",
                        description: "USD, EUR, TRY ve daha fazlasını takip edin. Küresel net değeriniz anında hesaplansın."
                    },
                    import: {
                        title: "Akıllı İçe Aktarma",
                        description: "Herhangi bir bankadan kayıtları içe aktarın. Kararsız doğrudan banka bağlantılarına gerek yok."
                    },
                    analytics: {
                        title: "Gelişmiş Analitik",
                        description: "Pro raporlarla harcama alışkanlıklarınıza, eğilimlere ve tahminlere derinlemesine dalın."
                    },
                    security: {
                        title: "Özel ve Güvenli",
                        description: "Verileriniz sizindir. AES-256 şifreleme. Katı gizlilik standartlarını karşılıyoruz."
                    }
                }
            },
            howItWorks: {
                title: "Nasıl çalışır",
                subtitle: "Saatler değil, dakikalar içinde başlayın.",
                steps: {
                    step1: { title: "Uygulamayı İndirin", description: "Google Play'de mevcut. iOS yakında geliyor." },
                    step2: { title: "Harcamalarını Ekle", description: "Banka ekstrelerini içeri aktar veya işlemlerini manuel ekle." },
                    step3: { title: "AI Düzenlesin", description: "Gemini işlemlerini otomatik olarak kategorize eder." },
                    step4: { title: "AI Önerilerini Al", description: "Harcama alışkanlıkların hakkında kişisel ipuçları ve akıllı uyarılar al." },
                    step5: { title: "Varlığını Büyüt", description: "Net değerini takip et, trendleri gör, daha akıllı finansal kararlar ver." }
                }
            },
            cta: {
                title: "Kontrolü ele almaya hazır mısınız?",
                subtitle: "Finansal hayatını cecess ile düzenleyen binlerce kullanıcıya katılın.",
                button: "Hemen Başlayın"
            }
        },
        cookieConsent: {
            text: "Deneyiminizi geliştirmek için çerezleri kullanıyoruz. 'Kabul Et'e tıklayarak çerez kullanımımızı kabul etmiş olursunuz.",
            accept: "Kabul Et",
            reject: "Reddet"
        },
        footer: {
            tagline: "Herkes için kişisel finansı basitleştirme tutkusu.",
            product: "Ürün",
            company: "Şirket",
            social: "Sosyal Medya",
        },
    },
};
