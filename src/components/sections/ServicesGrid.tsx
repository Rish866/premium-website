import { siteData } from "../../data/siteData";

export default function ServicesGrid() {
  return (
    <section id="services" className="px-6 py-28">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
            What You Can Sell
          </p>
          <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-7xl">
            Premium sections for every local business.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {siteData.sections.services.map((service, index) => (
            <div
              key={service}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/[0.07]"
            >
              <div className="mb-8 text-sm font-black text-white/30">
                0{index + 1}
              </div>
              <h3 className="text-2xl font-black">{service}</h3>
              <p className="mt-4 leading-7 text-white/55">
                Reusable, responsive and conversion-focused section ready for real client websites.
              </p>
              <button
                onClick={() => alert(`${service} selected`)}
                className="mt-7 rounded-full border border-white/10 px-5 py-3 text-sm font-black hover:bg-white/10"
              >
                View Module
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
