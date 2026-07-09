import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { OnboardingData } from "../../types/onboarding";

type Props = {
  data: OnboardingData;
  onChange: (partial: Partial<OnboardingData>) => void;
};

export default function ContactStep({ data, onChange }: Props) {
  return (
    <div>
      <h2 className="mb-2 text-3xl font-semibold">Contact Information</h2>
      <p className="mb-8 text-white/50">
        How can your customers reach you? This will appear on your website.
      </p>

      <div className="grid gap-5 lg:grid-cols-2">
        <label className="block">
          <span className="mb-2 flex items-center gap-2 text-xs font-medium text-white/60">
            <Phone size={12} /> Phone Number
          </span>
          <input
            value={data.phone}
            onChange={(e) => onChange({ phone: e.target.value })}
            placeholder="+91 98765 43210"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
          />
        </label>

        <label className="block">
          <span className="mb-2 flex items-center gap-2 text-xs font-medium text-white/60">
            <Phone size={12} /> WhatsApp Number
          </span>
          <input
            value={data.whatsapp}
            onChange={(e) => onChange({ whatsapp: e.target.value })}
            placeholder="+919876543210"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
          />
        </label>

        <label className="block">
          <span className="mb-2 flex items-center gap-2 text-xs font-medium text-white/60">
            <Mail size={12} /> Email Address
          </span>
          <input
            type="email"
            value={data.email}
            onChange={(e) => onChange({ email: e.target.value })}
            placeholder="hello@yourbusiness.com"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
          />
        </label>

        <label className="block">
          <span className="mb-2 flex items-center gap-2 text-xs font-medium text-white/60">
            <Clock size={12} /> Opening Hours
          </span>
          <input
            value={data.openingHours}
            onChange={(e) => onChange({ openingHours: e.target.value })}
            placeholder="9:00 AM - 9:00 PM"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
          />
        </label>

        <label className="col-span-full block">
          <span className="mb-2 flex items-center gap-2 text-xs font-medium text-white/60">
            <MapPin size={12} /> Street Address
          </span>
          <input
            value={data.address}
            onChange={(e) => onChange({ address: e.target.value })}
            placeholder="123 Business Street, Block A"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-medium text-white/60">City</span>
          <input
            value={data.city}
            onChange={(e) => onChange({ city: e.target.value })}
            placeholder="Mumbai"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-medium text-white/60">State</span>
          <input
            value={data.state}
            onChange={(e) => onChange({ state: e.target.value })}
            placeholder="Maharashtra"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
          />
        </label>
      </div>
    </div>
  );
}
