// import React, { useRef } from "react";

// export default function Input() {
//   const [set, setState] = React.useState("");
//   const name = useRef(null);

//   const displayData = () => {
//     setState(name.current.value);
//   };
//   return (
//     <div>
//       <div>
//         <input type="text" placeholder="Enter Anything" ref={name} />
//         <button onClick={displayData}>Display</button>
//       </div>
//       <div>
//         <h3>YOU ENTERED : {set}</h3>
//       </div>
//     </div>
//   );
// }

import { useRef } from "react";
function Input() {
  const input = useRef();
  const Focus = () => {
    input.current.focus();
  };
  return (
    <div className="App">
      {" "}
      <input type="text" ref={input} />{" "}
      <button onClick={Focus}> Click Here To Focus Input</button>{" "}
    </div>
  );
}
export default Input;
