import "./App.css";
import React, { useState } from "react";
import Investing from "./components/screen1";
import Investing2 from "./components/Screen2";

function App() {
  const [showDiv, setShowDiv] = useState("simulator-1");

  return (
    <div className="App">
      <div className="boxe">
        <div className="buttons">
          <button
            className={`button ${showDiv === "simulator-1" ? "active" : ""}`}
            onClick={() => setShowDiv("simulator-1")}
          >
            {" "}
            Redimento Poupança{" "}
          </button>
          <button
            className={`button ${showDiv === "simulator-2" ? "active" : ""}`}
            onClick={() => setShowDiv("simulator-2")}
          >
            {" "}
            Rendimento Tesouro{" "}
          </button>
        </div>
        {showDiv === "simulator-1" && <Investing />}

        {showDiv === "simulator-2" && <Investing2 />}
      </div>
    </div>
  );
}

export default App;
