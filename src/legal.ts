export type LegalBlock = {
  title: string
  paragraphs: string[]
  list?: string[]
}

export type LegalDoc = {
  slug: "gizlilik" | "kosullar" | "kvkk"
  kicker: string
  title: string
  updated: string
  lead: string
  sections: LegalBlock[]
}

const updated = "27 Eylül 2026"
const controller = "Saba Gizem Mutlu"
const contact = "Site üzerindeki Başla formu veya housedoctorweb@gmail.com"

export const legalDocs: LegalDoc[] = [
  {
    slug: "gizlilik",
    kicker: "Gizlilik Politikası",
    title: "Veriniz burada gürültüye karışmaz.",
    updated,
    lead:
      "Saba Gizem, sakin bir evdir. Bu sayfa; siteyi, eğitimleri, koleksiyonu, topluluğu ve başvuruları kullanırken bilgilerinizin nasıl toplandığını, neden tutulduğunu ve kime açıldığını açıkça anlatır.",
    sections: [
      {
        title: "1. Kim bu politikayı yayımlıyor?",
        paragraphs: [
          `Bu gizlilik politikası, ${controller} tarafından işletilen Saba Gizem markasına aittir. Veri sorumlusu sıfatıyla kişisel verileriniz 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) ve ilgili mevzuat çerçevesinde işlenir.`,
          "Politika; sabagizem alan adı altındaki internet sitesi, eğitim kayıtları, koleksiyon siparişleri, topluluk alanı, uygulama ve iletişim formları için geçerlidir.",
        ],
      },
      {
        title: "2. Hangi bilgileri toplarız?",
        paragraphs: [
          "Yalnızca hizmeti sunmak, başvurunuza dönmek ve yasal yükümlülükleri yerine getirmek için gereken kadarını isteriz.",
        ],
        list: [
          "Kimlik ve iletişim: ad, soyad, e-posta, telefon (form veya siparişte verdiğiniz ölçüde).",
          "Başvuru içeriği: ilgi alanı, program tercihi ve bıraktığınız not.",
          "İşlem bilgisi: eğitim kaydı, koleksiyon siparişi, teslimat ve fatura bilgileri.",
          "Topluluk ve uygulama: hesap adı, tercihleriniz, katıldığınız alanlar.",
          "Teknik kayıt: IP adresi, tarayıcı türü, cihaz, ziyaret edilen sayfalar, çerez tanımlayıcıları.",
        ],
      },
      {
        title: "3. Bu bilgileri neden kullanırız?",
        paragraphs: [
          "Amacımız sizi izlemek değil; doğru kapıyı açmak ve verdiğimiz sözü tutmaktır.",
        ],
        list: [
          "Başvurunuza, sorunuza veya siparişinize yanıt vermek.",
          "Eğitim, koleksiyon ve uygulama hizmetini sunmak, kaydı yönetmek.",
          "Ödeme, teslimat, fatura ve yasal saklama yükümlülüklerini yerine getirmek.",
          "Siteyi güvenli, sakin ve çalışır tutmak; hataları gidermek.",
          "Açık rızanız varsa; yeni program, ritüel veya koleksiyon notlarını iletmek.",
        ],
      },
      {
        title: "4. Çerezler ve ölçüm",
        paragraphs: [
          "Site, oturumun sürmesi, dil ve güvenlik için zorunlu çerezler kullanabilir. Performans ve istatistik çerezleri yalnızca gerekli olduğu ölçüde ve mümkün olduğunca anonimleştirilmiş olarak çalışır.",
          "Tarayıcı ayarlarınızdan çerezleri sınırlayabilirsiniz. Zorunlu çerezleri kapatmak bazı sayfaların düzgün açılmasını engelleyebilir.",
        ],
      },
      {
        title: "5. Kimlerle paylaşılır?",
        paragraphs: [
          "Verileriniz satılmaz, kiralanmaz, pazarlık konusu yapılmaz. Yalnızca hizmetin işlemesi için zorunlu olan sınırlı alıcılarla paylaşılır:",
        ],
        list: [
          "Barındırma, e-posta ve form altyapısı sağlayan teknik hizmetler.",
          "Ödeme kuruluşları ve kargo / teslimat ortakları (sipariş varsa).",
          "Muhasebe ve hukuki danışmanlar (yasal zorunluluk halinde).",
          "Yetkili kamu kurumları; yalnızca kanunla öngörülen hâllerde.",
        ],
      },
      {
        title: "6. Saklama süresi",
        paragraphs: [
          "Veriler, işleme amacının gerektirdiği süre ve ilgili mevzuattaki zamanaşımı / saklama süreleri kadar tutulur. Süre dolunca silinir, yok edilir veya anonimleştirilir.",
          "Başvuru formları, kayıt ve fatura kayıtları ticari ve vergi yükümlülükleri nedeniyle daha uzun süre muhafaza edilebilir.",
        ],
      },
      {
        title: "7. Haklarınız",
        paragraphs: [
          "KVKK’nın 11. maddesi kapsamındaki haklarınızı kullanabilirsiniz: verinizin işlenip işlenmediğini öğrenme, bilgi talep etme, amacına uygun kullanılıp kullanılmadığını öğrenme, aktarıldığı üçüncü kişileri bilme, düzeltme, silme / yok edilmesini isteme, itiraz ve zararın giderilmesini talep etme.",
          `Başvurularınızı ${contact} üzerinden iletebilirsiniz. Ayrıntılı metin için KVKK Aydınlatma Metni’ne bakınız.`,
        ],
      },
      {
        title: "8. Güncellemeler",
        paragraphs: [
          "Bu politika, hizmet veya mevzuat değiştikçe yenilenebilir. Güncel metin her zaman bu sayfada yayımlanır. Önemli değişikliklerde sitede kısa bir not düşeriz.",
        ],
      },
    ],
  },
  {
    slug: "kosullar",
    kicker: "Kullanım Koşulları",
    title: "Bu evin kapısı açık, çerçevesi nettir.",
    updated,
    lead:
      "Siteyi gezmek, eğitim veya koleksiyona başvurmak, topluluğa ve uygulamaya katılmak bu koşulları kabul etmek anlamına gelir. Dilimiz sakin; taahhütlerimiz ölçülüdür.",
    sections: [
      {
        title: "1. Taraflar ve kapsam",
        paragraphs: [
          `Bu site ve bağlı hizmetler ${controller} (“Saba Gizem”) tarafından sunulur. Koşullar; ziyaretçi, başvuru sahibi, katılımcı ve alıcı için geçerlidir.`,
          "Eğitim, ürün, topluluk veya uygulama için ayrıca bir sözleşme, ön bilgilendirme veya mesafeli satış formu imzalanırsa o metin, çelişen hükümlerde önceliklidir.",
        ],
      },
      {
        title: "2. Sitenin kullanımı",
        paragraphs: [
          "İçerik kişisel ve hukuka uygun kullanım içindir. Siteyi bozmaya, otomatik tarama ile aşırı yüklemeye, başka birinin hesabına girmeye veya yanıltıcı bilgi bırakmaya izin verilmez.",
          "18 yaşından küçükseniz siteyi velinizin gözetiminde kullanmalısınız. Ücretli program ve ürünler reşit kullanıcılara yöneliktir.",
        ],
      },
      {
        title: "3. Eğitimler ve içerik niteliği",
        paragraphs: [
          "Eğitimler, ritüeller ve yazılı materyaller kişisel gelişim, duruş ve günlük pratik alanındadır. Tıbbi teşhis, tedavi, psikoterapi veya hukuki / mali danışmanlık yerine geçmez.",
          "Sonuç kişiye, tempo ve uygulamaya göre değişir. Belirli bir dönüşüm, gelir veya sağlık vaadi verilmez. Kendi sınırınızı ve gerektiğinde uzman desteğini siz belirlersiniz.",
        ],
      },
      {
        title: "4. Koleksiyon ve sipariş",
        paragraphs: [
          "Koleksiyon ürünlerinin görselleri, stok ve teslimat bilgileri olabildiğince güncel tutulur. Nadiren renk, kâğıt veya baskı tonunda hafif fark olabilir; bu, el emeği ve doğal malzeme dilinin parçasıdır.",
          "Sipariş, ödemenin onaylanmasıyla oluşur. Cayma, iade ve ayıplı mal haklarınız 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği çerçevesinde saklıdır. Dijital içerik ve kişiselleştirilmiş ürünlerde cayma hakkı, kanunun izin verdiği hâllerde sınırlı olabilir.",
        ],
      },
      {
        title: "5. Topluluk ve uygulama",
        paragraphs: [
          "Topluluk ve uygulama, gürültüsüz bir alan olarak kurgulanmıştır. Paylaşımlar saygılı, gizli ve başkasının hikâyesini ifşa etmeyen bir dilde tutulur.",
          "Nefret söylemi, spam, izinsiz satış ve başka katılımcının verisini yaymak hesabın kapatılması sebebidir. Saba Gizem, alanı korumak için içeriği kaldırma hakkını saklı tutar.",
        ],
      },
      {
        title: "6. Fikri mülkiyet",
        paragraphs: [
          "Metin, fotoğraf, tipografi düzeni, program müfredatı, workbook ve marka unsurları Saba Gizem’e veya lisans verenlerine aittir. Satın alınan dijital rehber kişisel kullanım içindir; çoğaltılmaz, yeniden satılmaz, herkese açık paylaşılmaz.",
          "Alıntı yapmak isterseniz kaynak göstererek, ticari olmayan ve ölçülü biçimde yazabilirsiniz. Eğitim kayıtlarının kaydı ve yayını izne tabidir.",
        ],
      },
      {
        title: "7. Sorumluluğun sınırı",
        paragraphs: [
          "Site “olduğu gibi” sunulur. Kesintisiz, hatasız veya kesintisiz erişim taahhüt edilmez. Mücbir sebep, bağlantı veya üçüncü taraf altyapı arızalarında gecikmeden Saba Gizem sorumlu tutulamaz.",
          "Kanunun emredici hükümleri saklı kalmak kaydıyla sorumluluk, ilgili hizmet için ödenen bedelle sınırlıdır. Tüketici hakları bu maddeden etkilenmez.",
        ],
      },
      {
        title: "8. Değişiklik ve uygulanacak hukuk",
        paragraphs: [
          "Koşullar zaman zaman güncellenebilir. Yayımlandığı andan itibaren geçerlidir. Uyuşmazlıklarda Türkiye Cumhuriyeti hukuku uygulanır; tüketiciler için kanunen yetkili mahkemeler ve tüketici hakem heyetleri saklıdır.",
          `Sorularınız için ${contact} üzerinden bize yazabilirsiniz.`,
        ],
      },
    ],
  },
  {
    slug: "kvkk",
    kicker: "KVKK Aydınlatma Metni",
    title: "Kişisel verileriniz ölçülü işlenir.",
    updated,
    lead:
      "6698 sayılı Kişisel Verilerin Korunması Kanunu’nun 10. maddesi gereği; veri sorumlusu kimdir, veriniz neden işlenir, kimlere aktarılır ve hangi haklara sahipsiniz, burada duru bir dille anlatılır.",
    sections: [
      {
        title: "1. Veri sorumlusu",
        paragraphs: [
          `Veri sorumlusu: ${controller}, Saba Gizem markasının işletmecisi.`,
          `Başvuru kanalı: ${contact}. Yazılı başvurularınızda ad-soyad, T.C. kimlik numarası (uygulamayı kolaylaştırmak için), tebligata elverişli adres veya e-posta ve talebinizin konusu bulunmalıdır.`,
        ],
      },
      {
        title: "2. İşlenen kişisel veri kategorileri",
        paragraphs: [
          "Hizmetin türüne göre aşağıdaki kategoriler işlenebilir:",
        ],
        list: [
          "Kimlik: ad, soyad.",
          "İletişim: e-posta, telefon, adres.",
          "Müşteri işlem: başvuru notu, program / ürün tercihi, sipariş ve ödeme kaydı.",
          "Finans: fatura ve tahsilat bilgisi (ödeme kuruluşu üzerinden).",
          "İşlem güvenliği: IP, log, çerez, cihaz bilgisi.",
          "Görsel ve işitsel kayıt: yalnızca sizin yüklediğiniz veya açık rızayla alınan materyal.",
        ],
      },
      {
        title: "3. İşleme amaçları",
        paragraphs: [
          "Veriler; eğitim ve koleksiyon hizmetinin sunulması, başvuruların cevaplanması, sözleşme ve mesafeli satış süreçlerinin yürütülmesi, fatura ve mali yükümlülüklerin yerine getirilmesi, bilgi güvenliği, yasal hakların tesisi ve — açık rıza varsa — duyuru iletilmesi amaçlarıyla işlenir.",
        ],
      },
      {
        title: "4. Hukuki sebepler",
        paragraphs: [
          "KVKK m. 5 ve m. 6 kapsamında işleme, başlıca şu hukuki sebeplere dayanır:",
        ],
        list: [
          "Bir sözleşmenin kurulması veya ifası (m. 5/2-c).",
          "Veri sorumlusunun hukuki yükümlülüğü (m. 5/2-ç) — vergi, tüketici, saklama.",
          "Bir hakkın tesisi, kullanılması veya korunması (m. 5/2-e).",
          "Meşru menfaat (m. 5/2-f) — site güvenliği, hizmet kalitesi; temel haklarınıza aykırı olmamak kaydıyla.",
          "Açık rıza (m. 5/1) — pazarlama iletileri ve zorunlu olmayan çerezler.",
        ],
      },
      {
        title: "5. Aktarım",
        paragraphs: [
          "Veriler, yukarıdaki amaçlarla sınırlı olarak; barındırma ve e-posta altyapısı, ödeme kuruluşları, kargo firmaları, mali müşavir ve yasal zorunluluk halinde yetkili kurumlara aktarılabilir.",
          "Yurt dışına aktarım söz konusu olursa KVKK’nın 9. maddesi ve Kurul kararlarına uygun hareket edilir. Kullanılan altyapı yurt dışında konumlanıyorsa bu durum, gerekli güvencelerle yürütülür.",
        ],
      },
      {
        title: "6. Toplama yöntemi",
        paragraphs: [
          "Veriler; internet sitesi formları, eğitim / ürün kayıtları, e-posta ve telefon yazışmaları, çerezler ve otomatik kayıtlardan, elektronik ortamda toplanır.",
        ],
      },
      {
        title: "7. Saklama ve imha",
        paragraphs: [
          "Kişisel veriler, Saba Gizem’in saklama ve imha politikasına uygun olarak; amaç için gerekli süre ve mevzuattaki asgari süreler kadar tutulur. Süre sonunda silinir, yok edilir veya anonim hâle getirilir.",
        ],
      },
      {
        title: "8. Kanun kapsamındaki haklarınız",
        paragraphs: [
          "KVKK m. 11 uyarınca veri sorumlusuna başvurarak:",
        ],
        list: [
          "Kişisel veri işlenip işlenmediğini öğrenme,",
          "İşlenmişse buna ilişkin bilgi talep etme,",
          "İşleme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme,",
          "Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,",
          "Eksik veya yanlış işlenmişse düzeltilmesini isteme,",
          "m. 7 kapsamındaki şartlarda silinmesini veya yok edilmesini isteme,",
          "Düzeltme / silme işlemlerinin aktarıldığı üçüncü kişilere bildirilmesini isteme,",
          "İşlenen verilerin münhasıran otomatik sistemler ile analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme,",
          "Kanuna aykırı işleme nedeniyle zarara uğramanız hâlinde zararın giderilmesini talep etme",
        ],
      },
      {
        title: "9. Başvuru usulü",
        paragraphs: [
          "Talepleriniz “Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ”e uygun olarak iletilir. Kimliğinizin teyit edilebilir olması gerekir.",
          "Başvurular, talebin niteliğine göre en geç otuz gün içinde sonuçlandırılır. İşlemin ayrıca bir maliyet gerektirmesi hâlinde, Kurulca belirlenen tarifedeki ücret istenebilir. Başvurunun reddi, gerekçesiyle birlikte size bildirilir. Sonucundan memnun kalmazsanız, Kişisel Verileri Koruma Kurulu’na şikâyet hakkınız saklıdır.",
        ],
      },
    ],
  },
]
