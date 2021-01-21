import React, { ReactNode } from "react";
import { Wrap, WrapImg, WrapContent, WrapText } from "./Wrappers.styles";

const index = ({
  text,
  darkText,
  img,
  children,
}: {
  text: string;
  darkText: string;
  img: string;
  children: ReactNode;
}) => (
  <Wrap>
    <WrapImg img={img}>
      <WrapContent>
        <WrapText bold={false}>
          {text}
          <span className="font-semibold">{darkText}</span>
        </WrapText>
        {children}
      </WrapContent>
    </WrapImg>
  </Wrap>
);
export default index;
