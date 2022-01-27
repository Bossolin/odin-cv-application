import React from "react";
import GeneralInfo from "./components/GeneralInfo";
import Jobs from "./components/Jobs";
import Studies from "./components/Studies";

function App() {
  return (
    <div>
      CV Application
      <GeneralInfo />
      <Studies />
      <Jobs />
    </div>
  );
}

export default App;
