import styled from "styled-components";

export const ButtonWhiteDesktop = styled.button.attrs(() => ({
  className:
    "flex content-center flex-wrap justify-center bg-white text-primary text-24 rounded-lite",
}))`
  width: 207px;
  height: 61px;
  font-family: Spectral;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 37px;
  text-align: center;
  outline: none !important;
`;
export const ButtonScheduledMobile = styled.div.attrs(() => ({
  className:
    "flex content-center flex-wrap justify-center bg-white text-primary text-16 rounded-lite mt-3 z-0",
}))`
  width: 154px;
  height: 44px;
  font-family: Spectral;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;

export const ButtonEnterprise = styled.button.attrs(() => ({
  className: "bg-primary text-white  rounded-lite mt-3",
}))`
  padding: 12px 24px;
  background: #ee8d8b;
  font-family: Spectral;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 37px;
  text-align: right;
  outline: none !important;
`;

export const ButtonEnterpriseMobile = styled.button.attrs(() => ({
  className: "bg-primary text-white  rounded-lite mt-3",
}))`
  padding: 10px 24px;
  font-family: Spectral;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 110%;
  outline: none !important;
`;
