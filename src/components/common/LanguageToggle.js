import React from "react";
import ToggleGroup from "./ToggleGroup";
import { LANGUAGES } from "../../config/languages";
import { getUi } from "../../data/ui";
import { pickText } from "../../utils/text";

const LanguageToggle = ({ lang, onChange, variant }) => (
  <ToggleGroup
    title={getUi(lang).language}
    options={LANGUAGES.map((l) => ({ id: l.id, label: pickText(l.label, lang) }))}
    value={lang}
    onChange={onChange}
    variant={variant}
  />
);

export default LanguageToggle;
