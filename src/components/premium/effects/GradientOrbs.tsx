import { motion } from "framer-motion";

export default function GradientOrbs() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[-180px] top-[-120px] h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 90, 0],
          scale: [1.1, 0.9, 1.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[-220px] top-[120px] h-[650px] w-[650px] rounded-full bg-violet-600/20 blur-[170px]"
      />

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute bottom-[-220px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[170px]"
      />
    </>
  );
}
