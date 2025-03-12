import React from "react";
import { LANGUAGE_VERSIONS } from "../constants";

const languages = Object.entries(LANGUAGE_VERSIONS);
const LanguageSelector = ({ language, onSelect }) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <label htmlFor="language-select">Select Language: </label>
      <select
        id="language-select"
        value={language}
        onChange={(e) => onSelect(e.target.value)} 
      >
        {languages.map(([languageKey, version]) => (
          <option key={languageKey} value={languageKey}>
            {languageKey} ({version})
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
