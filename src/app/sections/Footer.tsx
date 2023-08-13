import React from "react";
import { SiApple, SiFacebook, SiGoogle, SiInstagram } from "react-icons/si";
import Logo from "../designs/Logo";
import Button from "../components/Button";
const logos = [SiFacebook, SiGoogle, SiApple, SiInstagram];
const menu = [
  "Community",
  "Events",
  "Help Center",
  "Partners",
  "Integrations",
  "Solutions",
  "Features",
  "Enterprise",
];
const Footer = () => {
  return (
    <div className="bg-alt text-gray-400 py-8 px-4 md:px-16 w-full flex flex-col gap-y-8 justify-between">
      <div className="md:flex grid grid-cols-2  gap-y-4 md:flex-row md:justify-between">
        <div className="flex col-span-2 flex-col gap-y-8 w-full">
          <div>
            <Logo fill="white" />
          </div>
          <div className="w-3/4">
            Generate outside the box thinking with the possibility to targtet
            the low.
          </div>
        </div>
        <div className="flex flex-col gap-y-4 md:gap-y-8  w-full">
          <div className="text-white">Resources</div>
          <div className="flex flex-col gap-y-4">
            {menu.slice(0, 4).map((el) => (
              <a href={`/${el}`}>{el}</a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-8 w-full">
          <div className="text-white">Products</div>
          <div className="flex flex-col gap-y-4">
            {menu.slice(4).map((el) => (
              <a href={el}>{el}</a>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col gap-y-4 md:gap-y-8 col-span-2">
          <div className="text-white">Get Email Notifications</div>
          <div className="flex flex-col gap-y-2">
            <div>
              Generate outside the box thinking with the possibility to targtet
              the low
            </div>
            <div className="flex ">
              <input
                placeholder="Enter email..."
                className="w-full bg-gray-700 p-4 rounded-md rounded-r-none"
              ></input>
              <Button className="bg-primary rounded-r-md text-white">
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 md:flex-row md:justify-between tet">
        <div className="text-md">© 2023 Lookscout. All Rights Reserved.</div>
        <div className="flex px-4 justify-between items-center md:justify-normal md:gap-x-4 text-2xl text-white">
          {logos.map((Icon) => (
            <div>
              <Icon />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
