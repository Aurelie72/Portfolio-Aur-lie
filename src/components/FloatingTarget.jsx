import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useAnimate, AnimatePresence } from "framer-motion";

export default function FloatingTarget({
  title = "Aurélie Beaufils",
  label = "Développeuse Web Full Stack",
  image = "../pictureofme.png",
}) {
  const ref = useRef(null);
  const [scope, animate] = useAnimate();
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 12 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 12 });

  useEffect(() => {
    function handleMouseMove(e) {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const maxMove = 60;
      const dist = Math.sqrt(distX ** 2 + distY ** 2);
      const factor = dist > 0 ? Math.min(maxMove / dist, 1) * 0.5 : 0;
      mouseX.set(distX * factor);
      mouseY.set(distY * factor);
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    animate(scope.current, { rotate: -360 }, { duration: 10, repeat: Infinity, ease: "linear" });
  }, []);

  return (
    <div className="relative w-full flex items-center justify-center py-56 bg-black">
      <h2 className="text-5xl whitespace-nowrap opacity-70 md:text-[8rem] font-extrabold uppercase text-white tracking-wide select-none -translate-y-5">
        {title}
      </h2>

      {/* Conteneur global : texte en orbite (large) + bouton (centré) */}
      <motion.div
        ref={ref}
        style={{ x: springX, y: springY }}
        className="absolute w-64 h-64 flex items-center justify-center -translate-y-12"
      >
        {/* Texte en orbite, tourne en continu, plus grand que le bouton */}
        <motion.div ref={scope} className="absolute w-full h-full pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -42, 0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
              />
            </defs>
            <text className="text-[6.5px] uppercase tracking-widest fill-white">
              <textPath
                href="#circlePath"
                textLength="264"
                lengthAdjust="spacingAndGlyphs"
              >
                {label} • {label} •
              </textPath>
            </text>
          </svg>
        </motion.div>

        {/* Bouton central, ne tourne pas */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-44 h-44 rounded-full border-4 border-white flex items-center justify-center overflow-hidden group z-10"
        >
          <div className="absolute w-4 h-4 rounded-full bg-white group-hover:bg-black transition-colors z-10" />

          <motion.div
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-white rounded-full"
          />
        </motion.button>

        {/* Photo qui apparaît au survol, à côté du bouton */}
        <AnimatePresence>
          {isHovered && (
            <motion.img
              src={image}
              alt={title}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.3 }}
              className="absolute w-56 h-56 object-cover rounded-lg pointer-events-none z-20 left-full ml-8"
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
