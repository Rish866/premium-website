import { siteData } from "../../data/siteData";

export default function PricingSection() {
  return (
    <section id="pricing" className="px-6 py-28">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
            Pricing
          </p>
          <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-7xl">
            Packages you can sell immediately.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {siteData.sections.pricing.map((plan) => (
            <div
              key={plan.name}
              className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-black">{plan.name}</h3>
              <div className="mt-6 text-5xl font-black">{plan.price}</div>
              <p className="mt-5 leading-7 text-white/55">{plan.desc}</p>
              <button
                onClick={() => window.open(`https://wa.me/${siteData.whatsapp}`, "_blank")}
                className="mt-8 w-full rounded-full bg-white px-6 py-4 font-black text-black"
              >
                Sell This Package
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
