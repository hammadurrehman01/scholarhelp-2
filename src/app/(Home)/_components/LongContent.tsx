"use client";
import { ArrowRightIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import Divider from "./Divider";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import Aos from "aos";
import "aos/dist/aos.css";

interface Props {
  longContent: any;
}
function LongContent({ longContent }: Props) {
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
  const [showMore, setShowMore] = useState(false);

  const handleButtonClick = () => {
    if (showMore) {
      // Scroll to the top of the page
      window.scrollTo({ top: 2700, behavior: "smooth" });
    }
    setShowMore(!showMore);
  };

  return (
    <>
      <div ref={ref} data-aos="fade-up">
        <div className="mx-auto max-w-screen-xl mt-10">
          <div className="h-[2px] w-full bg-zinc-800"></div>
          <div className="p-5">
            <h2 className="font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950   ">
              {longContent.heading_one}
            </h2>
            <p className="font-medium text-muted-foreground md:text-base text-sm pt-4 ">
              {longContent.para_one_pt_one}
              <Link
                href={"/pay-someone-to-take-my-class"}
                className=" text-blue-500 hover:underline underline-offset-2 transition ease-in duration-150 delay-150"
              >
                {" "}
                {longContent.para_one_link}
              </Link>{" "}
              {longContent.para_one_pt_two}
            </p>

            <h2 className="font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 mt-3">
              {longContent.heading_two}
            </h2>
            <p className="font-medium text-muted-foreground md:text-base text-sm pt-4 ">
              {longContent.para_two}
            </p>

            {showMore && <DynamicContent1 longContent={longContent} />}
          </div>

          {showMore && <DynamicContent2 longContent={longContent} />}
        </div>

        <div className="flex justify-center items-center mt-3">
          <button
            className="px-5 py-2 rounded-xl bg-violet-500 font-medium text-zinc-100"
            onClick={handleButtonClick}
          >
            {showMore ? "Read less" : "Read More"}
          </button>
        </div>
      </div>
    </>
  );
}

export default LongContent;

interface DynamicContent1Props {
  longContent: any;
}
function DynamicContent1({ longContent }: DynamicContent1Props) {
  return (
    <>
      <div>
        <h2 className="font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 mt-3">
          {longContent.heading_three}
        </h2>
        <p className="font-medium text-muted-foreground md:text-base text-sm pt-4 ">
          {longContent.para_three_pt_one}
          <Link
            href={"/take-my-exam"}
            className=" text-blue-500 hover:underline underline-offset-2 transition ease-in duration-150 delay-150"
          >
            {longContent.para_three_link}
          </Link>{" "}
          {longContent.para_three_pt_two}
        </p>

        <div className="flex items-center mt-3 ">
          <ArrowRightIcon />
          <p className="ml-2 text-sm md:text-base text-muted-foreground">
            {longContent.list_one}
          </p>
        </div>
        <div className="flex items-center mt-3 ">
          <ArrowRightIcon />
          <p className="ml-2 text-sm md:text-base text-muted-foreground">
            {longContent.list_two}
          </p>
        </div>
        <div className="flex items-center mt-3 ">
          <ArrowRightIcon />
          <p className="ml-2 text-sm md:text-base text-muted-foreground">
            {longContent.list_three}
          </p>
        </div>
        <div className="flex items-center mt-3 ">
          <ArrowRightIcon />
          <p className="ml-2 text-sm md:text-base text-muted-foreground">
            {longContent.list_four}
          </p>
        </div>
        <div className="flex items-center mt-3 ">
          <ArrowRightIcon />
          <p className="ml-2 text-sm md:text-base text-muted-foreground">
            {longContent.list_five}
          </p>
        </div>
        <div className="flex items-center mt-3 ">
          <ArrowRightIcon />
          <p className="ml-2 text-sm md:text-base text-muted-foreground">
            {longContent.list_six}
          </p>
        </div>
        <div className="flex items-center mt-3 ">
          <ArrowRightIcon />
          <p className="ml-2 text-sm md:text-base text-muted-foreground">
            {longContent.list_seven}
          </p>
        </div>
        <div className="flex items-center mt-3 ">
          <ArrowRightIcon />
          <p className="ml-2 text-sm md:text-base text-muted-foreground">
            {longContent.list_eight}
          </p>
        </div>
      </div>
      <Divider longContent={longContent} />
    </>
  );
}

interface DynamicContent2Props {
  longContent: any;
}
function DynamicContent2({ longContent }: DynamicContent2Props) {
  return (
    <>
      <div className="mx-auto max-w-screen-xl mt-5">
        <div className="p-5">
          <h2 className="font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 mt-3">
            {longContent.heading_four}
          </h2>

          <p className="font-medium text-muted-foreground md:text-base text-sm pt-4">
            {longContent.para_four}
          </p>

          <h2 className="font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 mt-3">
            {longContent.heading_five}
          </h2>

          <p className="font-medium text-muted-foreground md:text-base text-sm pt-4">
            {longContent.para_five_pt_one}
            <Link
              href={"/take-gmat-online-exam"}
              className=" text-blue-500 hover:underline underline-offset-2 transition ease-in duration-150 delay-150"
            >
              {" "}
              {longContent.para_five_link}
            </Link>
            {longContent.para_five_pt_two}
          </p>

          <h2 className="font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 mt-3">
            {longContent.heading_six}
          </h2>

          <p className="font-medium text-muted-foreground md:text-base text-sm pt-4">
            {longContent.para_six}
          </p>

          <h2 className="font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 mt-3">
            {longContent.heading_seven}
          </h2>

          <p className="font-medium text-muted-foreground md:text-base text-sm pt-4">
            {longContent.para_seven}
          </p>

          <h3 className="font-bold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3">
            {longContent.heading_eight}
          </h3>
          <p className="font-medium text-muted-foreground md:text-base text-sm pt-4">
            {longContent.para_eight_pt_one}
            <Link
              href={"/take-my-gre-exam"}
              className=" text-blue-500 hover:underline underline-offset-2 transition ease-in duration-150 delay-150"
            >
              {longContent.para_eight_link}
            </Link>{" "}
            {longContent.para_eight_pt_two}
          </p>

          <h3 className="font-bold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3">
            {longContent.heading_nine}
          </h3>
          <p className="font-medium text-muted-foreground md:text-base text-sm pt-4">
            {longContent.para_nine}
          </p>

          <h3 className="font-bold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3">
            {longContent.heading_ten}
          </h3>

          <p className="font-medium text-muted-foreground md:text-base text-sm pt-4">
            {longContent.para_ten}
          </p>

          <h3 className="font-bold text-lg md:text-3xl dark:text-zinc-100 text-indigo-950 mt-3">
            {longContent.heading_eleven}
          </h3>

          <p className="font-medium text-muted-foreground md:text-base text-sm pt-4">
            {longContent.para_eleven}
          </p>

          <h2 className="font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 mt-3">
            {longContent.heading_twelve}
          </h2>

          <p className="font-medium text-muted-foreground md:text-base text-sm pt-4">
            {longContent.para_twelve}
          </p>
        </div>
      </div>
    </>
  );
}
