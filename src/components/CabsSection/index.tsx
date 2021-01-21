import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TitleCaption, Subtitle, Source } from "../Globals";
import { Paragraph, ParagraphBold } from "../Globals";
import { LayoutSections } from "../Globals";
import { Sup } from "../Globals/Paragraph.styles";
import { Space } from "../Globals/Wrappers.styles";
import { WrapButtons, ButtonScheduled, ButtonLocation } from "./Buttons.styles";
const index = () => {
  const [showVideoDesktop, setShowVideoDesktop] = useState(false);
  const [showVideoMobile, setShowVideoMobile] = useState(false);

  return (
    <LayoutSections>
      <LayoutSections.Left>
        <div className="hidden lg:flex lg:items-center lg:h-full">
          <div onClick={() => setShowVideoDesktop(true)}>
            {!showVideoDesktop && (
              <Image
                src={require("../../assets/images/cover-video-eva-play.jpg")}
                className="rounded-lite h-220 md:h-400 lg:h-85p"
                width="1000"
                height="600"
              />
            )}
          </div>
          {showVideoDesktop && (
            <video
              className="rounded-lite h-220 md:h-400 lg:h-85p"
              width="100%"
              style={{ objectFit: "cover" }}
              src={require("../../assets/videos/eva_completo.mp4")}
              controls
              autoPlay
              playsInline
            />
          )}
        </div>
        <div className="lg:hidden">
          <div onClick={() => setShowVideoMobile(true)}>
            {!showVideoMobile && (
              <Image
                src={require("../../assets/images/cover-video-eva-play-mobile.jpg")}
                className="rounded-lite h-220 md:h-400"
                width="1000"
                height="600"
              />
            )}
          </div>
          {showVideoMobile && (
            <video
              className="rounded-lite h-220 md:h-400"
              width="100%"
              style={{ objectFit: "cover" }}
              src={require("../../assets/videos/eva_completo.mp4")}
              controls
              autoPlay
              playsInline
            />
          )}
        </div>
      </LayoutSections.Left>
      <LayoutSections.Right>
        <TitleCaption>Descubre</TitleCaption>
        <Subtitle>
          Cabinas <br /> inteligentes
        </Subtitle>
        <Paragraph style={{ paddingBottom: "24px" }}>
          El 97% de los casos de cáncer de mama detectados a tiempo son
          completamente curables<Sup>1</Sup>. <Space />
          <br /> En Eva Center, mujeres de todas las edades pueden vivir una
          experiencia íntima para conocer más sobre la salud de sus pechos en{" "}
          <ParagraphBold>menos de 10 minutos</ParagraphBold> y{" "}
          <ParagraphBold>por sólo MX$400</ParagraphBold>
        </Paragraph>
        <WrapButtons>
          <Link href="/citas">
            <ButtonLocation>Ver ubicaciones</ButtonLocation>
          </Link>
          <Link href="/citas">
            <ButtonScheduled>Agendar cita</ButtonScheduled>
          </Link>
        </WrapButtons>
        <Source>1. Fuente www.cancer.gov</Source>
      </LayoutSections.Right>
    </LayoutSections>
  );
};

export default index;
