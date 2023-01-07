import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Jewellery(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const jewel = async () => {
      const res = await fetch(
        "https://fakestoreapi.com/products/category/jewelery"
      );
      const jdata = await res.json();
      console.log(jdata);
      setData(jdata);
    };
    jewel();
  }, []);

  return (
    <div>
      <h2>Jewellery Category</h2>
      {data.length > 0 ? (
        <ul>
          {data.map((element, index) => {
            return (
              <NavLink
                to={`/ProductDetails/${element.id}`}
                key={index + 1}
                style={{ color: "blue" }}
              >
                <li key={index + 1}>{element.title}</li>
              </NavLink>
            );
          })}
        </ul>
      ) : (
        <div>
          <h3>...Loading...</h3>
        </div>
      )}
    </div>
  );
}

export default Jewellery;
