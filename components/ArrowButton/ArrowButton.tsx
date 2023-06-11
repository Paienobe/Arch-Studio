import React from "react";
import arrow from "../../assets/icons/icon-arrow.svg";
import Image from "next/image";

type Props = {
  text: string;
};

const ArrowButton = ({ text }: Props) => {
  return (
    <div className="bg-[#1c1d22] w-fit p-4 flex items-center gap-4">
      <p>{text}</p>
      <Image src={arrow} alt="" />
    </div>
  );
};

export default ArrowButton;
