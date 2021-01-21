import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IconMenuWrap, MenuLink } from "../../Header/Wrappers";
import { IconNavMobile, Logo } from "./Icons";
import {
  NavBar,
  ButtonsRight,
  MenuWrapMobile,
  TextSectionThin,
  TextNav,
} from "./Navbar.styles";

export default function index({ showBar }: { showBar?: boolean }) {
  const [show, handleShow] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (showBar) {
      handleShow(true);
    } else {
      // const showNav = () => {
      //   if (window.scrollY > 40) {
      //     handleShow(true);
      //   } else {
      //     handleShow(false);
      //   }
      // };
      // window.addEventListener("scroll", showNav);
      // return () => window.removeEventListener("scroll", showNav);
    }
  }, []);

  return (
    <NavBar open={openMenu} show={show}>
      <Logo show={show} open={openMenu} />
      <ButtonsRight>
        {/* <TextNav show={show}>
          <Link href="/">Sobre Eva</Link>
        </TextNav> */}
        {/* <TextNav show={show}>
          {" "}
          <Link href="/">Ubicaciones</Link>{" "}
        </TextNav>
        <TextNav show={show}>
          {" "}
          <Link href="/">Opiniones</Link>{" "}
        </TextNav>
        <TextNav show={show}>
          {" "}
          <Link href="/">Ayuda</Link>{" "}
        </TextNav> */}
      </ButtonsRight>
      {/* <IconMenuWrap onClick={() => setOpenMenu(!openMenu)}>
        <IconNavMobile open={openMenu} show={show} />
      </IconMenuWrap> */}

      {openMenu && (
        <MenuWrapMobile>
          <div>
            <MenuLink>
              <TextSectionThin>
                <Link href="/">
                  <a className="text-22">Sobre Eva</a>
                </Link>
              </TextSectionThin>
            </MenuLink>
            {/* <MenuLink>
              <TextSectionThin>
                <Link href="/">
                  <a className="text-22">Ubicaciones</a>
                </Link>
              </TextSectionThin>
            </MenuLink>
            <MenuLink>
              <TextSectionThin>
                <Link href="/">
                  <span className="text-22">Opiniones</span>
                </Link>
              </TextSectionThin>
            </MenuLink>
            <MenuLink>
              <TextSectionThin>
                <Link href="/">
                  <span className="text-22">Ayuda</span>
                </Link>
              </TextSectionThin>
            </MenuLink> */}
          </div>
        </MenuWrapMobile>
      )}
    </NavBar>
  );
}
