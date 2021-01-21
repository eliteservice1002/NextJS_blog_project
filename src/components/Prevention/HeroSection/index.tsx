import React from "react";
import {
  ImgBackground,
  TextBackground,
  StyledText,
  StyledBoldText,
} from "../HeroSection/HeroContain.styles";

const index = ({ img, children, startTitle, darkTitle, endTitle }) => {
  return (
    <ImgBackground img={img}>
      <TextBackground>
        <StyledText>
          {startTitle}
          <StyledBoldText>{darkTitle}</StyledBoldText>
          {endTitle}
        </StyledText>
        {children}
      </TextBackground>
    </ImgBackground>
  );
};

export default index;
