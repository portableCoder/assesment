import React from "react";
import Button from "../components/Button";
const logos = ["gitlab", "slackwhite", "netflix", "paypalwhite"];
const Hero = () => {
  return (
    <section className="min-h-screen  text-white w-full py-8 flex-col justify-between flex items-center relative px-4 md:px-16 bg-primary">
      <div className="flex flex-col-reverse md:flex-row   w-full ">
        <div className="w-full">
          <div className="flex md:w-1/2  flex-col gap-y-4 md:gap-y-8 my-2 md:my-16">
            <div className="text-3xl md:text-5xl font-bold flex gap-y-2 flex-col">
              <div className="whitespace-nowrap">Your Supercharged </div>
              <div>Design Workflow.</div>
            </div>
            <div
              style={{
                color: "#B1CCFB",
              }}
              className="md:text-lg whitespace-pre-wrap "
            >
              We’ve been told it is not possible to overachieve our customers’
              expectations. We have not reinvented the wheel, we decided to
              build upon it.
            </div>
          </div>
          <Button className="w-full md:w-auto bg-primary-2 rounded-md">
            Get Started
          </Button>
          <div className=" my-8 md:my-16">
            <div className="col-span-2 md:col-span-4">Who supports us</div>
            <div className="w-full text-5xl gap-4 items-center  grid md:flex md:gap-x-6 grid-cols-2 md:grid-cols-4 my-4 md:my-12">
              {logos.map((icon, i) => (
                <div
                  className="flex items-center justify-center md:items-start md:justify-normal"
                  key={i}
                >
                  <img src={`/${icon}.svg`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            zIndex: 9999,
          }}
          className="relative z-50"
        >
          <div className="z-50 w-full h-full ">
            <img
              src="/p3.png"
              className="object-contain transform scale-90 md:scale-125 w-full h-full"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
