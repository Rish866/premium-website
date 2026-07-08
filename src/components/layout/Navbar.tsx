import { ArrowRight, Search, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/25 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-8">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500">
            <Sparkles size={20} className="text-white" />
          </div>

          <div>
            <h2 className="text-xl font-black tracking-tight">AgencyOS</h2>
            <p className="text-xs text-white/40">Website Engine</p>
          </div>
        </div>

        <nav className="hidden items-center gap-10 text-sm font-semibold text-white/70 xl:flex">
          <a href="#products">Products</a>
          <a href="#industries">Industries</a>
          <a href="#templates">Templates</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10">
            <Search size={18} />
          </button>

          <button
            onClick={() => window.open("tel:+919876543210")}
            className="hidden rounded-full border border-white/10 px-5 py-3 text-sm font-bold hover:bg-white/10 md:block"
          >
            Book Demo
          </button>

          <button
            onClick={() => window.open("https://wa.me/919876543210", "_blank")}
            className="rounded-full bg-white px-6 py-3 font-black text-black"
          >
            Start Free
            <ArrowRight className="ml-2 inline h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
