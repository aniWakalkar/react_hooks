import React, { useState, useEffect } from 'react';
import { docs } from './data/docs';
import Sidebar from './components/Sidebar';
import DocViewer from './components/DocViewer';

function App() {
  const [selected, setSelected] = useState("useState");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Lock scroll when sidebar is open on mobile
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : 'auto';
  }, [sidebarOpen]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile header */}
      <div className="md:hidden p-4 bg-white shadow-md flex justify-between items-center sticky top-0 z-30">
        <h1 className="text-lg font-bold">Docs Viewer</h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-gray-700 focus:outline-none"
          aria-label="Toggle sidebar"
        >
          {/* Hamburger icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar (fixed on desktop, slide on mobile) */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-20
          transform transition-transform duration-300
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >
        <Sidebar
          topics={docs}
          onSelect={(key) => {
            setSelected(key);
            setSidebarOpen(false); // close sidebar on mobile after selection
          }}
          isSidebar={sidebarOpen}
        />
      </aside>

      {/* Main content, with padding-left on desktop to avoid sidebar overlap */}
      <main className="md:ml-64 p-6 min-h-screen overflow-auto">
        <DocViewer doc={docs[selected]} />
      </main>
    </div>
  );
}

export default App;
