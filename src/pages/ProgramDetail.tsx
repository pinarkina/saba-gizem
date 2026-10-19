import { Link, Navigate, useParams } from "react-router-dom"
import { programs } from "../data"

export function ProgramDetail() {
  const { slug } = useParams()
  const program = programs.find((item) => item.slug === slug)

  if (!program) {
    return <Navigate to="/egitimler" replace />
  }

  const others = programs.filter((item) => item.slug !== program.slug)

  return (
    <main className="section-ivory">
      <section className="program-hero">
        <img src={program.image} alt={program.title} />
      </section>

      <section className="container program-body">
        <Link className="back-link" to="/egitimler">
          ← Tüm eğitimler
        </Link>
        <span className="meta">{program.meta}</span>
        <h1 className="serif">{program.title}</h1>
        <p className="program-lead">{program.lead}</p>

        <div className="fact-row">
          <article>
            <small>Ücret</small>
            <strong>{program.price}</strong>
          </article>
          <article>
            <small>Süre</small>
            <strong>{program.duration}</strong>
          </article>
          <article>
            <small>Format</small>
            <strong>{program.format}</strong>
          </article>
          <article>
            <small>Görüşme</small>
            <strong>{program.group}</strong>
          </article>
        </div>

        <div className="program-split">
          <div>
            <h2 className="serif">Programda neler var</h2>
            <ul className="module-list">
              {program.modules.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <aside>
            <h2 className="serif">Kimler için</h2>
            <ul className="for-list">
              {program.forWhom.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link className="btn btn-dark" to={`/basla?program=${program.slug}`}>
              Bu programa başvur →
            </Link>
          </aside>
        </div>
      </section>

      {others.length > 0 && (
        <section className="container page-grid three" style={{ paddingTop: 20 }}>
          {others.map((item) => (
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
      )}
    </main>
  )
}
