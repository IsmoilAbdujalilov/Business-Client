import React from "react";

const Form = () => {
  return (
    <div className="container" id="contact">
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <form>
            <div className="formbold-form-title">
              <h2 className="">CONTACT US</h2>
            </div>

            <div className="formbold-input-flex">
              <div>
                <label for="firstname" className="formbold-form-label">
                  First name{" "}
                </label>
                <input
                  required
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="formbold-form-input"
                />
                <span
                  style={{
                    color: "red",
                    fontSize: "12px",
                    display: "block",
                    marginTop: "5px",
                  }}
                >
                  &#9733; Important
                </span>
              </div>
              <div>
                <label for="lastname" className="formbold-form-label">
                  {" "}
                  Last name{" "}
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="formbold-form-input"
                />
              </div>
            </div>

            <div className="formbold-input-flex">
              <div>
                <label for="email" className="formbold-form-label">
                  {" "}
                  Email{" "}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="formbold-form-input"
                />
              </div>
              <div>
                <label for="phone" className="formbold-form-label">
                  {" "}
                  Phone number{" "}
                </label>

                <input
                  required
                  type="text"
                  name="phone"
                  id="phone"
                  className="formbold-form-input"
                />
                <span
                  style={{
                    color: "red",
                    fontSize: "12px",
                    marginTop: "5px",
                    display: "block",
                  }}
                >
                  &#9733; Important
                </span>
              </div>
            </div>
            <div>
              <label for="text" className="formbold-form-label">
                {" "}
                Text
              </label>
              <textarea
                rows={5}
                type="text"
                id="text"
                className="formbold-form-input"
              />
            </div>

            <label
              style={{ margin: "25px 0px" }}
              for="supportCheckbox"
              class="formbold-checkbox-label"
            >
              <div class="formbold-relative">
                <input
                  type="checkbox"
                  id="supportCheckbox"
                  class="formbold-input-checkbox"
                />
                <div class="formbold-checkbox-inner">
                  <span class="formbold-opacity-0">
                    <svg
                      width="11"
                      height="8"
                      viewBox="0 0 11 8"
                      fill="none"
                      class="formbold-stroke-current"
                    >
                      <path
                        d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                        stroke-width="0.4"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </label>

            <div className="buttons">
              <button className="formbold-btn">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
