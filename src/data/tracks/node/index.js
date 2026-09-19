import { basics } from "./basics";
import { core } from "./core";

export const nodeTrack = {
  id: "nodejs",
  label: { en: "Node.js", hi: "Node.js" },
  sections: [
    { id: "basics", label: { en: "Node Basics", hi: "Node बेसिक्स" }, bodyLabelKey: "answer", items: basics },
    { id: "core", label: { en: "Core Concepts", hi: "Core Concepts" }, bodyLabelKey: "answer", items: core },
  ],
};
