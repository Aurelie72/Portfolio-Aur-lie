import { steps } from "../data/stepsData.js";

export default function Parcours() {
  return (
    <div className="w-full bg-black">
      <div className="max-w-2xl mx-auto px-6 py-14 text-white">
        <h2 className="text-4xl font-bold text-orange-500 mb-10">Parcours</h2>

        <div className="relative border-l-2 border-orange-500/40 pl-8 space-y-10">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <span
                className={`absolute -left-[41px] top-1 w-4 h-4 rounded-full border-2 ${
                  step.done
                    ? "bg-orange-500 border-orange-500"
                    : "bg-black border-orange-500/50"
                }`}
              />

              <p className="text-sm text-orange-400 font-semibold uppercase tracking-wide mb-1">
                {step.period}
              </p>
              <h3 className="text-xl font-bold mb-1">{step.title}</h3>
              {step.company && (
                <p className="text-sm text-gray-400 mb-2">{step.company}</p>
              )}
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}