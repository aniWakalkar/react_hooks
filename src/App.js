import React, { useState, useEffect } from "react";
import { tracks, TRACK_IDS, DEFAULT_TRACK, getSection, getDoc } from "./data/tracks";
import { DEFAULT_LANG, isValidLang } from "./config/languages";
import usePersistedState from "./hooks/usePersistedState";
import Sidebar from "./components/layout/Sidebar";
import MobileHeader from "./components/layout/MobileHeader";
import TrackTabs from "./components/common/TrackTabs";
import DocViewer from "./components/doc/DocViewer";

const LANG_KEY = "react-docs-lang";
const TRACK_KEY = "dev-docs-track";

function App() {
  const [track, setTrack] = usePersistedState(TRACK_KEY, DEFAULT_TRACK, (v) => TRACK_IDS.includes(v));
  const [lang, setLang] = usePersistedState(LANG_KEY, DEFAULT_LANG, isValidLang);
  const trackInfo = tracks[track];
  const [selected, setSelected] = useState(trackInfo.defaultSelected);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
  }, [sidebarOpen]);

  useEffect(() => {
    document.documentElement.lang = lang === "hi" ? "hi" : "en";
  }, [lang]);

  const handleTrackChange = (nextTrack) => {
    setTrack(nextTrack);
    setSelected(tracks[nextTrack].defaultSelected);
  };

  const currentDoc = getDoc(trackInfo, selected);
  const bodyLabelKey = getSection(trackInfo, selected.section)?.bodyLabelKey;

  return (
    <div className="min-h-screen bg-gray-100">
      <MobileHeader
        track={track}
        onTrackChange={handleTrackChange}
        lang={lang}
        onLangChange={setLang}
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
      />

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-20
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <Sidebar
          trackInfo={trackInfo}
          selected={selected}
          lang={lang}
          onLangChange={setLang}
          onSelect={(next) => {
            setSelected(next);
            setSidebarOpen(false);
          }}
          isSidebar={sidebarOpen}
        />
      </aside>

      <div className="hidden md:block md:ml-72 sticky top-0 z-10 bg-gray-100 border-b border-gray-200 px-6 py-3">
        <TrackTabs track={track} onChange={handleTrackChange} lang={lang} />
      </div>

      <main className="md:ml-72 p-6 min-h-screen overflow-auto">
        <DocViewer doc={currentDoc} lang={lang} bodyLabelKey={bodyLabelKey} />
      </main>
    </div>
  );
}

export default App;
