import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

type Props = {
  config: any;
};

export default function FAQBlock({ config }: Props) {
  const items = config.items ?? [];

  return (
    <section className="relative overflow-hidden px-6 py-24 lg:py-32">
      <div className="absolute inset-0 bg-[#030306]" />

      <div className="relative mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          {config.eyebrow && (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{config.eyebrow}</p>
          )}
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {config.title ?? "Frequently Asked Questions"}
          </h2>
        </motion.div>

        <div className="space-y-3">
          {items.map((item: any, index: number) => (
            <motion.details
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all hover:border-white/12 open:border-cyan-400/20 open:bg-cyan-400/[0.02]"
            >
              <summary className="flex cursor-pointer items-center justify-between p-6 text-sm font-semibold text-white [&::-webkit-details-marker]:hidden">
                <span className="pr-4">{item.question}</span>
                <ChevronDown size={18} className="shrink-0 text-white/30 transition-transform duration-300 group-open:rotate-180 group-open:text-cyan-300" />
              </summary>
              <div className="px-6 pb-6">
                <div className="border-t border-white/[0.06] pt-4">
                  <p className="text-sm leading-relaxed text-white/50">{item.answer}</p>
                </div>
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
