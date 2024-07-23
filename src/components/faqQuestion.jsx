import React, { useState } from "react";
const FAQs = () => {
  const [faqItems, setFaqItems] = useState([
    {
      id: 1,
      question: "What are British Analytica's fees?",
      answer:
        "British Analytica's fees are competitive and depend on the specific scope of the project. The company offers free consultations to discuss your needs and provide a customized quote.",
      isOpen: false,
    },
    {
      id: 2,
      question:
        "What is British Analytica's approach to client confidentiality?",
      answer:
        "British Analytica takes client confidentiality very seriously. The company has strict policies in place to protect your data and ensure that your information is only used for the purposes of your project.",
      isOpen: false,
    },
    {
      id: 3,
      question:
        "What makes British Analytica different from other consultancy companies in Tashkent?",
      answer:
        "British Analytica is a unique consultancy company in Tashkent that combines international expertise with local knowledge. The company has a team of experienced consultants who are passionate about helping businesses succeed in Uzbekistan.",
      isOpen: false,
    },
  ]);

  const toggleAnswer = (id) => {
    const updatedFAQs = faqItems.map((item) => {
      if (item.id === id) {
        return { ...item, isOpen: !item.isOpen };
      }
      return item;
    });
    setFaqItems(updatedFAQs);
  };

  return (
    <div className="container">
      <section className="questions">
        <div className="main">
          {/* <p className="title">
            Our vision: Empowering Central Asian economies to become the new
            engines of global growth.
          </p> */}
          <div className="questions-container">
            {faqItems.map((item) => (
              <div
                className={`question-container ${item.isOpen ? "active" : ""}`}
                key={item.id}
              >
                <div className="question" onClick={() => toggleAnswer(item.id)}>
                  <p>{item.question}</p>
                  <button type="button" className="question-button">
                    {item.isOpen ? (
                      <span className="show-answer">
                        <i className="fas fa-angle-up"></i>
                      </span>
                    ) : (
                      <span className="hide-answer">
                        <i className="fas fa-angle-down"></i>
                      </span>
                    )}
                  </button>
                </div>
                <div className="answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
