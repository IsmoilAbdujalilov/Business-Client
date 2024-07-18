import React from "react";

const Form = () => {
  return (
    <div className="container">
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <form>
            <div className="formbold-form-title">
              <h2 className="">What questions do you have?</h2>
            </div>

            <div className="formbold-input-flex">
              <div>
                <label for="firstname" className="formbold-form-label">
                  First name
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="formbold-form-input"
                />
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
                  type="text"
                  name="phone"
                  id="phone"
                  className="formbold-form-input"
                />
              </div>
            </div>
            <div>
              <label for="phone" className="formbold-form-label">
                {" "}
                Text
              </label>
              <textarea rows={5} type="text" className="formbold-form-input" />
            </div>

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
