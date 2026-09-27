import { Link } from "react-router-dom"
import { collectionCategories, products, signature } from "../data"

export function Products() {
  return (
    <main className="section-ivory">
      <section className="container page-hero">
        <span className="kicker">{signature}</span>
        <h1>Ritüel Koleksiyonu</h1>
        <p>
          Defter, kart, rehber ve hediye setleri. Shop değil; günlük ritüel için
          seçilmiş bir edit.
        </p>
        <ul className="collection-tags">
          {collectionCategories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      </section>
      <section className="container collection-grid">
        {products.map((item) => (
          <Link key={item.slug} to={`/koleksiyon/${item.slug}`} className="detail-card card-link">
            <div className="product-shot">
              <img src={item.image} alt={item.title} />
            </div>
            <span className="meta">{item.category}</span>
            <h3>{item.title}</h3>
            <p>{item.excerpt}</p>
            <span className="text-link">İncele →</span>
          </Link>
        ))}
      </section>
    </main>
  )
}
