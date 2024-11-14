"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CtaButtons } from "./HeroSection";
import { useInView } from "react-intersection-observer";
import Aos from "aos";
import "aos/dist/aos.css";
import { WorkFlowModal } from "@/app/components/common/modals/WorkFlowModal";
import SkeletonComp from "@/app/components/common/SkeletonComp";

interface Props {
  workFlowData: any;
  chatNowBtn: string;
  chatOnWhatsapp: string;
  setWorkFlowData: any;
}

function WorkFlow({
  workFlowData,
  chatNowBtn,
  chatOnWhatsapp,
  setWorkFlowData,
}: Props) {
  const [activeTab, setActiveTab] = useState("1");

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prevTab) => {
        const nextTab: any = {
          "1": "2",
          "2": "3",
          "3": "1",
        };
        return nextTab[prevTab];
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

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
  {console.log("workFlowData ====>>>",workFlowData)}

  return (
    <div ref={ref} data-aos="zoom-in" className="mx-auto max-w-screen-xl mt-10">
      <WorkFlowModal
        workFlowData={workFlowData}
        setWorkFlowData={setWorkFlowData}
      />
     
       
          <h2 className="text-center text-xl md:text-4xl font-extrabold dark:text-zinc-100 text-violet-950 px-4">
            {" "}
            {workFlowData?.main_heading}
          </h2>
          <h3 className="text-center text-lg md:text-2xl mt-2 px-4 font-extrabold dark:text-zinc-100 text-violet-950">
            {workFlowData?.sub_heading}
          </h3>
          <div className="  mt-8">
            <Tabs
              defaultValue={activeTab}
              value={activeTab}
              onValueChange={setActiveTab}
            >
              <TabsList>
                <TabsTrigger value="1">1</TabsTrigger>
                <TabsTrigger value="2">2</TabsTrigger>
                <TabsTrigger value="3">3</TabsTrigger>
              </TabsList>

              <TabsContent value="1">
                <div className="grid lg:grid-cols-2 grid-cols-1 p-5">
                  <div className="">
                    <div className="flex justify-center items-center">
                      <Image
                        src={"/imgs/workflow.webp"}
                        loading="eager"
                        width={600}
                        height={400}
                        alt="workflow"
                      ></Image>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex justify-start items-center mt-5 lg:mt-20">
                      <h4 className="text-lg md:text-2xl font-bold dark:text-zinc-100 text-indigo-900 ">
                        {workFlowData?.tab_heading_one}
                      </h4>
                    </div>
                    <p className="mt-2 md:mt-4 md:text-xl text-sm font-medium dark:text-zinc-100 text-indigo-900">
                      {workFlowData?.tab_para_one}
                    </p>
                    <CtaButtons />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="2">
                <div className="grid lg:grid-cols-2 grid-cols-1 p-5">
                  <div className="">
                    <div className="flex justify-center items-center">
                      <Image
                        src={"/imgs/workflow_2.webp"}
                        loading="eager"
                        width={600}
                        height={400}
                        alt="workflow"
                      ></Image>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex justify-start items-center mt-5 lg:mt-20">
                      <h4 className="text-lg md:text-2xl font-bold dark:text-zinc-100 text-indigo-900 ">
                        {workFlowData?.tab_heading_two}
                      </h4>
                    </div>
                    <p className="mt-2 md:mt-4 md:text-xl text-sm font-medium dark:text-zinc-100 text-indigo-900">
                      {workFlowData?.tab_para_two}
                    </p>
                    <CtaButtons
                      chatNowBtn={chatNowBtn}
                      chatOnWhatsapp={chatOnWhatsapp}
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="3">
                <div className="grid lg:grid-cols-2 grid-cols-1 p-5">
                  <div className="">
                    <div className="flex justify-center items-center">
                      <Image
                        src={"/imgs/workflow_4.webp"}
                        loading="eager"
                        width={600}
                        height={400}
                        alt="workflow"
                      ></Image>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex justify-start items-center mt-5 lg:mt-20">
                      <h4 className="text-lg md:text-2xl font-bold dark:text-zinc-100 text-indigo-900 ">
                        {workFlowData?.tab_heading_three}
                      </h4>
                    </div>
                    <p className="mt-2 md:mt-4 md:text-xl text-sm font-medium dark:text-zinc-100 text-indigo-900">
                      {workFlowData?.tab_para_three}
                    </p>
                    <CtaButtons />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
    </div>
  )
}

export default WorkFlow;
