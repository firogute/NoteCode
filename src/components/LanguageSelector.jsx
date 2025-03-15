import React from "react";
import { LANGUAGE_VERSIONS } from "../constants";

const languages = Object.entries(LANGUAGE_VERSIONS);
const LanguageSelector = ({ language, onSelect, disabled }) => {
  return (
    <div
      className={`relative flex gap-6 ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <select
        id="language-select"
        value={language}
        onChange={(e) => onSelect(e.target.value)}
        className={`bg-[#364153]  text-gray-300 rounded-2xl pl-4 pr-10 py-4 appearance-none focus:outline-none uppercase group inline-flex flex-col transition-background motion-reduce:transition-none !duration-150 w-full lg:w-40 ${
          disabled ? "opacity-70 pointer-events-none" : ""
        }`}
      >
        {languages.map(([languageKey, version]) => (
          <option key={languageKey} value={languageKey}>
            {languageKey}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-4 flex items-center">
        <img src="/down arrow.svg" alt="down" className="h-4 w-4" />
      </div>
    </div>
  );
};

export default LanguageSelector;
