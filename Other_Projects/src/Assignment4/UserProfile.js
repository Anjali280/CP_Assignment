import React from "react";
import "./UserProfile.css";

export default function UserProfile() {
  let arrObj = [
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      n: "React JS",
      id: 1,
    },
    {
      icon: "https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png",
      n: "Node JS",
      id: 2,
    },
    {
      icon: "https://www.pngitem.com/pimgs/m/171-1718055_javascript-icon-web-script-code-development-js-round.png",
      n: "JavaScript",
      id: 3,
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
      n: "Python",
      id: 4,
    },
    {
      icon: "https://w1.pngwing.com/pngs/711/379/png-transparent-green-grass-mongodb-database-documentoriented-database-dashboard-nosql-bson-javascript.png",
      n: "Mongo DB",
      id: 5,
    },

    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
      n: "Python",
      id: 6,
    },
  ];
  const obj = {
    name: "Anjali Mondal",
    title: "FULL STACK DEVELOPER",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP1HAeQS6Nb-Fw-n9KuB6wDfYZAijJwYCdGt4uCV05O4HWBBtOyW30bV022hpsJyhbbas&usqp=CAU",
  };
  return (
    <div>
      <div id="mainDiv">
        <div id="left">
          <div id="topSmall">
            <div id="topFlex">
              <h1>{obj.name}</h1>
              <button>Follow</button>
            </div>
            <h4>{obj.title}</h4>
          </div>
          <div id="belowDiv">
            {arrObj.map((elem) => {
              return (
                <div id="flex" key={obj.id}>
                  <img src={elem.icon} alt="pic" />
                  <span>{elem.n}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div id="right">
          <img src={obj.url} alt="pic" />
        </div>
      </div>
    </div>
  );
}
