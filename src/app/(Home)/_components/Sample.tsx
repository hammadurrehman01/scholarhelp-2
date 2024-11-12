"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Star } from "lucide-react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import Aos from "aos";
import "aos/dist/aos.css";

const SlideContent = ({
  imageSrc,
  title,
  subject,
  pages,
  level,
  docType,
  link,
  animation,
}: any) => (
  <div className="group mt-5" data-aos={animation}>
    <div
      className="relative  md:scale-95 scale-90 group-hover:-translate-y-5 group-hover:border-yellow-400 border-[5px] bg-gradient-to-t from-violet-400 to-indigo-400
       dark:bg-gradient-to-b dark:from-indigo-800 dark:via-zinc-800 dark:to-violet-800 transition ease-in duration-200 delay-100 border-indigo-600 lg:h-[450px] w-full rounded-xl p-4 overflow-hidden"
    >
      <div className="relative z-10">
        <div className="flex items-center">
          <div className="bg-slate-300 group-hover:bg-zinc-300 transition ease-in duration-200 delay-100 border rounded-full h-20 w-20 flex justify-center items-center">
            <Image
              loading="eager"
              src={imageSrc}
              width={50}
              height={50}
              alt="result"
            />
          </div>
          <div className="text-white font-extrabold text-lg lg:text-xl ml-5 transition ease-in duration-200 delay-100 group-hover:text-yellow-400">
            {title}
          </div>
        </div>
        <div className="text-gray-200 text-sm md:text-xl font-medium pt-2">
          Subject: {subject}
        </div>
        <div className="text-gray-200 text-sm md:text-xl font-medium pt-2">
          Number Of Pages: {pages}
        </div>
        <div className="text-gray-200 text-sm md:text-xl font-medium pt-2">
          Academic Level: {level}
        </div>
        <div className="text-gray-200 text-sm md:text-xl font-medium pt-2">
          Document Type: {docType}
        </div>
        <div className="flex justify-center items-center mt-5">
          <Link
            href={link}
            className="bg-amber-400 text-center w-full py-4 rounded-lg font-medium text-sm scale-90 md:scale-100 md:text-lg text-zinc-800 hover:bg-white hover:-translate-y-3 transition ease-in duration-200 delay-200 border-[3px] border-black"
          >
            View Sample
          </Link>
        </div>
        <div className="flex items-center justify-center mt-5">
          <div className="md:text-lg font-medium text-white">Rating</div>
          <div className="flex items-center ml-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="stroke-yellow-400 fill-yellow-400" />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

interface Props {
  sampleData: any;
}

const Sample = ({ sampleData }: Props) => {
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

  const slides = [
    {
      imageSrc: "/imgs/pdf.png",
      title: sampleData.slide_title_one,
      subject: sampleData.slide_subject_one,
      pages: sampleData.slide_nop_one,
      level: sampleData.slide_al_one,
      docType: sampleData.slide_dt_one,
      link: "/gmat-sample-papers",
      animation: "flip-up",
    },
    {
      imageSrc: "/imgs/pdf.png",
      title: sampleData.slide_title_two,
      subject: sampleData.slide_subject_two,
      pages: sampleData.slide_nop_two,
      level: sampleData.slide_al_two,
      docType: sampleData.slide_dt_two,
      link: "/lsat-sample-papers",
      animation: "flip-down",
    },
    {
      imageSrc: "/imgs/pdf.png",
      title: sampleData.slide_title_three,
      subject: sampleData.slide_subject_three,
      pages: sampleData.slide_nop_three,
      level: sampleData.slide_al_three,
      docType: sampleData.slide_dt_three,
      link: "/gre-sample-papers",
      animation: "flip-up",
    },
    {
      imageSrc: "/imgs/pdf.png",
      title: sampleData.slide_title_four,
      subject: sampleData.slide_subject_four,
      pages: sampleData.slide_nop_four,
      
      level: sampleData.slide_al_four,
      docType: sampleData.slide_dt_four,
      link: "/ged-sample-papers",
      animation: "flip-down",
    },
  ];

  return (
    <div className="mt-10">
      <div
        ref={ref}
        data-aos="zoom-in-up"
        className="py-56 "
        style={{
          backgroundImage: "url('/imgs/sample_bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-screen-xl">
          <h2 className="md:-translate-y-10 -translate-y-3 text-xl md:text-5xl text-center font-extrabold text-gray-100">
            {" "}
            {sampleData.main_heading}
          </h2>
          <p className="text-center font-medium px-10 xl:px-52 md:text-lg text-sm text-gray-100">
            {sampleData.sub_heading}
          </p>

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
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <SlideContent {...slide} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Sample;
