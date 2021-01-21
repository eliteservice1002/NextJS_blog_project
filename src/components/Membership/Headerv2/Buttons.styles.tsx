import styled from "styled-components";

export const ButtonContactHeader = styled.button.attrs(() => ({
  className:
    "bg-primary text-white py-md px-xl font-spectral text-16 leading-24 rounded-lite ml-3 cursor-pointer",
}))`
  outline: none !important;
`;

export const ButtonScheduledHeader = styled.div.attrs(() => ({
  className:
    "border border-white text-white py-md px-xl font-spectral text-16 leading-24 rounded-lite mr-3 cursor-pointer",
}))`
  outline: none !important;
`;

export const ContentButtons = styled.div.attrs(() => ({
  className: "flex items-center h-full mr-24",
}))`
  outline: none !important;
`;

export const WrapButton = styled.div.attrs(() => ({
  className: "hidden lg:block",
}))``;
