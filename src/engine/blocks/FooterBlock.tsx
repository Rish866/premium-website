import { Heart } from "lucide-react";

type Props = {
  config: any;
};

export default function FooterBlock({ config }: Props) {
  const brandName = config.brandName ?? "Business";
  const tagline = config.tagline ?? "Premium digital presence.";
  const phone = config.phone ?? "";
  const email = config.email ?? "";
  const address = config.address ?? "";
  const links = config.links ?? ["Home", "About", "Services", "Gallery", "Pricing", "Contact"];
  const services = config.services ?? [];
  const instagram = config.instagram ?? "";
  const facebook = config.facebook ?? "";
  const linkedin = config.linkedin ?? "";

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#030305]">
      {/* Top gradient line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 pb-8 pt-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 text-sm font-bold text-black">
                {brandName.charAt(0)}
              </div>
              <span className="text-base font-bold text-white">{brandName}</span>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-white/40">{tagline}</p>

            {/* Social */}
            <div className="mt-5 flex gap-3">
              {instagram && (
                <a href={`https://instagram.com/${instagram}`} className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[10px] text-white/50 transition hover:border-pink-400/30 hover:text-pink-300">
                  IG
                </a>
              )}
              {facebook && (
                <a href={`https://facebook.com/${facebook}`} className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[10px] text-white/50 transition hover:border-blue-400/30 hover:text-blue-300">
                  FB
                </a>
              )}
              {linkedin && (
                <a href={`https://linkedin.com/company/${linkedin}`} className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[10px] text-white/50 transition hover:border-sky-400/30 hover:text-sky-300">
                  LI
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/70">Navigation</p>
            <div className="space-y-2.5">
              {links.slice(0, 6).map((link: string) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="block text-xs text-white/40 transition hover:text-white/70">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          {services.length > 0 && (
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/70">Services</p>
              <div className="space-y-2.5">
                {services.slice(0, 6).map((service: string) => (
                  <p key={service} className="text-xs text-white/40">{service}</p>
                ))}
              </div>
            </div>
          )}

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/70">Contact</p>
            <div className="space-y-2.5 text-xs text-white/40">
              {phone && <p>{phone}</p>}
              {email && <p>{email}</p>}
              {address && <p className="leading-relaxed">{address}</p>}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 text-[10px] text-white/30 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {brandName}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={10} className="text-red-400" /> by AgencyOS
          </p>
        </div>
      </div>
    </footer>
  );
}
