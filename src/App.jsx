import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Collections from './components/Collections'
import Footer from './components/Footer'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function App() {
  const [featured, setFeatured] = useState([])

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch(`${API}/api/featured?limit=4`)
        const data = await res.json()
        setFeatured(data)
      } catch (e) {
        console.error(e)
      }
    }
    run()
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* subtle grain */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.15]" style={{backgroundImage:'url(https://grainy-gradients.vercel.app/noise.svg)'}} />

      <Navbar />
      <main>
        <Hero featured={featured} />
        <Collections />
        <ProductGrid />
        <section id="about" className="container mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 bg-white/5">
              <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop" alt="studio" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-3xl font-bold">The Atelier Standard</h3>
              <p className="mt-4 text-white/70 max-w-prose">We fuse luxury craftsmanship with street sensibilities. From Italian mills to Japanese trims — every piece is built for form and function. Drops are limited, quality is not.</p>
              <div className="mt-6 flex gap-3">
                <a href="#shop" className="rounded-full bg-white text-slate-900 px-6 py-3 font-semibold">Shop the Edit</a>
                <a href="#" className="rounded-full border border-white/20 px-6 py-3 font-semibold">Read our story</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
