import React from "react";
import "./API.css";

export default function API() {
  const [storeData, setStoreData] = React.useState([]);
  const getData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const fetchData = await fetch(url);
    const data = await fetchData.json();
    setStoreData(data);
    console.log(data);
  };

  return (
    <div>
      <div className="button_id">
        <button onClick={getData} className="data">
          GET DATA
        </button>
      </div>
      <div className="getdata_id">
        <table className="table_head" cellPadding="10px">
          <thead>
            <tr>
              <th>USER ID</th>
              <th>ID</th>
              <th>TITLE</th>
              <th>BODY</th>
            </tr>
          </thead>
          <tbody>
            {storeData.map((element) => {
              return (
                <tr key={element.id}>
                  <th>{element.userId}</th>
                  <th>{element.id}</th>
                  <th>{element.title}</th>
                  <th>{element.body}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
