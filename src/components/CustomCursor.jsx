import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  useEffect(() => {
    function handleMove(e) {
      x.set(e.clientX - 10);
      y.set(e.clientY - 10);
    }
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className="fixed top-0 left-0 w-5 h-5 rounded-full border border-white pointer-events-none z-[100] flex items-center justify-center"
    >
      <div className="w-1 h-1 rounded-full bg-white" />
    </motion.div>
  );
}