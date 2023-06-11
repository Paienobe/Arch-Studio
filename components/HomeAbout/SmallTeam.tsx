import React from "react";
import smallTeam from "@/assets/home/mobile/image-small-team.jpg";
import Image from "next/image";
import ArrowButton from "../ArrowButton/ArrowButton";

const SmallTeam = () => {
  return (
    <section className="relative">
      <Image src={smallTeam} className="w-full" alt="" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-6">
        <h2 className="text-3xl font-bold text-white pb-4">
          Small team, big ideas
        </h2>
        <ArrowButton text="About Us" />
      </div>
    </section>
  );
};

export default SmallTeam;
