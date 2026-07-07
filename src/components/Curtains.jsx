import { motion } from "framer-motion";

const NUM_STRIPS = 20;

export default function Curtains({ color = "bg-red-500" }) {
  return (
    <div className="fixed inset-0 z-50 flex pointer-events-none">
      {Array.from({ length: NUM_STRIPS }).map((_, i) => (
        <motion.div
          key={i}
          className={`flex-1 ${color}`}
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{
            duration: 0.6,
            delay: i * 0.03,
            ease: [0.65, 0, 0.35, 1],
          }}
          style={{ transformOrigin: "top" }}
        />
      ))}
    </div>
  );
}