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
            managementDesc: "Hesabınızı yönetmek, profilinizi güncellemek, şifrenizi değiştirmek veya hesabınızı silmek için lütfen Cecess mobil uygulamasını kullanın."
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
            export: {
                title: "Veri İndir",
                desc: "Finansal verilerinizi CSV dosyası olarak indirin.",
                button: "CSV İndir"
            },
            import: {
                title: "Veri Yükle",
                desc: "İşlemleri CSV dosyasından içe aktarın.",
                button: "CSV Yükle"
            },
            delete: {
                desc: "Bir yıldan eski işlem verilerini kalıcı olarak silin.",
                button: "Verileri Sil"
            }
        },
        deleteAccount: {
            title: "Hesabı Sil",
            desc: "Hesabınızı ve tüm verilerinizi kalıcı olarak silin. Bu işlem geri alınamaz.",
            button: "Hesabımı Sil"
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
    transactions: {
        title: "Tüm İşlemler",
        addTransaction: "+ İşlem Ekle",
        editTransaction: "İşlem Düzenle",
        deleteSelected: "Sil",
        deleteConfirm: "{count} işlemi silmek istediğinize emin misiniz?",
        rows: "Satır:",
        of: "/",
        form: {
            name: "İşlem Adı",
            category: "Kategori",
            amount: "Tutar",
            date: "Tarih (İsteğe Bağlı)",
            cancel: "İptal",
            add: "İşlem Ekle",
            save: "Kaydet"
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
        addManual: "+ Manuel Ekle",
        linkBank: "Banka Hesabı Bağla",
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
        modals: {
            add: "Manuel Hesap Ekle",
            edit: "Hesabı Düzenle",
            deleteConfirm: "Bu hesabı silmek istediğinize emin misiniz? İlgili tüm işlemler de silinecektir."
        },
        form: {
            name: "Hesap Adı",
            type: "Hesap Türü",
            currency: "Para Birimi",
            currentBalance: "Güncel Bakiye",
            initialBalance: "Başlangıç Bakiyesi",
            cancel: "İptal",
            add: "Hesap Ekle",
            update: "Hesabı Güncelle"
        }
    },
    categories: {
        title: "Kategoriler",
        subtitle: "Harcama kategorilerinizi yönetin (Sıralamak için sürükleyin).",
        addCategory: "+ Kategori Ekle",
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
        modals: {
            add: "Kategori Ekle",
            edit: "Kategoriyi Düzenle"
        },
        form: {
            name: "Ad",
            type: "Tür",
            icon: "İkon",
            pickIcon: "İkon Seç",
            cancel: "İptal",
            save: "Kaydet",
            saving: "Kaydediliyor..."
        }
    },
    importFlow: {
        title: "Dosya İçe Aktar",
        subtitle: "Finansal verilerinizi CSV veya Excel dosyasından yükleyin ve içe aktarın.",
        upload: {
            title: "Dosya Yükle",
            desc: "Başlamak için işlem dosyanızı seçin.",
            currency: "Para Birimi:",
            clickToUpload: "Yüklemek için Tıkla",
            orDragDrop: "veya sürükle bırak",
            supportedFormats: "Desteklenen formatlar: CSV, Excel (.xls, .xlsx)"
        },
        instructions: {
            title: "Talimatlar",
            step1: "İşlem verilerini içeren dosyanızı yükleyin.",
            step2: "Dosyanızdaki sütunları sistem alanlarımızla eşleştirin (Tarih, Açıklama, Tutar).",
            step3: "İşlemlerinizi tamamlamadan önce gözden geçirin ve kategorilere ayırın."
        },
        mapping: {
            title: "Sütunları Eşle",
            subtitle: "Dosya sütunlarını doğru veri alanlarıyla eşleştirin.",
            columnMapping: "Sütun Eşleme",
            warning: "Sütunların doğru eşleştiğinden emin olmak için lütfen aşağıdaki <strong>Canlı Önizleme</strong> alanını kontrol edin. Hatalı eşleme eksik tarih veya tutarlara yol açabilir.",
            mapTo: "Eşle:",
            livePreview: "Canlı Önizleme",
            previewDesc: "Mevcut eşleme ile verilerinizin nasıl göründüğünü inceleyin.",
            buttons: {
                back: "Geri",
                next: "İleri: Kategorileri Düzenle →"
            },
            headers: {
                date: "Tarih",
                description: "Açıklama",
                amount: "Tutar"
            },
            placeholders: {
                selectColumn: "Sütun seç...",
                searchColumn: "Sütun ara...",
                noColumn: "Sütun bulunamadı.",
                unmapped: "Eşleşmedi"
            }
        },
        arrange: {
            title: "Kategorileri Düzenle",
            subtitle: "İçe aktarılan işlemlerinizi gözden geçirin ve kategorilere ayırın.",
            buttons: {
                back: "Geri",
                analyze: "Analiz ediliyor...",
                aiCategorize: "AI Otomatik Kategorize Et",
                finish: "İçe Aktarmayı Bitir"
            },
            newCategories: {
                title: "Yeni Kategoriler Bulundu",
                desc: "Yapay zeka bu yeni kategorileri tespit etti. Listeye eklemek için tıklayın (işlemler otomatik atanmaz).",
                add: "+ Ekle"
            },
            importedTransactions: {
                title: "İçe Aktarılan İşlemler",
                desc: "{count} işlem içe aktarıldı. Lütfen aşağıdan kategorize edin."
            },
            table: {
                date: "Tarih",
                description: "Açıklama",
                amount: "Tutar",
                category: "Kategori"
            },
            placeholders: {
                selectCategory: "Kategori seç...",
                searchCategory: "Kategori ara...",
                noCategory: "Kategori bulunamadı."
            },
            alerts: {
                allCategorized: "Tüm işlemler zaten kategorize edilmiş!",
                errorAI: "AI kategorizasyonu sırasında bir hata oluştu.",
                uncategorizedWarn: "{count} adet kategorize edilmemiş işleminiz var. Devam edilsin mi?",
                success: "Başarıyla {count} işlem içe aktarıldı!"
            },
            aiPopup: {
                title: "Yapay Zeka Gücünü Aç",
                desc: "Bunun için Premium veya Pro plana sahip olmalısın.",
                button: "Planı Yükselt"
            }
        }
    },
    public: {
        nav: {
            home: "Anasayfa",
            pricing: "Fiyatlandırma",
            privacy: "Gizlilik",
            faq: "SSS",
            login: "Giriş Yap",
            signup: "Kayıt Ol",
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
            subtitle: "Ücretsiz başlayın ve büyüdükçe yükseltin. Tüm planlar, premium özelliklerimizin 14 günlük ücretsiz deneme sürümünü içerir. Kredi kartı gerekmez.",
            monthly: "Aylık",
            annual: "Yıllık",
            discount: "%20 Tasarruf Et",
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
        },
        faq: {
            title: "Sıkça Sorulan Sorular",
            subtitle: "Hizmetlerimiz, özelliklerimiz, fiyatlandırmamız ve daha fazlası hakkında sık sorulan soruların yanıtlarını bulun.",
            search: "Bir soru arayın...",
            items: {
                q1: {
                    q: "Kategorizasyon için ne tür bir yapay zeka kullanılıyor?",
                    a: "Harcamalarınızı otomatik ve doğru bir şekilde kategorize etmek için milyonlarca finansal işlem üzerinde eğitilmiş tescilli bir makine öğrenimi modeli kullanıyoruz. Zamanla daha da akıllı hale gelmek için düzeltmelerinizi öğrenir.",
                    cat: "Features"
                },
                q2: {
                    q: "Özel harcama kategorileri oluşturabilir miyim?",
                    a: "Evet. Bütçenize ve harcama takibinize uyması için özel kategoriler oluşturabilir, yeniden adlandırabilir ve silebilirsiniz.",
                    cat: "Features"
                },
                q3: {
                    q: "Uygulama yinelenen ödemeleri ve abonelikleri takip ediyor mu?",
                    a: "Kesinlikle. Yinelenen ödemeler ve abonelikler otomatik olarak algılanır, bu da kaçırılan yenilemelerden kaçınmanıza ve tasarruf fırsatlarını fark etmenize yardımcı olur.",
                    cat: "Features"
                },
                q4: {
                    q: "Premium özellikler için ücretsiz deneme sunuyor musunuz?",
                    a: "Evet. Yeni kullanıcılar, kredi kartı gerekmeden premium özelliklerin 14 günlük ücretsiz deneme sürümünü alır.",
                    cat: "Pricing"
                },
                q5: {
                    q: "Bağlı banka hesaplarımı nasıl güncellerim?",
                    a: "Bağlı kurumları istediğiniz zaman eklemek, yenilemek veya kaldırmak için Hesap Ayarları → Bağlantılar'a gidin. Değişiklikler anında senkronize edilir.",
                    cat: "Account Management"
                },
                q6: {
                    q: "Finansal verilerim nasıl korunuyor?",
                    a: "Banka düzeyinde şifreleme, periyodik güvenlik incelemeleri kullanıyoruz ve verilerinizi asla satmıyoruz. Hesapların bağlantısını istediğiniz zaman kesebilirsiniz.",
                    cat: "Security"
                },
                q7: {
                    q: "Destek ekibine nasıl ulaşabilirim?",
                    a: "İletişim e-posta adresimizi profilinizin Ayarlar bölümünde bulabilirsiniz.",
                    cat: "Support"
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
                        "Parolalar Supabase Auth aracılığıyla Bcrypt kullanılarak hashlenir — düz metin kimlik bilgilerini asla saklamıyoruz."
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
                        "Gizlilik sorularınız için bize support@cecess.com adresinden ulaşabilirsiniz."
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
                        "Bu Koşullar hakkında herhangi bir sorunuz varsa, lütfen bize support@cecess.com adresinden ulaşın."
                    ]
                }
            }
        },
        accountDeletion: {
            title: "Hesap Silme Talimatları",
            lastUpdated: "Son Güncelleme: 3 Nisan 2026",
            intro: "cecess'te gizlilik hakkınıza saygı duyuyoruz ve hesabınızı ve ilgili tüm kişisel verilerinizi silmek için net bir yol sunuyoruz. Google Play'in Unutulma Hakkı gereksinimlerine uymak için lütfen aşağıdaki adımları izleyin.",
            sections: {
                mobileApp: {
                    title: "Hesabınızı Nasıl Silersiniz?",
                    body: [
                        "Adım 1: Cihazınızda cecess mobil uygulamasını açın.",
                        "Adım 2: Hesabınıza giriş yapın.",
                        "Adım 3: Profil sekmesi üzerinden 'Ayarlar'a gidin.",
                        "Adım 4: Menünün altındaki 'Hesabımı Sil' seçeneğine dokunun.",
                        "Adım 5: Kararınızı onaylayın. Hesabınız ve ilgili tüm veriler derhal silinmek üzere işleme alınacaktır."
                    ]
                },
                dataHandling: {
                    title: "Hangi Veriler Silinir?",
                    body: [
                        "Onayınızın ardından şu veriler aktif veritabanlarımızdan kalıcı olarak kaldırılır: kullanıcı profiliniz (ad, e-posta), tüm işlem geçmişi, hesap kayıtları, özel kategoriler ve oluşturulan finansal raporlar.",
                        "Silme işlemi tamamlandıktan sonra finansal verilerinizin kopyalarını tutmuyoruz."
                    ]
                },
                contact: {
                    title: "Manuel Silme Talebi",
                    body: [
                        "Mobil uygulamaya erişemiyorsanız, hesabınızla ilişkili e-posta adresinden support@cecess.com adresine e-posta göndererek manuel hesap silme talebinde bulunabilirsiniz. Talebinizi 48 saat içinde işleme alacağız."
                    ]
                }
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
