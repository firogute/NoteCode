import React, { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector.jsx";
import { DEFAULT_CODE_SNIPPETS } from "../constants.js";

const CodeEditor = () => {
  const editorRef = useRef();
  const [code, setCode] = useState(DEFAULT_CODE_SNIPPETS.javascript);
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const handleLanguageChange = (language) => {
    setLanguage(language);
    setCode(DEFAULT_CODE_SNIPPETS[language]);
  };

  return (
    <>
      <LanguageSelector language={language} onSelect={handleLanguageChange} />
      <Editor
        height="90vh"
        theme="vs-dark"
        language={language}
        onMount={onMount}
        value={code}
        onChange={(value) => setCode(value)}
      />
    </>
  );
};

export default CodeEditor;
