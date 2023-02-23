import React, { useEffect } from "react";

export default function Timer() {
  const [state, setState] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setState(state + 1);
    }, 2000);
    // return clearInterval(interval);
  });
  return (
    <div
      style={{
        boxShadow: "0 0 10px black",
        height: "200px",
        width: "300px",
        margin: "auto",
        marginTop: "70px",
      }}
    >
      {/* setInterval(() => {}, 1000); */}
      <h1>Timer Component</h1>
      <h3>Timer : {state} </h3>
    </div>
  );
}
