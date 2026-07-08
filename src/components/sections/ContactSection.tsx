import { Mail, MapPin, MessageCircle, PhoneCall } from "lucide-react";
import { siteData } from "../../data/siteData";

export default function ContactSection() {
  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto grid max-w-[1500px] gap-8 rounded-[3rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-2xl lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
            Contact
          </p>

          <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-7xl">
            Ready to sell your first premium website?
          </h2>

          <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
            Use AgencyOS to launch websites for local businesses with WhatsApp,
            calls, maps, forms, pricing and SEO-ready sections.
          </p>

          <div className="mt-10 grid gap-4">
            <button
              onClick={() => window.open(`https://wa.me/${siteData.whatsapp}`, "_blank")}
              className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-5 text-left hover:bg-white/[0.1]"
            >
              <MessageCircle className="text-cyan-300" />
              <div>
                <strong>WhatsApp</strong>
                <p className="text-sm text-white/45">Start enquiry instantly</p>
              </div>
            </button>

            <button
              onClick={() => window.open(`tel:${siteData.phone}`)}
              className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-5 text-left hover:bg-white/[0.1]"
            >
              <PhoneCall className="text-cyan-300" />
              <div>
                <strong>Call</strong>
                <p className="text-sm text-white/45">Talk to client directly</p>
              </div>
            </button>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Lead captured. Next we will connect this to EmailJS/Formspree/Supabase.");
          }}
          className="rounded-[2rem] border border-white/10 bg-black/30 p-6 backdrop-blur-xl"
        >
          <div className="grid gap-4">
            <input
              required
              placeholder="Client name"
              className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 outline-none placeholder:text-white/35"
            />

            <input
              required
              placeholder="Mobile number"
              className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 outline-none placeholder:text-white/35"
            />

            <input
              placeholder="Business type"
              className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 outline-none placeholder:text-white/35"
            />

            <textarea
              placeholder="Website requirement"
              className="min-h-36 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 outline-none placeholder:text-white/35"
            />

            <button className="rounded-full bg-white px-7 py-4 font-black text-black">
              Submit Lead
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
