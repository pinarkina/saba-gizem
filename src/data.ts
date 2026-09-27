export const signature = "Daha bilinçli · Daha zarif · Daha sen"
export const posture = "Sakin · Rafine · Güvenilir"
export const appName = "Cebimdeki Evim"
export const contactEmail = "housedoctorweb@gmail.com"

export const nav = [
  { to: "/egitimler", label: "Eğitimler" },
  { to: "/koleksiyon", label: "Koleksiyon" },
  { to: "/topluluk", label: "Topluluk" },
  { to: "/uygulama", label: "Uygulama" },
  { to: "/hakkimizda", label: "Hakkımızda" },
]

export const legalNav = [
  { to: "/gizlilik", label: "Gizlilik" },
  { to: "/kosullar", label: "Koşullar" },
  { to: "/kvkk", label: "KVKK" },
]

export const collectionCategories = [
  "Ritüel Defterleri",
  "Journal & Planner",
  "Meditasyon Kartları",
  "Dijital Rehberler",
  "Workbook'lar",
  "Hediye Setleri",
] as const

export const programs = [
  {
    slug: "kendine-donus",
    title: "21 Günlük Kendine Dönüş",
    excerpt: "Günlük ritüeller, sessizlik ve beden bilinciyle içsel dengeyi yeniden kurun.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
    meta: "Yeni seri",
    duration: "21 gün",
    format: "Kayıtlı + canlı kapanış",
    group: "Sınırlı kontenjan",
    lead: "Üç haftalık sakin bir ritim. Her gün kısa, uygulanabilir bir pratik; haftada bir derinleşme.",
    forWhom: [
      "Tempo kaybetmiş, yeniden düzen arayanlar",
      "Meditasyona yeni başlayanlar",
      "Güne ve geceye yumuşak bir çerçeve isteyenler",
    ],
    modules: [
      {
        title: "Hafta 1 · Sessizlik",
        text: "Nefes, sabah duruşu ve telefonu evin dışına bırakma alıştırmaları.",
      },
      {
        title: "Hafta 2 · Beden",
        text: "Yürüme, uyku ve sofra ritmiyle bedeni tekrar merkeze alma.",
      },
      {
        title: "Hafta 3 · Yön",
        text: "21 günün ardından evde kalacak üç kişisel ritüeli netleştirme.",
      },
    ],
  },
  {
    slug: "kadinlar-icin",
    title: "Kadınlar İçin Ruhsal Güçlenme",
    excerpt: "Sınır, ses ve özdeğer üzerine zarif, derin ve uygulaması kolay bir yol.",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=80",
    meta: "Canlı program",
    duration: "6 hafta",
    format: "Canlı oturumlar",
    group: "Kapalı kadın grubu",
    lead: "Sesini kısan alışkanlıkları nazikçe çözmek için seçilmiş bir çevre ve ölçülü bir müfredat.",
    forWhom: [
      "Hayır demekte zorlananlar",
      "İlişki ve işte kendini geri çekenler",
      "Gücü gürültü olmadan taşımak isteyenler",
    ],
    modules: [
      {
        title: "Sınır",
        text: "Nerede tükendiğinizi görmek ve ev, iş, ilişkide net bir çerçeve kurmak.",
      },
      {
        title: "Ses",
        text: "İsteği utanmadan söylemek; konuşmayı bir performans olmaktan çıkarmak.",
      },
      {
        title: "Özdeğer",
        text: "Onayı dışarıda aramayı bırakıp duruşu içeriden taşımak.",
      },
    ],
  },
  {
    slug: "ozgurluk",
    title: "Para ve Özgürlük Masterclass",
    excerpt: "Bolluğu bir sayı değil, bir duruş olarak ele alan seçkin bir çalışma.",
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=1600&q=80",
    meta: "Masterclass",
    duration: "4 oturum",
    format: "Masterclass kaydı",
    group: "Açık katılım",
    lead: "Para ile kurulan gergin ilişkiyi sadeleştirmek; kararları korkudan değil netlikten vermek.",
    forWhom: [
      "Kazansa da yetmeyen bir sıkışma yaşayanlar",
      "İşini büyütürken değerini düşürenler",
      "Özgürlüğü yalnızca hesapta arayanlar",
    ],
    modules: [
      {
        title: "Dil",
        text: "Para hakkında konuşurken kullanılan utanç ve acele dilini fark etmek.",
      },
      {
        title: "Karar",
        text: "Harcamayı, fiyatı ve seçimi bir duruş olarak ele almak.",
      },
      {
        title: "Alan",
        text: "Bolluğu evin ritmine, zamana ve seçilmiş çevreye yaymak.",
      },
    ],
  },
]

