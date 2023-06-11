import { welcomeSectionParagraphs } from "@/constants/constants";
import React from "react";
import uuid from "react-uuid";

const WelcomeSection = () => {
  return (
    <section className="p-6 py-[4rem] bg-white">
      <h2 className="text-3xl font-bold pb-5">Welcome to Arch Studio</h2>
      {welcomeSectionParagraphs.map((item) => {
        return (
          <p key={uuid()} className="text-[#535456] pb-4">
            {item}
          </p>
        );
      })}
    </section>
  );
};

export default WelcomeSection;
