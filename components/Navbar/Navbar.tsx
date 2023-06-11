import Image from "next/image";
import React from "react";
import logo from "../../assets/logo.svg";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <nav className="bg-white py-6 px-4 w-screen flex items-center justify-between">
      <Image src={logo} alt="" width={90} height={90} />
      <NavMenu />
    </nav>
  );
};

export default Navbar;
