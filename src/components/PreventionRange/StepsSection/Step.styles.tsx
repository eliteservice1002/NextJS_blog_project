import styled from "styled-components";
import { ReactNode, Fragment, ReactChild } from "react";

//=============LOCALS========
const WrapDescription = styled.div.attrs(() => ({
  className: "lg:flex lg:justify-center ml-4 lg:ml-0 lg:pt-4",
}))``;

const WrapDescriptionContent = styled.div.attrs(() => ({
  className: "lg:w-3/5 w-4/5",
}))``;

const WrapImageDesktop = styled.div.attrs(() => ({
  className: "hidden lg:flex lg:justify-center",
}))``;

const ImagenDesktop = styled.img.attrs(() => ({
  className: "h-160 w-160",
}))`
  border-radius: 80px;
`;

const ImageMobile = styled.img.attrs(() => ({
  className: "h-108 w-108 lg:hidden",
}))`
  border-radius: 80px;
`;

//=============EXPORTS========
interface Props {
  WhitBg?: boolean;
  children: ReactChild;
}

export const StepContentWrap = styled.div`
  flex: 1;
  background-size: 35%;
`;

export const StepContent = ({ WhitBg = false, children }: Props) => (
  <StepContentWrap
    className={`lg:block flex pb-12 lg:bg-opacity-0 lg:mb-0 ${
      WhitBg && "bg-no-repeat"
    }`}
  >
    {children}
  </StepContentWrap>
);

export const StepImage = ({ url }: { url: string }) => (
  <Fragment>
    <WrapImageDesktop>
      <ImagenDesktop src={url} />
    </WrapImageDesktop>
  </Fragment>
);
export const StepImageMobile = ({ url }: { url: string }) => (
  <ImageMobile src={url} />
);

export const StepDescription = ({ children }: { children: ReactNode }) => (
  <WrapDescription>
    <WrapDescriptionContent>{children}</WrapDescriptionContent>
  </WrapDescription>
);

export const StepNote = styled.span`
  font-family: hthaptik;
  font-weight: medium oblique;
  font-size: 12px;
  letter-spacing: 0.05em;
  color: rgb(113 99 96);
  margin-top: 12px;
`;
