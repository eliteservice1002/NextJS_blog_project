import styled from "styled-components";

export const WrapDesktop = styled.div.attrs(() => ({
  className: "lg:px-sl hidden lg:block pt-10 bg-white",
}))``;
export const WrapMobile = styled.div.attrs(() => ({
  className: "lg:px-32 block lg:hidden px-4 py-6 bg-white",
}))``;

export const WrapDesktopCopy = styled.div.attrs(() => ({
  className: "w-full flex py-12 justify-center border-t text-white",
}))`
  font-family: Spectral;
`;
export const WrapMobileCopy = styled.div.attrs(() => ({
  className: "w-full py-8 flex justify-center border-t text-white",
}))`
  font-family: Spectral;
`;

export const WrapDesktopQuartes = styled.div.attrs(() => ({
  className: "w-full flex py-5 justify-end flex-wrap  px-2 lg:px-0",
}))``;

export const WrapDesktopQuarter = styled.div.attrs(() => ({
  className: "w-full lg:w-1/4 px-5 text-white",
}))``;

export const WrapCopyContent = styled.div.attrs(() => ({
  className: "flex flex-wrap justify-center",
}))``;

export const List = styled.ul.attrs(() => ({
  className: " py-4",
}))``;

export const ListItem = styled.li.attrs(() => ({
  className: " flex mb-2",
}))``;

export const Icon = styled.i.attrs(() => ({
  className: "mr-2",
}))``;
export const IconMobile = styled.div.attrs(() => ({
  className: "mr-2 flex items-center",
}))``;

export const ListIcons = styled.ul.attrs(() => ({
  className: "flex justify-between items-center py-2 h-full",
}))``;

export const SocialLink = styled.a.attrs(() => ({
  className: "flex",
}))``;
