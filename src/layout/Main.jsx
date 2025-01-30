import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Scrollup from "../components/ScrollUp/Scrollup";
import { scrollUpBtn } from "../helper/main";
import { Analytics } from "@vercel/analytics/react";

export default function Main() {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollUpBtn();
  }, [pathname]);
  return (
    <>
      <Header />
      <Outlet />
      {pathname == "/error-pages" || pathname == "/comming-soon" ? (
        " "
      ) : (
        <Footer />
      )}
      <Scrollup />
      <Analytics />
    </>
  );
}
