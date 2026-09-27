import { Link, Navigate, useLocation, useParams } from "react-router-dom"
import { products } from "../data"

const aliases: Record<string, string> = {
  meditasyon: "dijital-rehberler",
  gunluk: "journal-planner",
  rituel: "hediye-seti",
}

export function ProductDetail() {
  const { slug } = useParams()
  const location = useLocation()
  const resolved = slug ? (aliases[slug] ?? slug) : ""
  const product = products.find((item) => item.slug === resolved)

  if (!product) {
    return <Navigate to="/koleksiyon" replace />
  }

  if (slug && (aliases[slug] || location.pathname.startsWith("/urunler/"))) {
    return <Navigate to={`/koleksiyon/${resolved}`} replace />
  }

  return (
    <main className="section-ivory">
      <section className="container program-body">
        <Link className="back-link" to="/koleksiyon">
          ← Ritüel Koleksiyonu
        </Link>
        <div className="program-split">
          <div className="product-photo product-shot">
            <img src={product.image} alt={product.title} />
          </div>
          <aside>
            <span className="kicker">{product.category}</span>
            <h1 className="serif">{product.title}</h1>
            <p className="program-lead">{product.lead}</p>
            <ul className="for-list">
              {product.details.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link className="btn btn-dark" to={`/basla?program=${product.slug}`}>
              Bu parçayı iste →
            </Link>
          </aside>
        </div>
      </section>
    </main>
  )
}
