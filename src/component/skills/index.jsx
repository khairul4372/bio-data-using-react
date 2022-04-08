import React from "react";
import "./styles.css";

const Skills = (props) => {
  return (
    <div className="skill-main">
      <h2>Programing Skills</h2>
      {props.data.map((value) => {
        return (
          <p key={Math.random()} className="item">
            {value}
          </p>
        );
      })}
    </div>
  );
};
export default Skills;
