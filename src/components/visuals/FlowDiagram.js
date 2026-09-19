import React, { useEffect, useState } from "react";
import { pickText } from "../../utils/text";

const TONES = {
  default: { idle: "bg-white border-gray-300", active: "bg-blue-50 border-blue-500 ring-4 ring-blue-100" },
  ok: { idle: "bg-white border-gray-300", active: "bg-green-50 border-green-500 ring-4 ring-green-100" },
  danger: { idle: "bg-white border-gray-300", active: "bg-red-50 border-red-500 ring-4 ring-red-100" },
};

const STEP_MS = 1500;

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

// Steps highlight one after another. Click a step to jump to it; use the button to pause/play.
// step: { icon, label, note, tone? }  (label/note can be a string or { en, hi })
const FlowDiagram = ({ steps, lang, labels }) => {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(() => !prefersReducedMotion());

  useEffect(() => {
    if (!playing) return undefined;
    const id = setInterval(() => setActive((i) => (i + 1) % steps.length), STEP_MS);
    return () => clearInterval(id);
  }, [playing, steps.length]);

  const current = steps[active];

  return (
    <div>
      <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-1 md:gap-2">
        {steps.map((step, i) => {
          const tone = TONES[step.tone] || TONES.default;
          const isActive = i === active;
          return (
            <React.Fragment key={i}>
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className={`text-xl transition-colors duration-500 rotate-90 md:rotate-0 ${
                    i <= active ? "text-blue-500" : "text-gray-300"
                  }`}
                >
                  →
                </span>
              )}
              <button
                type="button"
                onClick={() => {
                  setPlaying(false);
                  setActive(i);
                }}
                aria-current={isActive ? "step" : undefined}
                className={`w-40 md:w-28 px-2 py-3 rounded-xl border-2 text-center transition-all duration-500 ${
                  isActive ? `${tone.active} scale-105 shadow-md` : `${tone.idle} opacity-60`
                }`}
              >
                <span className="block text-2xl">{step.icon}</span>
                <span className="block text-xs font-semibold text-gray-800 mt-1">{pickText(step.label, lang)}</span>
              </button>
            </React.Fragment>
          );
        })}
      </div>

      <div className="mt-4 flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-lg p-3">
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          className="shrink-0 px-3 py-1 rounded-md text-xs font-medium bg-blue-600 text-white hover:bg-blue-700"
        >
          {playing ? labels.pause : labels.play}
        </button>
        <p className="text-sm text-gray-700" aria-live="polite">
          <span className="font-semibold text-blue-600 mr-1">
            {active + 1}/{steps.length}
          </span>
          {pickText(current.note, lang)}
        </p>
      </div>
    </div>
  );
};

export default FlowDiagram;
