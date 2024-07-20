import React, { useState } from "react";
const FAQs = () => {
  const [faqItems, setFaqItems] = useState([
    {
      id: 1,
      question: "What is HTML?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ut esse pariatur fugiat tenetur dolores, mollitia qui! Quisquam, dolorem consequuntur nesciunt omnis architecto magni voluptatum reprehenderit. Officiis minima reprehenderit dolores!",
      isOpen: false,
    },
    {
      id: 2,
      question: "What is CSS?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ut esse pariatur fugiat tenetur dolores, mollitia qui! Quisquam, dolorem consequuntur nesciunt omnis architecto magni voluptatum reprehenderit. Officiis minima reprehenderit dolores!",
      isOpen: false,
    },
    {
      id: 3,
      question: "What is JavaScript?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ut esse pariatur fugiat tenetur dolores, mollitia qui! Quisquam, dolorem consequuntur nesciunt omnis architecto magni voluptatum reprehenderit. Officiis minima reprehenderit dolores!",
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
          <p className="title">Frequently Asked Questions (FAQs)</p>
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
