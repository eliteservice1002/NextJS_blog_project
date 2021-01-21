import styled from "styled-components";

export const Title = styled.h1.attrs(() => ({
  className:
    "text-40 lg:text-64 text-white lg:w-1/2 font-thin tracking-wider leading-100 px-4 font-hthaptik",
}))``;
export const TitleBold = styled.span.attrs(() => ({
  className: "font-bold tracking-custom font-hthaptik",
}))``;

export const TitleCaption = styled.p`
  font-family: Spectral;
  font-weight: semi-bold;
  font-size: 16px;
  color: #716360;
`;

export const Subtitle = styled.h2.attrs(() => ({
  className: "lg:text-40 text-32 font-bold text-brownDark pb-2 font-hthaptik",
}))`
  line-height: 120%;
`;

export const TextBig = styled.h3`
  font-family: hthaptik;
  font-size: 32px;
  line-height: 140%;
  color: #716360;
  letter-spacing: 0.05em;
  font-weight: 200;
  text-align: center;
`;

export const TextBigBold = styled.span`
  font-weight: bold;
`;

export const TitleSmall = styled.h4.attrs(() => ({
  className: "lg:text-center",
}))`
  font-feature-settings: "salt";
  font-family: hthaptik;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 28px;
  color: #716360;
`;
