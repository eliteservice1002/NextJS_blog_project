import React from "react";
import { Caption } from "./Caption";
import { TextBig, TextBigBold } from "../Globals";
import Brand from "./Brand";
//@ts-ignore
import cofe from "../../assets/images/logo-cofepris.svg";
//@ts-ignore
import fda from "../../assets/images/logo-fda.svg";
//@ts-ignore
import ce from "../../assets/images/logo-ce.svg";
//@ts-ignore
import academy from "../../assets/images/logo-academy.svg";

import {
  Wrap,
  BrandsContent,
  BrandsWrapper,
  TextContent,
  LineContent,
  BrandOnlyMobile,
} from "./Wrappers.styles";

const index = ({ showText }: { showText: boolean }) => {
  return (
    <Wrap>
      <BrandsContent showText={`${!showText && "pb-8"}`}>
        <Caption> aprobado por:</Caption>
        <BrandsWrapper>
          <Brand url={cofe} />
          <Brand url={fda} />
          <Brand url={ce} />
          <Brand className="hidden lg:block" url={academy} />
        </BrandsWrapper>
        <BrandOnlyMobile>
          <Brand url={academy} />
        </BrandOnlyMobile>
      </BrandsContent>
      {showText && (
        <TextContent>
          <TextBig className="lg:w-3/6 w-full px-4 lg:px-0">
            Somos un examen sin dolor, privado y rápido para la detección
            auxiliar del <TextBigBold>cáncer de mama</TextBigBold>
          </TextBig>
        </TextContent>
      )}
      <LineContent>
        <hr />
      </LineContent>
    </Wrap>
  );
};

export default index;
