import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black px-6 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,.18),transparent_35%),radial-gradient(circle_at_80%_60%,rgba(168,85,247,.18),transparent_35%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200 backdrop-blur-xl">
          <Sparkles size={16} />
          AgencyOS SaaS Platform
        </div>

        <h1 className="max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl">
          Generate premium websites for any local business.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/60">
          Restaurant, clinic, salon, gym, hotel, transport, real estate and manufacturing websites from one JSON-powered engine.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/signup" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black">
            Start Building
            <ArrowRight size={16} />
          </Link>

          <Link to="/login" className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white/70 backdrop-blur-xl">
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}
