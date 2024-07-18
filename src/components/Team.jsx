import React from "react";
import "../assets/index.css";
import User1 from "../assets/user-1.jpg";
import User2 from "../assets/user-2.jpg";

export const Team = () => {
  const box = {
    gap: "25px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <hr className="sertificate-horizontal-rule1" />

          <p>
            Empowering organizations to achieve sustainable success and maximum
            value through innovative strategic solutions specifically shaped to
            surmount the complexities of the modern business world.
          </p>
        </div>
        <div id="row">
          <div className="col-12 col-sm-12 team">
            <div className="thumbnail">
              <img src={User1} alt="Farooq A" className="team-img" />
              <div className="caption">
                <div style={box}>
                  <p>CEO</p>
                  <p>+15 years</p>
                </div>
                <h4>Diyorbek Murodov</h4>
                <p>Bachelor of International Economic Relations, TIU</p>
                <p>PMP-30, Rank 1, Japan International Cooperation Agency</p>
                <p>Keiei-Juku, Strategic Development of Business Executives</p>
                <p>
                  +15 years’ experience of consulting services in Uzbekistan
                </p>
                <a href="">Read more</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 team">
            <div className="thumbnail">
              <img src={User2} alt="Farooq A" className="team-img" />
              <div className="caption">
                <div style={box}>
                  {/* <p>Kirmani-Massala</p> */}
                  <p>+20 years</p>
                </div>
                <h4>Farooq A. Kirmani-Massala</h4>
                <p>MBA from Neoma Business School, Reims, France</p>
                <p>
                  M.Sc. Strategic Project Management from Hariot-Watt
                  University, Edinburgh, UK; Politecnico di Milano, Italy; Umeå
                  University, Sweden.
                </p>
                <p>
                  +20 years’ experience of working with 14 different
                  organisations across the UK and Asia
                </p>

                <a href="">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
