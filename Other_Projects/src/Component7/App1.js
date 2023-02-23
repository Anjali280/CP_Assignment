import Header from "./Component7/Header";
import Auth from "./Component7/Auth";
import { useState } from "react";
import loginContext from "./Component7/Context";

function App() {
  const [state, setState] = useState({
    isLoggedIn: false,
    user: "Guest User",
  });

  const fnLoggedIn = (data) => {
    setState(data);
  };

  const fnLoggedOut = () => {
    setState({
      isLoggedIn: false,
      user: "Guest User",
    });
  };

  return (
    <div>
      <div></div>
      <div>
        <loginContext.Provider value={{ state, fnLoggedIn, fnLoggedOut }}>
          <Header />
          <Auth />
        </loginContext.Provider>
      </div>
    </div>
  );
}

export default App;
