import React, { useEffect } from "react";
import { getUi } from "../data/ui";

const pickText = (value, lang) => {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (lang === "hi") return value.hi || value.en;
  return value.en;
};

const TextBlock = ({ heading, text, langTag }) => (
  <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
    {langTag && (
      <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-2">{langTag}</p>
    )}
    {heading && <h3 className="text-lg font-semibold mb-2 text-gray-800">{heading}</h3>}
    <pre className="text-gray-700 text-base whitespace-pre-wrap font-sans leading-relaxed">{text}</pre>
  </div>
);

const WordList = ({ words, lang, heading }) => {
  if (!words?.length) return null;
  const showBoth = lang === "both";

  return (
    <div className="bg-amber-50 rounded-xl border border-amber-200 p-4 shadow-sm">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">{heading}</h3>
      <ul className="space-y-3">
        {words.map((w) => (
          <li key={w.term} className="text-sm sm:text-base">
            <span className="font-semibold text-gray-900">{w.term}</span>
            {showBoth ? (
              <div className="mt-1 grid md:grid-cols-2 gap-2 text-gray-700">
                <p>
                  <span className="text-xs font-semibold text-blue-600 mr-1">EN</span>
                  {w.en}
                </p>
                <p>
                  <span className="text-xs font-semibold text-blue-600 mr-1">HI</span>
                  {w.hi}
                </p>
              </div>
            ) : (
              <p className="mt-1 text-gray-700">{lang === "hi" ? w.hi : w.en}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const DocViewer = ({ doc, lang, kind }) => {
  const labels = getUi(lang);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [doc]);

  if (!doc) {
    return (
      <div className="flex items-center justify-center h-full text-gray-600 text-lg p-10">
        {labels.selectTopic}
      </div>
    );
  }

  const title = pickText(doc.title, lang);
  const bodyHeading = kind === "interview" ? labels.answer : labels.definition;
  const showBoth = lang === "both";

  return (
    <div className="p-2 md:p-4 max-w-5xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">{title}</h2>

      {showBoth ? (
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <TextBlock heading={uiEnDefinition(kind)} text={doc.definition?.en} langTag="English" />
          <TextBlock heading={uiHiDefinition(kind)} text={doc.definition?.hi} langTag="हिंदी" />
        </div>
      ) : (
        <div className="mb-6">
          <TextBlock heading={bodyHeading} text={pickText(doc.definition, lang)} />
        </div>
      )}

      {doc.words?.length > 0 && (
        <div className="mb-6">
          <WordList words={doc.words} lang={lang} heading={labels.wordMeanings} />
        </div>
      )}

      {doc.usage &&
        (showBoth ? (
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <TextBlock heading={getUi("en").usage} text={doc.usage.en} langTag="English" />
            <TextBlock heading={getUi("hi").usage} text={doc.usage.hi} langTag="हिंदी" />
          </div>
        ) : (
          <div className="mb-6">
            <TextBlock heading={labels.usage} text={pickText(doc.usage, lang)} />
          </div>
        ))}

      {doc.examples?.length > 0 && (
        <>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">{labels.exampleCode}</h3>
          <div className="space-y-4">
            {doc.examples.map((example, index) => (
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
      )}
    </div>
  );
};

function uiEnDefinition(kind) {
  return kind === "interview" ? getUi("en").answer : getUi("en").definition;
}

function uiHiDefinition(kind) {
  return kind === "interview" ? getUi("hi").answer : getUi("hi").definition;
}

export default DocViewer;
