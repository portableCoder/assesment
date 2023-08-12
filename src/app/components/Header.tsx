"use client";
import React from "react";
import Logo from "../designs/Logo";
import useIsMobile from "../hooks/useIsMobile";

const menu = ["Home", "Our Products", "Resources", "Contacts"];
const Header = () => {
  const isMobile = useIsMobile();
  return (
    <div
      style={{
        zIndex: 99999,
      }}
      className="w-full text-white font-semibold sticky top-0 left-0  p-2 md:px-16 z-50 bg-blue-600 border-blue-500  border-b-2"
    >
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-x-16">
          <div className="">
            <Logo />
          </div>
          {!isMobile && (
            <div className="flex gap-x-6 text-white text-lg">
              {menu.map((el, i) => (
                <button key={i}>{el}</button>
              ))}
            </div>
          )}
        </div>
        {!isMobile && (
          <div className="flex gap-x-4 items-center">
            Log in
            <button className="p-4 bg-primary-2 rounded-md">Sign Up</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
