import { basics } from "./basics";
import { mongoose } from "./mongoose";

export const mongoTrack = {
  id: "mongodb",
  label: { en: "MongoDB & Mongoose", hi: "MongoDB और Mongoose" },
  sections: [
    { id: "basics", label: { en: "MongoDB Basics", hi: "MongoDB बेसिक्स" }, bodyLabelKey: "answer", items: basics },
    { id: "mongoose", label: { en: "Mongoose", hi: "Mongoose" }, bodyLabelKey: "answer", items: mongoose },
  ],
};
