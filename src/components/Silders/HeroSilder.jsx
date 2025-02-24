import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { scrollButton } from "../../helper/main";
import { Link } from "react-router-dom";
import { BsInstagram, BsWhatsapp, BsEnvelope } from "react-icons/bs";

import bg_img from "/assets/img/bg/palace-3.jpg";

const sliderData = [
  {
    id: 1,
    title: "Elegent Marrakech Food",
    maintitle: "Le Palace Marrakech",
    subtitle: "Restaurant Luxury",
    buttonText: "Book",
    buttonUrl: "reservations",
  },
];

export default function HeroSilder() {
  const swiperRef = useRef(null);
  const scrollbtn = () => {
    scrollButton();
  };
  return (
    <div className="ak-hero ak-style1 heignt-100vh">
      <img className="ak-hero-bg ak-bg" src={bg_img} alt="..." />
      {/*<div className="container">
        <div className="hero-text-section container-fluid container-md">
          <div className="ak-slider ak-slider-hero-1">
            <Swiper
              loop={true}
              slidesPerView={"auto"}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {sliderData.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="slider-info">
                    <div className="hero-title">
                      <p className="mini-title">{item.title}</p>
                      <h1 className="hero-main-title">{item.maintitle}</h1>
                      <h1 className="hero-main-title-1 style-2">
                        {item.subtitle}
                      </h1>
                    </div>
                    <div className="ak-height-40 ak-height-lg-30"></div>
                    <Link to={item.buttonUrl} className="hero-btn style-1">
                      <div className="ak-btn style-5">{item.buttonText}</div>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
              </div>*/}
      <div className="social-icon-section">
        <p>FOLLOW US</p>
        <div className="social-border"></div>
        <div className="social-icon">
          <a target="_blank" href="https://www.instagram.com/lepalacemarrakech">
            <span>
              <BsInstagram />
            </span>
          </a>
          <a target="_blank" href="http://wa.me/212675480018">
            <span>
              <BsWhatsapp />
            </span>
          </a>
          <a target="_blank" href="mailto:reservations@le-palacemarrakech.com">
            <span>
              <BsEnvelope />
            </span>
          </a>
        </div>
      </div>
      <div className="scroll-btn" id="scroll-btn" onClick={() => scrollbtn()}>
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="55"
            viewBox="0 0 52 55"
            fill="none"
          >
            <path
              d="M25.4001 38.124L16.8902 29.6143C16.5333 29.3086 16.4917 28.7714 16.7974 28.4144C17.1031 28.0575 17.6404 28.0158 17.9973 28.3216C18.0306 28.3501 18.0617 28.3811 18.0901 28.4144L25.1532 35.469L25.1532 1.77869C25.1532 1.30875 25.5343 0.927734 26.0043 0.927734C26.4743 0.927734 26.8552 1.30875 26.8552 1.77869L26.8552 35.469L33.9098 28.4144C34.2155 28.0575 34.7527 28.0158 35.1097 28.3216C35.4666 28.6274 35.5082 29.1645 35.2025 29.5215C35.174 29.5547 35.1429 29.5858 35.1097 29.6143L26.5999 38.1241C26.2681 38.454 25.732 38.454 25.4001 38.124Z"
              fill="#FFD28D"
              className="arro"
            />
            <path
              d="M51 29C51 32.283 50.3534 35.5339 49.097 38.5671C47.8406 41.6002 45.9991 44.3562 43.6777 46.6777C41.3562 48.9991 38.6002 50.8406 35.5671 52.097C32.5339 53.3534 29.283 54 26 54C22.717 54 19.4661 53.3534 16.4329 52.097C13.3998 50.8406 10.6438 48.9991 8.32233 46.6777C6.00086 44.3562 4.15938 41.6002 2.90301 38.5671C1.64664 35.5339 0.999998 32.283 0.999998 29"
              stroke="#FFD28D"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
