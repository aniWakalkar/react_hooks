import { interview } from "./interview";
import { hooks } from "./hooks";
import { redux } from "./redux";

// A track = one subject. To add a section, add an entry to `sections`.
// `bodyLabelKey` picks the heading ("definition" | "answer") for the main text.
export const reactTrack = {
  id: "react",
  label: { en: "React", hi: "रिएक्ट" },
  sections: [
    { id: "interview", label: { en: "Interview Questions", hi: "इंटरव्यू प्रश्न" }, bodyLabelKey: "answer", items: interview },
    { id: "hooks", label: { en: "React Hooks", hi: "रिएक्ट हुक्स" }, items: hooks },
    { id: "redux", label: { en: "Redux", hi: "रिडक्स" }, items: redux },
  ],
  // Optional: defaultSelected: { section, id }. Defaults to first item of first section.
  defaultSelected: { section: "interview", id: "whatIsReact" },
};
