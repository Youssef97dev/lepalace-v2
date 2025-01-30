import React from "react";
import HeroSilder from "../components/Silders/HeroSilder";
import OpeningHoursInfo from "../components/OpenIngHour/OpeningHoursInfo";
import BestItem from "../components/BestItem/BestItem";
import Reservation from "../components/Reservation/Reservation";
import Videos from "../components/VideoPopUp/Videos";
import AboutContent from "../components/AboutContent/AboutContent";

export default function HomeTwo() {
  return (
    <div>
      <HeroSilder />
      <AboutContent />
      <OpeningHoursInfo typeTwo={true} />
      <BestItem />
      {/*<Reservation /> */}
      {/*<Videos
        videoId={
          "https://res.cloudinary.com/dz7wroord/video/upload/v1738228842/palace/n8tcpml0xo5zyw45kfwa.mp4"
        }
      /> */}
    </div>
  );
}
