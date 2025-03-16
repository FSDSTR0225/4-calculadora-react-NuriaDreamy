import React, { useState } from "react";
import Buttons from "./components/Buttons.jsx";
import Display from "./components/Display.jsx";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  return (
    <div className="calculator">
      <div>
        <Display input={input}></Display>
      </div>
      <div>
        <Buttons setInput={setInput} input={input}></Buttons>
      </div>
    </div>
  );
}

export default App;
