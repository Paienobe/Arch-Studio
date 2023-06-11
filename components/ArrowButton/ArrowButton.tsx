import React from "react";
import arrow from "../../assets/icons/icon-arrow.svg";
import Image from "next/image";

type Props = {
  text: string;
  full?: boolean;
};

const ArrowButton = ({ text, full }: Props) => {
  return (
    <div
      className={`bg-black ${
        full ? "w-full" : "w-fit"
      } p-4 flex items-center justify-center gap-4`}
    >
      <p className="text-white">{text}</p>
      <Image src={arrow} alt="" />
    </div>
  );
};

export default ArrowButton;
