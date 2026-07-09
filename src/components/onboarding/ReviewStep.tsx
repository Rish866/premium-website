import { Check, Sparkles } from "lucide-react";
import { industries, type OnboardingData } from "../../types/onboarding";

type Props = {
  data: OnboardingData;
};

function ReviewItem({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  return (
    <div className="flex items-start gap-3 border-b border-white/5 py-3 last:border-0">
      <Check size={14} className="mt-0.5 shrink-0 text-cyan-300" />
      <div>
        <p className="text-xs text-white/45">{label}</p>
        <p className="text-sm text-white/80">{value}</p>
      </div>
    </div>
  );
}

export default function ReviewStep({ data }: Props) {
  const industry = industries.find((i) => i.id === data.industry);

  return (
    <div>
      <h2 className="mb-2 text-3xl font-semibold">Review & Generate</h2>
      <p className="mb-6 text-white/50">
        Everything looks good? Click Generate to create your website in seconds.
      </p>

      <div className="mb-6 rounded-2xl border border-cyan-300/20 bg-cyan-400/5 p-5">
        <div className="flex items-center gap-3">
          <Sparkles className="text-cyan-200" size={20} />
          <div>
            <p className="font-medium text-cyan-100">AI will generate for you:</p>
            <p className="text-sm text-white/50">
              Complete website with hero, about, services, gallery, pricing, FAQ, contact pages + SEO + marketing copy
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <h3 className="mb-3 text-sm font-medium text-white/70">Business Details</h3>
          <ReviewItem label="Industry" value={industry ? `${industry.icon} ${industry.label}` : ""} />
          <ReviewItem label="Business Name" value={data.businessName} />
          <ReviewItem label="Tagline" value={data.tagline} />
          <ReviewItem label="Description" value={data.businessDescription} />
          <ReviewItem label="Services" value={data.services.join(", ")} />
          <ReviewItem label="Team Size" value={data.teamSize} />
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <h3 className="mb-3 text-sm font-medium text-white/70">Contact & Social</h3>
          <ReviewItem label="Phone" value={data.phone} />
          <ReviewItem label="WhatsApp" value={data.whatsapp} />
          <ReviewItem label="Email" value={data.email} />
          <ReviewItem label="Address" value={[data.address, data.city, data.state].filter(Boolean).join(", ")} />
          <ReviewItem label="Instagram" value={data.instagram} />
          <ReviewItem label="Facebook" value={data.facebook} />
          <ReviewItem label="LinkedIn" value={data.linkedin} />
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        <h3 className="mb-3 text-sm font-medium text-white/70">Brand Colors</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg" style={{ backgroundColor: data.primaryColor }} />
            <span className="text-sm text-white/60">{data.primaryColor}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg" style={{ backgroundColor: data.secondaryColor }} />
            <span className="text-sm text-white/60">{data.secondaryColor}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
