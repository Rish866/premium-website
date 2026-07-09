type Props = {
  config: any;
};

export default function TeamBlock({ config }: Props) {
  const members = config.members ?? [
    { name: "John Doe", role: "Founder & CEO", bio: "10+ years experience" },
    { name: "Jane Smith", role: "Head of Design", bio: "Award-winning designer" },
    { name: "Mike Johnson", role: "CTO", bio: "Tech leader and innovator" },
  ];

  return (
    <section className="border-b border-white/10 px-6 py-12">
      {config.eyebrow && (
        <p className="mb-2 text-center text-xs font-medium text-cyan-200">{config.eyebrow}</p>
      )}
      <h2 className="mb-3 text-center text-2xl font-bold text-white sm:text-3xl">
        {config.title ?? "Meet Our Team"}
      </h2>
      {config.subtitle && (
        <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-white/50">{config.subtitle}</p>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member: any, i: number) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-400/20 text-lg font-bold text-white/60">
              {member.name?.charAt(0) ?? "?"}
            </div>
            <p className="text-sm font-semibold text-white">{member.name}</p>
            <p className="mt-0.5 text-xs text-cyan-200">{member.role}</p>
            {member.bio && <p className="mt-1 text-[10px] text-white/40">{member.bio}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
