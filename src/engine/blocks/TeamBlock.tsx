type Props = {
  config: any;
};

export default function TeamBlock({ config }: Props) {
  const members = config.members ?? [
    { name: "John Doe", role: "Founder & CEO", bio: "10+ years of industry experience" },
    { name: "Jane Smith", role: "Head of Design", bio: "Award-winning designer" },
    { name: "Mike Johnson", role: "CTO", bio: "Tech leader and innovator" },
  ];

  return (
    <section className="border-b border-white/10 px-10 py-20">
      {config.eyebrow && (
        <p className="mb-3 text-center text-sm font-medium text-cyan-200">{config.eyebrow}</p>
      )}
      <h2 className="mb-4 text-center text-4xl font-bold text-white">
        {config.title ?? "Meet Our Team"}
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-white/50">
        {config.subtitle ?? "The passionate people behind our success."}
      </p>

      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {members.map((member: any, i: number) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-400/20 text-2xl font-bold text-white/60">
              {member.name?.charAt(0) ?? "?"}
            </div>
            <p className="text-lg font-semibold text-white">{member.name}</p>
            <p className="mt-1 text-sm text-cyan-200">{member.role}</p>
            {member.bio && <p className="mt-2 text-xs text-white/40">{member.bio}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
