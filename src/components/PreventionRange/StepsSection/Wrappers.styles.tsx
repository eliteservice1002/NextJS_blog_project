import styled from "styled-components";

interface Wrap {
  readonly padding: string;
}

export const Wrap = styled.div.attrs<Wrap>(({ padding }) => ({
  className: `lg:px-sl px-6  ${padding}`,
}))<Wrap>``;

export const WrapSteps = styled.div.attrs(() => ({
  className: "lg:flex lg:justify-around ",
}))``;
export const WrapStepsWhitBg = styled.div.attrs(() => ({
  className: "lg:flex lg:justify-around bg-line bg-center bg-no-repeat",
}))`
  background-size: 80%;
`;
