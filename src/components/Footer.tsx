import { Link } from "react-router-dom"
import { legalNav, nav, posture } from "../data"

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-shell">
        <Link to="/" className="logo footer-logo">
          <strong>SABA GİZEM</strong>
          <span>{posture}</span>
        </Link>
        <nav className="footer-nav" aria-label="Alt menü">
          {nav.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="footer-rule" aria-hidden="true" />
        <p className="footer-copy">
          © {new Date().getFullYear()} Saba Gizem Mutlu. Tüm hakları saklıdır.
        </p>
        <nav className="legal" aria-label="Yasal">
          {legalNav.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
