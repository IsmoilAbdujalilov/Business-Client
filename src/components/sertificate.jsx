import React from "react";
import "../assets/index.css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Sertificate1 from "../assets/sertificate-1.png";
import Sertificate5 from "../assets/sertificate-5.png";
import Sertificate6 from "../assets/sertificate-6.png";
import Sertificate7 from "../assets/sertificate-7.png";
import Sertificate8 from "../assets/sertificate-8.png";
import Sertificate9 from "../assets/sertificate-9.png";
import Sertificate10 from "../assets/sertificate-10.png";
import Sertificate11 from "../assets/sertificate-11.png";
import Sertificate13 from "../assets/sertificate-13.png";
import Sertificate14 from "../assets/sertificate-14.png";
import Sertificate15 from "../assets/sertificate-15.png";

const Sertificate = () => {
  return (
    <section
      id="sertificate"
      className="container"
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
        </SwiperSlide>
        {/* <SwiperSlide>
          <img
            height={400}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              objectPosition: "center center",
            }}
            width={300}
            src={Sertificate2}
            alt="sertificate"
          />
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <img
            height={400}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              objectPosition: "center center",
            }}
            width={300}
            src={Sertificate4}
            alt="sertificate"
          />
        </SwiperSlide> */}
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        {/* <SwiperSlide>
          <img
            height={400}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              objectPosition: "center center",
            }}
            width={300}
            src={Sertificate12}
            alt="sertificate"
          />
        </SwiperSlide> */}
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Sertificate;
