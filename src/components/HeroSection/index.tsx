import React from "react";
import Link from "next/link";

import { Title, TitleBold } from "../Globals";
import { HeroContain } from "./HeroContain";
import {
  ButtonContactHero,
  ButtonScheduledHero,
  ContentButtons,
  WrapButton,
} from "./Buttons";
import { ContentBackground, Content } from "./Content";

const index = () => {
  return (
    <HeroContain>
      <ContentBackground>
        <Content>
          <Title>
            <TitleBold>
              La mejor tecnología para cuidar la salud de tus pechos
            </TitleBold>
          </Title>
          <ContentButtons>
            <WrapButton>
              <ButtonScheduledHero>
                <Link href="/citas" passHref>
                  <a>Agendar cita</a>
                </Link>
              </ButtonScheduledHero>
            </WrapButton>
            <WrapButton>
              <ButtonContactHero>
                <a href="https://api.whatsapp.com/send?phone=522214139817&text=¡Hola!, me interesa más información sobre los Centros de Eva">
                  Contáctanos
                </a>
              </ButtonContactHero>
            </WrapButton>
          </ContentButtons>
        </Content>
      </ContentBackground>
    </HeroContain>
  );
};

export default index;
