import React, { useState, useEffect, useContext, useCallback } from "react";
import { AuthContext } from "./Context/Context";

export default function Form() {
  const [log, setLog] = useState({
    email: "",
    password: "",
  });
  const { isAuth } = useContext(AuthContext);

  const handel = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLog({ ...log, [name]: value });
    // console.log(log.email)
  };

  return (
    <div style={{ textAlign: "center" }}>
      <form
        onSubmit={(e) => {
          isAuth(e, log);
        }}
      >
        <input
          type="email"
          name="email"
          value={log.email}
          placeholder="Email..."
          onChange={handel}
        />
        <br />
        <input
          type="password"
          name="password"
          value={log.password}
          placeholder="Password..."
          onChange={handel}
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
