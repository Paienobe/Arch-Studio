import React from "react";
import heroImage1 from "@/assets/home/mobile/image-hero-paramour.jpg";
import Image from "next/image";
import { heroData } from "./heroData";
import uuid from "react-uuid";
import ArrowButton from "../ArrowButton/ArrowButton";

const Hero = () => {
  return (
    <section className="w-full h-[calc(100vh-85.1px)] relative">
      <Image
        src={heroImage1}
        className="w-[100%] h-[calc(100vh-85.1px)] block"
        alt=""
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 text-white">
        <div className="h-[88%] flex flex-col items-center justify-center">
          <div className="w-[80%] mx-auto p-4">
            <h1 className="text-5xl font-bold mb-4">{heroData[0].title}</h1>
            <p className="text-[20px] mb-4">{heroData[0].description}</p>
            <ArrowButton text="See Our Portfolio" />
          </div>
        </div>
        <div className="h-[12%] bg-white w-[80%] flex items-stretch">
          {heroData.map((item, index) => {
            const isNotLastItem = index < heroData.length - 1;
            return (
              <div
                key={uuid()}
                className={`text-[#1c1d22] w-1/4 flex items-center justify-center ${
                  isNotLastItem
                    ? "border border-transparent border-r-[#7d828f] border-opacity-30"
                    : ""
                }`}
              >
                <p className="font-semibold text-[20px] text-[#535456]">
                  0{index + 1}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
