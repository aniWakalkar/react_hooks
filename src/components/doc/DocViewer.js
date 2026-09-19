import React, { useEffect } from "react";
import { getUi } from "../../data/ui";
import { BOTH_LANG } from "../../config/languages";
import { pickText } from "../../utils/text";
import { LocalizedBlock, WordList, ExampleList } from "./blocks";
import { VisualBlock } from "../visuals";

// `bodyLabelKey` comes from the section config ("definition" | "answer").
const DocViewer = ({ doc, lang, bodyLabelKey = "definition" }) => {
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

  const isBoth = lang === BOTH_LANG;

  return (
    <div className="p-2 md:p-4 max-w-5xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">{pickText(doc.title, lang)}</h2>

      <LocalizedBlock
        value={doc.definition}
        lang={lang}
        isBoth={isBoth}
        getHeading={(id) => getUi(id)[bodyLabelKey]}
      />
      <VisualBlock key={pickText(doc.title, "en")} visual={doc.visual} lang={lang} labels={labels} />
      <WordList words={doc.words} lang={lang} isBoth={isBoth} heading={labels.wordMeanings} />
      <LocalizedBlock
        value={doc.usage}
        lang={lang}
        isBoth={isBoth}
        getHeading={(id) => getUi(id).usage}
      />
      <ExampleList examples={doc.examples} heading={labels.exampleCode} />
    </div>
  );
};

export default DocViewer;
