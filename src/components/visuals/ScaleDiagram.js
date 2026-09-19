import React, { useEffect, useState } from "react";

const MAX_SERVERS = 4;
const TICK_MS = 1400;

// Vertical (one server grows) vs Horizontal (more servers) scaling, side by side.
const ScaleDiagram = () => {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), TICK_MS);
    return () => clearInterval(id);
  }, []);

  const big = tick % 2 === 1;
  const count = (tick % MAX_SERVERS) + 1;

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
        <p className="text-sm font-semibold text-gray-800 mb-3">Vertical = bigger server</p>
        <div className="h-32 flex items-end justify-center">
          <div
            className={`flex items-center justify-center rounded-lg bg-blue-500 text-white text-xs font-semibold transition-all duration-700 ${
              big ? "w-28 h-28" : "w-14 h-14"
            }`}
          >
            {big ? "32 GB" : "4 GB"}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
        <p className="text-sm font-semibold text-gray-800 mb-3">Horizontal = more servers</p>
        <div className="h-32 flex items-end justify-center gap-2">
          {Array.from({ length: MAX_SERVERS }, (_, i) => (
            <div
              key={i}
              className={`w-12 h-14 flex items-center justify-center rounded-lg bg-green-500 text-white text-xs font-semibold transition-all duration-700 ${
                i < count ? "opacity-100 scale-100" : "opacity-10 scale-75"
              }`}
            >
              S{i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScaleDiagram;
