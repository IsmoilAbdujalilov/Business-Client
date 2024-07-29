import "../assets/index.css";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Sertificate1 from "../assets/sertificate-1.png";
import Sertificate5 from "../assets/sertificate-5.png";
import Sertificate6 from "../assets/sertificate-6.png";
import Sertificate8 from "../assets/sertificate-8.png";
import Sertificate9 from "../assets/sertificate-9.png";
import { Autoplay, Navigation } from "swiper/modules";
import Sertificate10 from "../assets/sertificate-10.png";
import Sertificate11 from "../assets/sertificate-11.png";
import Sertificate14 from "../assets/sertificate-14.png";
import Sertificate15 from "../assets/sertificate-15.png";
import Sertificate16 from "../assets/sertificate-16.jpg";

const Sertificate = () => {
  const [file, setFile] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(true);

  const openModal = (file) => {
    setIsOpenModal((prevState) => !prevState);
    setFile(file);
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
            <br />
            <img
              src={file}
              alt="img"
              className="responsive-image"
              style={{ width: "100%", height: "650px" }}
            />
          </div>
        </div>
      </div>
      <section
        id="sertificate"
        style={{
          margin: "50px auto",
          backgroundColor: "#f5f5f7",
          border: "1px solid #ddd",
          borderRadius: "20px",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            marginBottom: "15px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h2 className="sertificate-heading">Our sertificates</h2>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <button className="navigation-left navigation" type="button">
              &#8592;
            </button>
            <button className="navigation-right navigation" type="button">
              &#8594;
            </button>
          </div>
        </div>

        <hr className="sertificate-horizontal-rule" />

        <Swiper
          loop
          modules={[Autoplay, Navigation]}
          navigation={{
            prevEl: ".navigation-left",
            nextEl: ".navigation-right",
          }}
          autoplay={{
            delay: 2500,
          }}
          breakpoints={{
            1240: {
              slidesPerView: 4,
            },
            800: {
              slidesPerView: 3,
            },
            576: {
              slidesPerView: 2,
            },
            300: {
              slidesPerView: 1,
            },
          }}
          spaceBetween={20}
          slidesPerView={4}
        >
          <SwiperSlide>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => openModal(Sertificate1)}
            >
              <img
                height={400}
                style={{
                  height: "100%",
                  width: "100%",
                  objectPosition: "center center",
                }}
                src={Sertificate1}
                alt="sertificate"
              />
            </span>
          </SwiperSlide>
          <SwiperSlide>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => openModal(Sertificate5)}
            >
              <img
                height={400}
                style={{
                  height: "100%",
                  width: "100%",
                  objectPosition: "center center",
                }}
                width={300}
                src={Sertificate5}
                alt="sertificate"
              />
            </span>
          </SwiperSlide>
          <SwiperSlide>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => openModal(Sertificate6)}
            >
              <img
                height={400}
                style={{
                  height: "100%",
                  width: "100%",
                  objectPosition: "center center",
                }}
                width={300}
                src={Sertificate6}
                alt="sertificate"
              />
            </span>
          </SwiperSlide>
          <SwiperSlide>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => openModal(Sertificate16)}
            >
              <img
                height={400}
                style={{
                  height: "100%",
                  width: "100%",
                  objectPosition: "center center",
                }}
                width={300}
                src={Sertificate16}
                alt="sertificate"
              />
            </span>
          </SwiperSlide>
          <SwiperSlide>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => openModal(Sertificate8)}
            >
              <img
                height={400}
                style={{
                  height: "100%",
                  width: "100%",
                  objectPosition: "center center",
                }}
                width={300}
                src={Sertificate8}
                alt="sertificate"
              />
            </span>
          </SwiperSlide>
          <SwiperSlide>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => openModal(Sertificate9)}
            >
              <img
                height={400}
                style={{
                  height: "100%",
                  width: "100%",
                  objectPosition: "center center",
                }}
                width={300}
                src={Sertificate9}
                alt="sertificate"
              />
            </span>
          </SwiperSlide>
          <SwiperSlide>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => openModal(Sertificate10)}
            >
              <img
                height={400}
                style={{
                  height: "100%",
                  width: "100%",
                  objectPosition: "center center",
                }}
                width={300}
                src={Sertificate10}
                alt="sertificate"
              />
            </span>
          </SwiperSlide>
          <SwiperSlide>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => openModal(Sertificate11)}
            >
              <img
                height={400}
                style={{
                  height: "100%",
                  width: "100%",
                  objectPosition: "center center",
                }}
                width={300}
                src={Sertificate11}
                alt="sertificate"
              />
            </span>
          </SwiperSlide>
          <SwiperSlide>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => openModal(Sertificate14)}
            >
              <img
                height={400}
                style={{
                  height: "100%",
                  width: "100%",
                  objectPosition: "center center",
                }}
                width={300}
                src={Sertificate14}
                alt="sertificate"
              />
            </span>
          </SwiperSlide>
          <SwiperSlide>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => openModal(Sertificate15)}
            >
              <img
                height={400}
                style={{
                  height: "100%",
                  width: "100%",
                  objectPosition: "center center",
                }}
                width={300}
                src={Sertificate15}
                alt="sertificate"
              />
            </span>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Sertificate;
