import React, {useEffect } from 'react';

const DocViewer = ({ doc }) => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [doc]);


  if (!doc)
    return (
      <div className="flex items-center justify-center h-full text-gray-600 text-lg p-10">
        Select a topic to view documentation.
      </div>
    );



  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{doc.title}</h2>

      <pre className="text-gray-700 text-base whitespace-pre-wrap mb-6">
        {doc.definition}
      </pre>

      <h3 className="text-xl font-semibold mb-2 text-gray-800">
        Example Code:
      </h3>

      <div className="space-y-4">
      {doc.examples.map((example, index) => (
        <div
          key={index}
          className="w-full bg-gray-900 text-green-200 p-4 rounded-lg overflow-x-auto shadow-inner text-sm sm:text-base md:text-lg"
        >
          <p className="mb-2 text-green-400 font-semibold">{example.label}</p>
          <pre className="whitespace-pre-wrap">
            <code>{example.code}</code>
          </pre>
        </div>
      ))}
      </div>
    </div>
  );
};

export default DocViewer;
