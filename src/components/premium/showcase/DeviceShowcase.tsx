import {
  BarChart3,
  Globe2,
  MapPin,
  MessageCircle,
  MousePointerClick,
  Star,
  TrendingUp,
} from "lucide-react";

export default function DeviceShowcase() {
  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-16 max-w-4xl">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
            Live Website System
          </p>

          <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.07em] md:text-7xl">
            Every client website comes with real business actions.
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
            WhatsApp, calls, maps, forms, reviews, analytics and lead capture
            are built directly into the experience.
          </p>
        </div>

        <div className="relative rounded-[3rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl">
          <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#090d1a]">
              <div className="flex h-14 items-center gap-2 border-b border-white/10 bg-white/[0.04] px-5">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
                <div className="ml-4 rounded-full bg-white/10 px-4 py-1 text-xs text-white/50">
                  clientwebsite.com/dashboard
                </div>
              </div>

              <div className="relative min-h-[520px] bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-transparent p-8">
                <div className="grid gap-5 md:grid-cols-3">
                  <Metric icon={<TrendingUp />} value="+126" label="Leads" />
                  <Metric icon={<MessageCircle />} value="84%" label="WhatsApp" />
                  <Metric icon={<Star />} value="4.9" label="Rating" />
                </div>

                <div className="mt-8 grid gap-5 md:grid-cols-[1fr_0.8fr]">
                  <div className="rounded-3xl border border-white/10 bg-black/35 p-6 backdrop-blur-xl">
                    <div className="mb-5 flex items-center justify-between">
                      <strong>Business Performance</strong>
                      <BarChart3 className="text-cyan-300" />
                    </div>

                    <div className="space-y-4">
                      <Bar label="Calls" width="86%" />
                      <Bar label="WhatsApp" width="74%" />
                      <Bar label="Form Leads" width="58%" />
                      <Bar label="Maps Clicks" width="92%" />
                    </div>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-black/35 p-6 backdrop-blur-xl">
                    <div className="mb-5 flex items-center gap-3">
                      <MapPin className="text-cyan-300" />
                      <strong>Local SEO</strong>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                      <p className="text-sm text-white/50">Google ranking</p>
                      <h3 className="mt-3 text-4xl font-black">Top 3</h3>
                      <p className="mt-3 text-sm text-white/50">
                        Maps, reviews and location actions connected.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-8 right-8 hidden rounded-3xl border border-white/10 bg-black/55 p-5 backdrop-blur-2xl md:block">
                  <div className="flex items-center gap-3">
                    <MousePointerClick className="text-cyan-300" />
                    <div>
                      <strong>Every button is actionable</strong>
                      <p className="text-xs text-white/45">
                        Call, WhatsApp, Maps, Form, Booking
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <SideCard
                icon={<Globe2 />}
                title="SEO Ready"
                desc="Meta tags, location keywords, fast pages and local search focus."
              />

              <SideCard
                icon={<MessageCircle />}
                title="WhatsApp Leads"
                desc="Every site has direct WhatsApp enquiry buttons with pre-filled text."
              />

              <SideCard
                icon={<Star />}
                title="Review Power"
                desc="Show Google reviews, testimonials and proof to convert visitors."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/35 p-5 backdrop-blur-xl">
      <div className="mb-5 text-cyan-300">{icon}</div>
      <strong className="text-4xl font-black">{value}</strong>
      <p className="mt-1 text-sm font-bold text-white/45">{label}</p>
    </div>
  );
}

function Bar({ label, width }: { label: string; width: string }) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-sm">
        <span className="text-white/60">{label}</span>
        <span className="font-bold">{width}</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
          style={{ width }}
        />
      </div>
    </div>
  );
}

function SideCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-xl">
      <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-cyan-400/10 text-cyan-300">
        {icon}
      </div>
      <h3 className="text-2xl font-black">{title}</h3>
      <p className="mt-3 leading-7 text-white/55">{desc}</p>
    </div>
  );
}
