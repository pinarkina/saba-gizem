import { useEffect } from "react"
import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { About } from "./pages/About"
import { AppPage } from "./pages/AppPage"
import { Community } from "./pages/Community"
import { Home } from "./pages/Home"
import { ProductDetail } from "./pages/ProductDetail"
import { ProgramDetail } from "./pages/ProgramDetail"
import { Programs } from "./pages/Programs"
import { Products } from "./pages/Products"
import { Legal } from "./pages/Legal"
import { Start } from "./pages/Start"

export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="app-shell">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/egitimler" element={<Programs />} />
        <Route path="/egitimler/:slug" element={<ProgramDetail />} />
        <Route path="/koleksiyon" element={<Products />} />
        <Route path="/koleksiyon/:slug" element={<ProductDetail />} />
        <Route path="/urunler" element={<Navigate to="/koleksiyon" replace />} />
        <Route path="/urunler/:slug" element={<ProductDetail />} />
        <Route path="/topluluk" element={<Community />} />
        <Route path="/uygulama" element={<AppPage />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/basla" element={<Start />} />
        <Route path="/gizlilik" element={<Legal />} />
        <Route path="/kosullar" element={<Legal />} />
        <Route path="/kvkk" element={<Legal />} />
      </Routes>
      <Footer />
    </div>
  )
}
