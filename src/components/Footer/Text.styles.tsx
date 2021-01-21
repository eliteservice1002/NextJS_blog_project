import styled from "styled-components";

export const TextRef = styled.p.attrs(() => ({
  className: "lg:px-5 text-12 lg:text-14 pr-3 lg:leading-110 leading-18",
}))`
  font-family: Spectral;
  font-style: normal;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.5);
`;
export const LinkRef = styled.a.attrs(() => ({
  className: "lg:px-5 pr-2 text-12 lg:text-14 lg:leading-110 leading-18",
}))`
  font-family: Spectral;
  font-style: normal;
  font-weight: 600;
  color: #ffffff;
`;

export const TitleSection = styled.p`
  font-family: hthaptik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;
export const TextSection = styled.p`
  font-family: hthaptik;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: #ffffff;
  margin-bottom: 8px;
`;
export const TextSectionThin = styled.p`
  font-family: hthaptik;
  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: 0.05em;
  font-feature-settings: "ss04" on;
  color: #ffffff;
  padding-bottom: 10px;
`;
