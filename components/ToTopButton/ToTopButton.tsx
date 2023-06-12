"use client";

import React, { useEffect, useState } from "react";
import arrow from "@/assets/icons/icon-arrow.svg";
import Image from "next/image";
import { scrollToTop } from "@/utils/utils";

const ToTopButton = () => {
  const [userHasScrolled, setUserHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setUserHasScrolled(true);
      } else setUserHasScrolled(false);
    };

    document.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className={`w-[50px] h-[50px] bg-red-500 ${
        !userHasScrolled ? "opacity-0" : "opacity-100"
      } flex items-center justify-center fixed bottom-0 right-0 z-10`}
      onClick={scrollToTop}
    >
      <Image src={arrow} alt="" className="rotate-[270deg]" />
    </button>
  );
};

export default ToTopButton;
