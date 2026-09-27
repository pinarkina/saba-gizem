import { Founder } from "../components/Founder"

export function About() {
  return (
    <main className="section-ivory">
      <section className="container about-stage about-stage-text">
        <div className="about-copy">
          <span className="kicker">Daha bilinçli · Daha zarif · Daha sen</span>
          <h1 className="serif">Prestij, sadelikte gizlidir.</h1>
          <p className="about-lead">Saba Gizem bir markadan önce bir duruştur.</p>
          <p>
            Daha fazla içerik değil, daha doğru bir tempo. Daha yüksek ses değil,
            daha seçkin bir dil. Bu ev; eğitim, ürün ve topluluğu aynı ılık palet
            altında bir araya getirir.
          </p>
          <p>
            Amacımız insanın kendi ışığını dışarıdaki gürültüye kaptırmadan
            yaşamasına eşlik etmek. Her detay — tipografi, boşluk, fotoğraf —
            bu vaadi taşımak için seçildi.
          </p>
        </div>
      </section>
      <Founder />
      <section className="container page-grid three about-values">
        <article className="value-card">
          <h3>Sakin</h3>
          <p>Acele yok. Doğru tempo, doğru ışık, ölçülü bir dil.</p>
        </article>
        <article className="value-card">
          <h3>Rafine</h3>
          <p>Göz yormayan prestij. Kristal değil; boşluk, kumaş ve sessizlik.</p>
        </article>
        <article className="value-card">
          <h3>Güvenilir</h3>
          <p>Uygulanabilir bir yöntem. Evde, işte, ilişkide kalan bir duruş.</p>
        </article>
      </section>
    </main>
  )
}
