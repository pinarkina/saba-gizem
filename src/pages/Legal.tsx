import { Link, Navigate, useLocation } from "react-router-dom"
import { legalNav } from "../data"
import { legalDocs } from "../legal"

export function Legal() {
  const slug = useLocation().pathname.replace(/^\//, "")
  const page = legalDocs.find((item) => item.slug === slug)

  if (!page) return <Navigate to="/" replace />

  return (
    <main className="section-ivory">
      <article className="container legal-doc">
        <header className="page-hero legal-hero">
          <span className="kicker">{page.kicker}</span>
          <h1>{page.title}</h1>
          <p className="legal-updated">Son güncelleme · {page.updated}</p>
          <p className="lead">{page.lead}</p>
          <nav className="legal-switch" aria-label="Yasal metinler">
            {legalNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={item.to === `/${page.slug}` ? "active" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        <div className="legal-body">
          {page.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
              {section.list && (
                <ul>
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </article>
    </main>
  )
}
