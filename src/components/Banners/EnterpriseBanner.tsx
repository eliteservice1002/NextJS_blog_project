import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { TextDesktop, TextMobileThirdBanner } from "./Text.styles";
import { ButtonEnterprise, ButtonEnterpriseMobile } from "./Buttons.styles";

const Wrap = styled.div.attrs(() => ({
  className: "lg:pb-24 lg:px-sl px-4 py-12",
}))``;

const BackgroundDesktop = styled.div.attrs(() => ({
  className: "w-full h-400 relative flex justify-around items-center",
}))``;
const BackgroundMobile = styled.div.attrs(() => ({
  className: "w-full relative flex items-center flex-col justify-center h-175",
}))``;

export const EnterpriseBanner = () => (
  <Wrap>
    <div className="hidden lg:flex relative h-400">
      <Image
        layout="fill"
        className="lg:flex lg:items-center lg:justify-center object-center object-cover pointer-events-none rounded-mid"
        src={require("../../assets/images/cta-bg-empresas.jpg")}
      />
      <BackgroundDesktop>
        <TextDesktop className="text-white">
          Juntos podemos salvar más vidas
        </TextDesktop>
        <a href="mailto:hola@evacenter.com?subject=¡Hola!, Solicito más información sobre sus paquetes de mastografia y exploraciones">
          <ButtonEnterprise>Descubre Eva para tu empresa</ButtonEnterprise>
        </a>
      </BackgroundDesktop>
    </div>
    <div className="lg:hidden relative h-200">
      <Image
        layout="fill"
        className="flex items-center justify-center object-center object-cover pointer-events-none rounded-mid"
        src={require("../../assets/images/cta-bg-empresas-mobile.jpg")}
      />
      <BackgroundMobile>
        <TextMobileThirdBanner>
          Juntos podemos <br /> salvar más vidas
        </TextMobileThirdBanner>
        <a href="mailto:hola@evacenter.com?subject=¡Hola!, Solicito más información sobre sus paquetes de mastografia y exploraciones">
          <ButtonEnterpriseMobile>
            Descubre Eva para tu empresa
          </ButtonEnterpriseMobile>
        </a>
      </BackgroundMobile>
    </div>
  </Wrap>
);
