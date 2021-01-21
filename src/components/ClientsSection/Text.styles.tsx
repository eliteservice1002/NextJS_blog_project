import styled from "styled-components";

export const TextDesktop = styled.p.attrs(() => ({
  className: "hidden lg:block",
}))`
  font-family: hthaptik;
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: #716360;
`;
export const TextMobile = styled.p.attrs(() => ({
  className: "lg:hidden mb-6",
}))`
  font-family: hthaptik;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 140%;
  text-align: center;
  letter-spacing: 0.05em;
  color: #716360;
`;
