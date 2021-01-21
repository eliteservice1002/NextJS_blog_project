import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { ZendeskAPI } from "react-zendesk";
import { TextDesktop, TextMobileSecondBanner } from "./Text.styles";
import { ButtonWhiteDesktop, ButtonScheduledMobile } from "./Buttons.styles";

const Wrap = styled.div.attrs(() => ({
  className: "lg:py-sl lg:px-sl px-4 py-12",
}))``;

const WrapContent = styled.div.attrs(() => ({
  className:
    "lg:mt-0 mt-8 h-180 lg:h-340 flex items-center flex-col justify-center",
}))``;

const WrapButton = styled.div.attrs(() => ({
  className: "flex justify-center lg:mt-4 mt-2",
}))``;

export const ContactBanner = () => (
  <Wrap>
    <div className="hidden lg:flex relative h-340">
      <Image
        layout="fill"
        className="lg:flex lg:items-center lg:justify-center object-center object-cover pointer-events-none rounded-mid"
        src={require("../../assets/images/cta-bg-paquetes.jpg")}
      />
      <div className="w-full h-340 relative">
        <WrapContent>
          <TextDesktop className="text-white text-center">
            Descubre nuestros paquetes que <br /> incluyen tu mastografía anual
            y <br /> exploraciones en Eva
          </TextDesktop>
          <WrapButton>
            <ButtonWhiteDesktop
              onClick={() => {
                ZendeskAPI("webWidget", "open");
              }}
            >
              Contáctanos
            </ButtonWhiteDesktop>
          </WrapButton>
        </WrapContent>
      </div>
    </div>
    <div className="lg:hidden relative h-180">
      <Image
        layout="fill"
        className="flex items-center justify-center object-center object-cover  pointer-events-none rounded-mid"
        src={require("../../assets/images/cta-bg-paquetes-mobile.jpg")}
      />
      <div className="w-full h-180 relative">
        <WrapContent>
          <TextMobileSecondBanner className="text-center">
            Descubre nuestros paquetes que <br /> incluyen tu mastografía anual
            y <br /> exploraciones en Eva
          </TextMobileSecondBanner>
          <WrapButton>
            <ButtonScheduledMobile>
              <a href="https://api.whatsapp.com/send?phone=522214139817&text=Hola, me interesa saber mas sobre sus paquetes de mastografía y exploraciones">
                Contáctanos
              </a>
            </ButtonScheduledMobile>
          </WrapButton>
        </WrapContent>
      </div>
    </div>
  </Wrap>
);
