"use client";

import React, { useState } from "react";
import hamburger from "../../assets/icons/icon-hamburger.svg";
import closeBtn from "../../assets/icons/icon-close.svg";
import uuid from "react-uuid";
import Image from "next/image";
import { menuOptions } from "@/constants/constants";
import Link from "next/link";

const NavMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <div>
      <div
        className={`bg-white absolute w-[90%] mx-auto top-[6rem] z-10 p-4 ${
          !showMenu ? "left-[-1000px]" : "left-0 right-0 "
        }`}
      >
        {menuOptions.map((option) => {
          return (
            <Link href={option.route} onClick={toggleMenu}>
              <p
                key={uuid()}
                className="font-bold text-center text-[20px] flex flex-col gap-4"
              >
                {option.name}
              </p>
            </Link>
          );
        })}
      </div>

      <Image
        src={!showMenu ? hamburger : closeBtn}
        width={25}
        height={25}
        alt=""
        onClick={toggleMenu}
      />
    </div>
  );
};

export default NavMenu;
