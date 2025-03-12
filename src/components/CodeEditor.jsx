import React, { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector.jsx";
import { DEFAULT_CODE_SNIPPETS } from "../constants.js";
import ShareButton from "./ShareButton.jsx";

const ThemeSelector = ({ theme, handleThemeChange }) => {
  return (
    <div className="theme-selector">
      <select id="language-select" value={theme} onChange={handleThemeChange}>
        <option value="vs-dark">Dark</option>
        <option value="hc-light">Light</option>
      </select>
    </div>
  );
};

const CodeEditor = () => {
  const editorRef = useRef();
  const [code, setCode] = useState(DEFAULT_CODE_SNIPPETS.javascript);
  const [language, setLanguage] = useState("javascript");
  const [theme, setTheme] = useState("vs-dark");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleLanguageChange = (language) => {
    setLanguage(language);
    setCode(DEFAULT_CODE_SNIPPETS[language]);
  };

  return (
    <>
      <Editor
        height="60vh"
        theme={theme}
        language={language}
        onMount={onMount}
        value={code}
        onChange={(value) => setCode(value)}
      />
      <LanguageSelector language={language} onSelect={handleLanguageChange} />
      <ThemeSelector handleThemeChange={handleThemeChange} />
      <ShareButton />
    </>
  );
};

export default CodeEditor;
