import React from "react";
import Navbar from "./Navbar";
import Logo from "../../../public/images/logo.svg";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="sticky top-0 z-10">
        <div className="bg-primary p-2">
          <div className="container mx-auto flex justify-between items-center">
            {/* <Image className="h-[2rem]" src={Logo} alt="global square It" /> */}
            <p className="text-white font-bold ">GLOBAL SQUARE</p>
          </div>
        </div>
        <Navbar />
      </div>
    </>
  );
};

export default Header;
