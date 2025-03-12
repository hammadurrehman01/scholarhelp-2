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
