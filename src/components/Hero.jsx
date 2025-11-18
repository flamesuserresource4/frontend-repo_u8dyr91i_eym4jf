import { motion } from 'framer-motion'

export default function Hero({ featured = [] }) {
  const first = featured[0]
  return (
    <section className="relative overflow-hidden">
      {/* Background aura */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(255,255,255,0.08),transparent)]" />

      <div className="container mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white"
          >
            Elevated Streetwear
          </motion.h1>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.05, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-lg text-white/70 max-w-xl"
          >
            Meticulous fabrics. Architected silhouettes. Limited runs only.
          </motion.p>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex gap-3"
          >
            <a href="#shop" className="group inline-flex items-center rounded-full bg-white text-slate-900 px-6 py-3 font-semibold tracking-wide">
              Shop New Arrivals
              <span className="ml-2 transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a href="#collections" className="inline-flex items-center rounded-full bg-transparent border border-white/20 text-white px-6 py-3 font-semibold">
              Explore Collections
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-b from-white/5 to-transparent">
            {first ? (
              <img src={first.images?.[0]} alt={first.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full grid place-items-center text-white/60">Loading…</div>
            )}
          </div>
          {first && (
            <div className="absolute -bottom-6 left-6 right-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-4 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-widest text-white/60">Featured</p>
                  <p className="font-medium">{first.title}</p>
                </div>
                <div className="font-semibold">${first.price.toFixed(2)}</div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
