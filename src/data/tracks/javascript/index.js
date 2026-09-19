import { basics } from "./basics";
import { functions } from "./functions";
import { asyncAndMore } from "./asyncAndMore";

export const javascriptTrack = {
  id: "javascript",
  label: { en: "JavaScript", hi: "JavaScript" },
  sections: [
    { id: "basics", label: { en: "JS Basics", hi: "JS बेसिक्स" }, bodyLabelKey: "answer", items: basics },
    { id: "functions", label: { en: "Functions & this", hi: "Functions और this" }, bodyLabelKey: "answer", items: functions },
    { id: "asyncAndMore", label: { en: "Async & Advanced", hi: "Async और Advanced" }, bodyLabelKey: "answer", items: asyncAndMore },
  ],
};
