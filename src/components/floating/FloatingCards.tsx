import { motion } from "framer-motion";
import {
  Star,
  MapPin,
  Phone,
  TrendingUp
} from "lucide-react";

const cards = [
  {
    icon: <TrendingUp size={18} />,
    title: "+126 Leads",
    subtitle: "This Month",
    x: "-8%",
    y: "18%"
  },
  {
    icon: <Star size={18} />,
    title: "4.9 Rating",
    subtitle: "Google Reviews",
    x: "88%",
    y: "18%"
  },
  {
    icon: <MapPin size={18} />,
    title: "Maps Connected",
    subtitle: "SEO Ready",
    x: "86%",
    y: "72%"
  },
  {
    icon: <Phone size={18} />,
    title: "Live Calls",
    subtitle: "WhatsApp Active",
    x: "-6%",
    y: "72%"
  }
];

export default function FloatingCards() {
  return (
    <>
      {cards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: [0, -12, 0]
          }}
          transition={{
            delay: i * 0.3,
            duration: 5,
            repeat: Infinity
          }}
          className="absolute z-30 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl shadow-2xl"
          style={{
            left: card.x,
            top: card.y
          }}
        >
          <div className="mb-3 text-cyan-300">
            {card.icon}
          </div>

          <h4 className="font-black">
            {card.title}
          </h4>

          <p className="text-xs text-white/45">
            {card.subtitle}
          </p>
        </motion.div>
      ))}
    </>
  );
}
