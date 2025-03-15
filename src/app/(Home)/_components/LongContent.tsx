"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  longContent: any;
}
function LongContent({ longContent }: Props) {
  const [showMore, setShowMore] = useState(false);
  const [content, setContent] = useState("");
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
    // <div className="px-7">
    //   <h1>{longContent.heading_one}</h1>
    //   <span
    //   dangerouslySetInnerHTML={{
    //     __html: longContent.richTextContent,
    //   }}
    // />
    // </div>
    <div ref={ref} data-aos="fade-up">
      <div className="mx-auto max-w-screen-xl mt-10">
        <div className="h-[2px] w-full bg-zinc-800"></div>
        <div className="p-5">
          <h2 className="font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950   ">
            {longContent?.heading_one}
          </h2>
          <span
            dangerouslySetInnerHTML={{ __html: longContent?.richTextContent }}
            className="font-medium text-muted-foreground md:text-base text-sm pt-4 "
          />
        </div>
      </div>
    </div>
  );
}

export default LongContent;
