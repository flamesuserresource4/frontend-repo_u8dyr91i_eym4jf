import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ShoppingBag, Search } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto container px-6">
        <div className="mt-4 flex items-center justify-between rounded-full border border-white/10 bg-slate-900/60 backdrop-blur-md px-4 py-3">
          <a href="#" className="text-white font-semibold tracking-[0.2em]">ATELIER</a>

          <nav className="hidden md:flex items-center gap-8 text-white/80">
            <a href="#collections" className="hover:text-white transition">Collections</a>
            <a href="#shop" className="hover:text-white transition">Shop</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-white/80 hover:text-white"><Search size={18} /></button>
            <button className="text-white/80 hover:text-white"><ShoppingBag size={20} /></button>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(v => !v)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mx-4 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-md md:hidden"
          >
            <div className="p-4 grid gap-2 text-white/90">
              <a href="#collections" className="rounded-lg px-3 py-2 hover:bg-white/5">Collections</a>
              <a href="#shop" className="rounded-lg px-3 py-2 hover:bg-white/5">Shop</a>
              <a href="#about" className="rounded-lg px-3 py-2 hover:bg-white/5">About</a>
              <a href="#contact" className="rounded-lg px-3 py-2 hover:bg-white/5">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
