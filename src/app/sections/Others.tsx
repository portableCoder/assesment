"use client";
import React from "react";
import Avatar from "../components/Avatar";
import ImageCard from "../components/ImageCard";
import SectionHeading from "../components/SectionHeading";
import Logo from "../designs/Logo";
import useIsMobile from "../hooks/useIsMobile";
import getPersonImage from "../util/getPersonImage";
const title = "Organize your digital assets with a new methodology here.";
const posts = [
  { title, name: "Andrew Miller", position: "CEO" },
  { title, name: "David Munsan", position: "UX" },
  { title, name: "Andrew Meller", position: "UI" },
];
const Others = () => {
  const isMobile = useIsMobile();
  return (
    <section
      className="px-4 md:px-16 min-h-screen
      flex flex-col gap-y-8 
      py-8
      "
    >
      {isMobile && (
        <SectionHeading
          title="What Our Customers Say"
          subtitle="Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win strategies to ensure domination."
        />
      )}
      <div className="md:p-10 my-8   w-full p-2 flex flex-col gap-y-4 md:gap-y-8 md:items-center md:justify-center bg-gray-100 text-col">
        <div>
          <Logo fill="black" />
        </div>
        <div className="md:text-center text-lg md:text-2xl w-full md:w-3/4 font-bold md:font-medium">
          Thank you for making it painless, pleasant and most of all hassle
          free! I love LookScout. I can't say enough about LookScout. Great job,
          I will definitely be ordering again!
        </div>
        <Avatar name="Lisa Smith" desc="CEO" />
      </div>
      <SectionHeading
        title="Latest Blog Posts"
        subtitle="Completely synergize resource taxing relationships via premier niche markets. Professionally  cultivate one-to-one customer service with robust ideas. "
      />
      <div className="grid grid-cols-1 md:grid-cols-3  gap-12 md:gap-4">
        {posts.map((el, i) => (
          <ImageCard {...el} className="" src={getPersonImage()} key={i}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat,
            unbus, aliquam odit voluptate consectetur saepe magnam animi.
          </ImageCard>
        ))}
      </div>
    </section>
  );
};

export default Others;
