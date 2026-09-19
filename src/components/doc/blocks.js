import React from "react";
import { COMPARE_LANGS } from "../../config/languages";
import { pickText } from "../../utils/text";

export const TextBlock = ({ heading, text, langTag }) => (
  <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
    {langTag && (
      <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-2">{langTag}</p>
    )}
    {heading && <h3 className="text-lg font-semibold mb-2 text-gray-800">{heading}</h3>}
    <pre className="text-gray-700 text-base whitespace-pre-wrap font-sans leading-relaxed">{text}</pre>
  </div>
);

// Renders one bilingual field: side by side in "both" mode, otherwise in the chosen language.
// `getHeading(langId)` returns the heading for a given language.
export const LocalizedBlock = ({ value, lang, isBoth, getHeading }) => {
  if (!value) return null;
  // Side by side only when every compared language has text; otherwise show one block.
  const canCompare = typeof value === "object" && COMPARE_LANGS.every(({ id }) => value[id]);
  return isBoth && canCompare ? (
    <div className="grid md:grid-cols-2 gap-4 mb-6">
      {COMPARE_LANGS.map(({ id, tag }) => (
        <TextBlock key={id} heading={getHeading(id)} text={value[id]} langTag={tag} />
      ))}
    </div>
  ) : (
    <div className="mb-6">
      <TextBlock heading={getHeading(isBoth ? "en" : lang)} text={pickText(value, lang)} />
    </div>
  );
};

export const WordList = ({ words, lang, isBoth, heading }) => {
  if (!words?.length) return null;

  return (
    <div className="mb-6 bg-amber-50 rounded-xl border border-amber-200 p-4 shadow-sm">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">{heading}</h3>
      <ul className="space-y-3">
        {words.map((w) => (
          <li key={w.term} className="text-sm sm:text-base">
            <span className="font-semibold text-gray-900">{w.term}</span>
            {isBoth ? (
              <div className="mt-1 grid md:grid-cols-2 gap-2 text-gray-700">
                {COMPARE_LANGS.map(({ id }) => (
                  <p key={id}>
                    <span className="text-xs font-semibold text-blue-600 mr-1">{id.toUpperCase()}</span>
                    {w[id]}
                  </p>
                ))}
              </div>
            ) : (
              <p className="mt-1 text-gray-700">{pickText(w, lang)}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const ExampleList = ({ examples, heading }) => {
  if (!examples?.length) return null;

  return (
    <>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{heading}</h3>
      <div className="space-y-4">
        {examples.map((example, index) => (
          <div
            key={index}
            className="w-full bg-gray-900 text-green-200 p-4 rounded-lg overflow-x-auto shadow-inner text-sm sm:text-base"
          >
            <p className="mb-2 text-green-400 font-semibold">{example.label}</p>
            <pre className="whitespace-pre-wrap">
              <code>{example.code}</code>
            </pre>
          </div>
        ))}
      </div>
    </>
  );
};
