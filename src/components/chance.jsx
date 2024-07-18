import "../assets/index.css";
import { useState } from "react";
import File1 from "../assets/file-1.pdf";
import File2 from "../assets/file-2.pdf";

const Chance = () => {
  const [file, setFile] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(true);

  const renderFile = (number) => {
    setIsOpenModal((prevState) => !prevState);
    if (number === 1) {
      setFile(File1);
    }
    if (number === 2) {
      setFile(File2);
    }
  };

  return (
    <div className="container">
      <div id="privacy-viewer" className={isOpenModal && "hide-privacy-viewer"}>
        <div className="cover"></div>
        <div className="content">
          <div className="content-text">
            <i
              className="fa-solid fa-x"
              onClick={() => setIsOpenModal((prevState) => !prevState)}
            ></i>
            <p>
              Eslatma!
              <br />
            </p>
            <iframe
              src={file}
              width="100%"
              height={500}
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>

      <section
        className="chance"
        id="services"
        style={{ padding: "50px", borderRadius: "20px" }}
      >
        <h2 className="chance-title" style={{ margin: "0px" }}>
          Our services
        </h2>
        <hr className="sertificate-horizontal-rules" />

        <div className="chance__rows">
          <div className="chance__column">
            <h2 className="chance__column-title">Express Diagnostic</h2>
            <p className="chance__column-text">
              We shall carry out an express diagnostic of your business, a
              concise assessment of your company's overall well-being. It's like
              a quick health checkup by a doctor to identify any potential
              issues. Through this process, we will analyze your company's
              financial systems, operational systems, risk analysis, and a
              summary SWOT analysis. This will help identify areas where you're
              excelling and uncover any potential weaknesses that need
              addressing. The health check will provide valuable insights to
              make informed decisions about your business's future what
              immediate steps you need to take for growth and success. The
              findings will be compiled into a report along with detailed
              recommendations.
            </p>
            <div className="chance__price">
              <span style={{ cursor: "pointer" }} onClick={() => renderFile(1)}>
                Read more
              </span>
            </div>
          </div>
          <div className="chance__column">
            <h2 className="chance__column-title">Product services</h2>
            <p className="chance__column-text">
              Aniq tushunchalar va tahlillarga sho'ng'ing. Ma'lumotlardan
              mazmunli namunalarni olish, biznes qarorlarini qabul qilish
              imkoniyatlarini kengaytirish uchun ilg'or usullarni o'rganing.
              Bizning amaliy yondashuvimiz sizning ishga tayyor bo’lishingizni
              ta'minlaydi.
            </p>
            <div className="chance__price">
              <span style={{ cursor: "pointer" }} onClick={() => renderFile(2)}>
                Read more
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chance;
