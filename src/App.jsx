// import { useState } from "react";
import "./App.css";
import CodeEditor from "./components/CodeEditor";
import LanguageSelector from "./components/LanguageSelector";

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
        </div>
      </main>
    </>
  );
}

export default App;
