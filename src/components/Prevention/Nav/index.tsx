import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ZendeskAPI } from "react-zendesk";
import logo from "../../../assets/images/logo_W.png";
import { StyledButton } from "../common/Button/Button.styles";
import { IconMenuWrap, MenuLink } from "../../Header/Wrappers";
import { TextSectionThin } from "../../Footer/Text.styles";
import { IconNavMobile } from "./Icons";
import { WhatsappIcon, PhoneIcon } from "../../Footer/Icons";
import {
  NavBar,
  Logo,
  ButtonsRight,
  MenuWrapMobile,
  HeaderSupport,
} from "./Navbar.styles";

export default function index() {
  const [show, handleShow] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const showNav = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };
    window.addEventListener("scroll", showNav);
    return () => window.removeEventListener("scroll", showNav);
  }, []);

  return (
    <NavBar open={openMenu} show={show}>
      <Logo url={logo} />
      <ButtonsRight>
        <StyledButton
          primary={false}
          onClick={() => {
            ZendeskAPI("webWidget", "open");
          }}
        >
          <WhatsappIcon />
          Contáctanos
        </StyledButton>
      </ButtonsRight>
      <IconMenuWrap onClick={() => setOpenMenu(!openMenu)}>
        <IconNavMobile open={openMenu} />
      </IconMenuWrap>

      {openMenu && (
        <MenuWrapMobile>
          <div>
            <MenuLink>
              <TextSectionThin>
                <Link href="/">
                  <a className="text-22">Eva Center</a>
                </Link>
              </TextSectionThin>
            </MenuLink>
            <MenuLink>
              <TextSectionThin>
                <Link href="/membresia">
                  <a className="text-22">Membresía</a>
                </Link>
              </TextSectionThin>
            </MenuLink>
            <MenuLink>
              <TextSectionThin>
                <Link href="/citas">
                  <span className="text-22">Agendar cita</span>
                </Link>
              </TextSectionThin>
            </MenuLink>
          </div>
          <div>
            <HeaderSupport>Contacto</HeaderSupport>
            <MenuLink>
              <TextSectionThin className="inline-flex">
                <WhatsappIcon />
                <a
                  className="text-22"
                  href="https://api.whatsapp.com/send?phone=522214139817&text=Hola, quiero saber mas sobre sus servicios"
                >
                  Escríbenos
                </a>
              </TextSectionThin>
            </MenuLink>
            <MenuLink>
              <TextSectionThin className="inline-flex">
                <PhoneIcon />
                <a className="text-22" href="tel:5553508883">
                  Llámanos
                </a>
              </TextSectionThin>
            </MenuLink>
          </div>
        </MenuWrapMobile>
      )}
    </NavBar>
  );
}
