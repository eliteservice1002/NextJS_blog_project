import styled from "styled-components";

interface BackgroundProps {
  readonly img: string;
}

export const ImgBackground = styled.div.attrs<BackgroundProps>(({ img }) => ({
  className: `bg-cover bg-center object-contain ${img}`,
}))<BackgroundProps>`
  height: 600px;
`;

export const TextBackground = styled.div.attrs(() => ({
  className: "flex flex-col justify-center items-center text-center",
}))`
  height: 600px;
`;

export const StyledText = styled.div.attrs(() => ({
  className:
    "leading-110 text-32 lg:text-3 text-white lg:w-2/3 font-thin tracking-wider lg:leading-110 px-4 font-hthaptik pb-12 pt-56 lg:pt-20",
}))``;

export const StyledBoldText = styled.span.attrs(() => ({
  className: "font-bold",
}))``;
