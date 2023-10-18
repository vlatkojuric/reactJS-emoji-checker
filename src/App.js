import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [code, setCode] = useState("");
  console.log(code);
  const validCode = "🐡🐠🐋";

  //we give it a prop or parameter emoji and later when we call the function where it belongs,we put the
  //emoji inside paranthesies istead of the word emoji,so when we click on it it show the choosen emoji
  function handleCode(emoji) {
    setCode(code + emoji);
  }

  //resets the code when we click the reset button
  function handleResetCode() {
    setCode("");
  }

  return (
    <div className="container">
      <div className="button-container">
        <button type="button" onClick={() => handleCode("🐡")}>
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button type="button" onClick={() => handleCode(" 🐋")}>
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button type="button" onClick={() => handleCode("🐠")}>
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button type="button" onClick={handleResetCode}>
        Reset
      </button>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
