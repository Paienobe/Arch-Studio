import React from "react";
import arrow from "../../assets/icons/icon-arrow.svg";
import Image from "next/image";

type Props = {
  text: string;
};

const ArrowButton = ({ text }: Props) => {
  return (
    <div className="bg-black w-fit p-4 flex items-center gap-4">
      <p className="text-white">{text}</p>
      <Image src={arrow} alt="" />
    </div>
  );
};

export default ArrowButton;
