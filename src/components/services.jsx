import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our values</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p> */}
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
