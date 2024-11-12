"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { CtaButtons } from "./HeroSection";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import Aos from "aos";
import "aos/dist/aos.css";

const ServiceCard = ({
  imageSrc,
  title,
  description,
  link,
  animation,
}: any) => {
  return (
    <div data-aos={animation} className="group p-4">
      <div
        className="flex flex-col items-center border-[5px] border-transparent
       bg-gradient-to-t from-violet-400 to-indigo-400 dark:bg-gradient-to-b dark:from-indigo-800 dark:via-zinc-800 dark:to-violet-800 md:h-[370px] w-full rounded-lg px-4 py-5 md:scale-100 scale-90 group-hover:scale-95 md:group-hover:scale-105 group-hover:border-y-yellow-400  group-hover:shadow-xl transition-transform duration-200 ease-in"
      >
        <div className="flex items-center justify-center bg-yellow-400 rounded-full h-24 w-24">
          <Image src={imageSrc} width={60} height={60} alt={title} />
        </div>
        <div className="flex flex-col mt-4">
          <h3 className="text-base sm:text-lg text-white font-semibold">
            {title}
          </h3>
          <div className="text-zinc-200 font-medium lg:text-base text-xs ">
            {description}
          </div>
          <Link href={link}>
            <div className="rounded-lg px-4 py-2 text-center font-medium bg-amber-400  text-zinc-800 hover:bg-white hover:scale-105 transition ease-in duration-200 delay-200 border-black mt-2">
              Explore More
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

interface Props {
  academicData: any;
}

function Academic({ academicData }: Props) {

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

  const services = [
    {
      imageSrc: "/imgs/webinar.png",
      title: academicData.service_heading_one,
      description: academicData.service_para_one,
      link: "take-my-ged-for-me",
      animation: "flip-left",
    },
    {
      imageSrc: "/imgs/online-exam.png",
      title: academicData.service_heading_two,
      description: academicData.service_para_two,
      link: "/take-my-gre-exam",
      animation: "flip-right",
    },
    {
      imageSrc: "/imgs/online-homework.png",
      title: academicData.service_heading_three,
      description: academicData.service_para_three,
      link: "/take-gmat-online-exam",
      animation: "flip-left",
    },
    {
      imageSrc: "/imgs/essay.png",
      title: academicData.service_heading_four,
      description: academicData.service_para_four,
      link: "/lsat-exam-prep",
      animation: "flip-right",
    },
  ];

  return (
    <div ref={ref} className="mx-auto max-w-screen-xl mt-10">
      <h2 className="text-2xl md:text-5xl text-center dark:text-zinc-100 text-violet-950 font-extrabold">
        {academicData.main_heading}
      </h2>
      <h3 className="py-3 px-4 text-xl md:text-3xl text-center dark:text-zinc-100 text-violet-950 font-bold">
        {academicData.sub_heading}
      </h3>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-5 lg:mt-10 mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      <div className="flex justify-center mt-4 items-center">
        <CtaButtons />
      </div>
    </div>
  );
}

export default Academic;
