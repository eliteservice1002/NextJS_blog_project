import React from "react";
import { Subtitle, Paragraph, Flex, ParagraphBold } from "../Globals";
import { Wrap, WrapContent } from "./Wrappers.styles";

const Icon = () => (
  <svg
    className="mr-1"
    width="35"
    height="35"
    viewBox="0 10 7 1"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1L6 6L1 11"
      stroke="#EE8D8B"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const index = ({ padding }: { padding: string }) => {
  return (
    <Wrap padding={padding}>
      <Subtitle style={{ marginBottom: "10px" }}>¿Para quién es Eva?</Subtitle>
      <WrapContent>
        <Flex>
          <Icon />
          <Paragraph style={{ marginBottom: "18px" }}>
            Para las mujeres que buscan una{" "}
            <ParagraphBold>exploración profesional de mama</ParagraphBold> y que
            desean llevar un monitoreo preciso de la salud de sus pechos
          </Paragraph>
        </Flex>
        <Flex>
          <Icon />
          <Paragraph style={{ marginBottom: "18px" }}>
            Para mujeres de <ParagraphBold>todas las edades</ParagraphBold> que
            quieren conocer más sobre la salud de sus pechos de una manera
            práctica, rápida y confiable
          </Paragraph>
        </Flex>
        <Flex>
          <Icon />
          <Paragraph style={{ marginBottom: "18px" }}>
            Para mujeres que desean{" "}
            <ParagraphBold>
              complementar sus estudios de mamografía
            </ParagraphBold>
            , logrando así un monitoreo más completo
          </Paragraph>
        </Flex>
      </WrapContent>
    </Wrap>
  );
};

export default index;
