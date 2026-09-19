import { pythonBasics } from "./basics";
import { pythonOop } from "./oop";
import { pythonInterview } from "./interview";
import { pythonFrameworks } from "./frameworks";

export const pythonTrack = {
  id: "python",
  label: { en: "Python", hi: "पायथन" },
  sections: [
    { id: "basics", label: { en: "Python basics", hi: "पायथन बेसिक्स" }, items: pythonBasics },
    { id: "oop", label: { en: "Python OOP", hi: "पायथन OOP" }, items: pythonOop },
    { id: "interview", label: { en: "Interview Questions", hi: "इंटरव्यू प्रश्न" }, bodyLabelKey: "answer", items: pythonInterview },
    { id: "frameworks", label: { en: "Frameworks", hi: "फ्रेमवर्क" }, items: pythonFrameworks },
  ],
  defaultSelected: { section: "basics", id: "whatIsPython" },
};
