import React, { useState } from "react";
import Link from "next/link";
import { ZendeskAPI } from "react-zendesk";
import { IconsHeader } from "./Icons";
import { IconNavMobile } from "../../Prevention/Nav/Icons";
import logo from "../../../assets/images/logomem.svg";
import {
  BannerButtonDesktopThin,
  BannerButtonDesktopThinPrimary,
  BannerButtonMobileThin,
} from "./HeaderButton";
import { ButtonDesktopThin, ButtonMobileThin } from "./Button.styles";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="bg-darkbrown w-full fixed z-30 transition delay-150 duration-300 ease-in-out font-hthaptik ">
        <div className="mx-auto lg:px-80px px-3 lg:w-full py-1 lg:py-0">
          <div className="flex justify-between h-12 lg:h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <picture
                  className={`cursor-pointer text-white block w-32 md:w-64 delay-150 duration-300 ease-in-out`}
                >
                  <img src={logo} alt="" />
                </picture>
              </Link>
            </div>
            <div className="hidden sm:ml-6 lg:flex justify-center">
              <BannerButtonDesktopThin text="Membresía" href="/membresia" />
              <BannerButtonDesktopThin
                text="Beneficios"
                href="/membresia/beneficios"
              />
            </div>
            <div className="hidden sm:ml-6 lg:flex items-center">
              <ButtonDesktopThin>
                <a href="tel:5553508883" className={`py-3  flex `}>
                  <i className="mr-2">
                    <IconsHeader type="phone" color="#EE8D8B" />
                  </i>
                  (55) 5350 8883
                </a>
              </ButtonDesktopThin>
              <ButtonDesktopThin
                onClick={() => {
                  console.log("Entra");
                  ZendeskAPI("webWidget", "open");
                }}
              >
                <i className="mr-2">
                  <IconsHeader type="chat" color="#EE8D8B" />
                </i>
                Chatea en vivo
              </ButtonDesktopThin>
              <BannerButtonDesktopThinPrimary
                text={`${" "} Adquirir online`}
                href="/membresia/register"
              />
            </div>
            {/* NOTE Mobile menu */}
            <div className="-mr-2 flex items-center lg:hidden">
              <button
                className={`${
                  open || "text-white"
                } inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition duration-150 ease-in-out`}
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <IconNavMobile open={open} />
              </button>
            </div>
          </div>
        </div>
        <div className={"lg:hidden " + (open ? " block" : " hidden")}>
          <div className="p-8 bg-lightbrown text-white">
            <BannerButtonMobileThin text="Membresía" href="/membresia" />
            <BannerButtonMobileThin
              text="Beneficios"
              href="/membresia/beneficios"
            />
            <ButtonMobileThin>
              <a href="tel:5553508883" className={`flex`}>
                <i className="mr-2">
                  <IconsHeader type="phone" color="#fff" />
                </i>
                (55) 5350 8883
              </a>
            </ButtonMobileThin>
            <ButtonMobileThin>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=522214139817&text=Quiero saber más de Eva Membership"
                className="flex "
              >
                <i className="mr-2">
                  <IconsHeader type="chat" color="#fff" />
                </i>{" "}
                Chatea en vivo
              </a>
            </ButtonMobileThin>
            <BannerButtonMobileThin
              text="Adquirir online"
              href="/membresia/register"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
