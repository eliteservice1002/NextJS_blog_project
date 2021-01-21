import styled from "styled-components";

interface Img {
  readonly img: string;
}

interface BoldText {
  readonly bold: boolean;
}

export const Wrap = styled.div.attrs(() => ({
  className: "lg:px-sl px-4 py-8",
}))``;

export const WrapImg = styled.div.attrs<Img>(({ img }) => ({
  className: `${img} flex items-center flex-row flex-end justify-end lg:items-center lg:justify-between bg-local bg-center bg-cover rounded-mid`,
}))<Img>``;

export const WrapContent = styled.div.attrs(() => ({
  className:
    "flex flex-col items-center justify-end px-8 w-200 lg:w-full lg:flex-row lg:justify-between",
}))``;

export const WrapText = styled.span.attrs<BoldText>(({ bold }) => ({
  className: `${
    bold ? "font-semibold" : "font-light"
  } font-hthaptik  text-16 text-white tracking-wider lg:text-32  text-center`,
}))<BoldText>``;
