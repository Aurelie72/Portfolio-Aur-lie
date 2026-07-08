import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "../data/skillsData.js";

function Tile({ label }) {
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

export default function Skills() {
  const [index, setIndex] = useState(0);

  const goPrev = () => setIndex((i) => (i === 0 ? skillCategories.length - 1 : i - 1));
  const goNext = () => setIndex((i) => (i === skillCategories.length - 1 ? 0 : i + 1));

  const category = skillCategories[index];

  return (
    <div className="w-full min-h-screen bg-black flex items-center">
      <section className="max-w-3xl mx-auto px-6 py-12 text-white w-full">
        <h1 className="text-5xl font-bold text-purple-500 mb-8">Compétences</h1>

        <div className="flex items-center justify-between mb-8">
          <button
            onClick={goPrev}
            className="text-3xl px-3 hover:opacity-60 transition-opacity"
            aria-label="Catégorie précédente"
          >
            ←
          </button>

          <AnimatePresence mode="wait">
            <motion.h2
              key={category.title}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="text-xl font-bold uppercase tracking-wide text-center"
            >
              {category.title}
            </motion.h2>
          </AnimatePresence>

          <button
            onClick={goNext}
            className="text-3xl px-3 hover:opacity-60 transition-opacity"
            aria-label="Catégorie suivante"
          >
            →
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={category.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-5"
          >
            {category.skills.map((skill) => (
              <Tile key={skill} label={skill} />
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-10">
          {skillCategories.map((cat, i) => (
            <button
              key={cat.title}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === index ? "bg-white" : "bg-gray-700"
              }`}
              aria-label={`Aller à ${cat.title}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}