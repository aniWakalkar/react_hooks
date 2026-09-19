// Generic UI labels only. Track/section names live with their track
// (see data/tracks/<track>/index.js).
export const ui = {
  en: {
    appTitle: "Dev Docs",
    track: "Subject",
    exampleCode: "Example Code",
    visual: "See it visually",
    play: "Play",
    pause: "Pause",
    usage: "When to use",
    selectTopic: "Select a topic to view documentation.",
    language: "Language",
    definition: "Definition (simple)",
    answer: "Answer (simple)",
    wordMeanings: "Word meanings",
    toggleSidebar: "Toggle sidebar",
  },
  hi: {
    appTitle: "डेव डॉक्स",
    track: "विषय",
    exampleCode: "उदाहरण कोड",
    visual: "चित्र में समझें",
    play: "चलाएँ",
    pause: "रोकें",
    usage: "कब इस्तेमाल करें",
    selectTopic: "दस्तावेज़ देखने के लिए कोई विषय चुनें।",
    language: "भाषा",
    definition: "परिभाषा (सरल भाषा)",
    answer: "उत्तर (सरल भाषा)",
    wordMeanings: "शब्दों के मतलब",
    toggleSidebar: "Toggle sidebar",
  },
};

// Falls back to English for any language without its own UI labels.
export function getUi(lang) {
  return ui[lang] || ui.en;
}
