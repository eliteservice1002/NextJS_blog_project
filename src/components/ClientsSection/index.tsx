import React from "react";
import Image from "next/image";
import { Wrap, FlexMiddle, TextContent } from "./Wrappers.styles";
import { TextDesktop, TextMobile } from "./Text.styles";

const index = () => {
  return (
    <Wrap>
      <FlexMiddle>
        <TextContent>
          <TextDesktop>
            Algunas de las empresas con <br /> las que hemos colaborado
          </TextDesktop>
          <TextMobile>
            Algunas de las empresas con las <br /> que hemos colaborado
          </TextMobile>
        </TextContent>
      </FlexMiddle>
      <FlexMiddle>
        <div className="flex justify-center">
          <Image
            width="750"
            height="380"
            className="object-center object-cover"
            src={require("../../assets/images/logos-empresas.svg")}
          />
        </div>
      </FlexMiddle>
    </Wrap>
  );
};

export default index;
