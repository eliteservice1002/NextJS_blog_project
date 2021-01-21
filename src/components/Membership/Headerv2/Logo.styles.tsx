import React, { ReactNode } from "react";
import styled from "styled-components";
import Link from "next/link";

import logo from "../../../assets/images/logo_W.png";

const Img = styled.img`
  width: 150px;
`;

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center lg:mx-24 h-full cursor-pointer">
        <Img src={logo} alt="logo" />
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
