"use client";
import React, { ReactNode } from "react";
import Avatar from "./Avatar";
interface CardProps {
  children: ReactNode;
  className: string;
  title: string;
  position: string;
  src: string;
  name: string;
}
const Card = ({
  src,
  className,
  title,
  name,
  position,
  children,
}: CardProps) => {
  return (
    <div className="text-gray-500 flex flex-col gap-y-8">
      <img src={src} className="h-52 md:h-72 object-cover rounded-lg" />
      <div className="font-bold text-col text-xl md:text-2xl">{title}</div>

      <div className="md:text-base text-sm">
        Podcasting operational management inside of workflows to establish a
        framework seamless. Convergence collaboratively
      </div>
      <div>
        <div className="flex justify-between items-center">
          <Avatar name={name} desc={position} />
          <div>25 Apr</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
