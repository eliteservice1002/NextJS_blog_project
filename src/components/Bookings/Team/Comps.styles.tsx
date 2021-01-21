import styled, { css } from "styled-components";

interface Props {
  disabled?: boolean;
}

export const Button = styled.button<Props>`
  color: white;
  background: #5c2933;
  border: 1px solid #5c2933;
  border-radius: 5px;
  box-sizing: border-box;
  font-family: sans-serif;
  text-align: center;
  padding: 10px 15px 10px 15px;
  font-size: 1rem;
  width: 50%;
  outline: none;

  ${(props) =>
    props.disabled &&
    css`
      background: rgba(92, 41, 51, 0.2);
      border: 1px solid rgba(92, 41, 51, 0.2);
      box-sizing: border-box;
      pointer-events: none;
      cursor: default;
    `}
`;

export const Title = styled.h1.attrs(() => ({
  className: "font-hthaptik font-thin",
}))`
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  line-height: 19px;
  text-align: center;
  color: #202224;

  @media (min-width: 1025px) {
    font-size: 1rem;
  }
`;

export const MainContainer = styled.div`
  height: 50vh;
  width: 90%;
  margin: 0 auto;

  @media screen and (max-height: 547px) {
    height: 45vh;
    overflow-y: scroll;
  }
`;

export const ButtonSection = styled.div`
  margin: 0 auto;
  width: 90%;
  top: 76%;
  margin-top: 6%;
  height: 70px;
`;
