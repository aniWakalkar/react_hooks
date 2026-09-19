import { basics } from "./basics";
import { advanced } from "./advanced";

export const expressTrack = {
  id: "express",
  label: { en: "Express.js", hi: "Express.js" },
  sections: [
    { id: "basics", label: { en: "Express Basics", hi: "Express बेसिक्स" }, bodyLabelKey: "answer", items: basics },
    { id: "advanced", label: { en: "Structure, Auth & More", hi: "Structure, Auth और More" }, bodyLabelKey: "answer", items: advanced },
  ],
};
