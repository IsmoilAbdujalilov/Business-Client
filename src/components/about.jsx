import React from "react";

export const About = (props) => {
  return (
    <div className="container">
      <div
        id="about"
        style={{
          margin: "50px 0px",
          padding: "40px 20px",
          borderRadius: "15px",
          border: "1px solid #ddd",
          backgroundColor: "#f5f5f7",
        }}
      >
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
                <div
                  className="col-lg-6 col-sm-6 col-xs-12"
                  style={{ padding: "0px", width: "100%" }}
                >
                  <h3>
                    Reasons why a customer should choose British Analytica
                  </h3>
                  <ul style={{ padding: "0px" }}>
                    <li>
                      Global Expertise, Local Knowledge: British Analytica
                      leverages the best of both worlds by combining British
                      consulting experience with deep understanding of local
                      markets. This ensures their solutions are effective and
                      tailored to your specific needs.
                    </li>
                    <li>
                      Holistic Business Assessment: They don't offer
                      one-size-fits-all solutions. British Analytica takes the
                      time to comprehensively assess your entire business before
                      crafting a bespoke strategy.
                    </li>
                    <li>
                      Bespoke Solutions: British Analytica believes in
                      customized solutions. They will develop a plan that دقیقا
                      (daqīqa) addresses your unique challenges and
                      opportunities.
                    </li>
                    <li>
                      Proven Track Record: With a proven track record of
                      success, British Analytica can give you the confidence
                      that their solutions will deliver the results you need.
                    </li>
                    <li>
                      Long-Term Partnership: British Analytica is committed to
                      building long-term partnerships with their clients. They
                      will continue to support you as you implement their
                      recommendations and achieve your goals.
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
