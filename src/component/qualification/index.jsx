import React from "react";
import "./styles.css";

export default function Qualification(props) {
  return (
    <div className="qualification-main">
      <h2>Educational Qualification</h2>
      {props.data.map((value) => {
        return (
          <div key={Math.random()}>
            <h3>{value.title}</h3>
            <p>Subject: {value.subject}</p>
            <p>Institute: {value.institute} </p>
            <p>Session: {value.session}</p>
            <p>CGPA: {value.cgpa}</p>
          </div>
        );
      })}
    </div>
  );
}
