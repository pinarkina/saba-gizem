import { Link } from "react-router-dom"
import { appName } from "../data"

function AppleMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16.7 12.55c.03 3.22 2.82 4.29 2.85 4.3-.02.07-.45 1.53-1.47 3.03-.89 1.3-1.81 2.59-3.26 2.62-1.43.03-1.89-.85-3.53-.85-1.65 0-2.16.82-3.51.87-1.41.05-2.48-1.4-3.38-2.69-1.84-2.65-3.25-7.49-1.36-10.76.94-1.62 2.61-2.65 4.43-2.68 1.38-.03 2.69.93 3.53.93.84 0 2.42-1.15 4.08-.98.69.03 2.64.28 3.89 2.12-.1.06-2.32 1.36-2.27 4.09ZM14.6 5.9c.75-.9 1.25-2.16 1.11-3.4-1.08.04-2.38.72-3.15 1.62-.69.8-1.3 2.08-1.14 3.3 1.2.09 2.43-.61 3.18-1.52Z"
      />
    </svg>
  )
}

function PlayMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#34A853" d="M3.2 20.6 13.4 12 3.2 3.5v17.1Z" />
      <path fill="#FBBC04" d="m13.4 12 2.7-2.3L3.8 2.2c-.4-.3-1 .1-.9.6L3.2 3.5 13.4 12Z" />
      <path fill="#EA4335" d="M20.4 10.3 16.1 7.8 13.4 12l2.7 2.3 4.3-2.5c.8-.5.8-1.6 0-2.15Z" />
      <path fill="#4285F4" d="M3.2 20.6c-.1.5.5.9.9.6l12-6.9-2.7-2.3L3.2 20.6Z" />
    </svg>
  )
}

export function AppShowcase() {
  return (
    <div className="app-panel">
      <div className="app-copy">
        <span className="kicker">Uygulama</span>
        <h2>{appName}</h2>
        <p>
          Meditasyon, günlük ve eğitimler — web’deki aynı ılık palet, yan
          cebinde. Sabah ritüeli, gece kapanışı, program takibi bir arada.
        </p>
        <div className="store-row">
          <Link className="store-badge" to="/basla" aria-label="App Store’dan indir">
            <AppleMark />
            <span>
              <small>Download on the</small>
              <b>App Store</b>
            </span>
          </Link>
          <Link className="store-badge" to="/basla" aria-label="Google Play’den indir">
            <PlayMark />
            <span>
              <small>Get it on</small>
              <b>Google Play</b>
            </span>
          </Link>
        </div>
        <Link className="text-link" to="/basla">
          Erken erişim iste →
        </Link>
      </div>
      <div className="app-stage">
        <div className="phone">
          <div className="phone-screen">
            <span>{appName}</span>
            <strong>Nefesle başla, günü yavaşlat.</strong>
          </div>
        </div>
      </div>
    </div>
  )
}
