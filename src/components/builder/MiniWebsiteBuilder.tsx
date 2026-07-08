import { useMemo, useState } from "react";
import { Building2, Dumbbell, Hotel, Palette, Stethoscope, Truck, Utensils } from "lucide-react";

const industries = {
  Restaurant: {
    icon: Utensils,
    headline: "Premium restaurant website",
    subline: "Menu, table booking, gallery and WhatsApp orders.",
    cta: "Book a Table",
    blocks: ["Signature Menu", "Chef Specials", "Table Booking", "Customer Reviews"],
  },
  Clinic: {
    icon: Stethoscope,
    headline: "Trust-first clinic website",
    subline: "Doctors, treatments, appointments and patient reviews.",
    cta: "Book Appointment",
    blocks: ["Doctors", "Treatments", "Timings", "Google Reviews"],
  },
  Gym: {
    icon: Dumbbell,
    headline: "High-converting gym website",
    subline: "Plans, trainers, transformations and trial bookings.",
    cta: "Start Free Trial",
    blocks: ["Memberships", "Trainers", "Results", "Trial Pass"],
  },
  Hotel: {
    icon: Hotel,
    headline: "Luxury hotel website",
    subline: "Rooms, amenities, offers and direct booking.",
    cta: "Check Rooms",
    blocks: ["Rooms", "Amenities", "Offers", "Location"],
  },
  Transport: {
    icon: Truck,
    headline: "Fleet business website",
    subline: "Fleet strength, routes, clients and quote requests.",
    cta: "Request Quote",
    blocks: ["Fleet", "Routes", "Clients", "Enquiry"],
  },
  "Real Estate": {
    icon: Building2,
    headline: "Premium property website",
    subline: "Projects, amenities, location and lead capture.",
    cta: "View Projects",
    blocks: ["Projects", "Amenities", "Location", "Leads"],
  },
};

const themes = {
  Cyan: "from-cyan-400/25 via-cyan-500/10 to-white/5",
  Purple: "from-purple-500/25 via-fuchsia-500/10 to-white/5",
  Emerald: "from-emerald-400/25 via-teal-500/10 to-white/5",
};

export default function MiniWebsiteBuilder() {
  const [industry, setIndustry] = useState<keyof typeof industries>("Restaurant");
  const [theme, setTheme] = useState<keyof typeof themes>("Cyan");

  const selected = industries[industry];
  const Icon = selected.icon;

  const jsonPreview = useMemo(
    () => ({
      industry,
      theme,
      headline: selected.headline,
      cta: selected.cta,
      blocks: selected.blocks,
    }),
    [industry, theme, selected]
  );

  return (
    <section className="relative overflow-hidden bg-black px-6 py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,.16),transparent_35%),radial-gradient(circle_at_80%_60%,rgba(168,85,247,.18),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200 backdrop-blur-xl">
            <Palette size={16} />
            Live Builder Prototype
          </div>

          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Change industry and theme. Website updates instantly.
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-white/55">
            This is the first working builder layer for the future AgencyOS SaaS.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-2xl">
            <p className="mb-4 text-sm text-white/45">Choose Industry</p>

            <div className="grid grid-cols-2 gap-3">
              {Object.keys(industries).map((item) => (
                <button
                  key={item}
                  onClick={() => setIndustry(item as keyof typeof industries)}
                  className={`rounded-2xl border px-4 py-3 text-left text-sm transition ${
                    industry === item
                      ? "border-cyan-300/40 bg-cyan-400/15 text-cyan-100"
                      : "border-white/10 bg-black/25 text-white/60 hover:bg-white/10"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <p className="mb-4 mt-8 text-sm text-white/45">Choose Theme</p>

            <div className="grid grid-cols-3 gap-3">
              {Object.keys(themes).map((item) => (
                <button
                  key={item}
                  onClick={() => setTheme(item as keyof typeof themes)}
                  className={`rounded-2xl border px-4 py-3 text-sm transition ${
                    theme === item
                      ? "border-cyan-300/40 bg-white/15 text-white"
                      : "border-white/10 bg-black/25 text-white/55 hover:bg-white/10"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="mb-3 text-xs text-cyan-200">Generated JSON</p>
              <pre className="max-h-[260px] overflow-auto text-xs leading-6 text-white/55">
                {JSON.stringify(jsonPreview, null, 2)}
              </pre>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-4 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl">
            <div className={`min-h-[620px] rounded-[1.5rem] border border-white/10 bg-gradient-to-br ${themes[theme]} p-8`}>
              <div className="mb-16 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/35 text-cyan-100">
                    <Icon size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">{industry} Pro</p>
                    <p className="text-xs text-white/45">Generated by AgencyOS</p>
                  </div>
                </div>

                <button className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black">
                  {selected.cta}
                </button>
              </div>

              <div className="max-w-3xl">
                <h3 className="text-5xl font-semibold tracking-tight md:text-7xl">
                  {selected.headline}
                </h3>

                <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
                  {selected.subline}
                </p>
              </div>

              <div className="mt-16 grid gap-4 md:grid-cols-4">
                {selected.blocks.map((block) => (
                  <div key={block} className="rounded-3xl border border-white/10 bg-black/30 p-5 backdrop-blur-xl">
                    <p className="text-sm text-white/65">{block}</p>
                    <div className="mt-5 h-2 rounded-full bg-white/15" />
                    <div className="mt-2 h-2 w-2/3 rounded-full bg-white/10" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
