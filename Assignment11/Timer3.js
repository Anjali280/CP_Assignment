import React, { useEffect } from "react";

function Timer3() {
  const [show, setShow] = React.useState(true);
  const [state, setState] = React.useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setState(state);
      setInterval(() => {
        setState((state) => state + 1);
      }, 1000);
    }, 5000);
    return () => clearInterval(timer);
  });

  return (
    <div>
      <div
        style={{
          marginTop: "70px",
          paddingTop: "80px",
          margin: "auto",
          width: "500px",
          height: "300px",
          boxShadow: "0 0 10px teal",
        }}
      >
        <h1>Timer Component</h1>

        {show ? (
          <div>
            <h3>Timer Started : {state}</h3>
            <button
              onClick={() => {
                setShow(false);
              }}
              style={{
                border: "none",
                padding: "6px",
                fontWeight: "700",
                fontSize: "15px",
                backgroundColor: "turquoise",
              }}
            >
              Hide
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              setShow(true);
              setState(0);
            }}
            style={{
              border: "none",
              padding: "6px",
              fontWeight: "700",
              fontSize: "15px",
              backgroundColor: "pink",
            }}
          >
            Show
          </button>
        )}
      </div>
    </div>
  );
}

export default Timer3;
