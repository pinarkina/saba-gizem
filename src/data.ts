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

export type Program = {
  slug: string
  title: string
  excerpt: string
  image: string
  meta: string
  price: string
  duration: string
  format: string
  group: string
  lead: string
  forWhom: string[]
  modules: { title: string; text: string }[]
}

export const programs: Program[] = [
  {
    slug: "numerolojik-analiz",
    title: "Kişiye Özel Numerolojik Analiz",
    excerpt:
      "Doğum tarihiniz ve isminiz üzerinden hazırlanan kişisel numerolojik harita. Karakter, ilişki, kariyer ve tekrar eden yaşam temaları.",
    image: "/images/numerolojik-analiz.jpg",
    meta: "Kişiye özel",
    price: "4.500 TL",
    duration: "30 sayfa",
    format: "Rapor + online görüşme",
    group: "20 dk birebir",
    lead: "Neden bazı şeyler sürekli tekrar ediyor, neden hep benzer insanlarla karşılaşıyorsunuz, neden bazı konularda kolay ilerlerken bazı alanlarda aynı noktaya dönüyorsunuz? Doğduğunuz tarih ve size verilen isim üzerinden çıkarılan bu harita, birkaç sayı hesabı değil; hayatınızın farklı alanlarını bir bütün olarak okuyan kişiye özel bir çalışmadır.",
    forWhom: [
      "Hayatında bazı şeylerin sürekli tekrar ettiğini fark edenler",
      "Hep benzer insanlarla karşılaşanlar",
      "Bazı konularda kolay ilerlerken bazı alanlarda aynı noktaya dönenler",
      "İlişki, kariyer ve para kalıplarını adıyla görmek isteyenler",
    ],
    modules: [
      {
        title: "Karakter yapınız",
        text: "Doğuştan getirdiğiniz yapı ve güçlü taraflar. Hangi özelliklerin sizi desteklediği, hangi yeteneklerinizi yeterince kullanmadığınız, dışarıdan nasıl algılandığınız ve içinizdeki gerçek motivasyon.",
      },
      {
        title: "Tekrar eden temalar",
        text: "İlişkilerde, ailede, para ve kariyerde neden benzer döngüler yaşayabildiğiniz; hangi konuların tekrar tekrar karşınıza çıktığı ve bunların hangi gelişim alanlarına işaret ettiği.",
      },
      {
        title: "Geliştirilmesi gereken yönler",
        text: "Haritada yeterince çalışmayan alanlar ve hangi özelliklerinizi güçlendirmeniz gerekebileceği. Adını koyamadığınız eksiklerin görünür hale gelmesi.",
      },
      {
        title: "İlişki dinamikleri",
        text: "Sevgiyi nasıl verdiğiniz ve aldığınız, ilişkide neye ihtiyaç duyduğunuz, sizi hangi karakterlerin çekebildiği ve tekrar eden davranış biçimleriniz.",
      },
      {
        title: "Para, kariyer ve üretim",
        text: "Hangi çalışma biçimlerinde daha rahat ilerleyebileceğiniz, liderlik ve girişimcilik tarafınız, para ile kurduğunuz ilişki ve sizi üretimde destekleyen özellikler.",
      },
      {
        title: "Yaşam döngünüz",
        text: "Şu anda hangi yaşam temasının ön planda olduğu, önünüzdeki dönemin hangi konuları vurguladığı ve enerjinizi hangi alanlarda daha bilinçli kullanabileceğiniz.",
      },
      {
        title: "Rapor ve görüşme",
        text: "Yaklaşık 30 sayfalık kişiye özel Numerolojik Yaşam Haritası. Analiz hazırlandıktan sonra 20 dakikalık birebir online görüşmede öne çıkan başlıklar açıklanır ve haritanızın size ne anlattığı birlikte aktarılır.",
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
