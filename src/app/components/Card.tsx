import React from "react";
import { BsPencil } from "react-icons/bs";
const Card = ({ title, body, icon, dir }: any) => {
  return (
    <div className="flex flex-col gap-y-2 md:gap-y-4">
      <div
        className={`flex gap-y-2 md:gap-y-4 ${
          dir === "col" ? "flex-col" : "flex-row gap-x-2 items-center"
        }`}
      >
        <div className="flex bg-primary text-white items-center justify-center w-16 h-16 rounded-full">
          {<BsPencil />}
        </div>
        <div className="text-2xl font-bold">{title}</div>
      </div>
      <div className="text-gray-400">{body}</div>
      <a href="example.com" className="text-blue-500">
        Learn more {"->"}{" "}
      </a>
    </div>
  );
};

export default Card;
