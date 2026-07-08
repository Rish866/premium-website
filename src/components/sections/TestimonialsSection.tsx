const testimonials = [
  {
    name: "Restaurant Owner",
    quote: "The website feels premium and customers can directly WhatsApp us for bookings.",
  },
  {
    name: "Clinic Owner",
    quote: "Appointment enquiries became easier because every action is visible and simple.",
  },
  {
    name: "Salon Owner",
    quote: "The design looks much better than normal local business websites.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-violet-300">
            Testimonials
          </p>

          <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.07em] md:text-7xl">
            Built for businesses that need leads.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl"
            >
              <div className="mb-6 text-3xl text-yellow-300">★★★★★</div>
              <p className="text-xl font-bold leading-8 text-white/80">
                “{item.quote}”
              </p>
              <div className="mt-8 border-t border-white/10 pt-6">
                <strong>{item.name}</strong>
                <p className="text-sm text-white/40">Local Business Client</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
