import "../assets/index.css";
import File1 from "../assets/file-1.pdf";
import File2 from "../assets/file-2.pdf";

const Chance = () => {
  return (
    <section className="chance" id="course">
      <div className="container">
        <h2 className="chance-title">
          BRITISH ANALYTICA imkoniyatlarini oching
        </h2>
        <p className="chance-text">
          Biz nafaqat nazariyani o'rgatamiz, balki o'quvchilarimizga qisqa vaqt
          ichida global miqyosda raqobatbardosh dasturchilar bo'lish
          imkoniyatini beradigan haqiqiy bilimlarni taqdim etamiz. Sizning
          kar’erangiz butkul o'zgarishi shu erdan boshlanadi.
        </p>
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
              <a href={File1} target="_blank">
                Read more
              </a>
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
              <a href={File2} target="_blank">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chance;
