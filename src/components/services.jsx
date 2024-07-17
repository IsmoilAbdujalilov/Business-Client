import React from "react";

export const Services = (props) => {
  return (
    <div className="container">
      <div
        id="values"
        className="text-center"
        style={{
          color: "white",
          padding: "20px",
          borderRadius: "20px",
          boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.05)",
          background: "linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)",
        }}
      >
        <div className="section-title">
          <h2 style={{ color: "white" }}>Our values</h2>
        </div>
        <div className="grid">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  style={{
                    padding: "10px",
                    minHeight: "10%",
                    borderRadius: "20px",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    border: "2px solid rgba(255, 255, 255, 0.4)",
                    backdropFilter: "blur(5px)",
                  }}
                  className="grid-column"
                >
                  <div className="icon-display">
                    <i style={{ fontSize: "25px" }} className={d.icon}></i>
                  </div>
                  <div className="service-desc">
                    <h3 style={{ color: "white" }}>{d.name}</h3>
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
