import React from "react";
import styled from "styled-components";

export const Container = styled.div.attrs(() => ({
  className: "w-full text-center pb-10 px-10",
}))`
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 130%;
  color: #716360;
`;

export const Action = styled.a.attrs(() => ({
  className: "",
}))`
  font-weight: bold;
  color: #ee8d8b;
`;

const HelpSection = () => {
  return (
    <Container>
      ¿Necesitas ayuda?{" "}
      <Action
        href="https://api.whatsapp.com/send?phone=522214139817&text=Hola, necesito ayuda para agender mi cita"
        target="_blank"
      >
        Chatea ahora
      </Action>{" "}
      o llama al <Action href="tel:5553508883">(55) 5350-8883</Action>.
    </Container>
  );
};

export default HelpSection;
