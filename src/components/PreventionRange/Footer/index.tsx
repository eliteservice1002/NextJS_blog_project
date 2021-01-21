import React from "react";
import Link from "next/link";
import { ZendeskAPI } from "react-zendesk";

import {
  WrapDesktop,
  WrapDesktopCopy,
  WrapCopyContent,
  WrapDesktopQuartes,
  WrapDesktopQuarter,
  List,
  ListItem,
  SocialLink,
  WrapMobile,
  WrapMobileCopy,
  ListIcons,
  Icon,
} from "./Wrappers.styles";
import {
  TextRef,
  LinkRef,
  TitleSection,
  TextSection,
  TextSectionThin,
  TextSectionCommunity,
} from "./Text.styles";
import { InputMail } from "./Input";
import {
  WhatsappIcon,
  PhoneIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon,
} from "./Icons";

const index = ({ membership }: { membership?: boolean }) => {
  return (
    <footer>
      <WrapDesktop>
        <WrapDesktopQuartes>
          <WrapDesktopQuarter>
            <TitleSection>SOBRE EVA</TitleSection>
            <TextSection>
              Eva es un método auxiliar para la detección del cáncer de mama y
              debe ser utilizado como un coadyuvante a estudios de imagen como
              la mastografía.
            </TextSection>
            <TextSectionThin>
              Número de permiso de publicidad COFEPRIS 193300201A1797
            </TextSectionThin>
          </WrapDesktopQuarter>
          <WrapDesktopQuarter>
            <TitleSection>EVA</TitleSection>
            <List>
              <ListItem>
                <Link href="/">
                  <TextSection>
                    <span className="cursor-pointer">Eva Center</span>
                  </TextSection>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/membresia">
                  <TextSection>
                    <span className="cursor-pointer">Membresía</span>
                  </TextSection>
                </Link>
              </ListItem>
              {/* <ListItem>
                  <TextSection>Seguro</TextSection>
              </ListItem> */}
            </List>
          </WrapDesktopQuarter>
          <WrapDesktopQuarter>
            <TitleSection>AYUDA</TitleSection>
            <List>
              <ListItem>
                <WhatsappIcon />
                <div
                  className="cursor-pointer hidden lg:flex"
                  onClick={() => {
                    ZendeskAPI("webWidget", "open");
                  }}
                >
                  <TextSection>+52 221 413 9817</TextSection>
                </div>
                <div className="lg:hidden">
                  <TextSection>
                    <a href="https://api.whatsapp.com/send?phone=522214139817&text=Hola, quiero saber mas sobre sus servicios">
                      +52 221 413 9817
                    </a>{" "}
                  </TextSection>
                </div>
              </ListItem>
              <ListItem>
                <PhoneIcon />
                <TextSection>
                  <a href="tel:5553508883">(55) 5350-8883</a>
                </TextSection>
              </ListItem>
            </List>
          </WrapDesktopQuarter>
          <WrapDesktopQuarter>
            <TextSectionCommunity>
              Sé parte de la comunidad Eva
            </TextSectionCommunity>
            <InputMail />
            <div className="flex justify-around items-center pt-6">
              <div className="text-brownDark font-thin font-hthaptik text-xs">
                SÍGUENOS:
              </div>
              <div className="flex pl-4">
                <div>
                  <a
                    className="flex"
                    href="https://www.facebook.com/evacenter.mx"
                    target="_blank"
                  >
                    <FacebookIcon />
                  </a>
                </div>
                <div>
                  <a
                    className="flex"
                    href="https://www.instagram.com/evacenter.mx/"
                    target="_blank"
                  >
                    <InstagramIcon />
                  </a>
                </div>
                <a
                  className="flex"
                  href="https://twitter.com/evacenter_mx?lang=en"
                  target="_blank"
                >
                  <TwitterIcon />
                </a>
              </div>
            </div>
          </WrapDesktopQuarter>
        </WrapDesktopQuartes>
        <WrapDesktopCopy>
          <WrapCopyContent>
            <TextRef>© EVA 2020</TextRef>
            <TextRef>TODOS LOS DERECHOS RESERVADOS</TextRef>
            <LinkRef href="/terms">TÉRMINOS</LinkRef>
            <LinkRef href="/privacy">PRIVACIDAD</LinkRef>
          </WrapCopyContent>
        </WrapDesktopCopy>
      </WrapDesktop>

      <WrapMobile>
        <WrapDesktopQuartes>
          <div className="flex justify-between w-full">
            <WrapDesktopQuarter>
              <TitleSection>EVA</TitleSection>
              <List>
                <ListItem>
                  <Link href="/">
                    <TextSection>
                      <span className="cursor-pointer">Eva Center</span>
                    </TextSection>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="/membresia">
                    <TextSection>
                      <span className="cursor-pointer">Membresía</span>
                    </TextSection>
                  </Link>
                </ListItem>
                {/* <ListItem>
                  <TextSection>Seguro</TextSection>
              </ListItem> */}
              </List>
            </WrapDesktopQuarter>
            <WrapDesktopQuarter>
              <TitleSection>Ayuda</TitleSection>
              <List>
                <ListItem>
                  <WhatsappIcon />
                  <TextSection>
                    {!membership ? (
                      <a href="https://api.whatsapp.com/send?phone=522214139817&text=¡Hola!, Solicito más información sobre Eva Center">
                        +52 221 413 9817
                      </a>
                    ) : (
                      <a href="https://api.whatsapp.com/send?phone=522214139817&text= Hola, ¿me pueden dar más información sobre la Membresía?">
                        +52 221 413 9817
                      </a>
                    )}
                  </TextSection>
                </ListItem>
                <ListItem>
                  <PhoneIcon />
                  <TextSection>
                    <a href="tel:5553508883">(55) 5350-8883</a>
                  </TextSection>
                </ListItem>
              </List>
            </WrapDesktopQuarter>
          </div>
          <WrapDesktopQuarter>
            <TitleSection>SOBRE EVA</TitleSection>
            <TextSection>
              Eva es un método auxiliar para la detección del cáncer de mama y
              debe ser utilizado como un coadyuvante a estudios de imagen como
              la mastografía.
            </TextSection>
            <TextSectionThin>
              Número de permiso de publicidad COFEPRIS 193300201A1797
            </TextSectionThin>
          </WrapDesktopQuarter>
          <WrapDesktopQuarter>
            <TextSectionCommunity>
              Sé parte de la comunidad Eva
            </TextSectionCommunity>
            <InputMail />
          </WrapDesktopQuarter>
          <WrapDesktopQuarter>
            <div className="flex items-center justify-between">
              <div className="text-brownDark font-thin font-hthaptik text-xs">
                SÍGUENOS:
              </div>
              <ListIcons>
                <Icon>
                  <a
                    className="flex"
                    href="https://www.facebook.com/evacenter.mx"
                    target="_blank"
                  >
                    <FacebookIcon />
                  </a>
                </Icon>
                <Icon>
                  <a
                    className="flex"
                    href="https://www.instagram.com/evacenter.mx/"
                    target="_blank"
                  >
                    <InstagramIcon />
                  </a>
                </Icon>
                <Icon>
                  <a
                    className="flex"
                    href="https://twitter.com/evacenter_mx?lang=en"
                    target="_blank"
                  >
                    <TwitterIcon />
                  </a>
                </Icon>
              </ListIcons>
            </div>
          </WrapDesktopQuarter>
        </WrapDesktopQuartes>
        <WrapMobileCopy>
          <WrapCopyContent>
            <div className="flex flex-wrap uppercase">
              <div className="w-1/3 flex justify-center">
                <TextRef>© EVA 2020</TextRef>
              </div>
              <div className="w-2/3 flex">
                <TextRef>TODOS LOS DERECHOS RESERVADOS</TextRef>
              </div>
              <div className="w-1/2 flex justify-start pl-6">
                <LinkRef href="/terms">TÉRMINOS</LinkRef>
              </div>
              <div className="w-1/2 flex justify-start">
                <LinkRef href="/privacy">PRIVACIDAD</LinkRef>
              </div>
            </div>
          </WrapCopyContent>
        </WrapMobileCopy>
      </WrapMobile>
    </footer>
  );
};

export default index;
