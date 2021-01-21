import React, { useEffect, useState } from "react";
import { ZendeskAPI } from "react-zendesk";
import { IconMenu, Logo } from "./Logo";
import {
  WrapButton,
  ButtonContactHeader,
  ContentButtons,
  ButtonScheduledHeaderWhite,
} from "./Buttons";
import Link from "next/link";
import { IconMenuWrap, MenuLink, MenuWrap, MenuWrapMobile } from "./Wrappers";

const index = ({ noTransaparent = false }: { noTransaparent?: boolean }) => {
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
    <div className="w-full h-16 lg:h-20 fixed z-10 lg:bg-transparent bg-brownMiddle" style={{backgroundColor:'#fff',boxShadow: '0 0 28px rgba(0,0,0,0.07)'}}>
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
                <a style={{color:'#333'}}>Inicio</a>
              </Link>
            </MenuLink>

            <MenuLink>
              <Link href="/membresia">
                <a style={{color:'#333'}}>Membresía</a>
              </Link>
            </MenuLink>

            <MenuLink>
              <a href="https://evacenter.blog/" target="_blank" style={{color:'#333'}}>
                Blog
              </a>
            </MenuLink>
            
            <MenuLink>
              <Link href="/blog_home_page">
                <a style={{color:'#333'}}>Blog1</a>
              </Link>
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
            <Link href="/citas" passHref>
              <ButtonScheduledHeaderWhite>
                Agendar cita
              </ButtonScheduledHeaderWhite>
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
