import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { TextDesktop, TextMobileThirdBanner } from "../../Banners/Text.styles";
import {
  ButtonWhiteDesktop,
  ButtonScheduledMobile,
} from "../../Banners/Buttons.styles";

const Wrap = styled.div.attrs(() => ({
  className: "lg:pb-24 lg:px-sl py-12",
}))``;

const BackgroundDesktop = styled.div.attrs(() => ({
  className: "w-full h-400 relative flex justify-around items-center",
}))``;
const BackgroundMobile = styled.div.attrs(() => ({
  className: "relative flex items-center flex-col justify-center h-315 w-2/3",
}))``;

export const TakecareBanner = () => (
  <Wrap>
    <div className="hidden lg:flex relative h-400">
      <Image
        layout="fill"
        className="lg:flex lg:items-center lg:justify-center object-center object-cover pointer-events-none rounded-mid"
        src={require("../../../assets/images/preventionRange/takecare.png")}
      />
      <BackgroundDesktop>
        <TextDesktop className="text-white">
          <span className="font-hthaptik">
            Cuida de ti y de las mujeres que amas
          </span>
        </TextDesktop>
        <ButtonWhiteDesktop onClick={() => window.scrollTo(0, 0)}>
          <span className="font-hthaptik">Aparta tu cita</span>
        </ButtonWhiteDesktop>
      </BackgroundDesktop>
    </div>
    <div className="lg:hidden relative h-315 flex items-center justify-center">
      <Image
        layout="fill"
        className="flex items-center justify-center object-center object-cover"
        src={require("../../../assets/images/preventionRange/takecare-sm.png")}
      />
      <BackgroundMobile>
        <TextMobileThirdBanner>
          <span className="font-hthaptik font-bold">
            Cuida de ti y de las mujeres que amas
          </span>
        </TextMobileThirdBanner>
        <ButtonScheduledMobile
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="font-hthaptik">Aparta tu cita</span>
        </ButtonScheduledMobile>
      </BackgroundMobile>
    </div>
  </Wrap>
);
