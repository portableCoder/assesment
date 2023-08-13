import React from "react";
import getPersonImage from "../util/getPersonImage";
interface AvatarProps {
  name: string;
  desc: string;
}
const Avatar = ({ name, desc }: AvatarProps) => {
  return (
    <div className="flex gap-x-2">
      <img
        className="w-8 h-8 md:w-16 md:h-16 rounded-full object-cover"
        src={getPersonImage()}
      />
      <div className="flex flex-col md:text-base text-sm">
        <div className="font-bold text-col">{name}</div>
        <div>{desc}</div>
      </div>
    </div>
  );
};

export default Avatar;
