import React from "react";
import Image from "next/image";
import {
  Layout,
  Card,
  CardContent,
  CardLayout,
  TitleCard,
  SubTitleCard,
} from "./Wrappers.styles";
import { TitleCaption, Subtitle, Paragraph } from "../Globals";
import data from "./Data";
const index = () => {
  return (
    <Layout>
      <Layout.Left>
        <TitleCaption>Conoce</TitleCaption>
        <Subtitle>
          Investigación <br /> y Respaldo
        </Subtitle>
        <Paragraph>
          Miles de pacientes en pruebas clínicas y 10 publicaciones científicas
          en revistas internacionales
        </Paragraph>
      </Layout.Left>
      <Layout.Right>
        <CardContent>
          {data.map((el, index) =>
            el.link !== "" ? (
              <a href={el.link} target="_blank" key={"inv-" + index}>
                <CardLayout>
                  <CardLayout.Top>
                    <Image
                      src={el.urlImg}
                      className="rounded-t-1.25rem"
                      width="212"
                      height="235"
                    />
                  </CardLayout.Top>
                  <CardLayout.Bottom color={el.color}>
                    <TitleCard>{el.title}</TitleCard>
                    <SubTitleCard>{el.subtitle}</SubTitleCard>
                  </CardLayout.Bottom>
                </CardLayout>
              </a>
            ) : (
              <CardLayout key={"inv-" + index}>
                <CardLayout.Top>
                  <Image
                    src={el.urlImg}
                    className="rounded-t-1.25rem"
                    width="212"
                    height="235"
                  />
                </CardLayout.Top>
                <CardLayout.Bottom color={el.color}>
                  <TitleCard>{el.title}</TitleCard>
                  <SubTitleCard>{el.subtitle}</SubTitleCard>
                </CardLayout.Bottom>
              </CardLayout>
            ),
          )}
        </CardContent>
      </Layout.Right>
    </Layout>
  );
};

export default index;
