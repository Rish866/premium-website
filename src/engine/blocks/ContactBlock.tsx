import { Clock, Mail, MapPin, Phone } from "lucide-react";

type Props = {
  config: any;
};

export default function ContactBlock({ config }: Props) {
  return (
    <section className="px-10 py-20">
      {config.eyebrow && (
        <p className="mb-3 text-center text-sm font-medium text-cyan-200">{config.eyebrow}</p>
      )}
      <h2 className="text-center text-4xl font-bold text-white">
        {config.title ?? "Get in Touch"}
      </h2>
      {config.subtitle && (
        <p className="mx-auto mt-4 max-w-xl text-center text-white/50">{config.subtitle}</p>
      )}

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
        {/* Contact Info */}
        <div className="space-y-4">
          {config.phone && (
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <Phone size={20} className="shrink-0 text-cyan-200" />
              <div>
                <p className="text-xs text-white/40">Phone</p>
                <p className="text-white/80">{config.phone}</p>
              </div>
            </div>
          )}

          {config.whatsapp && (
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <Phone size={20} className="shrink-0 text-emerald-300" />
              <div>
                <p className="text-xs text-white/40">WhatsApp</p>
                <p className="text-white/80">{config.whatsapp}</p>
              </div>
            </div>
          )}

          {config.email && (
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <Mail size={20} className="shrink-0 text-cyan-200" />
              <div>
                <p className="text-xs text-white/40">Email</p>
                <p className="text-white/80">{config.email}</p>
              </div>
            </div>
          )}

          {config.address && (
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <MapPin size={20} className="shrink-0 text-cyan-200" />
              <div>
                <p className="text-xs text-white/40">Address</p>
                <p className="text-white/80">{config.address}</p>
              </div>
            </div>
          )}

          {config.openingHours && (
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <Clock size={20} className="shrink-0 text-cyan-200" />
              <div>
                <p className="text-xs text-white/40">Opening Hours</p>
                <p className="text-white/80">{config.openingHours}</p>
              </div>
            </div>
          )}
        </div>

        {/* Contact Form */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <p className="mb-5 text-lg font-semibold text-white">Send us a message</p>
          <div className="space-y-4">
            <input
              placeholder="Your Name"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none"
            />
            <input
              placeholder="Email Address"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none"
            />
            <input
              placeholder="Phone Number"
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none"
            />
            <button className="w-full rounded-xl bg-white py-3 text-sm font-semibold text-black transition hover:scale-[1.01]">
              Send Message
            </button>
          </div>
        </div>
      </div>

      {/* Social Links */}
      {(config.instagram || config.facebook || config.linkedin) && (
        <div className="mx-auto mt-8 flex max-w-5xl flex-wrap justify-center gap-4">
          {config.instagram && (
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60">
              Instagram: @{config.instagram}
            </span>
          )}
          {config.facebook && (
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60">
              Facebook: {config.facebook}
            </span>
          )}
          {config.linkedin && (
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60">
              LinkedIn: {config.linkedin}
            </span>
          )}
        </div>
      )}
    </section>
  );
}
