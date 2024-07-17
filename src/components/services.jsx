import React from "react";

export const Services = (props) => {
  return (
    <div id="values" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our values</h2>
        </div>
        <div className="grid">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="grid-column">
                  <div className="icon-display">
                    <i style={{ fontSize: "25px" }} className={d.icon}></i>
                  </div>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
