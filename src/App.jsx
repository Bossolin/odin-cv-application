import React from "react";
import GeneralInfo from "./components/GeneralInfo";
import Jobs from "./components/Jobs";
import Studies from "./components/Studies";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <h1>CV Application</h1>
      <GeneralInfo />
      <Studies />
      <Jobs />
    </div>
  );
}

export default App;
