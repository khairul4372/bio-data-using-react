import React from "react";
import "./styles.css";
export default function Reference(props) {
  return (
    <div className="ref-main">
      <h2>Reference</h2>
      <div className="ref-items">
        {props.data.map((value) => {
          return (
            <div key={Math.random()} className="ref-item">
              <h3>{value.name}</h3>
              <p>{value.position}</p>
              <p>{value.workplace} </p>
              <p>{value.email}</p>
              {value.phone ? <p>{value.phone}</p> : <p>&nbsp;</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
