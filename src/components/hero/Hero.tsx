import { ArrowRight, CheckCircle2, Globe2, MousePointerClick, Palette, Rocket, Smartphone } from "lucide-react";
import Tilt from "react-parallax-tilt";
import type { ReactNode } from "react";
import FloatingCards from "../floating/FloatingCards";

export function Hero() {
  return (
    <section className="relative min-h-screen px-6 pb-20 pt-32">
      <div className="mx-auto grid max-w-[1500px] items-center gap-16 lg:grid-cols-[1fr_1fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-black text-cyan-300">
            <Rocket className="h-4 w-4" />
            Premium website engine for local businesses
          </div>

          <h1 className="max-w-5xl text-[64px] font-black leading-[0.86] tracking-[-0.08em] md:text-[96px] xl:text-[116px]">
            Websites that make local brands look expensive.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
            Build stunning websites for restaurants, clinics, salons, gyms,
            transporters, hotels and real estate businesses using one reusable
            premium system.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => window.open("https://wa.me/919876543210", "_blank")}
              className="group rounded-full bg-white px-8 py-4 text-base font-black text-black shadow-2xl shadow-cyan-500/20"
            >
              Start selling websites
              <ArrowRight className="ml-2 inline h-5 w-5 transition group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => alert("Template gallery coming next")}
              className="rounded-full border border-white/15 bg-white/10 px-8 py-4 text-base font-black text-white backdrop-blur-xl hover:bg-white/15"
            >
              View templates
            </button>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-4">
            <Stat value="250+" label="Sections" />
            <Stat value="30+" label="Industries" />
            <Stat value="60min" label="Launch Time" />
          </div>
        </div>

        <div className="relative">
          <FloatingCards />

          <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} perspective={1000}>
            <div className="relative rounded-[2rem] border border-white/15 bg-white/[0.06] p-4 shadow-2xl shadow-violet-500/20 backdrop-blur-2xl">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0b1020]">
                <div className="flex h-14 items-center gap-2 border-b border-white/10 bg-white/[0.04] px-5">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                  <div className="ml-4 rounded-full bg-white/10 px-4 py-1 text-xs text-white/50">
                    localbusiness.in
                  </div>
                </div>

                <div className="relative min-h-[500px] overflow-hidden bg-gradient-to-br from-cyan-500/20 via-violet-600/20 to-black p-10">
                  <div className="absolute right-8 top-8 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold">
                    Live Preview
                  </div>

                  <div className="mt-28 max-w-md">
                    <p className="mb-4 text-sm font-black text-cyan-300">
                      Restaurant / Clinic / Salon / Gym
                    </p>
                    <h3 className="text-6xl font-black leading-none tracking-[-0.06em]">
                      Premium Local Website
                    </h3>
                    <p className="mt-5 text-white/65">
                      WhatsApp booking, Google Maps, service pages, gallery,
                      testimonials and lead forms.
                    </p>
                  </div>

                  <div className="mt-10 grid grid-cols-3 gap-4">
                    <Mini icon={<Palette />} text="Theme" />
                    <Mini icon={<Smartphone />} text="Mobile" />
                    <Mini icon={<Globe2 />} text="SEO" />
                  </div>

                  <div className="absolute bottom-8 right-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/45 px-4 py-3 backdrop-blur-xl">
                    <MousePointerClick className="h-5 w-5 text-cyan-300" />
                    <span className="text-sm font-bold">Every button works</span>
                  </div>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">
      <strong className="text-3xl font-black">{value}</strong>
      <p className="mt-1 text-sm font-bold text-white/45">{label}</p>
    </div>
  );
}

function Mini({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
      <div className="mb-3 text-cyan-300">{icon}</div>
      <p className="text-sm font-bold">{text}</p>
      <CheckCircle2 className="mt-3 h-4 w-4 text-green-400" />
    </div>
  );
}
