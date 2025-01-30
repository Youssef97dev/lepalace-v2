import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import CommonHero from "../components/CommonHero/CommonHero";

import galleryitems from "../dataJson/gallery.json";

export default function GalleryShow() {
  const ClassOption = classNames(
    "row row-cols-1 row-cols-md-2  row-cols-xl-3 g-5"
  );
  return (
    <>
      <CommonHero title={"Gallery"} link={"/"} />
      <div className="container">
        <div className="ak-height-150 ak-height-lg-60"></div>
        <LightGallery
          speed={500}
          plugins={[lgThumbnail]}
          elementClassNames={ClassOption}
        >
          {galleryitems?.map((image, index) => (
            <Link to={image.thumbnail} key={index}>
              <div className="gallery-hover">
                <img className="h-100" src={image.src} alt={image.caption} />
              </div>
            </Link>
          ))}
        </LightGallery>
      </div>
    </>
  );
}
