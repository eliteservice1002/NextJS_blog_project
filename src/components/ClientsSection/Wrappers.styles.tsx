import styled from "styled-components";

export const Wrap = styled.div.attrs(() => ({
  className: "flex lg:px-sl px-4 flex-wrap py-24",
}))`
  background: rgba(193, 174, 172, 0.2);
`;

export const FlexMiddle = styled.div.attrs(() => ({
  className: "w-full lg:w-1/2 ",
}))``;

export const TextContent = styled.div.attrs(() => ({
  className: "flex justify-center lg:justify-start lg:items-center h-full",
}))``;
export const ImgContent = styled.div.attrs(() => ({
  className: "px-4",
}))``;
