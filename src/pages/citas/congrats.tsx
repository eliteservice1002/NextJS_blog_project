import React, { Fragment, useEffect, useState } from "react";
import moment from "moment-timezone";
import "moment/locale/es";
import AddToCalendar from "react-add-to-calendar";
import { useRouter } from "next/router";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SEOUpdate from "../../components/SEO/update";

import { getCenter, getTime, getUser } from "../../untils/localStorage";
import { Center, FormUser } from "../../untils/interfaces";

import { Bold } from "../../components/Bookings/Globals/index.styles";
import { WrapSection } from "../../components/Bookings/Date/Date.styles";
import {
  CalendarIcon,
  CardOff,
  CardOffText,
  Flex,
  FlexMiddle,
  Icon,
  IndicationItemText,
  IndicationTitle,
  IndicationTitleHours,
  InviteButton,
  ListItem,
  LocationButton,
  LocationIcon,
  TextCongrat,
  TextDescription,
  TextInfo,
  TextName,
  TimeIcon,
  Wrap,
  WrapIconAndInfo,
} from "../../components/Bookings/Congrat/Congrat.styles";

moment.locale("es");
const congrats = () => {
  const router = useRouter();
  const [user, setUser] = useState<FormUser>();
  const [center, setCenter] = useState<Center>();
  const [time, setTime] = useState("");
  const [fullAddress, setFullAddress] = useState("");

  useEffect(() => {
    const center = getCenter();
    // If no center return to select page
    if (!center) {
      router.push("/citas");
    }
    const time = getTime();
    // If no time return to select page
    if (!time) {
      router.push("/citas/fecha");
    }
    const user = getUser();
    // If no time return to select page
    if (!user) {
      router.push("/citas/datos");
    }

    setUser(user);
    setCenter(center);
    setTime(time);
    setFullAddress(
      center.street +
        ", " +
        center.district +
        ", " +
        center.zipCode +
        ", " +
        center.city.name +
        ", " +
        center.city.state.name,
    );
  }, []);

  if (!center || !user || !time) {
    return <div />;
  }

  return (
    <Fragment>
      <SEOUpdate
        title="Eva Center - Agendar Citas"
        description="Eva Center, la mejor tecnología para cuidar la salud de tus pechos"
        url="https://evacenter.com/citas/congrats"
      />
      <Header noTransaparent />
      <WrapSection>
        <Wrap>
          <Flex>
            <FlexMiddle>
              <TextCongrat>¡Felicidades!</TextCongrat>
              {user && (
                <TextName>
                  <span className="capitalize">
                    {user.firstName.toLowerCase()}
                  </span>
                  , tu cita está confirmada
                </TextName>
              )}
              <div className="py-5">
                <WrapIconAndInfo>
                  <CalendarIcon />{" "}
                  <TextInfo>{moment(time).format("dddd DD MMM yyyy")}</TextInfo>
                </WrapIconAndInfo>
                <WrapIconAndInfo>
                  <TimeIcon />{" "}
                  <TextInfo>
                    {moment(time).format("HH:mm a").toUpperCase()}
                  </TextInfo>
                </WrapIconAndInfo>
                {center && (
                  <WrapIconAndInfo>
                    <LocationIcon />{" "}
                    <TextInfo>{center.name.toLowerCase()}</TextInfo>
                  </WrapIconAndInfo>
                )}
              </div>
              <div className="flex py-4">
                <img
                  src={require("../../assets/images/cabina.jpg")}
                  alt=""
                  className="mr-6 h-90"
                />
                <div>
                  {center && (
                    <TextDescription>{center.reference}</TextDescription>
                  )}
                  {center && (
                    <div className="py-6">
                      <TextDescription>
                        {fullAddress
                          .toLowerCase()
                          .replace(/(^|\s)\S/g, (L) => L.toUpperCase())}
                      </TextDescription>
                    </div>
                  )}
                  <LocationButton href={center.mapUrl} target="_blank">
                    Abrir ubicación
                  </LocationButton>
                </div>
              </div>
              <AddToCalendar
                event={{
                  title: "Cita en Eva Center",
                  location: `${center.name}, ${center.city.name}`,
                  startTime: time,
                  endTime: moment(time).add(10, "minutes").toDate(),
                }}
                buttonLabel="Agregar a mi calendario"
              />
            </FlexMiddle>
            <FlexMiddle>
              <div className="flex justify-center">
                <img
                  src={require("../../assets/images/ilustracion.png")}
                  alt=""
                />
              </div>
            </FlexMiddle>
          </Flex>
          <div className=" border border-t-2 p-10">
            <IndicationTitle>Indicaciones para tu cita</IndicationTitle>
            <div className="flex flex-row-reverse flex-wrap pt-4">
              <FlexMiddle>
                <IndicationTitleHours>Previas 6 hrs:</IndicationTitleHours>
                <ul>
                  <ListItem>
                    <Icon src={require("../../assets/images/icon2.png")} />
                    <IndicationItemText>
                      No poner en tus pechos o axílas: cremas cosméticas,
                      lociones, perfumes, desodorantes y/o antitranspirantes.
                    </IndicationItemText>
                  </ListItem>
                  <ListItem>
                    <Icon src={require("../../assets/images/icon3.png")} />
                    <IndicationItemText>
                      No consumir cafeína (café, té, infusiones o energizantes).
                    </IndicationItemText>
                  </ListItem>
                  <ListItem>
                    <Icon src={require("../../assets/images/icon4.png")} />
                    <IndicationItemText>
                      No consumir bebidas alcohólicas.
                    </IndicationItemText>
                  </ListItem>
                  <ListItem>
                    <Icon src={require("../../assets/images/icon5.png")} />
                    <IndicationItemText>No fumar.</IndicationItemText>
                  </ListItem>
                  <ListItem>
                    <Icon src={require("../../assets/images/icon6.png")} />
                    <IndicationItemText>
                      No realizar ejercicios vigorosos.
                    </IndicationItemText>
                  </ListItem>
                  <ListItem>
                    <Icon src={require("../../assets/images/icon7.png")} />
                    <IndicationItemText>
                      No tomar baños de vapor o saunas.
                    </IndicationItemText>
                  </ListItem>
                </ul>
              </FlexMiddle>
              <FlexMiddle>
                <IndicationTitleHours>Previas 12 hrs:</IndicationTitleHours>
                <ul>
                  <ListItem>
                    <Icon src={require("../../assets/images/icon.png")} />
                    <IndicationItemText>
                      No afeitar el área de las axilas ni de los pechos.
                    </IndicationItemText>
                  </ListItem>
                  <ListItem>
                    <Icon src={require("../../assets/images/icon1.png")} />
                    <IndicationItemText>
                      No broncearte o exponer el área de los pechos a alta
                      radiación solar.
                    </IndicationItemText>
                  </ListItem>
                  <ListItem>
                    <div>
                      <CardOff>
                        <img
                          src={require("../../assets/images/Ellipse.png")}
                          alt=""
                          style={{ width: "100px", height: "100px" }}
                        />
                        <div className="w-full px-6">
                          <CardOffText>
                            Trae a una invitada a tu cita y vivan la experiencia
                            EVA <Bold>por solo $200 cada una.</Bold>
                          </CardOffText>
                        </div>
                        <div className="w-full flex justify-center">
                          <InviteButton
                            id="boton_invitar_congrats"
                            href="https://api.whatsapp.com/send?phone=&text=Al ir juntas a una cita en Eva, obtenemos el segundo estudio con un 50% de descuento presentando el código *R-REFERIDAEVA* 🎉 . ¿Me acompañas?"
                            target="_blank"
                          >
                            Invitar
                          </InviteButton>
                        </div>
                      </CardOff>
                    </div>
                  </ListItem>
                </ul>
              </FlexMiddle>
            </div>
          </div>
        </Wrap>
      </WrapSection>
      <Footer />
    </Fragment>
  );
};

export default congrats;
