import React from "react";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import { BsCheck } from "react-icons/bs";
const logos = ["verge", "slack", "google", "paypal", "mailchimp"];
const Callout = () => {
  return (
    <div className="w-full  ">
      <div className="px-4 py-8 md:px-16 flex flex-col gap-y-16 md:gap-y-8">
        <div>
          <SectionHeading
            title="Proud to Be Used By"
            subtitle="Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service."
          />
          <div className="flex md:px-16 my-12 md:flex-row flex-col gap-y-8 items-center justify-between flex-wrap w-full ">
            {logos.map((el) => (
              <div>
                <img src={`/${el}.svg`} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-alt2 ">
        <div className="flex flex-col gap-y-8 items-center justify-center md:px-16 px-4 py-8">
          <div className="text-col-btn uppercase text-primary-btn font-bold">
            1% of the industry
          </div>
          <div className="text-center font-bold text-2xl w-full md:text-3xl  md:w-2/4">
            {" "}
            Welcome to your new digital reality that will rock your world truly
            at all throughout.
          </div>
          <div className="w-full md:w-auto flex flex-col gap-y-4">
            <div className="flex md:flex-row flex-col gap-y-4 w-full px-4">
              <input
                placeholder="Enter your mail"
                className="w-full p-4 text-gray-600 rounded-md md:rounded-r-none md:rounded-l-md bg-white focus:outline-none border-2 border-gray-300 "
              />
              <Button className="bg-primary-btn rounded-md md:rounded-l-none rounded-r-md text-white font-bold">
                Submit
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 font-semibold text-sm px-8">
              {["Fully secure", "24/7 Support", "Done Deal"].map((el) => (
                <div className="flex items-center gap-x-3">
                  <div className="w-6 h-6 justify-center  text-white rounded-full flex items-center bg-primary-btn">
                    <BsCheck />
                  </div>
                  <div>{el}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Callout;
