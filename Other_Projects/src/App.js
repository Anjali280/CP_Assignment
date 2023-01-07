// // import Product from "./Components1/Product/Product";
// import "./App.css";
import Counter from "./Component3/Counter";
// import ReactInputBox from "./Component4/ReactInputBox";
// import Todo from "./Component5/Todo";

// function App() {
//   return (
//     <div className="App">
//       {/* <Product /> */}
//       {/* <Counter /> */}
//       {/* <ReactInputBox /> */}
//       <Todo />
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import Header from "./Component6/Header";
import { loginContext } from "./Component6/Context";
import Home from "./Component6/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Products from "./Component6/Products/Products";
import Electronic from "./Component6/Products/Electronic";
import Jewellery from "./Component6/Products/Jewellery";
import ProductDetails from "./Component6/Products/ProductDetails";

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
      <loginContext.Provider value={{ state, fnLoggedIn, fnLoggedOut }}>
        <Header />
        {/* <Auth /> */}
      </loginContext.Provider>
      {/* <Login />  */}
      {/* <Header />*/}

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/Products" element={<Products />}>
          <Route path="" element={<Navigate to="Electronic" />} />
          <Route path="Electronic" element={<Electronic />} />
          <Route path="Jewellery" element={<Jewellery />} />
        </Route>
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
