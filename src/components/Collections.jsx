import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Collections() {
  const [collections, setCollections] = useState([])
  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch(`${API}/api/collections`)
        const data = await res.json()
        setCollections(data)
      } catch (e) {
        console.error(e)
      }
    }
    run()
  }, [])

  return (
    <section id="collections" className="container mx-auto px-6 py-16">
      <h2 className="text-white text-2xl font-semibold mb-6">Collections</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {collections.map((c) => (
          <a key={c} href={`#cat-${c}`} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="aspect-[4/3]">
              <img src={`https://source.unsplash.com/1600x900/?fashion,${encodeURIComponent(c)}`} alt={c} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent" />
            <div className="absolute bottom-4 left-4 text-white font-semibold tracking-wide">{c}</div>
          </a>
        ))}
      </div>
    </section>
  )
}
