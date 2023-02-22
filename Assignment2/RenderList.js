import React from "react";

export default function Skills(props) {
  return (
    <div>
      <ul>
        {props.items.map((elem, index) => {
          return <li key={index}>{elem}</li>;
        })}
      </ul>
    </div>
  );
}
