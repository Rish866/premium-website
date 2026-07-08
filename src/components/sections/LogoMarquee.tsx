const logos = [
  "Restaurant",
  "Clinic",
  "Salon",
  "Gym",
  "Hotel",
  "Transport",
  "Real Estate",
  "CA Firm",
  "School",
  "Interior",
];

export default function LogoMarquee() {
  const repeated = [...logos, ...logos];

  return (
    <section className="overflow-hidden border-y border-white/10 bg-white/[0.03] py-6">
      <div className="marqueeTrack">
        {repeated.map((logo, index) => (
          <div
            key={`${logo}-${index}`}
            className="mx-10 whitespace-nowrap text-sm font-black uppercase tracking-[0.3em] text-white/35"
          >
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
}
