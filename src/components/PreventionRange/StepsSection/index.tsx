import React, { Fragment } from "react";
import {
  TextBig,
  TitleSmall,
  ParagraphSmall,
  ParagraphSmallBold,
} from "../../Globals";
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
      <TextBig className="mb-6">
        <span className="font-bold">Una experiencia creada para ti</span>
      </TextBig>
      <WrapStepsWhitBg>
        <StepImage url={require("../../../assets/images/pasos-01.jpg")} />
        <StepImage url={require("../../../assets/images/pasos-02.jpg")} />
        <StepImage url={require("../../../assets/images/pasos-03.jpg")} />
        <StepImage url={require("../../../assets/images/pasos-04.jpg")} />
      </WrapStepsWhitBg>
      <WrapSteps>
        <StepContent WhitBg>
          <Fragment>
            <StepImageMobile
              url={require("../../../assets/images/pasos-01.jpg")}
            />
            <StepDescription>
              <TitleSmall>Historial</TitleSmall>
              <ParagraphSmall>
                Creamos tu historial médico y familiar para darte resultados
                precisos.
              </ParagraphSmall>
            </StepDescription>
          </Fragment>
        </StepContent>

        <StepContent WhitBg>
          <Fragment>
            <StepImageMobile
              url={require("../../../assets/images/pasos-02.jpg")}
            />
            <StepDescription>
              <TitleSmall>Relajación</TitleSmall>
              <ParagraphSmall>
                Te guiamos para regular la temperatura de tus pechos en completa
                privacidad.
              </ParagraphSmall>
            </StepDescription>
          </Fragment>
        </StepContent>

        <StepContent WhitBg>
          <Fragment>
            <StepImageMobile
              url={require("../../../assets/images/pasos-03.jpg")}
            />
            <StepDescription>
              <TitleSmall>Tomas térmicas</TitleSmall>
              <ParagraphSmall>
                Se realiza el escaneo de mapas térmicos de tus pechos sin
                contacto ni radiación.
              </ParagraphSmall>
            </StepDescription>
          </Fragment>
        </StepContent>

        <StepContent>
          <Fragment>
            <StepImageMobile
              url={require("../../../assets/images/pasos-04.jpg")}
            />
            <StepDescription>
              <TitleSmall>Resultado</TitleSmall>
              <ParagraphSmall>
                Médicos radiólogos analizan y envían tus resultados entre
                <ParagraphSmallBold>24 a 48 horas hábiles. </ParagraphSmallBold>
                <br />
                <StepNote>
                  (La interpretación puede ser guiada por nuestros doctores).
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
