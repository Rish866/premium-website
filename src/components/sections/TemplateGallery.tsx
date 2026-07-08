const templates = [
  "Restaurant Website",
  "Dental Clinic Website",
  "Salon Website",
  "Gym Website",
  "Hotel Website",
  "Transport Website"
];

export default function TemplateGallery() {
  return (
    <section id="templates" className="px-6 py-28">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-violet-300">
            Templates
          </p>
          <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-7xl">
            Ready-to-sell website templates.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {templates.map((template, i) => (
            <button
              key={template}
              onClick={() => alert(`${template} preview coming next`)}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] text-left backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-300/40"
            >
              <div className="h-56 bg-gradient-to-br from-cyan-400/20 via-violet-500/20 to-black p-6">
                <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
                  <div className="mb-4 h-3 w-24 rounded-full bg-white/20" />
                  <div className="mb-3 h-8 w-3/4 rounded-xl bg-white/20" />
                  <div className="h-3 w-1/2 rounded-full bg-white/10" />
                </div>
              </div>

              <div className="p-7">
                <p className="mb-3 text-sm font-black text-white/30">0{i + 1}</p>
                <h3 className="text-2xl font-black">{template}</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">
                  Premium layout with hero, services, gallery, reviews, pricing and contact.
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
