import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useAnimate } from "framer-motion";

export default function FloatingTarget({ title = "Aurélie Beaufils", label = "Développeuse Web Full Stack" }) {
  const ref = useRef(null);
  const [scope, animate] = useAnimate();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  useEffect(() => {
    function handleMouseMove(e) {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const maxMove = 30;
      const dist = Math.sqrt(distX ** 2 + distY ** 2);
      const factor = dist > 0 ? Math.min(maxMove / dist, 1) * 0.3 : 0;
      mouseX.set(distX * factor);
      mouseY.set(distY * factor);
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    animate(scope.current, { rotate: -360 }, { duration: 8, repeat: Infinity, ease: "linear" });
  }, []);

  return (
    <div className="relative flex items-center justify-center py-20 bg-black">
      <h2 className="text-3xl whitespace-nowrap md:text-6xl font-extrabold uppercase text-white tracking-tight select-none -translate-y-10">
        {title}
      </h2>

      <motion.button
        ref={ref}
        style={{ x: springX, y: springY }}
        whileHover={{ scale: 1.1 }}
        
        whileTap={{ scale: 0.95 }}
        className="absolute w-16 h-16 rounded-full border border-white flex items-center justify-center overflow-hidden group -translate-y-10"
      >
        <div className="absolute w-1.5 h-1.5 rounded-full bg-white group-hover:bg-black transition-colors" />

        <motion.div
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-white rounded-full"
        />

        <motion.div ref={scope} className="absolute w-full h-full">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
              />
            </defs>
            <text className="text-[5.9px] uppercase tracking-widest fill-white group-hover:fill-black">
              <textPath href="#circlePath">{label} • {label} • </textPath>
            </text>
          </svg>
        </motion.div>
            </motion.button>
    </div>
  );
}