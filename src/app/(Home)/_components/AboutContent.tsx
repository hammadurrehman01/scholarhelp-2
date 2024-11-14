"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { CtaChat } from "./HeroSection";
import { useInView } from "react-intersection-observer";
import Aos from "aos";
import "aos/dist/aos.css";

interface Props {
  aboutContentData: any;
}

function AboutContent({ aboutContentData }: Props) {
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
    <div ref={ref} className="mx-auto max-w-screen-xl mt-5">
      <div className="h-[2px] w-full bg-zinc-800"></div>
      <div className="grid lg:grid-cols-2 grid-cols-1 p-5">
        <div className="" data-aos="flip-right">
          <div className="flex justify-center items-center  mt-5 lg:mt-20">
            <Image
              src={"/imgs/workflow_3.webp"}
              loading="eager"
              width={600}
              height={400}
              alt="workflow"
            ></Image>
          </div>
        </div>
        <div className="" data-aos="flip-left">
          <div className="flex justify-start items-center mt-5 lg:mt-20">
            <h2 className="text-xl md:text-3xl font-bold text-center dark:text-zinc-100 text-indigo-900 ">
              {aboutContentData?.heading}
            </h2>
          </div>
          <p className="mt-2 md:mt-4 md:text-base text-sm font-medium text-muted-foreground">
            {aboutContentData?.para}
          </p>
          <CtaChat aboutContentData={aboutContentData} />
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
