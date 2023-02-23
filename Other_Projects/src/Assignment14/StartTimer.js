import React, { useState, useRef } from "react";

function CountTimer(props) {
  const [count, setCount] = useState(0);
  const timer = useRef();

  const startTimer = () => {
    timer.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(timer.current);
  };
  const Reset = () => {
    stopTimer();
    setCount(0);
  };
  return (
    <div>
      <h1 style={{ color: "teal" }}>Counter</h1>
      <h3>{count}</h3>
      <button onClick={startTimer} style={{ margin: "10px" }}>
        START
      </button>
      <button onClick={stopTimer}>PAUSE</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}
export default CountTimer;
