"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Aos from "aos";
import "aos/dist/aos.css";

const ReviewCard = ({ name, text }: { name: string; text: string }) => (
  <div className="group">
    <div className="w-full bg-muted/50  rounded-xl border-[2px] scale-95 group-hover:scale-100 group-hover:shadow-xl transition ease-in duration-200 delay-200 ">
      <div className="flex items-center p-2 mt-3">
        <div className="flex items-center bg-white rounded-full w-12 h-12 overflow-hidden">
          <Image
            className="object-cover blur-sm"
            src={"/imgs/tp-rating-1.png"}
            alt="rating"
            width={44}
            height={64}
          />
        </div>
        <div className="flex-col ml-4">
          <div className="text-[16px] font-bold">{name}</div>
          <div>
            <Image
              src={"/imgs/tp-rating.png"}
              width={130}
              height={60}
              alt="rating"
            ></Image>
          </div>
        </div>
      </div>
      <div className="p-2 font-medium text-sm">{text}</div>
      <div className="border-b-2 border-muted translate-y-2 w-full"></div>
      <div className="flex items-center p-2 mt-3">
        <div className="flex items-center bg-white rounded-full w-12 h-12 overflow-hidden">
          <Image
            className="object-cover"
            src={"/imgs/taking-logo-2.png"}
            alt="rating"
            width={44}
            height={64}
          />
        </div>
        <div className="flex-col ml-4">
          <div className="text-[16px] font-bold">
            {process.env.NEXT_PUBLIC_WEBSITE_NAME}
          </div>
          <Link href={"/"}>
            <div className="text-gray-500 font-medium text-sm hover:underline hover:text-blue-500">
              {process.env.NEXT_PUBLIC_WEBSITE_NAME}.com
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

interface Props {
  trustReviewData: any;
}

const TrustReview = ({ trustReviewData }: Props) => {
  const reviews = [
    {
      name: trustReviewData.review_heading_one,
      text: trustReviewData.review_para_one,
    },
    {
      name: trustReviewData.review_heading_two,
      text: trustReviewData.review_para_two,
    },
    {
      name: trustReviewData.review_heading_three,
      text: trustReviewData.review_para_three,
    },
    {
      name: trustReviewData.review_heading_four,
      text: trustReviewData.review_para_four,
    },
    {
      name: trustReviewData.review_heading_five,
      text: trustReviewData.review_para_five,
    },
    {
      name: trustReviewData.review_heading_six,
      text: trustReviewData.review_para_six,
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
    <div
      ref={ref}
      className="mx-auto max-w-screen-xl p-4 md:p-0 mt-10"
      data-aos="zoom-in"
    >
      <h2 className="font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 text-center">
        What Our Satisfied Customers Say About Us
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 p-5">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            name={review.name}
            text={review.text}
          />
        ))}
      </div>

      <div className="flex justify-center items-center">
        <div className="py-3 px-5 bg-gradient-to-r from-violet-600 to bg-indigo-600 text-zinc-100 hover:scale-105 transition ease-in duration-200 delay-200 rounded-lg shadow-xl">
          <Link href="/reviews">More Reviews </Link>
        </div>
      </div>
    </div>
  );
};

export default TrustReview;
