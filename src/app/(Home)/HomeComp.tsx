"use client";

import "aos/dist/aos.css";
import axios from "axios";
import { useEffect, useState } from "react";
import AboutContent from "./_components/AboutContent";
import Academic from "./_components/Academic";
import Faq from "./_components/Faq";
import FormContent from "./_components/FormContent";
import { HeroSection } from "./_components/HeroSection";
import LongContent from "./_components/LongContent";
import Rating from "./_components/Rating";
import Sample from "./_components/Sample";
import SmallDivider from "./_components/SmallDivider";
import TrustReview from "./_components/TrustReview";
import WhyUs from "./_components/WhyUs";
import WorkFlow from "./_components/WorkFlow";
import SkeletonComp from "../components/common/SkeletonComp";
import Loader from "../components/common/Loader";

const HomeComp = () => {
  const [heroSectionData, setHeroSectionData] = useState<any>();
  const [workFlowData, setWorkFlowData] = useState<any>();
  const [aboutContentData, setAboutContentData] = useState<any>();
  const [formContentData, setFormContentData] = useState<any>();
  const [longContent, setLongContent] = useState<any>();
  const [whyUsData, setWhyUsData] = useState<any>();
  const [faqData, setFaqData] = useState<any>();
  const [smallDividerData, setSmallDividerData] = useState<any>();
  const [trustReviewData, setTrustReviewData] = useState<any>();
  const [ratingData, setRatingData] = useState<any>();
  const [academicData, setAcademicData] = useState<any>();
  const [sampleData, setSampleData] = useState<any>();

  const fetchHomePageData = async () => {
    try {
      const response = await axios.get<any>("/api/fetch-homeData?page_id=1");
      console.log(response.data.data);
      if (response.data.data) {
        setHeroSectionData(response.data.data["1"]);
        setWorkFlowData(response.data.data["2"]);
        setAboutContentData(response.data.data["3"]);
        setFormContentData(response.data.data["4"]);
        setLongContent(response.data.data["5"]);
        setWhyUsData(response.data.data["6"]);
        setFaqData(response.data.data["7"]);
        setSmallDividerData(response.data.data["8"]);
        setTrustReviewData(response.data.data["9"]);
        setRatingData(response.data.data["10"]);
        setAcademicData(response.data.data["11"]);
        setSampleData(response.data.data["12"]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchHomePageData();
  }, []);

  return (
    <>
      {!heroSectionData ? (
        <Loader />
      ) : (
        <div>
          <HeroSection
            fetchHomePageData={fetchHomePageData}
            heroSectionData={heroSectionData}
            setHeroSectionData={setHeroSectionData}
            chatNowBtn={heroSectionData?.button_one}
            chatOnWhatsapp={heroSectionData?.button_two}
          />

          <WorkFlow
            workFlowData={workFlowData}
            setWorkFlowData={setWorkFlowData}
            chatNowBtn={heroSectionData?.button_one}
            chatOnWhatsapp={heroSectionData?.button_two}
          />
          <AboutContent aboutContentData={aboutContentData} />
          <FormContent
            formContentData={formContentData}
            chatNowBtn={heroSectionData?.button_one}
            chatOnWhatsapp={heroSectionData?.button_two}
          />
          <LongContent longContent={longContent} />
          <WhyUs whyUsData={whyUsData} />
          <Faq faqData={faqData} />
          <SmallDivider smallDividerData={smallDividerData} />
          <TrustReview trustReviewData={trustReviewData} />
          <Rating ratingData={ratingData} />
          <Academic academicData={academicData} />
          <Sample sampleData={sampleData} />
        </div>
      )}
    </>
  );
};

export default HomeComp;
