import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { nav, posture } from "../data"
import { SearchModal } from "./SearchModal"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setSearch(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open || search ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open, search])

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`}>
      <div className="header-inner">
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          <strong>SABA GİZEM</strong>
          <span>{posture}</span>
        </Link>

        <nav className="nav">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <button className="icon-btn" aria-label="Ara" onClick={() => setSearch(true)}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="6.4" stroke="currentColor" strokeWidth="1.15" />
              <path d="M16.2 16.2L20.2 20.2" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
            </svg>
          </button>
          <Link className="cta-start" to="/basla">
            Değişime Başla
          </Link>
          <button className="menu-btn" aria-label="Menü" onClick={() => setOpen((v) => !v)}>
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-nav open">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)}>
              {item.label}
            </NavLink>
          ))}
          <Link className="cta-start" to="/basla" onClick={() => setOpen(false)}>
            Değişime Başla
          </Link>
        </div>
      )}

      {search && <SearchModal onClose={() => setSearch(false)} />}
    </header>
  )
}
