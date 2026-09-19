import React from "react";
import { tracks, TRACK_IDS } from "../../data/tracks";
import { pickText } from "../../utils/text";

// Horizontally scrollable subject tabs. Scales to any number of subjects.
const TrackTabs = ({ track, onChange, lang }) => (
  <nav className="flex gap-2 overflow-x-auto whitespace-nowrap" aria-label="Subjects">
    {TRACK_IDS.map((id) => {
      const active = id === track;
      return (
        <button
          key={id}
          type="button"
          onClick={() => onChange(id)}
          aria-current={active ? "page" : undefined}
          className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            active ? "bg-blue-600 text-white" : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
          }`}
        >
          {pickText(tracks[id].label, lang)}
        </button>
      );
    })}
  </nav>
);

export default TrackTabs;
