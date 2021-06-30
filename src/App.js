import React from "react";
import LightBulb from "./LightBulb1";
// import List from "./List6";

import "./App.css";

const persons = [
  { name: "Bert", mood: "Grumpy" },
  { name: "Ernie", mood: "Happy" }
];

function App() {
  return (
    <div className="App">
      {/* <List persons={persons} /> */}
      <LightBulb />
    </div>
  );
}

export default App;
