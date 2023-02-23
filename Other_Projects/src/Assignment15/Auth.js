import { useContext, useState, useCallback, useMemo, memo } from "react";
import { AuthContext } from "./Context/Context";
import Navbar from "./Navbar";
import Form from "./Form";

function Auth() {
  const myData = useContext(AuthContext);
  const [token, setToken] = useState("token");
  const [si, setSi] = useState(false);

  const isAuth = (e, data) => {
    e.preventDefault();
    fetch(`https://reqres.in/api/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((tok) => {
        if (tok.error) {
          setSi(false);
          alert("Wrong data");
          return;
        }
        setSi(true);
        setToken(tok);
      })
      .catch((error) => {
        setSi(false);
      })
      .finally(() => {});
  };

  const toggleAuth = () => {
    setSi(false);
  };

  const data = useMemo(
    () => ({
      token,
      isAuth,
      toggleAuth,
    }),
    [token]
  );
  console.log(token);

  return (
    <>
      <AuthContext.Provider value={data}>
        <div className="App">{si ? <Navbar /> : <Form />}</div>
      </AuthContext.Provider>
    </>
  );
}

export default memo(Auth);
