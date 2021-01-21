import styled from "styled-components";

interface Padding {
  readonly padding: string;
}

export const Wrap = styled.div.attrs<Padding>(({ padding }) => ({
  className: `${padding}`,
}))<Padding>``;

export const WrapContent = styled.div.attrs(() => ({
  className: "flex lg:justify-between flex-wrap lg:flex-no-wrap",
}))``;
