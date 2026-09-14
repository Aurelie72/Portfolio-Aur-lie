import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skillCategories } from "../data/skillsData.js";
import Tile from "../components/Tile.jsx";

export default function Skills() {
  const [index, setIndex] = useState(0);

  const goPrev = () => setIndex((i) => (i === 0 ? skillCategories.length - 1 : i - 1));
  const goNext = () => setIndex((i) => (i === skillCategories.length - 1 ? 0 : i + 1));

  const category = skillCategories[index];

  return (
    <div className="w-full bg-ink-soft border-t border-hairline">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="font-serif text-3xl sm:text-4xl text-ivory mb-10">
          Compétences
        </h2>

        <div className="flex items-center justify-between mb-8">
          <button
            onClick={goPrev}
            aria-label="Catégorie précédente"
            className="text-2xl text-muted hover:text-brass transition-colors p-3 -m-3"
          >
            ←
          </button>

          <AnimatePresence mode="wait">
            <motion.h3
              key={category.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="font-serif text-xl text-ivory text-center"
            >
              {category.title}
            </motion.h3>
          </AnimatePresence>

          <button
            onClick={goNext}
            aria-label="Catégorie suivante"
            className="text-2xl text-muted hover:text-brass transition-colors p-3 -m-3"
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
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(event, info) => {
              if (info.offset.x < -50) goNext();
              if (info.offset.x > 50) goPrev();
            }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
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
              aria-label={`Aller à ${cat.title}`}
              className="p-3 -m-1"
            >
              <span
                className={`block w-2 h-2 rounded-full transition-colors ${
                  i === index ? "bg-brass" : "bg-hairline"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
