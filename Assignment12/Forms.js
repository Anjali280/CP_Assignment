import React from "react";

export default function Forms() {
  const [data, setData] = React.useState({
    Name: "",
    gender: "",
    role: "",
  });
  const getData = () => {
    console.log({ data });
  };
  return (
    <div>
      <form
        style={{
          boxShadow: "0 0 10px blue",
          width: "500px",
          height: "300px",
          margin: "auto",
        }}
      >
        <div>
          <h1>Registraion</h1>
        </div>
        <div>
          <div>
            <input
              type="text"
              placeholder="Enter Name"
              onChange={(event) => {
                setData({ ...data, Name: event.target.value });
              }}
            />
          </div>
          <br />
          <div>
            {" "}
            <input
              type="text"
              placeholder="Enter Gender"
              onChange={(event) => {
                setData({ ...data, gender: event.target.value });
              }}
            />
          </div>
          <br />
          <div>
            <input
              type="text"
              placeholder="Enter role"
              onChange={(event) => {
                setData({ ...data, role: event.target.value });
              }}
            />
          </div>
          <br />
          <div>
            <input
              type="button"
              value="Register"
              style={{
                border: "none",
                fontWeight: "700",
                padding: "7px",
                fontSize: "15px",
                backgroundColor: "crimson",
                color: "white",
              }}
              onClick={getData}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
