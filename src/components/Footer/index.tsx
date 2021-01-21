import React from "react";
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
            <TitleSection>Eva Center</TitleSection>
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
            <TitleSection>Ayuda</TitleSection>
            <List>
              <ListItem>
                <WhatsappIcon />
                <div
                  className="cursor-pointer hidden lg:flex"
                  onClick={() => {
                    ZendeskAPI("webWidget", "open");
                  }}
                >
                  <TextSection>Escríbenos</TextSection>
                </div>
                <div className="lg:hidden">
                  <TextSection>
                    <a href="https://api.whatsapp.com/send?phone=522214139817&text=Hola, quiero saber mas sobre sus servicios">
                      Escríbenos
                    </a>{" "}
                  </TextSection>
                </div>
              </ListItem>
              <ListItem>
                <PhoneIcon />
                <TextSection>
                  <a href="tel:5553508883">Llámanos</a>
                </TextSection>
              </ListItem>
            </List>
          </WrapDesktopQuarter>
          <WrapDesktopQuarter>
            <TitleSection>Social</TitleSection>
            <List>
              <ListItem>
                <SocialLink
                  href="https://twitter.com/evacenter_mx?lang=en"
                  target="_blank"
                >
                  <TwitterIcon />
                  <TextSection>Twitter</TextSection>
                </SocialLink>
              </ListItem>
              <ListItem>
                <SocialLink
                  href="https://www.facebook.com/evacenter.mx"
                  target="_blank"
                >
                  <FacebookIcon />
                  <TextSection>Facebook</TextSection>
                </SocialLink>
              </ListItem>
              <ListItem>
                <SocialLink
                  href="https://www.instagram.com/evacenter.mx/"
                  target="_blank"
                >
                  <InstagramIcon />
                  <TextSection>Instagram</TextSection>
                </SocialLink>
              </ListItem>
              <ListItem>
                <SocialLink
                  target="_blank"
                  href="https://www.youtube.com/c/HigiaTech"
                >
                  <YoutubeIcon />
                  <TextSection>Youtube</TextSection>
                </SocialLink>
              </ListItem>
              <ListItem>
                <SocialLink
                  target="_blank"
                  href="https://www.linkedin.com/company/eva-tech/"
                >
                  <LinkedinIcon />
                  <TextSection>LinkedIn</TextSection>
                </SocialLink>
              </ListItem>
            </List>
          </WrapDesktopQuarter>
          <WrapDesktopQuarter>
            <TitleSection>Novedades</TitleSection>
            <TextSection>
              Suscríbete a nuestro boletín mensual y recibe ofertas y novedades
              exclusivas
            </TextSection>
            <InputMail />
          </WrapDesktopQuarter>
        </WrapDesktopQuartes>
        <WrapDesktopCopy>
          <WrapCopyContent>
            <TextRef>© Eva 2020</TextRef>
            <TextRef>Todos los derechos reservados</TextRef>
            <LinkRef href="/terms">Términos y condiciones</LinkRef>
            <LinkRef href="/privacy">Política de privacidad</LinkRef>
          </WrapCopyContent>
        </WrapDesktopCopy>
      </WrapDesktop>

      <WrapMobile>
        <WrapDesktopQuartes>
          <WrapDesktopQuarter>
            <TitleSection>EVA</TitleSection>
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
            <TitleSection>Ayuda</TitleSection>
            <List>
              <ListItem>
                <WhatsappIcon />

                <TextSection>
                  {!membership ? (
                    <a href="https://api.whatsapp.com/send?phone=522214139817&text=¡Hola!, Solicito más información sobre Eva Center">
                      Escríbenos
                    </a>
                  ) : (
                    <a href="https://api.whatsapp.com/send?phone=522214139817&text= Hola, ¿me pueden dar más información sobre la Membresía?">
                      Escríbenos
                    </a>
                  )}
                </TextSection>
              </ListItem>
              <ListItem>
                <PhoneIcon />
                <TextSection>
                  <a href="tel:5553508883">Llámanos</a>
                </TextSection>
              </ListItem>
            </List>
          </WrapDesktopQuarter>

          <WrapDesktopQuarter>
            <TitleSection>Novedades</TitleSection>
            <TextSection>
              Suscríbete a nuestro boletín mensual y recibe ofertas y novedades
              exclusivas
            </TextSection>
            <InputMail />
          </WrapDesktopQuarter>
          <WrapDesktopQuarter>
            <ListIcons>
              <Icon>
                <a
                  className="flex"
                  target="_blank"
                  href="https://www.linkedin.com/company/eva-tech/"
                >
                  <LinkedinIcon />
                </a>
              </Icon>
              <Icon>
                <a
                  className="flex"
                  target="_blank"
                  href="https://www.youtube.com/c/HigiaTech"
                >
                  <YoutubeIcon />
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
              <Icon>
                <a
                  className="flex"
                  href="https://www.facebook.com/evacenter.mx"
                  target="_blank"
                >
                  <FacebookIcon />
                </a>
              </Icon>
            </ListIcons>
          </WrapDesktopQuarter>
        </WrapDesktopQuartes>
        <WrapMobileCopy>
          <WrapCopyContent>
            <div className="flex flex-wrap">
              <div className="w-1/3 flex justify-center">
                <TextRef>© Eva 2020</TextRef>
              </div>
              <div className="w-2/3 flex">
                <TextRef>Todos los derechos reservados</TextRef>
              </div>
              <div className="w-1/2 flex justify-center">
                <LinkRef href="/terms">Términos y condiciones</LinkRef>
              </div>
              <div className="w-1/2 flex justify-center">
                <LinkRef href="/privacy">Política de privacidad</LinkRef>
              </div>
            </div>
          </WrapCopyContent>
        </WrapMobileCopy>
      </WrapMobile>
    </footer>
  );
};

export default index;
