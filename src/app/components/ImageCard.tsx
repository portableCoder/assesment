import React from "react";
interface CardProps {
  body: any;
  className: string;
}
const Card = ({ body, className }: CardProps) => {
  return (
    <div className="bg-white border border-gray-300 flex flex-col">
      <img className="object-cover rounded-t-lg"></img>
      <div className="p-2">{body}</div>
    </div>
  );
};

export default Card;
