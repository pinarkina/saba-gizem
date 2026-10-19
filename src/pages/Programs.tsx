import { Link } from "react-router-dom"
import { programs } from "../data"

export function Programs() {
  return (
    <main className="section-ivory">
      <section className="container page-hero">
        <span className="kicker">Eğitimler</span>
        <h1>Seçkin programlar, ölçülü derinlik.</h1>
        <p>
          Her çalışma kişiye özel hazırlanır. Acele yoktur; duruş, pratik ve
          kalıcı bir iç düzen vardır.
        </p>
      </section>
      <section className="container page-grid three">
        {programs.map((item) => (
          <Link key={item.slug} to={`/egitimler/${item.slug}`} className="detail-card card-link">
            <img src={item.image} alt={item.title} />
            <span className="meta">{item.meta}</span>
            <h3>{item.title}</h3>
            <p>{item.excerpt}</p>
            <span className="price">{item.price}</span>
            <span className="text-link">Programı aç →</span>
          </Link>
        ))}
      </section>
    </main>
  )
}
