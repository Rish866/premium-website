import { Clock, Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";

type Props = {
  config: any;
};

export default function ContactBlock({ config }: Props) {
  return (
    <section className="relative overflow-hidden px-6 py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050510] to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(34,211,238,.08),transparent_60%)]" />

      <div className="relative">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          {config.eyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-300">{config.eyebrow}</p>
          )}
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {config.title ?? "Get in Touch"}
          </h2>
          {config.subtitle && (
            <p className="mt-3 text-sm text-white/50">{config.subtitle}</p>
          )}
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-5">
          {/* Contact Info - 2 cols */}
          <div className="space-y-3 lg:col-span-2">
            {config.phone && (
              <div className="group flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 transition-all hover:border-cyan-400/20 hover:bg-cyan-400/5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300 transition-colors group-hover:bg-cyan-400/20">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-white/35">Phone</p>
                  <p className="text-sm font-medium text-white/80">{config.phone}</p>
                </div>
              </div>
            )}

            {config.whatsapp && (
              <div className="group flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 transition-all hover:border-emerald-400/20 hover:bg-emerald-400/5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300 transition-colors group-hover:bg-emerald-400/20">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-white/35">WhatsApp</p>
                  <p className="text-sm font-medium text-white/80">{config.whatsapp}</p>
                </div>
              </div>
            )}

            {config.email && (
              <div className="group flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 transition-all hover:border-purple-400/20 hover:bg-purple-400/5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-400/10 text-purple-300 transition-colors group-hover:bg-purple-400/20">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-white/35">Email</p>
                  <p className="text-sm font-medium text-white/80">{config.email}</p>
                </div>
              </div>
            )}

            {config.address && (
              <div className="group flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 transition-all hover:border-white/20">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-white/50">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-white/35">Address</p>
                  <p className="text-sm font-medium text-white/80">{config.address}</p>
                </div>
              </div>
            )}

            {config.openingHours && (
              <div className="group flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 transition-all hover:border-white/20">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-white/50">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-white/35">Hours</p>
                  <p className="text-sm font-medium text-white/80">{config.openingHours}</p>
                </div>
              </div>
            )}
          </div>

          {/* Contact Form - 3 cols */}
          <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-transparent p-6 backdrop-blur-sm lg:col-span-3">
            <h3 className="mb-5 text-sm font-bold text-white">Send us a message</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                placeholder="Your Name"
                className="rounded-xl border border-white/[0.08] bg-black/40 px-4 py-3 text-xs text-white placeholder-white/25 outline-none transition-colors focus:border-cyan-400/40"
              />
              <input
                placeholder="Email Address"
                className="rounded-xl border border-white/[0.08] bg-black/40 px-4 py-3 text-xs text-white placeholder-white/25 outline-none transition-colors focus:border-cyan-400/40"
              />
              <input
                placeholder="Phone Number"
                className="rounded-xl border border-white/[0.08] bg-black/40 px-4 py-3 text-xs text-white placeholder-white/25 outline-none transition-colors focus:border-cyan-400/40 sm:col-span-2"
              />
              <textarea
                rows={4}
                placeholder="Your Message..."
                className="resize-none rounded-xl border border-white/[0.08] bg-black/40 px-4 py-3 text-xs text-white placeholder-white/25 outline-none transition-colors focus:border-cyan-400/40 sm:col-span-2"
              />
              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 py-3 text-xs font-semibold text-black shadow-md shadow-cyan-500/20 transition-all hover:shadow-cyan-500/40 sm:col-span-2">
                <Send size={14} />
                Send Message
              </button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        {(config.instagram || config.facebook || config.linkedin) && (
          <div className="mx-auto mt-8 flex max-w-5xl flex-wrap justify-center gap-2">
            {config.instagram && (
              <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-[10px] font-medium text-white/50 transition-colors hover:border-pink-400/30 hover:text-pink-300">
                Instagram: @{config.instagram}
              </span>
            )}
            {config.facebook && (
              <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-[10px] font-medium text-white/50 transition-colors hover:border-blue-400/30 hover:text-blue-300">
                Facebook: {config.facebook}
              </span>
            )}
            {config.linkedin && (
              <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-[10px] font-medium text-white/50 transition-colors hover:border-sky-400/30 hover:text-sky-300">
                LinkedIn: {config.linkedin}
              </span>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
