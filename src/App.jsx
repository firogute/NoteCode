// import { useState } from "react";
import "./App.css";
import CodeEditor from "./components/CodeEditor";
import LanguageSelector from "./components/LanguageSelector";

const ThemeSelector = ({ theme, onChangeTheme }) => {
  return (
    <div className="theme-selector">
      <select id="language-select" value={theme} onChange={onChangeTheme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
};

function App() {
  return (
    <>
      <main>
        <header>
          <img src="NoteCodeLogo.svg" alt="logo" />
          <p>Create & Share</p>
          <p>Your Code easily</p>
        </header>
        <div className="editor">
          <CodeEditor />
          <ThemeSelector />
        </div>
      </main>
    </>
  );
}

export default App;
