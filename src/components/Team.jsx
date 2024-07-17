import React from "react";
import User1 from "../assets/user-1.jpg";
import User2 from "../assets/user-2.jpg";

export const Team = (props) => {
  const box = {
    gap: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div id="row">
          <div className="col-md-6 col-sm-12 team">
            <div className="thumbnail">
              <img src={User1} alt="Diyorbek Murodov" className="team-img" />
              <div className="caption">
                <h4>Diyorbek Murodov</h4>
                <div style={box}>
                  <p>CEO</p>
                  <p>+15 years</p>
                </div>
              </div>
              <a href="#">Read more</a>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 team">
            <div className="thumbnail">
              <img src={User2} alt="Farooq A" className="team-img" />
              <div className="caption">
                <h4>Farooq A</h4>
                <div style={box}>
                  <p>Kirmani-Massala</p>
                  <p>+20 years</p>
                </div>
                <a href="">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
