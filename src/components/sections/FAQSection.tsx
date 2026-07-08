const faqs = [
  {
    q: "Can I use this for different businesses?",
    a: "Yes. AgencyOS is built to create websites for restaurants, clinics, salons, gyms, transport, real estate, hotels and more."
  },
  {
    q: "Are buttons functional?",
    a: "Yes. Call, WhatsApp, enquiry forms, pricing buttons and navigation actions are connected."
  },
  {
    q: "Can I sell these websites locally?",
    a: "Yes. You can package these as starter, premium and growth websites for local businesses."
  },
  {
    q: "Can this become a SaaS later?",
    a: "Yes. The structure is being built so it can later support templates, admin editing and publishing."
  }
];

export default function FAQSection() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
            FAQ
          </p>
          <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-7xl">
            Questions clients will ask.
          </h2>
        </div>

        <div className="grid gap-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl"
            >
              <summary className="cursor-pointer list-none text-xl font-black">
                {item.q}
              </summary>
              <p className="mt-4 leading-7 text-white/55">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
