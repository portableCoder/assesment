"use client";
import React from "react";
import Card from "../components/Card";
import SectionHeading from "../components/SectionHeading";
import useIsMobile from "../hooks/useIsMobile";
const desc =
  "Engage audience segments and finally create actionable insights. Amplify vertical integration.";
const datArr = [
  {
    title: "Easier Work Organization",
    desc: "Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas. ",
  },
  {
    title: "Streamlined Processes",
    desc: "Objectively innovate empowered scalable manufactured products whereas parallel platforms predominate extensible.",
  },
  {
    title: "Marketing Analytics",
    desc: "Phosfluorescently engage worldwide methodologies with web-enabled  Interactively coordinate",
  },
  {
    title: "Fast Connection",
    desc: "Completely pursue scalable customer cross- media through potentialities. Holistically quickly installed portals. With possible possibilities exchanging ",
  },
  {
    title: "Workflow Builder",
    desc: "Collaboratively administrate turnkey service channels whereas virtual e-tailers. This  is objectively scalable metrics whereas.",
  },
  {
    title: "Easier Integrations",
    desc: "Completely pursue scalable customer try through potentialities. Pontificate portals installed. Efficiently unleash information. More possibilities exchange.",
  },
  {
    title: "Explore ideas together",
    desc,
  },
  {
    title: "Bring those ideas to life",
    desc,
  },
  { title: "Ship better outcomes", desc },
];
const Products = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <div className="w-full min-h-screen p-4 my-12 px-4 md:px-16 flex gap-y-8 flex-col">
        <SectionHeading
          title="Messaging for all"
          subtitle="User generated content in real-time will have multiple touchpoints for offshoring."
        />
        <div className="grid gap-4 gap-y-16 grid-cols-1 md:grid-cols-3">
          {datArr.slice(0, 6).map((el, i) => (
            <Card
              invert={false}
              dir="col"
              key={i}
              title={el.title}
              src={`/assessment/m${i + 1}.svg`}
              body={el.desc}
            />
          ))}
        </div>
      </div>
      <div className="w-full min-h-screen flex flex-col gap-y-16 px-4 md:px-16 py-8">
        <div className="  flex flex-col gap-y-8 items-center justify-center">
          <div className="text-xl md:text-3xl font-bold text-center"></div>

          <div className="text-gray-500 text-center text-sm"></div>
        </div>
        <SectionHeading
          title="Redefining Product Features"
          subtitle="Keeping your eye on the ball while performing a deep dive on the
            start-up mentality to derive convergence on cross-platform
            integration"
        />
        <div className="flex md:flex-row flex-col-reverse gap-y-8 gap-x-2   items-center">
          <div className="flex w-full flex-col gap-y-8">
            {datArr.slice(6).map((el, i) => (
              <Card
                src={`/assessment/m${6 + (i + 1)}.svg`}
                invert={false}
                title={el.title}
                dir="row"
                key={i}
                body={el.desc}
              />
            ))}
          </div>
          <div className="text-7xl w-full flex items-center justify-center">
            <img
              alt="product_img"
              className="object-cover"
              width={"70%"}
              src={isMobile ? "/assessment/p1.png" : "/assessment/p2.png"}
            />
          </div>
        </div>
      </div>
      <div className="items-center w-full min-h-screen p-4  md:p-16 gap-x-8 flex flex-col md:flex-row bg-alt text-white">
        <div className="w-full px-8 mx-auto flex items-center justify-center py-8">
          <img
            width={"70%"}
            alt="product_img"
            className="object-cover"
            src="/assessment/p1.png"
          />
        </div>
        <div className="flex flex-col gap-y-8 ">
          {datArr.slice(6).map((el, i) => (
            <Card
              src={`/assessment/m${6 + (i + 1)}.svg`}
              invert={true}
              title={el.title}
              dir="row"
              key={i}
              body={el.desc}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
