import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

const ThemeSelector = ({ theme, handleThemeChange, disabled }) => {
  return (
    <div
      className={`theme-selector relative flex gap-6 ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <select
        id="language-select"
        className={`bg-[#364153] text-gray-300 rounded-2xl pl-4 pr-10 py-4 appearance-none focus:outline-none uppercase group inline-flex flex-col transition-background motion-reduce:transition-none !duration-150 w-full lg:w-40 ${
          disabled ? "opacity-70 pointer-events-none" : ""
        }`}
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
  const { id } = useParams();
  const editorRef = useRef();
  const [code, setCode] = useState(DEFAULT_CODE_SNIPPETS.html);

  const [originalCode, setOriginalCode] = useState(null);
  const [hasChanged, setHasChanged] = useState(false);
  const [language, setLanguage] = useState("html");
  const [theme, setTheme] = useState("vs-dark");
  const [loading, setLoading] = useState(false);
  const [isShared, setIsShared] = useState(false);
  const [isShared2, setIsShared2] = useState(false);

  const [savedLink, setSavedLink] = useState(null);

  useEffect(() => {
    if (id) {
      fetchCodeSnippet(id);
    }
  }, [id]);

  const fetchCodeSnippet = async (snippetId) => {
    const { data, error } = await supabase
      .from("codes")
      .select("*")
      .eq("id", snippetId)
      .single();

    if (error) {
      console.error("Snippet not found:", error);
      return;
    } else {
      // console.log("Fetched data:", data);
      setCode(data.code);
      setLanguage(data.language);
      setTheme(data.theme);
      setIsShared(true);
      setIsShared2(true);
      setOriginalCode(data.code);
    }
  };

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
    // console.log(shortId);
    if (editorRef.current) {
      const code = editorRef.current.getValue();
      setLoading(true);

      try {
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
        const generatedLink = `${window.location.origin}/${shortId}`;
        setSavedLink(generatedLink);
        setIsShared(true);
        navigator.clipboard.writeText(code);
      } catch (error) {
        console.error("Failed to save code:", error);
      } finally {
        setLoading(false);
      }
    } else {
      console.error("Editor reference is not available.");
    }
  };

  const handleCopyClick = () => {
    if (savedLink) {
      navigator.clipboard.writeText(savedLink);
    }
  };
  const handleCodeChange = (value) => {
    setCode(value);
    if (originalCode && value !== originalCode) {
      setHasChanged(true);
    } else {
      setHasChanged(false);
    }
    if (isShared) {
      setIsShared(false);
    }
  };

  return (
    <>
      <Editor
        height="80vh"
        theme={theme}
        language={language}
        onMount={onMount}
        value={code}
        onChange={handleCodeChange}
      />
      <div className="w-full flex sm:flex-row gap-4 flex-col items-center lg:items-center justify-between pt-4">
        <div className="w-full lg:w-auto flex gap-4 sm:flex-col lg:flex-row">
          <LanguageSelector
            language={language}
            onSelect={handleLanguageChange}
            disabled={isShared2}
          />
          <ThemeSelector
            handleThemeChange={handleThemeChange}
            disabled={isShared2}
          />
        </div>

        <div className="w-full lg:w-auto flex lg:flex-row flex-col gap-4 items-center">
          {savedLink && (
            <button
              className="gap-2 px-4 py-4 text-success border-success border hover:opacity-80 transition text-green-400 z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 border-medium px-unit-6 min-w-unit-24 h-unit-12 text-medium gap-unit-3 rounded-full [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-transparent border-success text-success data-[hover=true]:opacity-hover w-full lg:w-fit cursor-pointer"
              onClick={handleCopyClick}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                height="20"
                role="presentation"
                viewBox="0 0 24 24"
                width="20"
                fill="currentColor"
              >
                <path d="M8.465,11.293c1.133-1.133,3.109-1.133,4.242,0L13.414,12l1.414-1.414l-0.707-0.707c-0.943-0.944-2.199-1.465-3.535-1.465 S7.994,8.935,7.051,9.879L4.929,12c-1.948,1.949-1.948,5.122,0,7.071c0.975,0.975,2.255,1.462,3.535,1.462 c1.281,0,2.562-0.487,3.536-1.462l0.707-0.707l-1.414-1.414l-0.707,0.707c-1.17,1.167-3.073,1.169-4.243,0 c-1.169-1.17-1.169-3.073,0-4.243L8.465,11.293z"></path>
                <path d="M12,4.929l-0.707,0.707l1.414,1.414l0.707-0.707c1.169-1.167,3.072-1.169,4.243,0c1.169,1.17,1.169,3.073,0,4.243 l-2.122,2.121c-1.133,1.133-3.109,1.133-4.242,0L10.586,12l-1.414,1.414l0.707,0.707c0.943,0.944,2.199,1.465,3.535,1.465 s2.592-0.521,3.535-1.465L19.071,12c1.948-1.949,1.948-5.122,0-7.071C17.121,2.979,13.948,2.98,12,4.929z"></path>
              </svg>
              {savedLink.replace(window.location.origin, "...")}
            </button>
          )}
          <ShareButton
            onClick={handlerClick}
            loading={loading}
            disabled={!hasChanged || isShared || loading}
          />
        </div>
      </div>
    </>
  );
};

export default CodeEditor;
