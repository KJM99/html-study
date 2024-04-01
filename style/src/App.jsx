import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { css } from "@emotion/css";
import "./App.css";
// git switch -c bootstrap

function App() {
  const [color, setColor] = useState("red");
  const [sec, setSecond] = useState("2");
  const [rot, setRotate] = useState("180");
  return (
    <>
      <div className="box"></div>
      <div className="box"></div>
      <input type="color" onChange={(e) => setColor(e.target.value)} />
      <input type="number" onChange={(e) => setSecond(e.target.value)} />
      <input type="number" onChange={(e) => setRotate(e.target.value)} />
      {/* js in style */}
      <div
        className={css`
          padding: 32px;
          width: 150px;
          height: 150px;
          background-color: ${color};
          color : white;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            background-color: blue;
            transition: all ${sec}s;
            transform: rotate(${rot * 100}deg);
        `}
      >
        Hover to change color.
      </div>
    </>
  );
}

export default App;
