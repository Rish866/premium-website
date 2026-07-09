import { Clock, Mail, MapPin, Phone } from "lucide-react";

type Props = {
  config: any;
};

export default function ContactBlock({ config }: Props) {
  return (
    <section className="px-6 py-12">
      {config.eyebrow && (
        <p className="mb-2 text-center text-xs font-medium text-cyan-200">{config.eyebrow}</p>
      )}
      <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
        {config.title ?? "Get in Touch"}
      </h2>
      {config.subtitle && (
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-white/50">{config.subtitle}</p>
      )}

      <div className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-2">
        {/* Contact Info */}
        <div className="space-y-3">
          {config.phone && (
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <Phone size={16} className="shrink-0 text-cyan-200" />
              <div>
                <p className="text-[10px] text-white/40">Phone</p>
                <p className="text-sm text-white/80">{config.phone}</p>
              </div>
            </div>
          )}

          {config.whatsapp && (
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <Phone size={16} className="shrink-0 text-emerald-300" />
              <div>
                <p className="text-[10px] text-white/40">WhatsApp</p>
                <p className="text-sm text-white/80">{config.whatsapp}</p>
              </div>
            </div>
          )}

          {config.email && (
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <Mail size={16} className="shrink-0 text-cyan-200" />
              <div>
                <p className="text-[10px] text-white/40">Email</p>
                <p className="text-sm text-white/80">{config.email}</p>
              </div>
            </div>
          )}

          {config.address && (
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <MapPin size={16} className="shrink-0 text-cyan-200" />
              <div>
                <p className="text-[10px] text-white/40">Address</p>
                <p className="text-sm text-white/80">{config.address}</p>
              </div>
            </div>
          )}

          {config.openingHours && (
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <Clock size={16} className="shrink-0 text-cyan-200" />
              <div>
                <p className="text-[10px] text-white/40">Hours</p>
                <p className="text-sm text-white/80">{config.openingHours}</p>
              </div>
            </div>
          )}
        </div>

        {/* Contact Form */}
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
          <p className="mb-4 text-sm font-semibold text-white">Send a message</p>
          <div className="space-y-3">
            <input
              placeholder="Your Name"
              className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-xs text-white outline-none"
            />
            <input
              placeholder="Email"
              className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-xs text-white outline-none"
            />
            <textarea
              rows={3}
              placeholder="Message"
              className="w-full resize-none rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-xs text-white outline-none"
            />
            <button className="w-full rounded-lg bg-white py-2 text-xs font-semibold text-black">
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Social Links */}
      {(config.instagram || config.facebook || config.linkedin) && (
        <div className="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-2">
          {config.instagram && (
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] text-white/50">
              IG: @{config.instagram}
            </span>
          )}
          {config.facebook && (
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] text-white/50">
              FB: {config.facebook}
            </span>
          )}
          {config.linkedin && (
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] text-white/50">
              LI: {config.linkedin}
            </span>
          )}
        </div>
      )}
    </section>
  );
}
