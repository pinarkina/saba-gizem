import { useState, type FormEvent } from "react"
import { useSearchParams } from "react-router-dom"
import { contactEmail } from "../data"

const interests: Record<string, string> = {
  "kendine-donus": "21 Günlük Kendine Dönüş",
  "kadinlar-icin": "Kadınlar İçin Ruhsal Güçlenme",
  ozgurluk: "Para ve Özgürlük",
  "rituel-defteri": "Ritüel Defteri",
  "meditasyon-kartlari": "Rehber Kartlar",
  workbook: "Dijital Workbook",
  "hediye-seti": "Hediye Seti",
}

export function Start() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [params] = useSearchParams()
  const selected = params.get("program") ?? "kendine-donus"

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (new FormData(form).get("_honey")) return

    const data = new FormData(form)
    const name = String(data.get("name") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const interest = String(data.get("interest") ?? "")
    const note = String(data.get("note") ?? "").trim()

    setStatus("sending")

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          _replyto: email,
          _subject: `Saba Gizem — ${name || "yeni başvuru"}`,
          _template: "table",
          "İlgi alanı": interests[interest] ?? interest,
          Not: note || "—",
        }),
      })

      if (!response.ok) throw new Error("send-failed")
      setStatus("sent")
    } catch {
      setStatus("error")
    }
  }

  return (
    <main className="section-ivory">
      <section className="container page-hero">
        <span className="kicker">Başla</span>
        <h1>Yolculuğun sakin bir kapıdan açılsın.</h1>
      </section>
      <section className="container start-layout">
        <div className="start-copy">
          <h2>Size en doğru programı birlikte seçeriz.</h2>
          <p>
            Formu bırakın; birkaç gün içinde kişisel bir notla dönüş yapalım.
            Satış dili yok — yalnızca doğru eşleşme.
          </p>
        </div>
        <div className="form-card">
          {status === "sent" ? (
            <div className="form-success">
              <h2>Teşekkürler.</h2>
              <p>Notunuz alındı. Kısa süre içinde size döneceğiz.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit}>
              <h2>Şimdi başla</h2>
              <input
                className="honey"
                type="text"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              <div className="form-grid">
                <div>
                  <label htmlFor="name">Ad</label>
                  <input id="name" name="name" required />
                </div>
                <div>
                  <label htmlFor="email">E-posta</label>
                  <input id="email" name="email" type="email" required />
                </div>
                <div className="full">
                  <label htmlFor="interest">İlgi alanı</label>
                  <select id="interest" name="interest" defaultValue={selected}>
                    {Object.entries(interests).map(([value, label]) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="full">
                  <label htmlFor="note">Notunuz</label>
                  <textarea id="note" name="note" rows={4} />
                </div>
              </div>
              {status === "error" && (
                <p className="form-error">
                  Mesaj iletilemedi. Lütfen tekrar deneyin veya {contactEmail} adresine yazın.
                </p>
              )}
              <button className="btn btn-dark" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Gönderiliyor…" : "Gönder"}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}
