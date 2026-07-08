import { motion } from "framer-motion";
import { Building2, Dumbbell, Hotel, Stethoscope, Truck, Utensils } from "lucide-react";

const templates = [
  {
    name: "Restaurant",
    icon: Utensils,
    headline: "Premium food ordering website",
    blocks: ["Menu", "Table Booking", "Gallery", "WhatsApp Orders"],
  },
  {
    name: "Clinic",
    icon: Stethoscope,
    headline: "Trust-first medical website",
    blocks: ["Doctors", "Appointments", "Treatments", "Google Reviews"],
  },
  {
    name: "Gym",
    icon: Dumbbell,
    headline: "High-conversion fitness website",
    blocks: ["Plans", "Transformations", "Trainers", "Trial Booking"],
  },
  {
    name: "Hotel",
    icon: Hotel,
    headline: "Luxury booking website",
    blocks: ["Rooms", "Amenities", "Booking", "Offers"],
  },
  {
    name: "Transport",
    icon: Truck,
    headline: "Fleet business website",
    blocks: ["Fleet", "Routes", "Clients", "Quote Request"],
  },
  {
    name: "Real Estate",
    icon: Building2,
    headline: "Property launch website",
    blocks: ["Projects", "Amenities", "Location", "Lead Capture"],
  },
];

export default function TemplateCommandGrid() {
  return (
    <section className="relative overflow-hidden px-6 py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(34,211,238,.16),transparent_34%),radial-gradient(circle_at_90%_40%,rgba(168,85,247,.18),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 max-w-4xl">
          <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200 backdrop-blur-xl">
            Template Intelligence Layer
          </div>

          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            One engine. Multiple industries. Premium output every time.
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-white/55">
            This section shows the future website generation logic where every industry gets its own blocks, layout and conversion flow.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-cyan-500/5 backdrop-blur-2xl"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-cyan-200 transition duration-500 group-hover:scale-110 group-hover:bg-cyan-400/15">
                    <Icon size={25} />
                  </div>

                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/45">
                    JSON Ready
                  </span>
                </div>

                <h3 className="text-2xl font-semibold">{item.name}</h3>
                <p className="mt-3 text-lg text-white/55">{item.headline}</p>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  {item.blocks.map((block) => (
                    <div
                      key={block}
                      className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white/65"
                    >
                      {block}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
