import React from "react";
import TrackTabs from "../common/TrackTabs";
import LanguageToggle from "../common/LanguageToggle";
import { getUi } from "../../data/ui";

const MobileHeader = ({ track, onTrackChange, lang, onLangChange, onMenuClick }) => {
  const labels = getUi(lang);

  return (
    <div className="md:hidden p-3 bg-white shadow-md sticky top-0 z-30 space-y-2">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">{labels.appTitle}</h1>
        <button
          onClick={onMenuClick}
          className="text-gray-700 focus:outline-none"
          aria-label={labels.toggleSidebar}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <TrackTabs track={track} onChange={onTrackChange} lang={lang} />
      <LanguageToggle lang={lang} onChange={onLangChange} variant="light" />
    </div>
  );
};

export default MobileHeader;
