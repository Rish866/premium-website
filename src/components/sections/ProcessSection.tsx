import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Choose Industry",
    desc: "Restaurant, clinic, salon, gym, hotel, transport or any local business.",
  },
  {
    title: "Edit Business Data",
    desc: "Change name, services, phone, WhatsApp, images, pricing and address.",
  },
  {
    title: "Launch Website",
    desc: "Publish a premium website with lead forms, SEO and mobile responsive UI.",
  },
];

export default function ProcessSection() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-16 max-w-4xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
            Process
          </p>

          <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.07em] md:text-7xl">
            Build client websites in a repeatable system.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/[0.08]"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="text-6xl font-black text-white/10">
                  0{index + 1}
                </div>
                <CheckCircle2 className="h-8 w-8 text-cyan-300" />
              </div>

              <h3 className="text-3xl font-black">{step.title}</h3>
              <p className="mt-5 leading-7 text-white/55">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
