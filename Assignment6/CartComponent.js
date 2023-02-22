import React from "react";
import "./CartComponent.css";

export default function CartComponent() {
  const [noodles, setNoodles] = React.useState(0);
  const [biryani, setBiryani] = React.useState(0);
  const [chips, setChips] = React.useState(0);

  let totVal;
  return (
    <div>
      {(totVal = noodles + chips + biryani)}
      <div className="main_div">
        <div className="div_1st">
          {" "}
          Noodles&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Rs.30</span>
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button
            disabled={noodles === 0 ? true : false}
            onClick={() => {
              setNoodles(noodles - 30);
            }}
          >
            -
          </button>
          <span>{noodles}</span>
          <button
            onClick={() => {
              setNoodles(noodles + 30);
            }}
          >
            +
          </button>
        </div>
        <div className="div_2nd">
          Biryani&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; <span>Rs.90</span>
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button
            disabled={biryani === 0 ? true : false}
            onClick={() => {
              setBiryani(biryani - 90);
            }}
          >
            -
          </button>
          <span>{biryani}</span>
          <button
            onClick={() => {
              setBiryani(biryani + 90);
            }}
          >
            +
          </button>
        </div>
        <div className="div_3rd">
          Chips &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<span>Rs.10</span>
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button
            disabled={chips === 0 ? true : false}
            onClick={() => {
              setChips(chips - 10);
            }}
          >
            -
          </button>
          <span>{chips}</span>
          <button
            onClick={() => {
              setChips(chips + 10);
            }}
          >
            +
          </button>
        </div>
        <div className="div_4th">
          Total = <span>{totVal}</span>
        </div>
      </div>
    </div>
  );
}
