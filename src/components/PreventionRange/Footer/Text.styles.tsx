import styled from "styled-components";

export const TextRef = styled.p.attrs(() => ({
  className: "lg:px-5 text-12 lg:text-14 pr-3 lg:leading-110 leading-18",
}))`
  font-family: hthaptik;
  font-style: normal;
  font-weight: 600;
  color: rgba(113, 99, 96, 0.5);
`;
export const LinkRef = styled.a.attrs(() => ({
  className:
    "lg:px-5 pr-2 text-12 lg:text-14 lg:leading-110 leading-18 text-left",
}))`
  font-family: hthaptik;
  font-style: normal;
  font-weight: 600;
  color: #716360;
`;

export const TitleSection = styled.p`
  font-family: hthaptik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #716360;
  font-feature-settings: "ss01" on;
`;
export const TextSection = styled.p`
  font-family: hthaptik;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: #716360;
  margin-bottom: 8px;
`;
export const TextSectionThin = styled.p`
  font-family: hthaptik;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: 0.05em;
  font-feature-settings: "ss04" on;
  color: #716360;
  padding-bottom: 10px;
`;

export const TextSectionCommunity = styled.p`
  font-family: hthaptik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: #716360;
  margin-bottom: 3px;
  opacity: 0.8;
`;
