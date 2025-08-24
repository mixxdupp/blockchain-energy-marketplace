import { motion } from "framer-motion";

export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 bg-orb">
      <motion.div
        className="absolute -top-24 -left-24 size-[32rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle at 30% 30%, rgba(255,140,66,.35), transparent 60%)" }}
        animate={{ x: [0, 20, -10, 0], y: [0, 10, -10, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-0 size-[28rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle at 60% 40%, rgba(255,110,20,.28), transparent 60%)" }}
        animate={{ x: [0, -15, 10, 0], y: [0, 12, -8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </div>
  );
}
