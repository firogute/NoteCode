import React, { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector.jsx";
import { DEFAULT_CODE_SNIPPETS } from "../constants.js";
import ShareButton from "./ShareButton.jsx";
import { supabase } from "../supabaseClient.js";

function generateHexId(length = 24) {
  return [...crypto.getRandomValues(new Uint8Array(length / 2))]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

const ThemeSelector = ({ theme, handleThemeChange }) => {
  return (
    <div className="theme-selector relative flex gap-6">
      <select
        id="language-select"
        className="bg-[#CED6E1] text-black rounded-4xl pl-4 pr-10 py-2 appearance-none focus:outline-none"
        value={theme}
        onChange={handleThemeChange}
      >
        <option value="vs-dark">Dark</option>
        <option value="hc-light">Light</option>
      </select>

      {/* Custom Arrow */}
      <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
        <img src="/down arrow.svg" alt="down" className="h-4 w-4" />
      </div>
    </div>
  );
};
const CodeEditor = () => {
  const editorRef = useRef();
  const [code, setCode] = useState(DEFAULT_CODE_SNIPPETS.html);
  const [language, setLanguage] = useState("html");
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
  const handlerClick = async () => {
    const shortId = generateHexId();
    console.log(shortId);
    if (editorRef.current) {
      const code = editorRef.current.getValue(); // Get the code from the editor
      console.log("Code to save:", code); // Debugging

      try {
        // Save the code to Supabase
        const { data, error } = await supabase
          .from("codes")
          .insert([
            {
              id: shortId,
              code: code,
              language: language,
              theme: theme,
            },
          ])
          .select();

        if (error) {
          throw error;
        }

        console.log("Code saved successfully:", data);
        alert("Code saved and copied to clipboard!");

        navigator.clipboard.writeText(code);
      } catch (error) {
        console.error("Failed to save code:", error);
        alert("Failed to save code.");
      }
    } else {
      console.error("Editor reference is not available.");
      alert("Editor is not ready.");
    }
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
      <div className="flex justify-center items-center p-4 gap-4">
        <LanguageSelector language={language} onSelect={handleLanguageChange} />
        <ThemeSelector handleThemeChange={handleThemeChange} />
        <ShareButton onClick={handlerClick} />
      </div>
    </>
  );
};

export default CodeEditor;
