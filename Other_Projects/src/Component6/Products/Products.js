import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./Products.css";

export default function Products() {
  return (
    <div className="productContainer">
      <div>
        <Link to="Electronic">Electronics</Link>
        <Link to="Jewellery">Jewellery</Link>
        <Link to="#">Men's Clothing</Link>
        <Link to="#">Women's Clothing</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
