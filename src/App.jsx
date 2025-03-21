// import { useState } from "react";
import "./App.css";
import CodeEditor from "./components/CodeEditor";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <main className="relative flex flex-col items-center justify-between py-14 px-3 bg-hero-background bg-cover bg-no-repeat bg-center">
        <header className="w-full flex flex-col items-center justify-between mb-10">
          <a href="/">
            <img
              src="NoteCodeLogo.svg"
              alt="logo"
              width={"150px"}
              height={"27px"}
            />
          </a>
          <p className="mt-10 text-gray-dark text-3xl font-semibold">
            Create & Share
          </p>
          <p className="mt-4 text-gray-dark text-4xl font-semibold">
            Your Code easily
          </p>
        </header>
        <div className="editor w-full text-white p-6 rounded-2xl bg-black-editor max-w-[56rem]">
          <Routes>
            <Route path="/" element={<CodeEditor />} />
            <Route path="/:id" element={<CodeEditor />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
