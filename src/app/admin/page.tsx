"use client";

import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import AuthenticatedRoute from "@/middlewares/AuthenticatedRoute ";
import { Separator } from "@radix-ui/react-dropdown-menu";
import axios from "axios";
import { useEffect, useState } from "react";
import { HeroSectionModal } from "../components/common/modals/HeroSectionModal";
import { WorkFlowModal } from "../components/common/modals/WorkFlowModal";
import { AboutContentModal } from "../components/common/modals/AboutContentModal";
import { FormContentModal } from "../components/common/modals/FormContentModal";
import { LongContentModal } from "../components/common/modals/LongContentModal";
import { WhyUsModal } from "../components/common/modals/WhyUsModal";
import { FaqModal } from "../components/common/modals/FaqModal";
import { SmallDividerModal } from "../components/common/modals/SmallDividerModal";
import { TrustReviewModal } from "../components/common/modals/TrustReviewModal";
import { RatingModal } from "../components/common/modals/RatingModal";
import { AcademicModal } from "../components/common/modals/AcademicModal";
import { SampleModal } from "../components/common/modals/SampleModal";

export default function Page() {
  const [heroSectionData, setHeroSectionData] = useState<any>();
  const [workFlowData, setWorkFlowData] = useState<any>();
  const [aboutContentData, setAboutContentData] = useState<any>();
  const [formContentData, setFormContentData] = useState<any>();
  const [longContentData, setLongContentData] = useState<any>();
  const [whyUsData, setWhyUsData] = useState<any>();
  const [faqData, setFaqData] = useState<any>();
  const [smallDividerData, setSmallDividerData] = useState<any>();
  const [trustReviewData, setTrustReviewData] = useState<any>();
  const [ratingData, setRatingData] = useState<any>();
  const [academicData, setAcademicData] = useState<any>();
  const [sampleData, setSampleData] = useState<any>();
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const authToken = localStorage.getItem("adminToken");
    if (authToken) {
      setToken(authToken);
    }
  }, []);

  const fetchHomePageData = async () => {
    try {
      const response = await axios.get<any>("/api/fetch-homeData?page_id=1");
      console.log(response.data.data);
      if (response.data.data) {
        setHeroSectionData(response.data.data["1"]);
        setWorkFlowData(response.data.data["2"]);
        setAboutContentData(response.data.data["3"]);
        setFormContentData(response.data.data["4"]);
        setLongContentData(response.data.data["5"]);
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
    <AuthenticatedRoute>
      <SidebarProvider>
        <AppSidebar className="mt-24 h-[550px]" />
        <SidebarInset>
          <header className="flex m-24 h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Admin Panel</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          {/* Hero section */}
          <>
            {!heroSectionData && heroSectionData?.length === 0 ? (
              <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
              </div>
            ) : (
              <div className="px-12 font-bold text-xl pb-6">
                Hero Section
                <div className="border border-white-1 p-6 rounded-lg mt-3">
                  <HeroSectionModal
                    heroSectionData={heroSectionData}
                    setHeroSectionData={setHeroSectionData}
                    token={token}
                  />
                </div>
              </div>
            )}
          </>
          {/* Workflow section */}
          <>
            {!workFlowData && workFlowData?.length === 0 ? (
              <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
              </div>
            ) : (
              <div className="px-12 font-bold text-xl pb-6">
                WorkFlow
                <div className="border border-white-1 p-6 rounded-lg mt-3">
                  <WorkFlowModal
                    workFlowData={workFlowData}
                    setWorkFlowData={setWorkFlowData}
                    token={token}
                  />
                </div>
              </div>
            )}
          </>
          {/* AboutContent section */}
          <>
            {!aboutContentData && aboutContentData?.length === 0 ? (
              <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
              </div>
            ) : (
              <div className="px-12 font-bold text-xl pb-6">
                AboutContent
                <div className="border border-white-1 p-6 rounded-lg mt-3">
                  <AboutContentModal
                    aboutContentData={aboutContentData}
                    setAboutContentData={setAboutContentData}
                    token={token}
                  />
                </div>
              </div>
            )}
          </>
          {/* FormContent section */}
          <>
            {!formContentData && formContentData?.length === 0 ? (
              <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
              </div>
            ) : (
              <div className="px-12 font-bold text-xl pb-6">
                FormContent
                <div className="border border-white-1 p-6 rounded-lg mt-3">
                  <FormContentModal
                    formContentData={formContentData}
                    setFormContentData={setFormContentData}
                    token={token}
                  />
                </div>
              </div>
            )}
          </>
          <>
            {!longContentData && longContentData?.length === 0 ? (
              <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
              </div>
            ) : (
              <div className="px-12 font-bold text-xl pb-6">
                LongContent
                <div className="border border-white-1 p-6 rounded-lg mt-3">
                  <LongContentModal
                    longContentData={longContentData}
                    setLongContentData={setLongContentData}
                    token={token}
                  />
                </div>
              </div>
            )}
          </>
          <>
            {!whyUsData && whyUsData?.length === 0 ? (
              <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
              </div>
            ) : (
              <div className="px-12 font-bold text-xl pb-6">
                Why Choose Us
                <div className="border border-white-1 p-6 rounded-lg mt-3">
                  <WhyUsModal
                    whyUsData={whyUsData}
                    setWhyUsData={setWhyUsData}
                    token={token}
                  />
                </div>
              </div>
            )}
          </>
          <>
            {!faqData && faqData?.length === 0 ? (
              <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
              </div>
            ) : (
              <div className="px-12 font-bold text-xl pb-6">
                Frequently Asked Questions
                <div className="border border-white-1 p-6 rounded-lg mt-3">
                  <FaqModal
                    faqData={faqData}
                    setFaqData={setFaqData}
                    token={token}
                  />
                </div>
              </div>
            )}
          </>
          <>
            {!smallDividerData && smallDividerData?.length === 0 ? (
              <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
              </div>
            ) : (
              <div className="px-12 font-bold text-xl pb-6">
                Small Divider
                <div className="border border-white-1 p-6 rounded-lg mt-3">
                  <SmallDividerModal
                    smallDividerData={smallDividerData}
                    setSmallDividerData={setSmallDividerData}
                    token={token}
                  />
                </div>
              </div>
            )}
          </>
          <>
            {!trustReviewData && trustReviewData?.length === 0 ? (
              <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
              </div>
            ) : (
              <div className="px-12 font-bold text-xl pb-6">
                Trust Review
                <div className="border border-white-1 p-6 rounded-lg mt-3">
                  <TrustReviewModal
                    trustReviewData={trustReviewData}
                    setTrustReviewData={setTrustReviewData}
                    token={token}
                  />
                </div>
              </div>
            )}
          </>
          <>
            {!ratingData && ratingData?.length === 0 ? (
              <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
              </div>
            ) : (
              <div className="px-12 font-bold text-xl pb-6">
                Ratings
                <div className="border border-white-1 p-6 rounded-lg mt-3">
                  <RatingModal
                    ratingData={ratingData}
                    setRatingData={setRatingData}
                    token={token}
                  />
                </div>
              </div>
            )}
          </>
          <>
            {!academicData && academicData?.length === 0 ? (
              <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
              </div>
            ) : (
              <div className="px-12 font-bold text-xl pb-6">
                Academic
                <div className="border border-white-1 p-6 rounded-lg mt-3">
                  <AcademicModal
                    academicData={academicData}
                    setAcademicData={setAcademicData}
                    token={token}
                  />
                </div>
              </div>
            )}
          </>
          <>
            {!sampleData && sampleData?.length === 0 ? (
              <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
              </div>
            ) : (
              <div className="px-12 font-bold text-xl pb-6">
                Sample
                <div className="border border-white-1 p-6 rounded-lg mt-3">
                  <SampleModal
                    sampleData={sampleData}
                    setSampleData={setSampleData}
                    token={token}
                  />
                </div>
              </div>
            )}
          </>
        </SidebarInset>
      </SidebarProvider>
    </AuthenticatedRoute>
  );
}
