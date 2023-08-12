import React, { HTMLProps } from "react";

const Button = (props: { children: any; className?: string }) => {
  return (
    <button
      className={`p-4 bg-primary-2 rounded-md ${
        props.className && props.className
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
