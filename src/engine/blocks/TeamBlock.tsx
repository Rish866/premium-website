import { motion } from "framer-motion";

type Props = {
  config: any;
};

export default function TeamBlock({ config }: Props) {
  const members = config.members ?? [];

  return (
    <section className="relative overflow-hidden px-6 py-24 lg:py-32">
      <div className="absolute inset-0 bg-[#030306]" />


      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          {config.eyebrow && (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{config.eyebrow}</p>
          )}
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {config.title ?? "Meet Our Team"}
          </h2>
          {config.subtitle && (
            <p className="mt-4 text-base text-white/50">{config.subtitle}</p>
          )}
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 text-center transition-all hover:border-cyan-400/15"
            >
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/25 to-purple-400/25 text-2xl font-bold text-white shadow-lg shadow-cyan-500/10 transition-transform duration-300 group-hover:scale-110">
                {member.name?.charAt(0) ?? "?"}
              </div>
              <p className="text-base font-bold text-white">{member.name}</p>
              <p className="mt-1 text-xs font-medium text-cyan-300">{member.role}</p>
              {member.bio && <p className="mt-3 text-xs text-white/40">{member.bio}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
