import React, { ReactNode } from "react";
import { ResponsiveHero } from "../common/ResponsiveImg";
import Approved from "../ApprovedSection";

import {
  TextBackground,
  StyledThinText,
  StyledBoldText,
  LinearBackground,
} from "../HeroSection/HeroContain.styles";

const index = ({
  imgWaveM,
  imgWaveD,
  imgM,
  imgD,
  children,
  startTitle,
  endTitle,
  padding,
  gradient,
}: {
  imgWaveM: string;
  imgWaveD: string;
  imgM: string;
  imgD: string;
  children?: ReactNode;
  startTitle: string;
  endTitle: string;
  padding?: string;
  gradient: string;
}) => {
  return (
    <div className="lg:h-650 ">
      <div className="relative h-315 lg:h-650 flex">
        <ResponsiveHero imgM={imgM} imgD={imgD} />
        <div className="w-full">
          <LinearBackground gradient={gradient}>
            <div
              className="lg:pl-24 lg:pr-24 w-full flex justify-center items-center flex-col h-315 lg:flex-row lg:h-450 lg:justify-between xl:justify-evenly lg:mt-24 "
              style={{ zIndex: 2 }}
            >
              <TextBackground>
                <StyledBoldText padding={padding}>{startTitle}</StyledBoldText>
                <StyledThinText>{endTitle}</StyledThinText>
                <div className="approved hidden lg:flex w-full">
                  <Approved />
                </div>
              </TextBackground>
              {children}
              <img
                className="w-full lg:hidden"
                width="100%"
                src={imgWaveM}
                alt=""
              />
            </div>
            <img
              style={{ zIndex: 1 }}
              className="-m-2 -mt-16 w-full hidden lg:flex"
              width="100%"
              src={imgWaveD}
              alt=""
            />
          </LinearBackground>
        </div>
      </div>
    </div>
  );
};

export default index;
