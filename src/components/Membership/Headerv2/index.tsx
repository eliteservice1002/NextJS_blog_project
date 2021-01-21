import React, { useEffect, useState } from "react";
import { ZendeskAPI } from "react-zendesk";
import { IconMenu, Logo } from "./Logo.styles";
import {
  WrapButton,
  ButtonContactHeader,
  ContentButtons,
  ButtonScheduledHeader,
} from "./Buttons.styles";
import Link from "next/link";
import {
  IconMenuWrap,
  MenuLink,
  MenuWrap,
  MenuWrapMobile,
} from "./Wrappers.styles";
import { IconsHeader } from "../Header/Icons";

const index = ({ noTransaparent = false }: { noTransaparent?: boolean }) => {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const [bodyOffset, setBodyOffset] = useState(
    typeof window !== "undefined" && document.body.getBoundingClientRect(),
  );

  const listener = () => {
    setBodyOffset(
      typeof window !== "undefined" && document.body.getBoundingClientRect(),
    );
    return bodyOffset;
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  const changeHeader = typeof window !== "undefined" && window.scrollY > 0;
  return (
    <div className="w-full h-16 lg:h-20 fixed z-50 lg:bg-transparent bg-brownMiddle">
      <div
        className={`h-full  ${
          changeHeader
            ? "bg-brownMiddle shadow-xl"
            : "bg-transparent border-b border-whiteLight"
        } ${noTransaparent && "bg-brownMiddle shadow-xl"} flex justify-between`}
      >
        <div className="lg:flex ">
          <Logo />
          <MenuWrap>
            <MenuLink>
              <Link href="/">
                <a>Inicio</a>
              </Link>
            </MenuLink>

            <MenuLink>
              <Link href="/membresia">
                <a>Membresía</a>
              </Link>
            </MenuLink>

            <MenuLink>
              <a href="https://evacenter.blog/" target="_blank">
                Blog
              </a>
            </MenuLink>

            {/* <MenuLink>
              <a href="https://evacenter.com/research/" target="_blank">
                Investigación
              </a>
            </MenuLink> */}
          </MenuWrap>
        </div>
        <WrapButton>
          <ContentButtons>
            <Link href="/membresia/register" passHref>
              <ButtonScheduledHeader>Adquirir</ButtonScheduledHeader>
            </Link>
            <ButtonContactHeader
              onClick={() => {
                ZendeskAPI("webWidget", "open");
              }}
            >
              Contáctanos
            </ButtonContactHeader>
          </ContentButtons>
        </WrapButton>

        <IconMenuWrap onClick={() => setOpenMenu(!openMenu)}>
          <IconMenu>
            {!openMenu ? (
              <path
                className={"inline-flex"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            ) : (
              <path
                className={"inline-flex"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            )}
          </IconMenu>
        </IconMenuWrap>
      </div>

      {openMenu && (
        <div className="bg-brownDark h-screen">
          <MenuWrapMobile>
            <MenuLink>
              <Link href="/">
                <a className="text-22">Inicio</a>
              </Link>
            </MenuLink>

            <MenuLink>
              <Link href="/membresia">
                <a className="text-22">Membresía</a>
              </Link>
            </MenuLink>

            <MenuLink>
              <a
                className="text-22"
                href="https://evacenter.blog/"
                target="_blank"
              >
                Blog
              </a>
            </MenuLink>
            <MenuLink>
              <a href="tel:5553508883" className={`flex`}>
                <i className="mr-2">
                  <IconsHeader type="phone" color="#fff" />
                </i>
                (55) 5350 8883
              </a>
            </MenuLink>
            <MenuLink>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=522214139817&text=Hola, quiero saber más de la membresía Eva "
                className="flex "
              >
                <i className="mr-2">
                  <IconsHeader type="chat" color="#fff" />
                </i>{" "}
                Chatea por Whatsapp
              </a>
            </MenuLink>

            <MenuLink>
              <Link href="/membresia/register">
                <a className="text-22">Adquirir</a>
              </Link>
            </MenuLink>

            {/* <MenuLink>
              <a className="text-22" href="https://evacenter.com/research/" target="_blank">
                Investigación
              </a>
            </MenuLink> */}
          </MenuWrapMobile>
        </div>
      )}
    </div>
  );
};

export default index;
