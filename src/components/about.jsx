import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <h3>Farooq A. Kirmani-Massala</h3>
                  <ul>
                    <li>MBA from Neoma Business School, Reims, France</li>
                    <li>
                      v M.Sc. Strategic Project Management from Hariot-Watt
                      University, Edinburgh, UK; Politecnico di Milano, Italy;
                      Umeà University, Sweden.
                    </li>
                    <li>
                      +20 years' experience of working with 14 different
                      organisations across the UK and Asia
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <h3>Diyorbek Muradov</h3>
                  <ul>
                    <li>Bachelor of International Economic Relations, TIU</li>
                    <li>
                      PMP-30, Rank 1, Japan International Cooperation Agency
                    </li>
                    <li>
                      Keiei-Juku, Strategic Development of Business Executives
                    </li>
                    <li>
                      +15 years' experience of consulting services in Uzbekistan
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
