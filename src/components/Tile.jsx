import { motion } from "framer-motion";

export default function Tile({ label }) {
  return (
    <motion.div
      initial={{ y: 0, scale: 1, rotate: 0 }}
      whileHover={{ y: -4, scale: 1.06, rotate: 2 }}
      transition={{ type: "spring", stiffness: 400, damping: 12 }}
      className="bg-black text-white border border-purple-400/40 rounded-lg px-4 py-5 flex items-center justify-center text-center text-base leading-snug font-medium cursor-default"
    >
      {label}
    </motion.div>
  );
}