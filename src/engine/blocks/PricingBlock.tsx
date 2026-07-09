type Props = {
  config: any;
};

export default function PricingBlock({ config }: Props) {
  const plans = config.plans ?? [];

  return (
    <section className="border-b border-white/10 px-10 py-20">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="text-sm text-cyan-200">{config.eyebrow ?? "Pricing"}</p>
        <h2 className="mt-3 text-4xl font-semibold text-white">
          {config.title ?? "Simple pricing for every business"}
        </h2>
        <p className="mt-4 text-white/50">
          {config.subtitle ?? "Choose a plan that fits your website needs."}
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {plans.map((plan: any) => (
          <div key={plan.name} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xl font-semibold text-white">{plan.name}</p>
            <p className="mt-4 text-4xl font-bold text-cyan-200">{plan.price}</p>

            <div className="mt-6 space-y-3">
              {(plan.features ?? []).map((feature: string) => (
                <p key={feature} className="text-sm text-white/55">
                  • {feature}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
