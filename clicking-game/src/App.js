import "./App.css";
// import "public/timeline.gif";
import { useState } from "react";

let T = 0;

function App() {
  const [click, setClick] = useState(1);
  const [autoClick, setAutoClick] = useState(0);
  const [points, setPoints] = useState(0);

  const clicked = () => {
    if (points === 0) {
      setPoints(1);
    } else if (points === 20) {
      setPoints(points + click);
      document.getElementsByClassName("secondaryButton").disabled = false;
    } else if (points === 100) {
      setPoints(points + click);
      document.getElementsByClassName("secondaryButton").disabled = false;
    } else {
      setPoints(points + click);
    }
  };

  // const clickedAuto = () => {
  //   setPoints(points + autoClick);
  // };

  const upgradeClick = () => {
    setClick(click + 1);
    document.getElementsByClassName("secondaryButton").disabled = true;
  };

  const upgradeAuto = () => {
    setAutoClick(autoClick + 1);
    document.getElementsByClassName("secondaryButton").disabled = true;
    setInterval(() => {
      setPoints(points + autoClick);
    }, 1000);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>{points}</h1>
        <p> NEXUS Events</p>
        <button className="mainButton" onClick={() => clicked()}>
          CLICK
        </button>
        <h6>
          {click} per click / {autoClick} per second
        </h6>
        <button
          className="secondaryButton"
          onClick={() => upgradeClick()}
          disabled={false}
        >
          upgrade your click to {click + 1} points/click
        </button>
        <button
          className="secondaryButton"
          onClick={() => upgradeAuto()}
          disabled={false}
        >
          {" "}
          upgrade to {autoClick + 1} clicks/second
        </button>
      </div>
    </div>
  );
}

export default App;
