import { stories } from "../data"

export function Community() {
  return (
    <main className="section-ivory">
      <section className="container page-hero">
        <span className="kicker">Topluluk</span>
        <h1>Aynı ışığı taşıyanlar.</h1>
        <p>Gürültüsüz bir çevre. Paylaşım var, gösteriş yok.</p>
      </section>
      <section className="container page-grid three">
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
      </section>
    </main>
  )
}
