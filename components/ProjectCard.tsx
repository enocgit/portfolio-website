"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaEye } from "react-icons/fa";

type Props = {
  projectName: string;
  projectType: string;
  stack: "Fullstack" | "Front-End" | "Back-End";
  href: string;
  images: string[];
};

const ProjectCard = ({ projectName, projectType, stack, href, images }: Props) => {
  return (
    <div className={`min-w-80 shadow-lg`}>
      <Swiper
        loop
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3,
        }}
        navigation={{
          nextEl: ".custom-l-next",
          prevEl: ".custom-l-prev",
        }}
        modules={[Pagination, Navigation]}
        className="relative w-full rounded-t-lg mySwiper project-card h-80"
      >
        {/* Mapping through Projects */}
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={image}
                alt={projectName.toLowerCase()}
                fill={true}
                style={{ objectFit: "cover" }}
                // className="brightness-[0.8]"
              />
            </div>
          </SwiperSlide>
        ))}

        {/* Pagination bullets and button */}
        <div className="custom-l-prev absolute bottom-[45%] left-[5%] z-10 bg-white w-8 h-8 shrink-0 cursor-pointer flex items-center justify-center rounded-full">
          <FaChevronLeft className="text-sm text-neutral-700" />
        </div>
        <div className="w-full space-x-3 text-center custom-l-pagination bottom-40"></div>
        <div className="custom-l-next absolute bottom-[45%] right-[5%] z-10 bg-white w-8 h-8 shrink-0 cursor-pointer flex items-center justify-center rounded-full">
          <FaChevronRight className="text-sm text-neutral-700" />
        </div>
      </Swiper>
      {/* Card info */}
      <div className="w-full px-5 py-4 space-y-6 bg-secondary-200/5">
        <div className="flex justify-between">
          <div>
              <small className="text-neutral-400">{stack}</small>
              <p className="">{projectType}</p>
          </div>
          <Link href={href} target="_blank">
            <FaEye />
          </Link>
        </div>
      </div>
      {/* Card info */}
    </div>
  );
};

export default ProjectCard;
