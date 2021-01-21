import React, { ReactNode } from "react";
import Link from "next/link";

import logo from "../../assets/images/logo_W.png";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center lg:mx-24 h-full cursor-pointer">
        <img style={{ maxHeight: "28px" }} src={logo} alt="logo" />
        {/* <img style={{ width: "150px" }} src={logo} alt="logo" /> */}
      </div>
    </Link>
  );
};

export const IconMenu = ({ children }: { children: ReactNode }) => (
  <picture
    className={`text-white lg:hidden delay-150 duration-300 pr-2 ease-in-out flex items-center h-full`}
  >
    <svg
      className="h-10 w-10"
      stroke="currentColor"
      fill="none"
      viewBox="0 0 24 24"
    >
      {children}
    </svg>
  </picture>
);
