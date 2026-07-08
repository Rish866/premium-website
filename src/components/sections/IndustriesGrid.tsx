import { siteData } from "../../data/siteData";

export default function IndustriesGrid() {
  return (
    <section id="industries" className="px-6 py-28">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-violet-300">
            Industries
          </p>
          <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-7xl">
            One engine. Multiple business websites.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {siteData.sections.industries.map((industry) => (
            <button
              key={industry}
              onClick={() => alert(`${industry} template coming soon`)}
              className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 text-left backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-300/40"
            >
              <h3 className="text-2xl font-black">{industry}</h3>
              <p className="mt-4 text-sm leading-6 text-white/50">
                Hero, services, gallery, reviews, contact and lead actions customized for {industry}.
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
