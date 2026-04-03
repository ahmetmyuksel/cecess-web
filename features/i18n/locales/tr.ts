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
            current: "Mevcut Plan"
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
            remove: "Kaldır"
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
        balance: "Güncel Bakiye"
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
            lastUpdated: "Son Güncelleme: 10 Aralık 2025",
            intro: "cecess'e hoş geldiniz. Gizliliğinizi korumaya kararlıyız. Bu Gizlilik Politikası, web uygulamamızı kullandığınızda bilgilerinizi nasıl topladığımızı, kullandığımızı, ifşa ettiğimizi ve koruduğumuzu açıklar. Lütfen bu gizlilik politikasını dikkatlice okuyun. Bu gizlilik politikasının şartlarını kabul etmiyorsanız, lütfen uygulamaya erişmeyin.",
            sections: {
                info: {
                    title: "1. Topladığımız Bilgiler",
                    body: [
                        "Hakkınızdaki bilgileri çeşitli şekillerde toplayabiliriz. Uygulama aracılığıyla toplayabileceğimiz bilgiler şunları içerir:",
                        "Kişisel Veriler: Uygulamaya kaydolduğunuzda bize gönüllü olarak verdiğiniz adınız, gönderim adresiniz, e-posta adresiniz ve telefon numaranız gibi kişisel olarak tanımlanabilir bilgiler ve yaşınız, cinsiyetiniz, memleketiniz ve ilgi alanlarınız gibi demografik bilgiler.",
                        "Finansal Veriler: Uygulama üzerinden hizmetlerimiz hakkında bilgi satın aldığınızda, sipariş verdiğinizde, iade ettiğinizde, değiştirdiğinizde veya talep ettiğinizde toplayabileceğimiz ödeme yönteminizle ilgili veriler (ör. geçerli kredi kartı numarası, kart markası, son kullanma tarihi). Ayrıca gider takibi hizmetimizi sağlamak için bağlı banka hesaplarınızdan işlem verilerini de topluyoruz."
                    ]
                },
                use: {
                    title: "2. Bilgilerinizin Kullanımı",
                    body: [
                        "Hakkınızda doğru bilgilere sahip olmak, size sorunsuz, verimli ve özelleştirilmiş bir deneyim sunmamızı sağlar. Özellikle, Uygulama aracılığıyla hakkınızda toplanan bilgileri şu amaçlarla kullanabiliriz:",
                        "Hesabınızı oluşturmak ve yönetmek.",
                        "İşlemlerinizi işlemek ve satın alma onayları ve faturalar dahil olmak üzere ilgili bilgileri size göndermek.",
                        "Hesabınız veya siparişinizle ilgili olarak size e-posta göndermek.",
                        "Size müşteri desteği sağlamak.",
                        "Uygulama ile deneyiminizi geliştirmek için kullanım ve eğilimleri analiz etmek.",
                        "Uygulamadaki güncellemelerden sizi haberdar etmek."
                    ]
                },
                disclosure: {
                    title: "3. Bilgilerinizin İfşası",
                    body: [
                        "Hakkınızda topladığımız bilgileri belirli durumlarda paylaşabiliriz. Bilgileriniz şu şekilde ifşa edilebilir:",
                        "Yasa Gereği veya Hakları Korumak İçin: Hakkınızdaki bilgilerin yayınlanmasının yasal sürece yanıt vermek, politikalarımızın olası ihlallerini araştırmak veya çözmek veya başkalarının haklarını, mülkiyetini ve güvenliğini korumak için gerekli olduğuna inanırsak, bilgilerinizi geçerli herhangi bir yasa, kural veya düzenlemenin izin verdiği veya gerektirdiği şekilde paylaşabiliriz.",
                        "Üçüncü Taraf Hizmet Sağlayıcıları: Ödeme işleme, veri analizi, e-posta teslimi, barındırma hizmetleri, müşteri hizmetleri ve pazarlama yardımı dahil olmak üzere bizim için veya bizim adımıza hizmet veren üçüncü taraflarla bilgilerinizi paylaşabiliriz."
                    ]
                },
                security: {
                    title: "4. Bilgilerinizin Güvenliği",
                    body: [
                        "Kişisel bilgilerinizi korumaya yardımcı olmak için idari, teknik ve fiziksel güvenlik önlemleri kullanıyoruz. Bize sağladığınız kişisel bilgileri güvence altına almak için makul adımlar atmış olsak da, çabalarımıza rağmen hiçbir güvenlik önleminin mükemmel veya aşılamaz olmadığını ve hiçbir veri iletim yönteminin herhangi bir müdahaleye veya diğer kötüye kullanım türlerine karşı garanti edilemeyeceğini lütfen unutmayın."
                    ]
                },
                rights: {
                    title: "5. Haklarınız ve Seçimleriniz",
                    body: [
                        "Hakkınızda tuttuğumuz kişisel bilgilerle ilgili belirli haklarınız vardır. İstediğiniz zaman hesap ayarlarınıza giriş yaparak ve hesabınızı güncelleyerek veya bizimle iletişime geçerek hesabınızdaki bilgileri inceleyebilir veya değiştirebilir veya hesabınızı sonlandırabilirsiniz.",
                        "Hesabınızı sonlandırma talebiniz üzerine, hesabınızı ve bilgilerinizi aktif veritabanlarımızdan devre dışı bırakacağız veya sileceğiz. Ancak, dolandırıcılığı önlemek, sorunları gidermek, herhangi bir soruşturmaya yardımcı olmak, Kullanım Koşullarımızı uygulamak ve/veya yasal gerekliliklere uymak için bazı bilgiler dosyalarımızda tutulabilir."
                    ]
                },
                passwordSecurity: {
                    title: "5. Parola Güvenliği",
                    body: [
                        "Parola güvenliğiniz bizim için en büyük önceliktir. Kimlik bilgilerinizi doğrudan saklamıyoruz. Bunun yerine, parolanızı sıkı bir şekilde korumak için endüstri standardı Bcrypt hashing yöntemini kullanan Supabase Auth'u kullanıyoruz. Bu, parolanızı bizim bile göremeyeceğimiz anlamına gelir."
                    ]
                },
                changes: {
                    title: "6. Bu Gizlilik Politikasındaki Değişiklikler",
                    body: [
                        "Örneğin uygulamalarımızdaki değişiklikleri yansıtmak veya diğer operasyonel, yasal veya düzenleyici nedenlerle bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Herhangi bir değişikliği bu sayfada yeni Gizlilik Politikasını yayınlayarak size bildireceğiz."
                    ]
                },
                contact: {
                    title: "7. Bize Ulaşın",
                    body: [
                        "Bu Gizlilik Politikası hakkında sorularınız veya yorumlarınız varsa, lütfen profil ayarlarınızdaki destek bölümüne bakın."
                    ]
                }
            }
        },
        terms: {
            title: "Hizmet Şartları",
            lastUpdated: "Son Güncelleme: 10 Aralık 2025",
            intro: "cecess'e hoş geldiniz. Web sitemize ve hizmetlerimize erişerek veya bunları kullanarak, bu Hizmet Şartlarına ve yürürlükteki tüm yasalara ve düzenlemelere bağlı kalmayı kabul edersiniz. Bu şartlardan herhangi birini kabul etmiyorsanız, bu siteyi kullanmanız veya siteye erişmeniz yasaktır.",
            sections: {
                acceptance: {
                    title: "1. Şartların Kabulü",
                    body: [
                        "Bir hesap oluşturarak veya hizmetlerimizi kullanarak, bu Şartları okuduğunuzu, anladığınızı ve bunlara bağlı kalmayı kabul ettiğinizi beyan edersiniz.",
                        "Bu Şartları herhangi bir zamanda önceden bildirimde bulunmaksızın güncelleme veya değiştirme hakkını saklı tutarız. Herhangi bir değişiklikten sonra hizmeti kullanmaya devam etmeniz, yeni Şartları kabul ettiğiniz anlamına gelir."
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
                    title: "4. Ödeme ve Abonelikler",
                    body: [
                        "Hizmetin bazı bölümleri abonelik esasına göre ücretlendirilir. Düzenli ve periyodik olarak (örneğin aylık veya yıllık) önceden faturalandırılırsınız.",
                        "Ödemeler Stripe aracılığıyla güvenli bir şekilde işlenir. Ödeme bilgilerinizi sunucularımızda saklamıyoruz."
                    ]
                },
                cancellation: {
                    title: "5. İptal ve Fesih",
                    body: [
                        "Aboneliğinizi istediğiniz zaman hesap ayarlarınızdan iptal edebilirsiniz. Hizmetiniz, mevcut fatura döneminin sonuna kadar devam edecektir.",
                        "Şartları ihlal etmeniz dahil ancak bununla sınırlı olmamak üzere herhangi bir nedenle, önceden bildirimde bulunmaksızın veya sorumluluk kabul etmeksizin Hizmete erişiminizi derhal sonlandırabilir veya askıya alabiliriz."
                    ]
                },
                liability: {
                    title: "6. Sorumluluk Sınırlaması",
                    body: [
                        "cecess, yöneticileri, çalışanları, ortakları, acenteleri, tedarikçileri veya iştirakleri, Hizmete erişiminizden veya Hizmeti kullanımınızdan veya kullanamamanızdan kaynaklanan kâr, veri, kullanım, iyi niyet veya diğer maddi olmayan kayıplar dahil ancak bunlarla sınırlı olmamak üzere hiçbir doğrudan, dolaylı, arızi, özel, sonuçsal veya cezai hasardan sorumlu olmayacaktır."
                    ]
                },
                contact: {
                    title: "7. Bize Ulaşın",
                    body: [
                        "Bu Şartlar hakkında herhangi bir sorunuz varsa, lütfen profilinizdeki destek hizmeti bölümünü ziyaret edin."
                    ]
                }
            }
        },
        accountDeletion: {
            title: "Hesap Silme Talimatları",
            lastUpdated: "Son Güncelleme: 3 Nisan 2026",
            intro: "cecess olarak verileriniz üzerinde tam kontrole sahip olmanız gerektiğine inanıyoruz. Hizmetlerimizi artık kullanmamaya karar verirseniz, hesabınızı ve ilişkili tüm verileri kolayca silebilirsiniz.",
            sections: {
                mobileApp: {
                    title: "1. Hesabınızı Silmek (Mobil Uygulama)",
                    body: [
                        "Hesap silme işlemi, güvenliğinizi sağlamak ve cihazınızı doğrulamak amacıyla bilinçli olarak sadece cecess mobil uygulaması üzerinden yapılabilmektedir.",
                        "Hesabınızı silmek için:",
                        "1. iOS veya Android cihazınızda cecess mobil uygulamasını açın.",
                        "2. Silmek istediğiniz hesaba giriş yapın.",
                        "3. Ayarlar bölümüne (profil sayfanızdaki dişli çark simgesi) gidin.",
                        "4. 'Profil'e dokunun ve 'Hesabımı Sil' seçeneğini seçin.",
                        "5. Uyarıyı dikkatlice okuyun ve verilerinizi kalıcı olarak silme işlemini onaylayın."
                    ]
                },
                dataHandling: {
                    title: "2. Verilerinizi Nasıl İşliyoruz?",
                    body: [
                        "Silme işlemini onayladığınızda talebiniz anında işleme alınır.",
                        "Neler silinir: Hesap profiliniz, ilgili tüm işlem geçmişiniz, özel bütçeleriniz, kategorileriniz ve senkronizasyon kayıtlarınız aktif veritabanımızdan kalıcı olarak silinir.",
                        "Neler saklanır: Yasal zorunluluklar, güvenlik denetimleri veya (ücretsiz deneme istismarı gibi) dolandırıcılık faaliyetlerini önlemek amacıyla kesinlikle güvenlik gereği çok kısıtlı loglar geçici süreyle saklanabilir. Bu loglar hiçbir ticari amaçla kullanılmaz ve zamanla otomatik olarak silinir."
                    ]
                },
                contact: {
                    title: "3. Yardıma mı İhtiyacınız Var?",
                    body: [
                        "Artık mobil uygulamaya erişiminiz yoksa veya hesabınızı güvenli bir şekilde silerken herhangi bir sorun yaşarsanız, lütfen support@cecess.com adresinden destek ekibimizle iletişime geçin. Manuel bir silme işlemi gerçekleştirilmeden önce kimliğinizi doğrulamanız gerekeceğini unutmayın."
                    ]
                }
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
