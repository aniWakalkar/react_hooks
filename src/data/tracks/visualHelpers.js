// Small helpers to keep `visual` definitions in data files short.
// st(icon, [enLabel, hiLabel], [enNote, hiNote], tone?)  tone: "ok" | "danger"
export const st = (icon, label, note, tone) => ({
  icon,
  label: { en: label[0], hi: label[1] },
  note: { en: note[0], hi: note[1] },
  tone,
});

// flow(steps, [enTitle, hiTitle]?) → animated step-by-step diagram
export const flow = (steps, title) => ({
  type: "flow",
  steps,
  title: title && { en: title[0], hi: title[1] },
});

// scale() → vertical vs horizontal scaling animation
export const scale = () => ({ type: "scale" });
