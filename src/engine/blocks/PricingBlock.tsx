type Props = {
  config: any;
};

export default function PricingBlock({ config }: Props) {
  const plans = config.plans ?? [];

  return (
    <section className="border-b border-white/10 px-6 py-12">
      <div className="mx-auto mb-8 max-w-3xl text-center">
        {config.eyebrow && (
          <p className="mb-2 text-xs font-medium text-cyan-200">{config.eyebrow}</p>
        )}
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          {config.title ?? "Pricing"}
        </h2>
        {config.subtitle && (
          <p className="mt-3 text-sm text-white/50">{config.subtitle}</p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {plans.map((plan: any, index: number) => (
          <div key={`${plan.name}-${index}`} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-base font-semibold text-white">{plan.name}</p>
            <p className="mt-2 text-2xl font-bold text-cyan-200">{plan.price}</p>

            <div className="mt-4 space-y-2">
              {(plan.features ?? []).map((feature: string, fi: number) => (
                <p key={fi} className="text-xs text-white/55">
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
