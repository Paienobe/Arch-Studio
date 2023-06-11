import React from "react";
import uuid from "react-uuid";
import logo from "../../assets/logo - white.svg";
import Image from "next/image";
import ArrowButton from "../ArrowButton/ArrowButton";
import { menuOptions } from "@/constants/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#eeeff4] p-6 flex items-center justify-center flex-col relative">
      <div className="bg-black p-4 w-[120px] h-[120px] mx-auto flex items-center justify-center absolute top-[-16%]">
        <Link href={"/"}>
          <Image src={logo} alt="" />
        </Link>
      </div>

      <div className="p-4 flex flex-col gap-4 mt-[2.5rem]">
        {menuOptions.map((option) => {
          return (
            <Link key={uuid()} href={option.route}>
              <p className="font-bold">{option.name}</p>
            </Link>
          );
        })}
      </div>

      <ArrowButton text="See Our Portfolio" />
    </footer>
  );
};

export default Footer;
