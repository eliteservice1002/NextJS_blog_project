import React from "react";
import Image from "next/image";
import { TitleCaption, Subtitle } from "../Globals";
import { Paragraph, ParagraphBold } from "../Globals";
import { LayoutSections } from "../Globals";
import { Source2, Sup } from "../Globals/Paragraph.styles";
import { Space } from "../Globals/Wrappers.styles";
import { ButtonShowMore } from "./Buttons.styles";
const index = () => {
  return (
    <LayoutSections>
      <LayoutSections.Left>
        <Image
          layout="responsive"
          width="750"
          height="420"
          src={require("../../assets/images/banner-tecnologia.jpg")}
        />
      </LayoutSections.Left>
      <LayoutSections.Right>
        <TitleCaption>Termografía</TitleCaption>
        <Subtitle>Tecnología Eva</Subtitle>
        <Paragraph>
          A través de la tecnología más avanzada creamos un mapa térmico de tus
          pechos. Eva es un estudio de imagen capaz de detectar anormalidades
          que son indicativas de cáncer de mama.
          <Space />
          <br />
          Cuando conjuntas a Eva con tu mastografía
          <ParagraphBold>
            {" "}
            la precisión es de hasta un 96% <Sup>2</Sup>.
          </ParagraphBold>
        </Paragraph>
        <Source2>
          2. Omranipour R, Kazemian A, Alipour S, et al. Comparison of the
          Accuracy of Thermography and Mammography in the Detection of Breast
          Cancer. Breast Care (Basel)
        </Source2>
      </LayoutSections.Right>
    </LayoutSections>
  );
};

export default index;
