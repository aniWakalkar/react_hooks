import { basics } from "./basics";
import { queries } from "./queries";
import { design } from "./design";

export const sqlTrack = {
  id: "sql",
  label: { en: "SQL", hi: "SQL" },
  sections: [
    { id: "basics", label: { en: "SQL Basics", hi: "SQL बेसिक्स" }, bodyLabelKey: "answer", items: basics },
    { id: "queries", label: { en: "Queries & Joins", hi: "Queries और Joins" }, bodyLabelKey: "answer", items: queries },
    { id: "design", label: { en: "Design & Advanced", hi: "Design और Advanced" }, bodyLabelKey: "answer", items: design },
  ],
};
