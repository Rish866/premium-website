import { ChevronDown } from "lucide-react";

type Props = {
  config: any;
};

export default function FAQBlock({ config }: Props) {
  const items = config.items ?? [];

  return (
    <section className="relative overflow-hidden border-b border-white/10 px-6 py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#030308] to-black" />

      <div className="relative">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          {config.eyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-300">{config.eyebrow}</p>
          )}
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {config.title ?? "Frequently Asked Questions"}
          </h2>
        </div>

        <div className="mx-auto max-w-3xl space-y-3">
          {items.map((item: any, index: number) => (
            <details
              key={index}
              className="group rounded-2xl border border-white/[0.08] bg-gradient-to-r from-white/[0.03] to-transparent backdrop-blur-sm transition-all hover:border-white/15 [&[open]]:border-cyan-400/20 [&[open]]:bg-cyan-400/[0.03]"
            >
              <summary className="flex cursor-pointer items-center justify-between p-5 text-sm font-semibold text-white list-none">
                <span>{item.question}</span>
                <ChevronDown size={16} className="shrink-0 text-white/40 transition-transform duration-200 group-open:rotate-180 group-open:text-cyan-300" />
              </summary>
              <div className="px-5 pb-5">
                <div className="border-t border-white/5 pt-4">
                  <p className="text-xs leading-relaxed text-white/55">{item.answer}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
