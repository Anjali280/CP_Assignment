import React from "react";
import Skills from "./RenderList";

export default function ShowList() {
  return (
    <div style={{ fontWeight: "bolder", fontSize: "30px", textAlign: "left" }}>
      <Skills items={["JAVA", "JAVASCRIPT", "REACT"]} />
    </div>
  );
}
