import styled from "styled-components";

export const Paragraph = styled.p.attrs(() => ({
  className:
    "text-16 leading-20 lg:text-18 tracking-wider lg:leading-23 text-brownDark font-light lg:pr-10 font-hthaptik",
}))``;
export const ParagraphBold = styled.span.attrs(() => ({
  className: "font-bold font-hthaptik",
}))``;

export const Source = styled.p.attrs(() => ({
  className: "pt-12 md:mt-12 lg:pt-8 lg:text-12 lg:leading-15 text-10 leading-13",
}))`
  font-family: hthaptik;
  font-style: normal;
  font-weight: bold;
  letter-spacing: 0.05em;
  color: #716360;
`;
export const Source2 = styled.p.attrs(() => ({
  className: "pt-4 lg:pt-8 lg:text-12 lg:leading-15 text-10 leading-13",
}))`
  font-family: hthaptik;
  font-style: normal;
  font-weight: bold;
  letter-spacing: 0.05em;
  color: #716360;
`;

export const ParagraphSmall = styled.p.attrs(() => ({
  className: "lg:text-center",
}))`
  font-family: hthaptik;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: #716360;
`;

export const ParagraphSmallBold = styled.span`
  font-weight: bold;
`;

export const Sup = styled.sup`
  font-family: hthaptik;
  font-style: normal;
  font-weight: bold;
  letter-spacing: 0.05em;
  color: #716360;
`;