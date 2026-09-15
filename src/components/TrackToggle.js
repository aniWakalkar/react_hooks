import React from "react";
import { getUi } from "../data/ui";

const TRACKS = [
  { id: "react", labelKey: "react" },
  { id: "python", labelKey: "python" },
];

const TrackToggle = ({ track, onChange, lang, variant = "dark" }) => {
  const labels = getUi(lang);
  const isLight = variant === "light";

  return (
    <div className="space-y-2">
      <p className={`text-xs tracking-wide ${isLight ? "text-gray-500" : "text-gray-400"}`}>
        {labels.track}
      </p>
      <div
        className={`flex rounded-lg overflow-hidden border ${
          isLight ? "border-gray-300" : "border-gray-700"
        }`}
      >
        {TRACKS.map((opt) => {
          const active = track === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onChange(opt.id)}
              className={`flex-1 px-2 py-1.5 text-xs font-medium transition-colors ${
                active
                  ? "bg-blue-600 text-white"
                  : isLight
                    ? "bg-white text-gray-700 hover:bg-gray-100"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {labels[opt.labelKey]}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TrackToggle;
