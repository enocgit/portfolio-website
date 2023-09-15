"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import skills from "@/content/skills/skills";
import Image from "next/image";

const SkillsSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 2
        }}
        centeredSlides
        loop
        freeMode
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="w-full h-full mySwiper skills-slider"
      >
        {skills.map((city) => {
          const { id, icon, image, name, percentageNum } = city;
          return (
            <SwiperSlide key={id} className="">
              <div
                key={id}
                className="flex flex-col items-center gap-y-2 text-neutral-800"
              >
                {icon ? (
                  icon
                ) : (
                  <Image
                    src={`svg/${image}`}
                    alt={name.toLowerCase()}
                    height={40}
                    width={40}
                  />
                )}

                <h3 className="text-sm">{name}</h3>
                <h3 className="font-semibold" title="proficiency level">
                  {percentageNum}%
                </h3>
              </div>
            </SwiperSlide>
          );
        })}

      </Swiper>
      {/* Pagination bullets and button */}
      {/* <div className="relative z-20 bottom-[-2rem] w-11/12 mx-auto flex items-center justify-center">
        <div className="inline-flex items-center justify-between w-full gap-5">
          <div className="grid w-12 h-12 rounded-full custom-prev-btn bg-accent-50 shrink-0 place-items-center md:w-16 md:h-16">
            <FaChevronLeft className="text-white" />
          </div>
          <div className="w-full space-x-3 text-center custom-pagination-cities"></div>
          <div className="grid w-12 h-12 rounded-full custom-next-btn bg-accent-50 shrink-0 place-items-center md:w-16 md:h-16">
            <FaChevronRight className="text-white" />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default SkillsSlider;
