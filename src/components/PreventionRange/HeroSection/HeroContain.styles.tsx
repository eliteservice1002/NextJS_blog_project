import styled from "styled-components";

interface BackgroundProps {
  readonly img: string;
}

interface PaddingText {
  readonly padding?: string;
}

interface LinearGradient {
  readonly gradient?: string;
}

export const ImgBackground = styled.div.attrs<BackgroundProps>(({ img }) => ({
  className: `bg-cover bg-center object-contain ${img}`,
}))<BackgroundProps>`
  height: 330px;
`;

export const TextBackground = styled.div.attrs(() => ({
  className:
    "flex flex-col justify-center items-center text-center h-315 lg:h-650 w-3/4 lg:w-2/5 lg:items-start lg:justify-end lg:pb-20",
}))``;

export const StyledText = styled.div.attrs(() => ({
  className:
    "leading-110 text-32 lg:text-3 text-white lg:w-2/3 font-thin tracking-wider lg:leading-110 px-4 font-hthaptik pb-12 pt-56 lg:pt-20",
}))`
  z-index: 1;
`;

export const StyledBoldText = styled.span.attrs<PaddingText>(({ padding }) => ({
  className: `font-hthaptik text-32 font-bold text-white ${
    padding ? padding : "pt-24"
  } lg:text-64 lg:text-left`,
}))<PaddingText>`
  z-index: 1;
  line-height: 100%;
  font-feature-settings: "ss01" on;
`;

export const StyledThinText = styled.span.attrs(() => ({
  className: "lg:hidden font-hthaptik text-16 font-medium text-white pt-2",
}))`
  z-index: 1;
  line-height: 100%;
  font-feature-settings: "ss01" on;
  letter-spacing: 0.02em;
`;

export const LinearBackground = styled.div.attrs<LinearGradient>(
  ({ gradient }) => ({
    className: `w-full lg:w-full text-white flex justify-center items-center lg:justify-between lg:bg-none bg-gradient-to-r ${gradient} h-315 lg:h-650 flex-col lg:flex-col`,
  }),
)<LinearGradient>`
  z-index: 1;
`;
