import styled from "styled-components";

export const WrapButtons = styled.div.attrs(() => ({
  className: "flex mt-4 lg:mb-10 lg:mt-10",
}))`
  min-width: 315px;
`;

export const ButtonLocation = styled.button.attrs(() => ({
  className:
    "rounded-lite bg-primary text-16 font-spectral text-white py-sm px-lg mr-3",
}))``;

export const ButtonScheduled = styled.button.attrs(() => ({
  className:
    "rounded-lite border border-brownDark text-16 font-spectral text-brownDark py-sm px-lg lg:mt-1 xl:mt-0",
}))``;
