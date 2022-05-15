import "./App.css";
// import "public/timeline.gif";
import { useState } from "react";

let T1 = 20;
let T2 = 50;
let count1 = 1;
let count2 = 1;
let cost1 = 5;
let cost2 = 7;

function App() {
  const [click, setClick] = useState(1);
  const [autoClick, setAutoClick] = useState(1);
  const [points, setPoints] = useState(0);
  const [clickableC, setClickableC] = useState(true);
  const [clickableA, setClickableA] = useState(true);

  const checkClickable = () => {
    if (points >= T1 * count1) {
      setClickableC(false);
    }
    // if (points >= 100) {
    //   setClickableC(false);
    // }
    // if (points >= 180) {
    //   setClickableC(false);
    // }
    // if (points >= 300) {
    //   setClickableC(false);
    // }
    if (points >= T2 * count2) {
      setClickableA(false);
    }
    // if (points >= 200) {
    //   setClickableA(false);
    // }
    // if (points >= 600) {
    //   setClickableA(false);
    // }
    // if (points >= 1000) {
    //   setClickableA(false);
    // }
  };

  const clicked = () => {
    if (points === 0) {
      setPoints(1);
    } else {
      setPoints(points + click);
    }
    checkClickable();
  };

  // const clickedAuto = () => {
  //   setPoints(points + autoClick);
  // };

  const upgradeClick = () => {
    setClick(click + 1);
    setPoints((points) => points - cost1);
    setClickableC(true);
    count1 += 10;
    cost1 *= 3;
    console.log("Click: " + T1 * count1, points, cost1);
  };

  const upgradeAuto = () => {
    setAutoClick(autoClick + 1);
    setPoints((points) => points - cost2);
    setClickableA(true);
    count2 += 13;
    cost2 *= 3;
    setInterval(() => {
      setPoints((points) => points + autoClick);
    }, 1000);
    // setInterval(() => checkClickable(), 100);
    console.log("Auto: " + T2 * count2, points, cost2);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>{points}</h1>
        <p> NEXUS Events</p>
        <button className="mainButton" onClick={() => clicked()}>
          CLICK
        </button>
        <h6 className="headerH6">
          {click} per click , {autoClick - 1} per second
        </h6>
        <button
          className="secondaryButton"
          onClick={() => upgradeClick()}
          disabled={clickableC}
        >
          upgrade varient
        </button>
        <h6 className="h6">
          {click + 1} points/click (-{cost1 + 10})
        </h6>
        <button
          className="secondaryButton"
          onClick={() => upgradeAuto()}
          disabled={clickableA}
        >
          {" "}
          recruit varients
        </button>
        <h6 className="h6">
          {autoClick} clicks/second (-{cost2 * 3})
        </h6>
      </div>
    </div>
  );
}

export default App;
