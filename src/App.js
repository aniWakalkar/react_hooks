import React, { useState, useEffect } from "react";
import { docs } from "./data/docs";
import Sidebar from "./components/Sidebar";
import DocViewer from "./components/DocViewer";
import LanguageToggle from "./components/LanguageToggle";
import { getUi } from "./data/ui";

const LANG_KEY = "react-docs-lang";

function App() {
  const [selected, setSelected] = useState({ section: "interview", id: "whatIsReact" });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem(LANG_KEY);
    return saved === "hi" || saved === "both" || saved === "en" ? saved : "en";
  });

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
  }, [sidebarOpen]);

  useEffect(() => {
    localStorage.setItem(LANG_KEY, lang);
    document.documentElement.lang = lang === "hi" ? "hi" : "en";
  }, [lang]);

  const labels = getUi(lang);
  const currentDoc = docs[selected.section]?.[selected.id];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="md:hidden p-3 bg-white shadow-md sticky top-0 z-30 space-y-2">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold">{labels.appTitle}</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle sidebar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <LanguageToggle lang={lang} onChange={setLang} variant="light" />
      </div>

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
          sections={docs}
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

      <main className="md:ml-72 p-6 min-h-screen overflow-auto">
        <DocViewer doc={currentDoc} lang={lang} kind={selected.section} />
      </main>
    </div>
  );
}

export default App;
