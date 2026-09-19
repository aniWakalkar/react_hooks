// Content languages. To add a new one: add an entry here, then add the
// matching key (e.g. `mr`) to UI labels in data/ui.js and to doc content.
// `both` is a special "side by side" mode built from `compareLangs`.
export const LANGUAGES = [
  { id: "en", label: { en: "English", hi: "अंग्रेज़ी" } },
  { id: "hi", label: { en: "Hindi", hi: "हिंदी" } },
  { id: "both", label: { en: "Both", hi: "दोनों" } },
];

export const DEFAULT_LANG = "en";
export const BOTH_LANG = "both";
export const COMPARE_LANGS = [
  { id: "en", tag: "English" },
  { id: "hi", tag: "हिंदी" },
];

export const isValidLang = (id) => LANGUAGES.some((l) => l.id === id);
