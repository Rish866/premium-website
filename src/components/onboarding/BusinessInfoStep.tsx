import type { OnboardingData } from "../../types/onboarding";

type Props = {
  data: OnboardingData;
  onChange: (partial: Partial<OnboardingData>) => void;
};

export default function BusinessInfoStep({ data, onChange }: Props) {
  return (
    <div>
      <h2 className="mb-2 text-3xl font-semibold">Tell us about your business</h2>
      <p className="mb-8 text-white/50">
        This information helps AI generate the perfect website content for you.
      </p>

      <div className="grid gap-5 lg:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs font-medium text-white/60">Business Name *</span>
          <input
            value={data.businessName}
            onChange={(e) => onChange({ businessName: e.target.value })}
            placeholder="e.g., Urban Spice Restaurant"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-medium text-white/60">Tagline</span>
          <input
            value={data.tagline}
            onChange={(e) => onChange({ tagline: e.target.value })}
            placeholder="e.g., Premium dining experience"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
          />
        </label>

        <label className="col-span-full block">
          <span className="mb-2 block text-xs font-medium text-white/60">Business Description</span>
          <textarea
            rows={4}
            value={data.businessDescription}
            onChange={(e) => onChange({ businessDescription: e.target.value })}
            placeholder="Describe what your business does, your unique offerings, target audience..."
            className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-medium text-white/60">Services (comma separated)</span>
          <input
            value={data.services.join(", ")}
            onChange={(e) => onChange({ services: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) })}
            placeholder="e.g., Fine Dining, Catering, Private Events"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-medium text-white/60">Target Audience</span>
          <input
            value={data.targetAudience}
            onChange={(e) => onChange({ targetAudience: e.target.value })}
            placeholder="e.g., Young professionals, families, corporates"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-medium text-white/60">What makes you different?</span>
          <input
            value={data.uniqueSellingPoint}
            onChange={(e) => onChange({ uniqueSellingPoint: e.target.value })}
            placeholder="e.g., 20+ years experience, award-winning chef"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-medium text-white/60">Team Size</span>
          <select
            value={data.teamSize}
            onChange={(e) => onChange({ teamSize: e.target.value })}
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
          >
            <option value="1-10" className="bg-black">1-10 employees</option>
            <option value="11-50" className="bg-black">11-50 employees</option>
            <option value="51-200" className="bg-black">51-200 employees</option>
            <option value="200+" className="bg-black">200+ employees</option>
          </select>
        </label>
      </div>
    </div>
  );
}
