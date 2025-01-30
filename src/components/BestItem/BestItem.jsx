import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import ImgesOverlay from "../ImgesOverlay/ImgesOverlay";

const bestItem = {
  title: "Bar",
  textWhite: "Our",
  imgOne: "/assets/img/bestItem/bestItem1-1.jpg",
  imgTwo: "/assets/img/bestItem//bestItem2-2.jpg",
  details:
    " The bar also offers a prestigious selection of French wines and rare spirits, perfect to accompany conversation or extend a festive evening. Whether you're looking for a sophisticated aperitif or an after-dinner drink, the Palace bar promises a unique experience, just like the place itself.",
};

export default function BestItem() {
  const { imgOne, imgTwo, details, title } = bestItem;
  return (
    <section>
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className="container">
        <div className="ak-best-item">
          <div className="best-item-section-1">
            <SectionTitle title={title} textWhite={"Our"} />
            <div className="ak-height-30 ak-height-lg-30"></div>
            <p>{details}</p>
            <div className="ak-height-50 ak-height-lg-30"></div>
            <div className="img-one">
              <ImgesOverlay image={imgTwo} />
            </div>
          </div>
          <div className="best-item-section-2" data-speed="1.1" data-lag="1">
            <img src="/assets/img/icon/star_line.svg" alt="..." />
          </div>
          <div className="best-item-section-3">
            <div className="img-two">
              <ImgesOverlay image={imgOne} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
