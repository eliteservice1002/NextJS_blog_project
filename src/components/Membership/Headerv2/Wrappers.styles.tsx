import styled from "styled-components";

export const MenuWrap = styled.ul.attrs(() => ({
  className: "hidden lg:flex h-full items-center",
}))``;
export const MenuWrapMobile = styled.ul.attrs(() => ({
  className: "lg:hidden  h-full py-4 px-4",
}))``;

export const MenuLink = styled.li.attrs(() => ({
  className: "font-haptik lg:mr-6 pb-6 lg:pb-0",
}))`
  font-family: hthaptik;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.05em;
  font-feature-settings: "ss04" on;
  color: #ffffff;
`;

export const IconMenuWrap = styled.div.attrs(() => ({
  className: "lg:hidden",
}))``;
