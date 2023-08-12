import React from "react";
import Card from "../components/Card";
const datArr = new Array(6).fill({
  title: "My lorem ipsum text",
  desc: `
Lorem ipsum dolor, sit amet consectetur adipisicing ero quasixplicabo et cupiditate laboriosam dignissimos, facere laborum ipsam voluptatem iure ea similique! Quae distinctio illum eligendi ut, tempore dolorem expedita, eius saepe sed excepturi aliquam.

              `,
});

const Products = () => {
  return (
    <>
      <div className="w-full min-h-screen p-4 my-12 px-4 md:px-16 flex gap-y-8 flex-col">
        <div className="w-full flex flex-col gap-y-8 items-center justify-center">
          <div className="text-xl md:text-3xl font-bold">Messaging for all</div>

          <div className="text-gray-500 text-center text-sm">
            User generated content in real-time will have multiple touchpoints
            for offshoring.
          </div>
        </div>
        <div className="grid gap-4 gap-y-16 grid-cols-1 md:grid-cols-3">
          {datArr.map((el, i) => (
            <Card dir="col" key={i} title={el.title} body={el.desc} />
          ))}
        </div>
      </div>
      <div className="w-full min-h-screen flex flex-col gap-y-16 px-4 md:px-16 py-8">
        <div className="  flex flex-col gap-y-8 items-center justify-center">
          <div className="text-xl md:text-3xl font-bold text-center">
            Redefining Product Features
          </div>

          <div className="text-gray-500 text-center text-sm">
            Keeping your eye on the ball while performing a deep dive on the
            start-up mentality to derive convergence on cross-platform
            integration.
          </div>
        </div>
        <div className="flex md:flex-row flex-col-reverse gap-y-8 gap-x-2   items-center">
          <div className="flex w-full flex-col gap-y-8">
            {datArr.slice(0, 3).map((el, i) => (
              <Card title={el.title} dir="row" key={i} body={el.desc} />
            ))}
          </div>
          <div className="text-7xl w-full flex items-center justify-center">
            <img
              alt="product_img"
              className="object-cover"
              width={"70%"}
              src="/p2.png"
            />
          </div>
        </div>
      </div>
      <div className="items-center w-full min-h-screen p-16 grid grid-cols-2 bg-alt text-white">
        <div className="text-7xl">
          <img
            alt="product_img"
            className="object-cover"
            width={"70%"}
            src="/p1.png"
          />
        </div>
        <div className="flex flex-col gap-y-8 py-32">
          {datArr.slice(0, 3).map((el, i) => (
            <Card title={el.title} dir="row" key={i} body={el.desc} />
          ))}
        </div>
      </div>

      <div className="w-full min-h-screen p-4 my-12 px-4 md:px-16 flex gap-y-8 flex-col">
        <div className="w-full flex flex-col gap-y-8 items-center justify-center">
          <div className="text-xl md:text-3xl font-bold">Messaging for all</div>

          <div className="text-gray-500 text-center text-sm">
            User generated content in real-time will have multiple touchpoints
            for offshoring.
          </div>
        </div>
        <div className="grid gap-4 gap-y-16 grid-cols-1 md:grid-cols-3">
          {datArr.map((el, i) => (
            <Card dir="col" key={i} title={el.title} body={el.desc} />
          ))}
        </div>
      </div>
      <div className="w-full min-h-screen flex flex-col gap-y-16 px-4 md:px-16 py-8">
        <div className="  flex flex-col gap-y-8 items-center justify-center">
          <div className="text-xl md:text-3xl font-bold text-center">
            Redefining Product Features
          </div>

          <div className="text-gray-500 text-center text-sm">
            Keeping your eye on the ball while performing a deep dive on the
            start-up mentality to derive convergence on cross-platform
            integration.
          </div>
        </div>
        <div className="flex md:flex-row flex-col-reverse gap-y-8 gap-x-2   items-center">
          <div className="flex w-full flex-col gap-y-8">
            {datArr.slice(0, 3).map((el, i) => (
              <Card title={el.title} dir="row" key={i} body={el.desc} />
            ))}
          </div>
          <div className="text-7xl w-full flex items-center justify-center">
            <img
              alt="product_img"
              className="object-cover"
              width={"70%"}
              src="/p2.png"
            />
          </div>
        </div>
      </div>
      <div className="items-center w-full min-h-screen p-16 grid grid-cols-2 bg-alt text-white">
        <div className="text-7xl">
          <img
            alt="product_img"
            className="object-cover"
            width={"70%"}
            src="/p1.png"
          />
        </div>
        <div className="flex flex-col gap-y-8 py-32">
          {datArr.slice(0, 3).map((el, i) => (
            <Card title={el.title} dir="row" key={i} body={el.desc} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
