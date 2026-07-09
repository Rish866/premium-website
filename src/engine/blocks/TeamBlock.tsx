type Props = {
  config: any;
};

export default function TeamBlock({ config }: Props) {
  const members = config.members ?? [
    { name: "John Doe", role: "Founder", bio: "10+ years" },
    { name: "Jane Smith", role: "Designer", bio: "Award-winning" },
    { name: "Mike J.", role: "CTO", bio: "Tech leader" },
  ];

  return (
    <section className="relative overflow-hidden border-b border-white/10 px-6 py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#030308] to-black" />

      <div className="relative">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          {config.eyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-300">{config.eyebrow}</p>
          )}
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {config.title ?? "Meet Our Team"}
          </h2>
          {config.subtitle && (
            <p className="mt-3 text-sm text-white/50">{config.subtitle}</p>
          )}
        </div>

        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member: any, i: number) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-transparent p-6 text-center transition-all duration-300 hover:border-cyan-400/20 hover:shadow-lg hover:shadow-cyan-500/5"
            >
              {/* Avatar */}
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/30 to-purple-400/30 text-xl font-bold text-white shadow-lg shadow-cyan-500/10 transition-transform group-hover:scale-110">
                {member.name?.charAt(0) ?? "?"}
              </div>

              <p className="text-sm font-bold text-white">{member.name}</p>
              <p className="mt-1 text-xs font-medium text-cyan-300">{member.role}</p>
              {member.bio && (
                <p className="mt-2 text-[10px] text-white/40">{member.bio}</p>
              )}

              {/* Hover glow */}
              <div className="absolute -bottom-4 left-1/2 h-16 w-16 -translate-x-1/2 rounded-full bg-cyan-500/20 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
