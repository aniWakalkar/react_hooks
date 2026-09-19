import React from "react";

// Generic segmented control. options: [{ id, label }]
const ToggleGroup = ({ title, options, value, onChange, variant = "dark" }) => {
  const isLight = variant === "light";

  return (
    <div className="space-y-2">
      <p className={`text-xs tracking-wide ${isLight ? "text-gray-500" : "text-gray-400"}`}>{title}</p>
      <div
        className={`flex rounded-lg overflow-hidden border ${
          isLight ? "border-gray-300" : "border-gray-700"
        }`}
      >
        {options.map((opt) => {
          const active = value === opt.id;
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
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ToggleGroup;
