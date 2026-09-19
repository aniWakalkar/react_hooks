// Resolve a plain string or a { en, hi, ... } object to text for `lang`.
// `both` (or any unknown lang) falls back to English.
export const pickText = (value, lang) => {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value[lang] || value.en || "";
};
