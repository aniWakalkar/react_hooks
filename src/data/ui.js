export const ui = {
  en: {
    appTitle: "React Docs",
    hooks: "React Hooks",
    interview: "Interview Questions",
    redux: "Redux",
    exampleCode: "Example Code",
    usage: "When to use",
    selectTopic: "Select a topic to view documentation.",
    language: "Language",
    english: "English",
    hindi: "Hindi",
    both: "Both",
    definition: "Definition (simple)",
    answer: "Answer (simple)",
    wordMeanings: "Word meanings",
  },
  hi: {
    appTitle: "रिएक्ट डॉक्स",
    hooks: "रिएक्ट हुक्स",
    interview: "इंटरव्यू प्रश्न",
    redux: "रिडक्स",
    exampleCode: "उदाहरण कोड",
    usage: "कब इस्तेमाल करें",
    selectTopic: "दस्तावेज़ देखने के लिए कोई विषय चुनें।",
    language: "भाषा",
    english: "अंग्रेज़ी",
    hindi: "हिंदी",
    both: "दोनों",
    definition: "परिभाषा (सरल भाषा)",
    answer: "उत्तर (सरल भाषा)",
    wordMeanings: "शब्दों के मतलब",
  },
};

export function getUi(lang) {
  return lang === "hi" ? ui.hi : ui.en;
}
