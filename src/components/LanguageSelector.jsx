import React from "react";
import { LANGUAGE_VERSIONS } from "../constants";

const languages = Object.entries(LANGUAGE_VERSIONS);
const LanguageSelector = ({ language, onSelect }) => {
  return (
    <div className="relative flex gap-6">
      <select
        id="language-select"
        value={language}
        onChange={(e) => onSelect(e.target.value)}
        className="bg-[#CED6E1] text-black rounded-4xl pl-4 pr-10 py-2 appearance-none focus:outline-none"
      >
        {languages.map(([languageKey, version]) => (
          <option key={languageKey} value={languageKey}>
            {languageKey} ({version})
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
        <img src="/down arrow.svg" alt="down" className="h-4 w-4" />
      </div>
    </div>
  );
};

export default LanguageSelector;
