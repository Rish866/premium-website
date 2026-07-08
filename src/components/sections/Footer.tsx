import { ArrowRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { siteData } from "../../data/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[1fr_0.8fr_0.8fr]">
        <div>
          <h2 className="text-3xl font-black">AgencyOS</h2>
          <p className="mt-4 max-w-md leading-7 text-white/50">
            Premium website engine for selling local business websites faster,
            cleaner and with better UI.
          </p>

          <button
            onClick={() => window.open(`https://wa.me/${siteData.whatsapp}`, "_blank")}
            className="mt-6 rounded-full bg-white px-6 py-3 font-black text-black"
          >
            Start Now
            <ArrowRight className="ml-2 inline h-4 w-4" />
          </button>
        </div>

        <div>
          <h3 className="mb-4 font-black">Links</h3>
          <div className="grid gap-3 text-white/55">
            <a href="#services">Services</a>
            <a href="#industries">Industries</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-black">Contact</h3>
          <div className="grid gap-4 text-white/55">
            <button
              onClick={() => window.open(`https://wa.me/${siteData.whatsapp}`, "_blank")}
              className="flex items-center gap-3 text-left hover:text-white"
            >
              <MessageCircle size={18} /> WhatsApp
            </button>

            <button className="flex items-center gap-3 text-left hover:text-white">
              <Mail size={18} /> hello@agencyos.in
            </button>

            <button className="flex items-center gap-3 text-left hover:text-white">
              <MapPin size={18} /> Navi Mumbai, Maharashtra
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1500px] flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/35 md:flex-row">
        <p>© 2026 AgencyOS. All rights reserved.</p>
        <p>Built for local business websites.</p>
      </div>
    </footer>
  );
}

