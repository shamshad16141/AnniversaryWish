import { useState } from "react";
import "./App.css";
import Card from "./Card";
import Tooltip from "./tooltip";
import Pattern from "./background";
import noImage from "./image/no.jpg";

function App() {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const isNo = inputValue.toLowerCase() === "no";

  const isYes = inputValue.toLowerCase() === "yes";

  return (
    <div className="app">
      <Pattern />
      <img src={noImage} alt="No" className={`no-image ${isNo ? 'show' : ''}`} />
      <Tooltip isActive={isFocused} />
      <Card showText={isYes} />
      <div className="input-wrapper">
        <input
          type="text"
          className="simple-textbox"
          placeholder="Type here..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <button className="send-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;