import { industries, type OnboardingData } from "../../types/onboarding";

type Props = {
  data: OnboardingData;
  onChange: (partial: Partial<OnboardingData>) => void;
};

export default function IndustryStep({ data, onChange }: Props) {
  return (
    <div>
      <h2 className="mb-2 text-3xl font-semibold">What type of business do you have?</h2>
      <p className="mb-8 text-white/50">
        Select your industry and we'll generate a website tailored to your business.
      </p>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => (
          <button
            key={industry.id}
            onClick={() => onChange({ industry: industry.id })}
            className={`rounded-2xl border p-4 text-left transition-all ${
              data.industry === industry.id
                ? "border-cyan-400 bg-cyan-400/10 ring-1 ring-cyan-400/30"
                : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
            }`}
          >
            <span className="text-2xl">{industry.icon}</span>
            <p className="mt-2 font-medium text-white">{industry.label}</p>
            <p className="mt-1 text-xs text-white/45">{industry.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
