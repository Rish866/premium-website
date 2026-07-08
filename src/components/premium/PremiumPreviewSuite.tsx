import { motion } from "framer-motion";
import { Monitor, Smartphone, Sparkles } from "lucide-react";

export default function PremiumPreviewSuite() {
  return (
    <section className="relative overflow-hidden px-6 py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_80%_60%,rgba(168,85,247,0.18),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm text-cyan-200 backdrop-blur-xl">
            <Sparkles size={16} />
            Real SaaS Preview Engine
          </div>

          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Build websites that feel like premium software.
          </h2>

          <p className="mt-5 text-lg text-white/60">
            Browser, laptop and mobile previews designed for restaurants, clinics, gyms, hotels, transporters and every local business.
          </p>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl"
          >
            <div className="rounded-[1.5rem] border border-white/10 bg-black/70">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
                <div className="ml-4 flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/40">
                  agencyos.ai/preview/restaurant
                </div>
              </div>

              <div className="grid gap-4 p-6 md:grid-cols-3">
                <div className="md:col-span-2 rounded-3xl bg-gradient-to-br from-cyan-400/20 via-purple-500/10 to-white/5 p-8">
                  <p className="mb-3 text-sm text-cyan-200">Live website preview</p>
                  <h3 className="text-4xl font-semibold">Modern Restaurant Website</h3>
                  <p className="mt-4 max-w-md text-white/60">
                    Menu, booking, gallery, offers, testimonials and WhatsApp CTA generated from JSON.
                  </p>

                  <div className="mt-8 grid grid-cols-3 gap-3">
                    {["Menu", "Booking", "Gallery"].map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  {["SEO Ready", "Fast Vite Build", "JSON Driven", "Mobile First"].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -10, rotate: -1 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="mx-auto w-full max-w-sm rounded-[2.5rem] border border-white/15 bg-white/[0.06] p-4 shadow-2xl shadow-purple-500/10 backdrop-blur-2xl"
          >
            <div className="rounded-[2rem] border border-white/10 bg-black p-4">
              <div className="mx-auto mb-4 h-1.5 w-20 rounded-full bg-white/20" />

              <div className="h-[520px] overflow-hidden rounded-[1.5rem] bg-gradient-to-b from-slate-950 to-black">
                <motion.div
                  animate={{ y: [-10, -260, -10] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                  className="space-y-4 p-4"
                >
                  <div className="rounded-3xl bg-cyan-400/15 p-6">
                    <Smartphone className="mb-4 text-cyan-200" />
                    <h3 className="text-2xl font-semibold">Mobile website preview</h3>
                    <p className="mt-2 text-sm text-white/60">Auto-generated landing page layout.</p>
                  </div>

                  {["Hero Section", "Services", "Offers", "Gallery", "Testimonials", "Pricing", "Contact"].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="text-sm text-white/70">{item}</p>
                      <div className="mt-3 h-2 rounded-full bg-white/10" />
                      <div className="mt-2 h-2 w-2/3 rounded-full bg-white/10" />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["Real Browser Mockup", "Desktop preview with premium glass UI."],
            ["Scrolling Phone", "Animated mobile website preview."],
            ["Reusable Engine", "Can be reused later inside builder dashboard."],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <Monitor className="mb-4 text-cyan-200" />
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/55">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
