import styled from "styled-components";

export const ButtonDesktopBlod = styled.button.attrs(() => ({
  className:
    "font-semibold text-white hover:no-underline ml-8 inline-flex items-center px-1 pt-1 text-base leading-5 focus:outline-none transition duration-150 ease-in-out border-transparent border-b-2",
}))`
  font-size: 16px;
`;

export const ButtonDesktopThin = styled.button.attrs(() => ({
  className:
    "font-medium text-white hover:no-underline ml-8 inline-flex items-center px-1 pt-1 text-sm leading-5 focus:outline-none transition duration-150 ease-in-out border-transparent border-b-2",
}))``;

export const ButtonMobileThin = styled.button.attrs(() => ({
  className:
    "mt-1 block py-2 font-normal text-base focus:outline-none transition duration-150 ease-in-out mb-3",
}))``;

export const ButtonDesktopThinPrimary = styled.button.attrs(() => ({
  className:
    "bg-primary text-white py-md px-xl text-14 leading-24 rounded-lite ml-3 cursor-pointer font-medium",
}))``;
