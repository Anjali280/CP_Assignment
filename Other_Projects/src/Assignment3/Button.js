import React from "react";

export default function Button() {
  const [show, setShow] = React.useState(false);
  const STYLE = {
    padding: "10px",
    margin: "180px",
    fontSize: "30px",
    fontWeight: "bold",
    letterSpacing: "2px",
    cursor: "pointer",
    border: "none",
    backgroundColor: "black",
    color: "white",
  };
  return (
    <div>
      {show ? (
        <div>
          {" "}
          <img
            src="https://d27028dliefpk3.cloudfront.net/brand/masai-school.png"
            alt="pic"
            height="300px"
          />
        </div>
      ) : null}
      <button
        style={STYLE}
        onClick={() => {
          console.log("UUU");
          alert("YOU CLICKED MASAI!");
          setShow(true);
        }}
      >
        Click on MASAI
      </button>
      <div></div>
    </div>
  );
}
