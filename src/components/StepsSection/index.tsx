import React, { Fragment } from "react";
import {
  TextBig,
  TitleSmall,
  ParagraphSmall,
  ParagraphSmallBold,
} from "../Globals";
import {
  StepImage,
  StepContent,
  StepDescription,
  StepNote,
  StepImageMobile,
} from "./Step.styles";
import { Wrap, WrapSteps, WrapStepsWhitBg } from "./Wrappers.styles";

const index = ({ padding }: { padding: string }) => {
  return (
    <Wrap padding={padding}>
      <TextBig className="mb-6">Una experiencia creada para ti</TextBig>
      <WrapStepsWhitBg>
        <StepImage url={require("../../assets/images/pasos-01.jpg")} />
        <StepImage url={require("../../assets/images/pasos-02.jpg")} />
        <StepImage url={require("../../assets/images/pasos-03.jpg")} />
        <StepImage url={require("../../assets/images/pasos-04.jpg")} />
      </WrapStepsWhitBg>
      <WrapSteps>
        <StepContent WhitBg>
          <Fragment>
            <StepImageMobile
              url={require("../../assets/images/pasos-01.jpg")}
            />
            <StepDescription>
              <TitleSmall>Bienvenida</TitleSmall>
              <ParagraphSmall>
                Conocemos tu historial médico y familiar para darte resultados
                precisos
              </ParagraphSmall>
            </StepDescription>
          </Fragment>
        </StepContent>

        <StepContent WhitBg>
          <Fragment>
            <StepImageMobile
              url={require("../../assets/images/pasos-02.jpg")}
            />
            <StepDescription>
              <TitleSmall>Relajación</TitleSmall>
              <ParagraphSmall>
                Te guiamos a través de un momento de relajación para regular la
                temperatura de tus pechos en completa privacidad.
              </ParagraphSmall>
            </StepDescription>
          </Fragment>
        </StepContent>

        <StepContent WhitBg>
          <Fragment>
            <StepImageMobile
              url={require("../../assets/images/pasos-03.jpg")}
            />
            <StepDescription>
              <TitleSmall>Estudio Eva</TitleSmall>
              <ParagraphSmall>
                Se realizan las tomas térmicas de tus pechos sin contacto ni
                radiación
              </ParagraphSmall>
            </StepDescription>
          </Fragment>
        </StepContent>

        <StepContent>
          <Fragment>
            <StepImageMobile
              url={require("../../assets/images/pasos-04.jpg")}
            />
            <StepDescription>
              <TitleSmall>Resultado</TitleSmall>
              <ParagraphSmall>
                Nuestros médicos analizan y envían tus resultados entre{" "}
                <ParagraphSmallBold>24 a 48 horas </ParagraphSmallBold>
                <br />
                <StepNote>
                  (La explicación del resultado es guiada por nuestros médicos)
                </StepNote>
              </ParagraphSmall>
            </StepDescription>
          </Fragment>
        </StepContent>
      </WrapSteps>
    </Wrap>
  );
};

export default index;
