import React, { useLayoutEffect, useRef } from "react";
import { ButtonCommon } from "../Button/Button";
import SectionTitle from "../SectionTitle/SectionTitle";
import { borderAnimation, imageZoomInOut } from "../../helper/main";

const about_content = {
  title: "Royalty",
  textWhite: "Exquisite Dining Experience Fit for",
  imgOne:
    "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/wtz23atwpmijqnitialo",
  subtext:
    "Every dish, from the most classic to the most daring, is designed to delight the palate. A selection of prestigious French wines and creative cocktails complete this unique culinary experience, where tradition and modernity blend elegantly to sublimate every mouthful.",
  details:
    "Le Palace Marrakech is a symphony of refined flavors, where French gastronomy meets international and Moroccan influences. The chefs, true artists, orchestrate a rich and varied menu: signature langoustine and foie gras ravioli, carefully selected steaks, and fish sublimated by inventive accompaniments.",
};

const { title, textWhite, imgOne, subtext, details } = about_content;

export default function AboutContent() {
  const imageContainer = useRef(null);
  const imageZoomIn = useRef(null);
  const borderAbout = useRef(null);

  useLayoutEffect(() => {
    imageZoomInOut(imageContainer.current, imageZoomIn.current);
    borderAnimation(borderAbout.current, 2, 13);
  }, []);

  return (
    <section id="about" className="ak-about-bg-color" ref={imageContainer}>
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className="ak-about ak-style-1">
        <div className="ak-about-bg-img ak-bg">
          <img src={imgOne} alt="..." ref={imageZoomIn} />
        </div>
        <div className="ak-about-hr" ref={borderAbout}></div>
        <div className="container">
          <div className="about-section ak-about-1">
            <div className="about-text-section">
              <SectionTitle title={title} textWhite={textWhite} />

              <div className="ak-height-30 ak-height-lg-30"></div>
              <p className="about-subtext">{details}</p>
              <div className="ak-height-30 ak-height-lg-30"></div>
              <p className="about-subtext">{subtext}</p>
              <div className="ak-height-50 ak-height-lg-30"></div>
              <ButtonCommon to={"#"}>Discover The Menu</ButtonCommon>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
