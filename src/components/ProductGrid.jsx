import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function ProductGrid() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch(`${API}/api/products?limit=12`)
        const data = await res.json()
        setProducts(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    run()
  }, [])

  return (
    <section id="shop" className="container mx-auto px-6 py-16">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-white text-2xl font-semibold">New Arrivals</h2>
        <a href="#" className="text-white/70 hover:text-white">View all</a>
      </div>

      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="aspect-[3/4] rounded-2xl bg-white/5 animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.a
              key={p.id}
              href={`#product-${p.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.03 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img src={p.images?.[0]} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-3 text-white">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{p.title}</p>
                  <p className="text-white/80">${p.price.toFixed(2)}</p>
                </div>
                <p className="text-xs text-white/60 mt-1">{p.category}</p>
              </div>
            </motion.a>
          ))}
        </div>
      )}
    </section>
  )
}
