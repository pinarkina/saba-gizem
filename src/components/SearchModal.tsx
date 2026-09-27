import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { products, programs } from "../data"

export function SearchModal({ onClose }: { onClose: () => void }) {
  const [q, setQ] = useState("")

  const results = useMemo(() => {
    const query = q.trim().toLocaleLowerCase("tr")
    const all = [
      ...programs.map((item) => ({ ...item, kind: "Eğitim", to: `/egitimler/${item.slug}` })),
      ...products.map((item) => ({ ...item, kind: "Koleksiyon", to: `/koleksiyon/${item.slug}` })),
    ]
    if (!query) return all
    return all.filter((item) => `${item.title} ${item.excerpt}`.toLocaleLowerCase("tr").includes(query))
  }, [q])

  return (
    <div className="search-modal" onClick={onClose}>
      <div className="search-panel" onClick={(e) => e.stopPropagation()}>
        <input
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Eğitim, ürün veya konu ara"
        />
        {results.map((item) => (
          <Link key={item.slug} to={item.to} className="search-result" onClick={onClose}>
            <span>{item.title}</span>
            <small>{item.kind}</small>
          </Link>
        ))}
      </div>
    </div>
  )
}
