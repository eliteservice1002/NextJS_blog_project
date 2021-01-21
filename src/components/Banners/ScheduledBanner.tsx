import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { TextDesktop, TextMobileFirstBanner } from "./Text.styles";
import { ButtonWhiteDesktop, ButtonScheduledMobile } from "./Buttons.styles";

const Wrap = styled.div.attrs(() => ({
  className: "lg:py-sl lg:px-sl px-4 py-12",
}))``;

const BackgroundDesktop = styled.div.attrs(() => ({
  className: "flex justify-around items-center  w-full",
}))`
  z-index: 1;
`;
const BackgroundMobile = styled.div.attrs(() => ({
  className: "w-2/3 lg:w-full h-40 flex justify-center flex-col pl-4",
}))``;

export const ScheduledBanner = ({
  text,
  textButton,
  external,
  hrefDesktop,
  hrefMobile,
}: {
  text: string;
  textButton: string;
  external?: boolean;
  hrefDesktop?: string;
  hrefMobile?: string;
}) => (
  <Wrap>
    <div className="hidden lg:flex relative h-40">
      <Image
        layout="fill"
        className="object-center object-cover pointer-events-none rounded-mid"
        src={require("../../assets/images/cta-bg-register.jpg")}
      />
      <BackgroundDesktop>
        <TextDesktop className="text-white">
          <div style={{ whiteSpace: "pre-wrap" }}>{text}</div>
        </TextDesktop>
        {!external ? (
          <Link href={hrefDesktop} passHref>
            <ButtonWhiteDesktop>
              <a>{textButton}</a>
            </ButtonWhiteDesktop>
          </Link>
        ) : (
          <ButtonWhiteDesktop>
            <a href={hrefDesktop} target="_blank">
              {textButton}
            </a>
          </ButtonWhiteDesktop>
        )}
      </BackgroundDesktop>
    </div>

    <div className="lg:hidden relative h-40">
      <Image
        layout="fill"
        className="banner_mobile flex items-center justify-center object-center object-cover pointer-events-none rounded-mid"
        src={require("../../assets/images/cta-bg-register-mobile.jpg")}
      />
      <BackgroundMobile>
        <TextMobileFirstBanner>
          <div style={{ whiteSpace: "pre-wrap" }}>{text}</div>
        </TextMobileFirstBanner>
        {!external ? (
          <ButtonScheduledMobile>
            <Link href={hrefMobile || hrefDesktop} passHref>
              <a>{textButton}</a>
            </Link>
          </ButtonScheduledMobile>
        ) : (
          <ButtonScheduledMobile>
            <a href={hrefMobile || hrefDesktop} target="_blank">
              {textButton}
            </a>
          </ButtonScheduledMobile>
        )}
      </BackgroundMobile>
    </div>
  </Wrap>
);
