import { webApiTrack } from "./webapi";
import { reactTrack } from "./react";
import { javascriptTrack } from "./javascript";
import { nodeTrack } from "./node";
import { expressTrack } from "./express";
import { mongoTrack } from "./mongodb";
import { sqlTrack } from "./sql";
import { pythonTrack } from "./python";

// Register new subjects here, in the order the tabs should appear.
// Nothing else needs to change.
const TRACK_LIST = [webApiTrack, reactTrack, javascriptTrack, nodeTrack, expressTrack, mongoTrack, sqlTrack, pythonTrack];

const withDefaults = (track) => {
  const first = track.sections[0];
  return {
    ...track,
    defaultSelected: track.defaultSelected || { section: first.id, id: Object.keys(first.items)[0] },
    defaultOpen: track.defaultOpen || track.defaultSelected?.section || first.id,
  };
};

export const tracks = Object.fromEntries(TRACK_LIST.map((t) => [t.id, withDefaults(t)]));
export const TRACK_IDS = TRACK_LIST.map((t) => t.id);
export const DEFAULT_TRACK = TRACK_IDS[0];

export const getSection = (track, sectionId) => track.sections.find((s) => s.id === sectionId);
export const getDoc = (track, { section, id }) => getSection(track, section)?.items[id];
