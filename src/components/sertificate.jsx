import React from "react";
import "../assets/index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Sertificate1 from "../assets/sertificate-1.png";
import Sertificate5 from "../assets/sertificate-5.png";
import Sertificate6 from "../assets/sertificate-6.png";
import Sertificate7 from "../assets/sertificate-7.png";
import Sertificate8 from "../assets/sertificate-8.png";
import Sertificate9 from "../assets/sertificate-9.png";
import { Autoplay, Navigation } from "swiper/modules";
import Sertificate10 from "../assets/sertificate-10.png";
import Sertificate11 from "../assets/sertificate-11.png";
import Sertificate13 from "../assets/sertificate-13.png";
import Sertificate14 from "../assets/sertificate-14.png";
import Sertificate15 from "../assets/sertificate-15.png";

const Sertificate = () => {
  return (
    <div className="container">
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
            <a href={Sertificate1}>
              <img
                height={400}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
                src={Sertificate1}
                alt="sertificate"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href={Sertificate5}>
              <img
                height={400}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
                width={300}
                src={Sertificate5}
                alt="sertificate"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a target="_blank" href={Sertificate6}>
              <img
                height={400}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
                width={300}
                src={Sertificate6}
                alt="sertificate"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a target="_blank" href={Sertificate7}>
              <img
                height={400}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
                width={300}
                src={Sertificate7}
                alt="sertificate"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a target="_blank" href={Sertificate8}>
              <img
                height={400}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
                width={300}
                src={Sertificate8}
                alt="sertificate"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href={Sertificate9} target="_blank">
              <img
                height={400}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
                width={300}
                src={Sertificate9}
                alt="sertificate"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href={Sertificate10} target="_blank">
              <img
                height={400}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
                width={300}
                src={Sertificate10}
                alt="sertificate"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href={Sertificate11} target="_blank">
              <img
                height={400}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
                width={300}
                src={Sertificate11}
                alt="sertificate"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href={Sertificate13} target="_blank">
              <img
                height={400}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
                width={300}
                src={Sertificate13}
                alt="sertificate"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a target="_blank" href={Sertificate14}>
              <img
                height={400}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
                width={300}
                src={Sertificate14}
                alt="sertificate"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href={Sertificate15} target="_blank">
              <img
                height={400}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
                width={300}
                src={Sertificate15}
                alt="sertificate"
              />
            </a>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Sertificate;
