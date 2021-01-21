import styled from "styled-components";

interface ButtonProps {
  readonly primary: boolean;
}

export const StyledButton = styled.button.attrs<ButtonProps>(({ primary }) => ({
  className: `${
    primary && "bg-primary text-white"
  } border border-white text-white py-md px-xl font-spectral text-16 leading-24 rounded-lite mr-3 inline-flex items-center`,
}))<ButtonProps>`
  outline: none !important;
`;

export const Submit = styled.button.attrs({
  className:
    "w-64 lg:mt-8 bg-white text-primary py-md px-xl font-spectral text-16 leading-24 rounded-lite inline-flex items-center disabled:cursor-not-allowed lg:w-48 justify-center text-center",
})``;

export const BannerButtonSm = styled.div.attrs<ButtonProps>(({ primary }) => ({
  className: `${
    primary ? "bg-primary text-white" : "bg-white text-primary"
  } text-16 rounded-lite mt-3 flex justify-center items-center font-spectral`,
}))<ButtonProps>`
  width: 154px;
  height: 44px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

export const BannerButtonLg = styled.div.attrs<ButtonProps>(({ primary }) => ({
  className: `${
    primary ? "bg-primary text-white" : "bg-white text-primary"
  } text-24 rounded-lite flex justify-center items-center font-spectral`,
}))<ButtonProps>`
  width: 207px;
  height: 61px;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 37px;
`;
