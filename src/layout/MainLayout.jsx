import React from "react";
import NavBar from "../component/NavBar";
import { Outlet } from "react-router";
import Footer from "../component/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  A11y,
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import "swiper/css/effect-fade";

import bannerFirst from "../assets/banner 1.jpg";
import bannerSecond from "../assets/banner 2.jpg";
import bannerThird from "../assets/banner 3.jpg";
import bannerFourth from "../assets/banner 4.jpg";

const MainLayout = () => {
  return (
    <div>
      <header>
        {/* nav bar */}
        <div className=" bg-base-100 shadow-sm">
          <NavBar></NavBar>
        </div>

      </header>

      <main>
        <div className="min-h-screen">
          <Outlet></Outlet>
        </div>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
