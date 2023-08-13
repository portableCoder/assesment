"use client";
import React, { ReactNode } from "react";
import { BsArrowBarRight, BsArrowRight, BsPencil } from "react-icons/bs";
interface CardProps {
  title: string;
  body: ReactNode;
  dir: "row" | "col";
  src: string;
  invert: boolean;
}
const Card = ({ invert, title, body, dir, src }: CardProps) => {
  return (
    <div className={`flex flex-col gap-4 `}>
      <div
        className={`flex gap-x-2 ${dir == "row" ? "flex-row " : "flex-col"}`}
      >
        <div className="flex my-4  bg-primary shrink-0 text-white items-center justify-center w-16  h-16 rounded-full">
          <img src={src} className="w-8 h-8 object-cover" />
        </div>

        <div className="flex flex-col gap-y-4 md:gap-y-8  my-4 md:my-8">
          <div
            className={`font-bold text-2xl ${
              invert ? "text-white" : "text-col"
            }`}
          >
            {title}
          </div>
          <div className={`${invert ? "text-gray-400" : "text-gray-600"}`}>
            {body}
          </div>
          <a
            href="example.com"
            className="text-blue-500 flex items-center gap-x-1"
          >
            Learn more{" "}
            <span>
              <BsArrowRight />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
