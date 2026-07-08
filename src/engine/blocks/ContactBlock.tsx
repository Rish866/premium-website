type Props = {
  config: any;
};

export default function ContactBlock({ config }: Props) {
  return (
    <section className="p-12 text-center">
      <h2 className="text-3xl font-semibold">
        Contact
      </h2>

      <p className="mt-4 text-white/50">
        {config.phone || "Phone not configured"}
      </p>

      <p className="text-white/40">
        {config.email || "Email not configured"}
      </p>
    </section>
  );
}
