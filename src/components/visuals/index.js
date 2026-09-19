import React from "react";
import FlowDiagram from "./FlowDiagram";
import ScaleDiagram from "./ScaleDiagram";
import { pickText } from "../../utils/text";

// Register new visual types here. In data: visual: { type: "flow", ... }
const VISUAL_TYPES = {
  flow: FlowDiagram,
  scale: ScaleDiagram,
};

const toList = (visual) => (Array.isArray(visual) ? visual : [visual]);

export const VisualBlock = ({ visual, lang, labels }) => {
  if (!visual) return null;

  return (
    <div className="mb-6 bg-white rounded-xl border border-blue-200 p-4 shadow-sm">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">{labels.visual}</h3>
      <div className="space-y-6">
        {toList(visual).map((v, i) => {
          const Component = VISUAL_TYPES[v.type];
          if (!Component) return null;
          return (
            <div key={i}>
              {v.title && <p className="text-sm font-semibold text-gray-600 mb-2">{pickText(v.title, lang)}</p>}
              <Component {...v} lang={lang} labels={labels} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
