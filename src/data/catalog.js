import { docs as reactDocs } from "./docs";
import { pythonInterview } from "./python/interview";
import { pythonBasics } from "./python/basics";
import { pythonFrameworks } from "./python/frameworks";
import { pythonOop } from "./python/oop";

export const tracks = {
  react: {
    id: "react",
    sections: reactDocs,
    sectionOrder: [
      { id: "interview", labelKey: "interview" },
      { id: "hooks", labelKey: "hooks" },
      { id: "redux", labelKey: "redux" },
    ],
    defaultSelected: { section: "interview", id: "whatIsReact" },
    defaultOpen: "interview",
  },
  python: {
    id: "python",
    sections: {
      oop: pythonOop,
      interview: pythonInterview,
      basics: pythonBasics,
      frameworks: pythonFrameworks,
    },
    sectionOrder: [
      { id: "basics", labelKey: "pythonBasics" },
      { id: "oop", labelKey: "pythonOop" },
      { id: "interview", labelKey: "interview" },
      { id: "frameworks", labelKey: "frameworks" },
    ],
    defaultSelected: { section: "basics", id: "whatIsPython" },
    defaultOpen: "basics",
  },
};

export const TRACK_IDS = ["react", "python"];
