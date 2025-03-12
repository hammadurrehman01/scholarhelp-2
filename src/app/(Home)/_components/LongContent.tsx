"use client";
import Aos from "aos";
import "aos/dist/aos.css";
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
    <div className="px-7">
      <h1>{longContent.heading_one}</h1>
      <span
      dangerouslySetInnerHTML={{
        __html: longContent.richTextContent,
      }}
    />
    </div>
  );
}

export default LongContent;