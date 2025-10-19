import React from 'react';

const Sidebar = ({ topics, onSelect }) => {
  return (
    <aside className="w-64 bg-gray-900 text-white p-5 shadow-lg">
      <h3 className="mt-10 text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
        Topics
      </h3>
      <ul className="space-y-2">
        {Object.keys(topics).map((key) => (
          <li key={key}>
            <button
              onClick={() => onSelect(key)}
              className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
            >
              {topics[key].title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
