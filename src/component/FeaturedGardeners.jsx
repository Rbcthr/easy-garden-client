import React, { use } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const gardenersPromise = fetch("https://assignment-10-server-nu-murex.vercel.app/featured-gardeners").then(
  (res) => res.json()
);

const FeaturedGardeners = () => {
  const gardeners = use(gardenersPromise);
  // console.log(gardeners);

  return (
    <div className="space-y-5">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
        Featured Gardeners ({gardeners.length}):
      </h1>

      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 1000,
          reverseDirection: true,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        centeredSlides={true}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper mx-auto"
      >
        {gardeners.map((gardener) => (
          <SwiperSlide key={gardener._id}>
            <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
              <img
                src={gardener.image}
                alt=""
                className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
              />
              <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                <div className="my-2 space-y-1">
                  <h2 className="text-xl font-semibold sm:text-2xl">
                    Name: {gardener.name}
                  </h2>
                  <p className="px-5 text-xs sm:text-base dark:text-gray-600 ">
                    Status:{" "}
                    <span className="badge badge-success text-white">
                      {gardener.status}
                    </span>
                  </p>
                </div>
                <div className="flex flex-wrap justify-center pt-2 space-x-4 align-center">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="GitHub"
                    className="p-2 rounded-md dark:text-gray-800 hover:text-green-500"
                  >
                    <FaFacebook size={25}></FaFacebook>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Dribble"
                    className="p-2 rounded-md dark:text-gray-800 hover:text-green-500"
                  >
                    <FaInstagram size={25}></FaInstagram>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Twitter"
                    className="p-2 rounded-md dark:text-gray-800 hover:text-green-500"
                  >
                    <FaTwitter size={25}></FaTwitter>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Email"
                    className="p-2 rounded-md dark:text-gray-800 hover:text-green-500"
                  >
                    <FaYoutube size={25}></FaYoutube>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedGardeners;
