// import "aos/dist/aos.css";
import { Metadata } from "next";
import HomeComp from "./HomeComp";

export const metadata: Metadata = {
  title: " Take My Online Class for me",
  description:
    "Pay Someone to Taking My Classes Online for Me in USA! Having a dedicated team who can assist you in every single step for online class takers and A+ Grade Guaranteed!",
};

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL!}/api/fetch-homeData?page_id=1`,
    { cache: "no-store" }
  );
  const homeData = await response.json();

  return (
    <HomeComp
      heroSectionData={homeData.data["1"]}
      workFlowData={homeData.data["2"]}
      aboutContentData={homeData.data["3"]}
      formContentData={homeData.data["4"]}
      longContent={homeData.data["5"]}
      whyUsData={homeData.data["6"]}
      faqData={homeData.data["7"]}
      smallDividerData={homeData.data["8"]}
      trustReviewData={homeData.data["9"]}
      ratingData={homeData.data["10"]}
      academicData={homeData.data["11"]}
      sampleData={homeData.data["12"]}
    />
  );
};

export default Page;
