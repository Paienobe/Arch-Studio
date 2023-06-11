import React from "react";
import { featuredItems } from "./featuredData";
import Image from "next/image";
import ArrowButton from "../ArrowButton/ArrowButton";

const Featured = () => {
  return (
    <section className="p-6 bg-white pb-[8rem]">
      <h2 className="text-3xl font-bold text-center py-8">Featured</h2>
      <div className="flex flex-col gap-6 mb-4">
        {featuredItems.map((item, index) => {
          return (
            <div className="relative">
              <Image src={item.image} alt="" className="w-full" />
              <div className="absolute inset-0 bg-black bg-opacity-30 text-white p-4 flex justify-between">
                <div className="mt-[50%]">
                  <p className="font-semibold text-xl">{item.name}</p>
                  <p>View All Projects</p>
                </div>
                <p className="text-[10rem] opacity-40">{index + 1}</p>
              </div>
            </div>
          );
        })}
      </div>
      <ArrowButton text="See All" full />
    </section>
  );
};

export default Featured;
