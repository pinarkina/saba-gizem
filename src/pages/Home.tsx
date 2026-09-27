import { Link } from "react-router-dom"
import { AppShowcase } from "../components/AppShowcase"
import { Founder } from "../components/Founder"
import { journeys, products, programs, signature, stories } from "../data"

export function Home() {
  return (
    <main>
      <section className="hero">
        <img
          className="hero-media"
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=2000&q=80"
          alt="Gün batımında sakin bir duruş"
        />
        <div className="hero-copy reveal">
          <span className="kicker">{signature}</span>
          <h1>İçindeki Işığı Dünyayla Buluştur.</h1>
          <p className="hero-lead">
            Saba Gizem, modern yaşamın gürültüsünden uzak; bilinçli dönüşüm ve
            daha anlamlı bir hayat için kurulan sakin bir ev.
          </p>
          <Link className="btn btn-light" to="/basla">
            Yolculuğunu Başlat
          </Link>
        </div>
        <ul className="hero-aside">
          <li>Mind</li>
          <li>Body</li>
          <li>Soul</li>
        </ul>
      </section>

      <section className="section section-ivory">
        <div className="container">
          <div className="space-head">
            <span className="kicker">{signature}</span>
            <h2>Bugün hayatında neye alan açmak istiyorsun?</h2>
            <p className="lead">
              Kart dizisi değil; sakin, rafine ve güvenilir bir davet. Nerede durduğunu
              fark et, oradan ilerle.
            </p>
          </div>
          <div className="journey-grid">
            {journeys.map((item) => (
              <Link key={item.title} to="/basla" className="journey-card">
                <div className="orbit">
                  <img src={item.image} alt={item.title} />
                  <span>+</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="banner">
        <img
          className="banner-media"
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2000&q=80"
          alt="Orman yolu"
        />
        <div className="banner-copy">
          <span className="kicker">Küçük bir adım</span>
          <h2>Büyük bir dönüşüm.</h2>
          <p>Bugün başlayan sakin bir karar, yarının bütün yönünü değiştirebilir.</p>
          <Link className="btn btn-ghost" to="/basla">
            Yolculuğunu Başlat
          </Link>
        </div>
      </section>

      <Founder />

      <section className="section section-ivory">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="kicker">{signature}</span>
              <h2>Öne Çıkan Programlar</h2>
            </div>
            <Link className="ghost-link" to="/egitimler">
              Tümünü Gör <span className="arrow">→</span>
            </Link>
          </div>
          <div className="programs-grid">
            {programs.map((item) => (
              <Link key={item.slug} to={`/egitimler/${item.slug}`} className="program-card card-link">
                <img src={item.image} alt={item.title} />
                <div>
                  <span className="meta">{item.meta}</span>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <span className="text-link">Programı aç →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="container">
          <div className="space-head">
            <span className="kicker">Ritüel Koleksiyonu</span>
            <h2>Günlük ritüeller için tasarlandı.</h2>
            <p className="lead">
              Defter, rehber kartlar ve dijital workbook. Satış vitrini değil;
              evde kalan bir düzen.
            </p>
          </div>
          <div className="programs-grid">
            {products
              .filter((item) => item.featured)
              .map((item) => (
                <Link key={item.slug} to={`/koleksiyon/${item.slug}`} className="product-card card-link">
                  <div className="product-shot">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <span className="meta">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <span className="text-link">İncele →</span>
                </Link>
              ))}
          </div>
          <div className="collection-more">
            <Link className="ghost-link" to="/koleksiyon">
              Tüm koleksiyon <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-ivory">
        <div className="container">
          <AppShowcase />
        </div>
      </section>

      <section className="section section-paper">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="kicker">Gerçek yaşanmışlık</span>
              <h2>Topluluğumuzdan İlham Veren Hikayeler</h2>
            </div>
          </div>
          <div className="stories-grid">
            {stories.map((item) => (
              <article key={item.name} className="story-card">
                <header>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.place}</span>
                  </div>
                </header>
                <p className="stars">★★★★★</p>
                <p>“{item.quote}”</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <img
          className="cta-media"
          src="/images/cta.jpg"
          alt="Sıcak ışıkta sakin bir siluet"
        />
        <div className="cta-copy">
          <span className="kicker">{signature}</span>
          <h2>Sen de bu dönüşümün bir parçası ol.</h2>
          <p>Daha net bir yön, daha yumuşak bir tempo ve daha seçkin bir çevre.</p>
          <Link className="btn btn-light" to="/basla">
            Yolculuğunu Başlat
          </Link>
        </div>
        <ul className="cta-mark">
          <li>Mind</li>
          <li>Body</li>
          <li>Soul</li>
        </ul>
      </section>
    </main>
  )
}
