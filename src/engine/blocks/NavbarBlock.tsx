import { Menu, X } from "lucide-react";
import { useState } from "react";

type Props = {
  config: any;
};

export default function NavbarBlock({ config }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const brandName = config.brandName ?? "Business";
  const links = config.links ?? ["Home", "About", "Services", "Gallery", "Contact"];
  const ctaText = config.ctaText ?? "Book Now";

  return (
    <nav className="sticky top-0 z-50 border-b border-white/[0.06] bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo / Brand */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 text-sm font-bold text-black">
            {brandName.charAt(0)}
          </div>
          <span className="text-base font-bold tracking-tight text-white">
            {brandName}
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link: string) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[13px] font-medium text-white/60 transition-colors hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button className="hidden rounded-full bg-white px-5 py-2 text-xs font-semibold text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-white/10 md:inline-flex">
            {ctaText}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-white/60 hover:text-white md:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-white/[0.06] bg-black/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <div className="space-y-3">
            {links.map((link: string) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block text-sm text-white/70"
              >
                {link}
              </a>
            ))}
            <button className="mt-3 w-full rounded-full bg-white py-2.5 text-xs font-semibold text-black">
              {ctaText}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