export const products = [
  {
    slug: "rituel-defteri",
    title: "Ritüel Defteri",
    category: "Ritüel Defterleri",
    excerpt: "Güne ve geceye alan açan, yazması kolay sayfalar.",
    image: "/images/products/gunluk.jpg",
    lead: "Sabah niyeti ve gece kapanışı için ölçülü, zarif bir defter.",
    details: ["Keten kapak", "90 gün", "Fiziksel + dijital şablon"],
    featured: true,
  },
  {
    slug: "journal-planner",
    title: "Journal & Planner",
    category: "Journal & Planner",
    excerpt: "Günü şişirmeden tutan plan ve günlük.",
    image: "/images/products/gunluk.jpg",
    lead: "Haftayı sakin bir ritimde tutmak için sade bir düzen.",
    details: ["Haftalık görünüm", "Sabah / gece", "Dijital PDF"],
    featured: false,
  },
  {
    slug: "meditasyon-kartlari",
    title: "Rehber Kartlar",
    category: "Meditasyon Kartları",
    excerpt: "Güne tek bir cümle, tek bir duruş.",
    image: "/images/products/workbook.jpg",
    lead: "Cebinde veya yastığının yanında duran 36 kartlık sakin bir destesi.",
    details: ["36 kart", "Keten kılıf", "Rehber kitapçık"],
    featured: true,
  },
  {
    slug: "dijital-rehberler",
    title: "Dijital Rehberler",
    category: "Dijital Rehberler",
    excerpt: "Sesli pratikler ve yazılı yollar.",
    image: "/images/products/meditasyon.jpg",
    lead: "Sabah ve gece için kısa, sıcak sesli seanslar ve yazılı rehberler.",
    details: ["12 ses kaydı", "8–14 dakika", "Evde veya yolda"],
    featured: false,
  },
  {
    slug: "workbook",
    title: "Dijital Workbook",
    category: "Workbook'lar",
    excerpt: "Dönüşümü evde sürdüren çalışma sayfaları.",
    image: "/images/products/workbook.jpg",
    lead: "Programlardan sonra evde kalacak sorular ve pratikler.",
    details: ["3 tema", "Yazdırılabilir", "Kendi hızında"],
    featured: true,
  },
  {
    slug: "hediye-seti",
    title: "Hediye Seti",
    category: "Hediye Setleri",
    excerpt: "Defter, kart ve ışık bir arada.",
    image: "/images/products/rituel.jpg",
    lead: "Seçilmiş birine, gürültüsüz bir hediye. Ritüel defteri, kartlar ve mum.",
    details: ["Defter + kartlar", "Mum", "El yazısı not"],
    featured: false,
  },
]

export const journeys = [
  {
    title: "İlişkiler",
    text: "Daha seçici, daha bağlı.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Denge",
    text: "Tempo ile nefes aynı yerde.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Özdeğer",
    text: "Onayı içeriden taşı.",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Bolluk",
    text: "Sayı değil, bir duruş.",
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Aile Kalıpları",
    text: "Evin eski ritmini yumuşat.",
    image:
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "İçsel Sakinlik",
    text: "Sessizliği evine al.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400&q=80",
  },
]

export const stories = [
  {
    name: "Melisa A.",
    place: "İstanbul",
    quote: "İlk kez bir programın ardından evime ve kendime aynı nezaketle bakabildim.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Sarah L.",
    place: "Berlin",
    quote: "Estetik kadar derinlik de var. Acele ettirmiyor, ama değiştiriyor.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Elif D.",
    place: "İzmir",
    quote: "Topluluk gürültüsüz. İnsanlar gerçekten dinliyor, ben de öyle.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
]
