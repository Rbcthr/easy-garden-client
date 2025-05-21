import React from "react";
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
import TopTrendingTips from "./TopTrendingTips";

const Home = () => {
  return (
    <div>
      {/* slider */}
      <div>
        <Swiper
          // install Swiper modules
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            EffectFade,
            Autoplay,
          ]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          effect={"fade"}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="h-[calc(100vh-65px)]"
        >
          <SwiperSlide className="relative">
            <img
              src={bannerFirst}
              className="w-full h-full object-cover"
              alt=""
            />
            {/* text content */}
            <div className="absolute z-10 inset-0 flex items-center">
              <div className="text-white px-5 md:px-16 space-y-5">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  Tree is our friend
                </h1>
                <p>
                  Gardening can be considered both as an art, concerned with{" "}
                  <br />
                  arranging plants harmoniously in their surroundings, and as a{" "}
                  <br />
                  science, encompassing the principles and techniques of plant{" "}
                  <br />
                  cultivation.
                </p>
                <button className="btn btn-success text-white">
                  Learn More
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              src={bannerSecond}
              className="w-full h-full object-cover"
              alt=""
            />
            {/* text content */}
            <div className="absolute z-10 inset-0 flex items-center">
              <div className="text-white px-5 md:px-16 space-y-5">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  The nature of gardening
                </h1>
                <p>
                  Gardening in its ornamental sense needs a certain level of
                  civilization before <br /> it can flourish. Wherever that
                  level has been attained, in all parts of <br />
                  the world and at all periods, people have made efforts to
                  shape their <br />
                  environment into an attractive display.
                </p>
                <button className="btn btn-success text-white">
                  Learn More
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              src={bannerThird}
              className="w-full h-full object-cover"
              alt=""
            />
            {/* text content */}
            <div className="absolute z-10 inset-0 flex items-center">
              <div className="text-white px-5 md:px-16 space-y-5">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  The varied appeal of gardening
                </h1>
                <p>
                  The attractions of gardening are many and various and, to a
                  degree perhaps <br /> unique among the arts and crafts, may be
                  experienced by any age group and at <br /> all levels of
                  ambition. At its most elemental, but not least valuable,{" "}
                  <br /> the gardening experience
                </p>
                <button className="btn btn-success text-white">
                  Learn More
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              src={bannerFourth}
              className="w-full h-full object-cover"
              alt=""
            />
            {/* text content */}
            <div className="absolute z-10 inset-0 flex items-center">
              <div className="text-white px-5 md:px-16 space-y-5">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  Control and cooperation
                </h1>
                <p>
                  Large areas of gardening development and mastery have <br />
                  concentrated on persuading plants to achieve what they would{" "}
                  <br />
                  not have done if left in the wild and therefore “natural”{" "}
                  <br />
                  state.
                </p>
                <button className="btn btn-success text-white">
                  Learn More
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-11/12 mx-auto my-16 h-screen">
        <TopTrendingTips></TopTrendingTips>
      </div>
    </div>
  );
};

export default Home;
