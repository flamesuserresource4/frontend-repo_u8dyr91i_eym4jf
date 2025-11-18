export default function Footer(){
  return (
    <footer id="contact" className="mt-24 border-t border-white/10 bg-slate-900/60 backdrop-blur">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-white/70">
        <div>
          <div className="text-white font-semibold tracking-[0.2em] mb-3">ATELIER</div>
          <p className="text-sm">Modern essentials engineered for urban movement. Designed in London.</p>
        </div>
        <div>
          <p className="text-white mb-2 font-medium">Shop</p>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">New Arrivals</a></li>
            <li><a href="#" className="hover:text-white">Best Sellers</a></li>
            <li><a href="#" className="hover:text-white">Hoodies</a></li>
            <li><a href="#" className="hover:text-white">Pants</a></li>
          </ul>
        </div>
        <div>
          <p className="text-white mb-2 font-medium">Company</p>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Sustainability</a></li>
            <li><a href="#" className="hover:text-white">Stores</a></li>
          </ul>
        </div>
        <div>
          <p className="text-white mb-2 font-medium">Help</p>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Shipping</a></li>
            <li><a href="#" className="hover:text-white">Returns</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">© {new Date().getFullYear()} Atelier Studios</div>
    </footer>
  )
}