"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { useInView } from "react-intersection-observer";
import Aos from "aos";
import "aos/dist/aos.css";

const Slide = ({ title, description, image, index, ref }: any) => (
  <div
    className="group mt-5"
    ref={ref}
    data-aos={index % 2 === 0 ? "flip-left" : "flip-right"}
  >
    <div className="relative md:scale-95 scale-90 group-hover:scale-95 md:group-hover:scale-100 group-hover:border-yellow-400 border-[5px] group-hover:bg-indigo-900 transition ease-in duration-200 delay-100 border-indigo-600 lg:h-[360px] w-full rounded-xl p-4 overflow-hidden">
      <div
        style={{
          backgroundImage: "url('/imgs/bg-why.webp')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          transition: "transform 0.5s ease-in-out",
        }}
        className="absolute inset-0 transform translate-y-full group-hover:translate-y-0"
      ></div>
      <div className="relative z-10">
        <div className="flex justify-between">
          <div className="bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-24 w-24 flex justify-center items-center">
            <Image
              className="group-hover:-rotate-45 transition ease-in duration-200 delay-100"
              src={image}
              width={64}
              height={64}
              alt="icon"
            />
          </div>
          <div className="font-extrabold text-4xl md:text-7xl opacity-10 group-hover:opacity-100 transition ease-in duration-200 delay-100 group-hover:text-yellow-400">
            {index.toString().padStart(2, "0")}
          </div>
        </div>
        <div className="group-hover:text-gray-200 text-base md:text-[20px] font-bold pt-4">
          {title}
        </div>
        <div className="pt-3 md:text-base text-sm font-medium group-hover:text-gray-200">
          {description}
        </div>
      </div>
    </div>
  </div>
);

interface Props {
  whyUsData: any;
}

const WhyUs = ({ whyUsData }: Props) => {
  const slideData = [
    {
      id: 1,
      title: whyUsData?.slider_head_one,
      description: whyUsData?.slider_para_one,
      image: "/imgs/elite.png",
    },
    {
      id: 2,
      title: whyUsData?.slider_head_two,
      description: whyUsData?.slider_para_two,
      image: "/imgs/result-1.png",
    },
    {
      id: 3,
      title: whyUsData?.slider_head_three,
      description: whyUsData?.slider_para_three,
      image: "/imgs/user-friendly.png",
    },
    {
      id: 4,
      title: whyUsData?.slider_head_four,
      description: whyUsData?.slider_para_four,
      image: "/imgs/live-chat.png",
    },
    {
      id: 5,
      title: whyUsData?.slider_head_five,
      description: whyUsData?.slider_para_five,
      image: "/imgs/competitive.png",
    },
    {
      id: 6,
      title: whyUsData?.slider_head_six,
      description: whyUsData?.slider_para_six,
      image: "/imgs/on-time.png",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    Aos.init({
      duration: 800,
      disable: "mobile",
      offset: 100,
    });
  }, [inView]);
  return (
    <div ref={ref} className="mx-auto max-w-screen-xl mt-10 p-3 lg:p-6">
      <h2 className="text-center text-xl md:text-4xl font-bold dark:text-zinc-100 text-violet-950">
        {" "}
        Why Choose US{" "}
      </h2>
      <Swiper
        loop={true}
        spaceBetween={20}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        breakpoints={{
          325: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <Slide {...slide} index={slide.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WhyUs;
