import React from "react";
import LocationConatiner from "../components/LocationCardItem/LocationConatiner";
import CommonHero from "../components/CommonHero/CommonHero";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import BookingSystem from "../components/BookingSystem/BookingSystem";
import GoogleMap from "../components/GoogleMap/GoogleMap";
import BookingSystemTwo from "../components/BookingSystem/BookingSystemTwo";

export default function Reservations() {
  return (
    <>
      <CommonHero title={"Reservation"} link={"/"} />
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className="container-fluid">
        <div className="ak-booking-system-map-from">
          <div className="booking-system-map">
            <GoogleMap addressLink="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424.66826472685796!2d-8.00419925410103!3d31.624372409153633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafeef591e81187%3A0x5370e8aa4b3c1515!2sLe%20Palace!5e0!3m2!1sfr!2sma!4v1738231405513!5m2!1sfr!2sma" />
            <div className="booking-system-map-second">
              <div className="booking-system-heading">
                <SectionTitle
                  title={"Reservations"}
                  subTitle={"Reservations"}
                  animTwo={true}
                />
                <div className="ak-height-60 ak-height-lg-30"></div>
                <BookingSystem />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ak-height-150 ak-height-lg-60"></div>
    </>
  );
}
