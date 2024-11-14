"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { SwordsIcon } from "lucide-react";
import { useInView } from "react-intersection-observer";
import Aos from "aos";
import "aos/dist/aos.css";

interface Props {
  faqData: any;
}

const Faq = ({ faqData }: Props) => {
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

  const [openIndex, setOpenIndex] = useState(0); // Set the first question to be active by default
  const [sOpen, setIsOpen] = useState(false);

  const questions = [
    {
      question: faqData?.question_one,
      answer: faqData?.answer_one,
    },
    {
      question: faqData?.question_two,
      answer: faqData?.answer_two,
    },
    {
      question: faqData?.question_three,
      answer: faqData?.answer_three,
    },
    {
      question: faqData?.question_four,
      answer: faqData?.answer_four,
    },
    {
      question: faqData?.question_five,
      answer: faqData?.answer_five,
    },
    {
      question: faqData?.question_six,
      answer: faqData?.answer_six,
    },
    {
      question: faqData?.question_seven,
      answer: faqData?.answer_seven,
    },
    {
      question: faqData?.question_eight,
      answer: faqData?.answer_eight,
    },
  ];

  const toggleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div ref={ref} className="mx-auto max-w-screen-xl mt-10">
      <h2 className="text-center px-4 text-xl lg:text-4xl font-extrabold dark:text-zinc-100 text-indigo-950">
        {faqData?.main_heading}
      </h2>
      <h3 className="text-center px-4 text-lg  lg:text-3xl font-bold dark:text-zinc-100 text-indigo-950">
        {faqData?.sub_heading}
      </h3>

      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 p-5">
        <div data-aos="zoom-in-down" className="">
          <div className="flex items-center justify-center sm:pb-8 sticky top-0 ">
            <Image
              loading="eager"
              className="md:mt-20  rounded-2xl "
              src="/imgs/faq_section_1.webp"
              width={600}
              height={600}
              alt="about-faq-bg"
            />
          </div>
        </div>

        <div className="">
          {questions.map((item, index) => (
            <div data-aos="flip-down" className="md:pt-6 pt-8" key={index}>
              <h4
                className="cursor-pointer py-6 px-4  rounded-tr-[20px] rounded-tl-[20px] font-medium md:text-lg md:font-bold text-base  flex justify-between group bg-gradient-to-l from-sky-200 via-purple-200 to-zinc-300 text-zinc-800 transition ease-in duration-150 delay-100"
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
                <SwordsIcon className="md:text-base text-sm group-hover:rotate-180 group-hover:stroke-gray-700 transition ease-in duration-200 delay-100" />
              </h4>
              {openIndex === index && (
                <p className="py-4 px-4  rounded-br-[10px] rounded-bl-[10px] md:text-base text-sm bg-gradient-to-l from-sky-200 via-purple-200 to-zinc-300 text-zinc-800">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
