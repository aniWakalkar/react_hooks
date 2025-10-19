import React, { useState } from 'react';
import { docs } from './data/docs';
import Sidebar from './components/Sidebar';
import DocViewer from './components/DocViewer';

function App() {
  const [selected, setSelected] = useState("useState");

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Fixed Sidebar */}
      <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-10">
        <Sidebar topics={docs} onSelect={setSelected} />
      </div>

      {/* Main Content */}
      <div className="ml-64 p-6">
        <DocViewer doc={docs[selected]} />
      </div>
    </div>
  );
}

export default App;
