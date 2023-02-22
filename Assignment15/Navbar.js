import React, { useContext } from "react";
import { AuthContext } from "./Context/Context";

export default function Navbar() {
  const { token, isAuth, toggleAuth } = useContext(AuthContext);
  // console.log(isAuth)
  return (
    <div className="nav">
      <h3>Token : {token.token}</h3>
      <button
        onClick={() => {
          toggleAuth();
        }}
      >
        Logout
      </button>
    </div>
  );
}
