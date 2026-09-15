import React, { useEffect, useState } from "react";
import LanguageToggle from "./LanguageToggle";
import TrackToggle from "./TrackToggle";
import { getUi } from "../data/ui";

const SectionList = ({
  title,
  items,
  sectionId,
  selected,
  lang,
  onSelect,
  isOpen,
  onToggle,
}) => {
  const isBoth = lang === "both";

  return (
    <div className="mb-3">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between text-sm font-semibold border-b border-gray-700 pb-2 tracking-wide text-gray-300 hover:text-white"
      >
        <span>{title}</span>
        <svg
          className={`w-4 h-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <ul className="space-y-1 mt-2">
          {Object.keys(items).map((key) => {
            const item = items[key];
            const active = selected.section === sectionId && selected.id === key;
            const label =
              typeof item.title === "string"
                ? item.title
                : isBoth
                  ? item.title.en
                  : item.title[lang] || item.title.en;

            return (
              <li key={key}>
                <button
                  onClick={() => onSelect({ section: sectionId, id: key })}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                    active ? "bg-blue-600 text-white" : "hover:bg-gray-700"
                  }`}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

const Sidebar = ({
  trackInfo,
  selected,
  onSelect,
  lang,
  onLangChange,
  track,
  onTrackChange,
  isSidebar,
}) => {
  const labels = getUi(lang);
  const [openSection, setOpenSection] = useState(trackInfo.defaultOpen);

  useEffect(() => {
    setOpenSection(trackInfo.defaultOpen);
  }, [trackInfo]);

  const handleToggle = (sectionId) => {
    setOpenSection((current) => (current === sectionId ? null : sectionId));
  };

  const handleSelect = (next) => {
    setOpenSection(next.section);
    onSelect(next);
  };

  return (
    <div className={`h-full overflow-y-auto bg-gray-900 text-white p-5 ${isSidebar ? "pt-20" : "pt-6"}`}>
      <h2 className="text-lg font-bold mb-4">{labels.appTitle}</h2>
      <div className="mb-4">
        <TrackToggle track={track} onChange={onTrackChange} lang={lang} />
      </div>
      <div className="mb-6">
        <LanguageToggle lang={lang} onChange={onLangChange} />
      </div>
      {trackInfo.sectionOrder.map(({ id, labelKey }) => (
        <SectionList
          key={id}
          title={labels[labelKey]}
          items={trackInfo.sections[id]}
          sectionId={id}
          selected={selected}
          lang={lang}
          onSelect={handleSelect}
          isOpen={openSection === id}
          onToggle={() => handleToggle(id)}
        />
      ))}
    </div>
  );
};

export default Sidebar;
