"use client";
import React, { useEffect } from "react";
import { CtaButtons } from "./HeroSection";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useInView } from "react-intersection-observer";
import Aos from "aos";
import "aos/dist/aos.css";

interface Props {
  formContentData: any;
  chatNowBtn: string;
  chatOnWhatsapp: string;
}

function FormContent({ formContentData, chatNowBtn, chatOnWhatsapp }: Props) {
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
    <div ref={ref} className="mx-auto max-w-screen-xl mt-10">
      <div className="h-[2px] w-full bg-zinc-800"></div>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 p-5 mt-5">
        <div className="">
          <div data-aos="flip-down" className="md:pt-6 pt-8 ">
            <Accordion type="single" defaultValue="item-1" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h2 className="cursor-pointer text-left py-2 rounded rounded-tr-[20px] rounded-tl-[20px]  md:text-xl font-bold flex justify-between group  ">
                    {formContentData?.accordion_head_one}
                  </h2>
                </AccordionTrigger>
                <AccordionContent>
                  <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                    {formContentData?.accordion_para_one}
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <h2 className="cursor-pointer py-2 rounded rounded-tr-[20px] rounded-tl-[20px]  md:text-xl font-bold flex justify-between group  ">
                    {formContentData?.accordion_head_two}
                  </h2>
                </AccordionTrigger>
                <AccordionContent>
                  <p className=" py-4 rounded  rounded-br-[10px] rounded-bl-[10px] text-sm md:text-base  ">
                    {formContentData?.accordion_para_two}
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <CtaButtons chatNowBtn={chatNowBtn} chatOnWhatsapp={chatOnWhatsapp} />
        </div>

        <div data-aos="zoom-in-down" className="">
          <div className="flex items-center justify-center mt-5">
            <Image
              loading="eager"
              src={"/imgs/form-content-img.webp"}
              width={500}
              height={333}
              alt="content-img"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormContent;
