import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Loader2, Sparkles } from "lucide-react";
import { defaultOnboardingData, type OnboardingData } from "../../types/onboarding";
import IndustryStep from "../../components/onboarding/IndustryStep";
import BusinessInfoStep from "../../components/onboarding/BusinessInfoStep";
import BrandStep from "../../components/onboarding/BrandStep";
import ContactStep from "../../components/onboarding/ContactStep";
import SocialStep from "../../components/onboarding/SocialStep";
import ReviewStep from "../../components/onboarding/ReviewStep";
import { generateAndCreateProject } from "../../services/ai/generateWebsite";

const steps = [
  { id: "industry", label: "Industry" },
  { id: "business", label: "Business Info" },
  { id: "brand", label: "Brand" },
  { id: "contact", label: "Contact" },
  { id: "social", label: "Social" },
  { id: "review", label: "Review & Generate" },
];

export default function OnboardingPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<OnboardingData>(defaultOnboardingData);
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState("");

  const updateData = (partial: Partial<OnboardingData>) => {
    setData((prev) => ({ ...prev, ...partial }));
  };

  const canProceed = () => {
    if (currentStep === 0) return !!data.industry;
    if (currentStep === 1) return !!data.businessName;
    return true;
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGenerate = async () => {
    try {
      setGenerating(true);
      setError("");
      const project = await generateAndCreateProject(data);
      navigate(`/builder/${project.id}`);
    } catch (err: any) {
      setError(err.message || "Failed to generate website");
      setGenerating(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <IndustryStep data={data} onChange={updateData} />;
      case 1:
        return <BusinessInfoStep data={data} onChange={updateData} />;
      case 2:
        return <BrandStep data={data} onChange={updateData} />;
      case 3:
        return <ContactStep data={data} onChange={updateData} />;
      case 4:
        return <SocialStep data={data} onChange={updateData} />;
      case 5:
        return <ReviewStep data={data} />;
      default:
        return null;
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-black px-6 py-10 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,.12),transparent_35%),radial-gradient(circle_at_80%_60%,rgba(168,85,247,.12),transparent_35%)]" />

      <div className="relative mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-200">
              <Sparkles size={20} />
            </div>
            <div>
              <p className="font-semibold">AgencyOS</p>
              <p className="text-xs text-white/45">Setup Wizard</p>
            </div>
          </div>
          <p className="text-sm text-white/45">
            Step {currentStep + 1} of {steps.length}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8 flex gap-2">
          {steps.map((step, index) => (
            <div key={step.id} className="flex-1">
              <div
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index <= currentStep ? "bg-cyan-400" : "bg-white/10"
                }`}
              />
              <p className={`mt-2 text-xs ${index <= currentStep ? "text-cyan-200" : "text-white/30"}`}>
                {step.label}
              </p>
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="min-h-[450px] rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-2xl">
          {renderStep()}
        </div>

        {/* Error */}
        {error && (
          <div className="mt-4 rounded-2xl border border-red-300/20 bg-red-400/10 p-4 text-sm text-red-200">
            {error}
          </div>
        )}

        {/* Navigation */}
        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/70 disabled:opacity-30"
          >
            <ArrowLeft size={16} />
            Back
          </button>

          {currentStep < steps.length - 1 ? (
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black disabled:opacity-50"
            >
              Next
              <ArrowRight size={16} />
            </button>
          ) : (
            <button
              onClick={handleGenerate}
              disabled={generating || !data.businessName || !data.industry}
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-3 text-sm font-semibold text-black disabled:opacity-50"
            >
              {generating ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles size={16} />
                  Generate Website
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
