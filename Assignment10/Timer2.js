import React, { useState, useEffect } from "react";

function Timer(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count);
      setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
    }, 5000);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div>
      <h1 style={{ color: "red" }}>Timer-1</h1>
      <h2 style={{ color: "teal" }}>
        {console.log("himu")} Your's Time Increse Every 1 second {count}
      </h2>
    </div>
  );
}

export default Timer;
