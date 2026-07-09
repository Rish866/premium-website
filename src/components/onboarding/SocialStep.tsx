import type { OnboardingData } from "../../types/onboarding";

type Props = {
  data: OnboardingData;
  onChange: (partial: Partial<OnboardingData>) => void;
};

export default function SocialStep({ data, onChange }: Props) {
  return (
    <div>
      <h2 className="mb-2 text-3xl font-semibold">Social Media & Online Presence</h2>
      <p className="mb-8 text-white/50">
        Connect your social media. This helps us add the right links and generate social content.
      </p>

      <div className="grid gap-5 lg:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs font-medium text-white/60">Instagram</span>
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/40 px-4 py-3">
            <span className="text-sm text-white/30">instagram.com/</span>
            <input
              value={data.instagram}
              onChange={(e) => onChange({ instagram: e.target.value })}
              placeholder="yourbusiness"
              className="w-full bg-transparent text-sm text-white outline-none"
            />
          </div>
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-medium text-white/60">Facebook</span>
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/40 px-4 py-3">
            <span className="text-sm text-white/30">facebook.com/</span>
            <input
              value={data.facebook}
              onChange={(e) => onChange({ facebook: e.target.value })}
              placeholder="yourbusiness"
              className="w-full bg-transparent text-sm text-white outline-none"
            />
          </div>
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-medium text-white/60">LinkedIn</span>
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/40 px-4 py-3">
            <span className="text-sm text-white/30">linkedin.com/company/</span>
            <input
              value={data.linkedin}
              onChange={(e) => onChange({ linkedin: e.target.value })}
              placeholder="yourbusiness"
              className="w-full bg-transparent text-sm text-white outline-none"
            />
          </div>
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-medium text-white/60">Google Business Profile URL</span>
          <input
            value={data.googleBusiness}
            onChange={(e) => onChange({ googleBusiness: e.target.value })}
            placeholder="https://g.page/yourbusiness"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
          />
        </label>

        <label className="col-span-full block">
          <span className="mb-2 block text-xs font-medium text-white/60">Existing Website (if any)</span>
          <input
            value={data.website}
            onChange={(e) => onChange({ website: e.target.value })}
            placeholder="https://yourbusiness.com"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300/40"
          />
        </label>
      </div>

      <div className="mt-8 rounded-2xl border border-cyan-300/20 bg-cyan-400/5 p-5">
        <p className="text-sm text-cyan-200">
          Don't have social media yet? No problem! We'll generate social media post templates for you after your website is ready.
        </p>
      </div>
    </div>
  );
}
