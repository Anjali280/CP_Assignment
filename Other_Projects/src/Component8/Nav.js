import React from "react";

function Nav(props) {
  var divStyle = {
    backgroundColor: "black",
    padding: "13px",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
  };
  var astyle = {
    color: "white",
    textDecoration: "none",
    marginRight: "50px",
  };
  return (
    <div className="nav" style={divStyle}>
      <a href="/" style={astyle}>
        Home
      </a>
      <a href="/reactInputBox" style={astyle}>
        ReactInputBox
      </a>
      <a href="counter" style={astyle}>
        Counter
      </a>
      <a href="products" style={astyle}>
        Products
      </a>
    </div>
  );
}

export default Nav;
