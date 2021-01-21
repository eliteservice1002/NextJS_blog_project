import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastProvider } from "react-toast-notifications";
import { useToasts } from "react-toast-notifications";
import moment, { Moment } from "moment";

import Footer from "../Footer";
import Paycard from "../../Bookings/Paycard";
import { Loader } from "../../Loader";
import SEOUpdate from "../../SEO/update";
import Coupon from "../../Bookings/Coupon";
import { BackIcon, CalendarIcon, TimeIcon } from "./Icons";

import {
  UserBooking,
  ValidateCouponResponse,
  Center,
} from "../../../untils/interfaces";
import * as LocalStorage from "../../../untils/localStorage";
import { getCalendar, sendBooking, validateCoupon } from "../../../untils/api";

import {
  ButtonPayConfirm,
  Card,
  CardContent,
  ItemCardLeft,
  ItemCardRight,
  MethodDescription,
  PayMethodSelect,
  Subtitle,
  TitleCard,
  Total,
  TotalCoupon,
  WrapperInCenter,
} from "../../Bookings/Pay/Pay.styles";
import { Flex } from "../../Bookings/Globals/index.styles";
import {
  FullAddressCenter,
  NameCenter,
  NameCity,
  Separator,
} from "../../Bookings/Date/Date.styles";
import { getCenter, getTime } from "../../../untils/localStorage";

import {
  DateDescription,
  WrapDatesInfo,
} from "../../Bookings/Form/Form.styles";

// Free week validation
const initialDay = moment("2020-10-17");
const finallDay = moment("2020-10-24");

const Pay = ({ route }) => {
  const router = useRouter();
  const { addToast } = useToasts();
  const [paymethod, setPaymethod] = useState("Card");
  const [loading, setLoading] = useState<boolean>(false);
  const [date, setDate] = useState<Moment>();
  const [errorCoupon, setErrorCoupon] = useState(false);
  const [coupon, setCoupon] = useState<ValidateCouponResponse>();
  const [codeCoupon, setCodeCoupon] = useState("");
  const [discountCoupon, setDiscountCoupon] = useState(0);
  const [loadCoupon, setLoadCoupon] = useState(false);
  const [fullAddress, setFullAddress] = useState("");
  const [center, setCenter] = React.useState<Center>();
  const [time, setTime] = React.useState<string>();
  const fakepayment =
    process.env.NEXT_PUBLIC_FAKE_PAYMENT == "true" ? true : false;

  useEffect(() => {
    window.scrollTo(0, 0);
    const date = moment(LocalStorage.getTime() || "");
    setDate(date);
    const centro = getCenter();
    setFullAddress(
      centro.street +
        ", " +
        centro.district +
        ", " +
        centro.zipCode +
        ", " +
        centro.city.name +
        ", " +
        centro.city.state.name,
    );
    setCenter(centro);
    const time = getTime();
    // If no time return to select page
    if (!time) {
      router.push("/citas/fecha");
    }
    setTime(time);
    if (!(date < initialDay || date > finallDay)) {
      setCodeCoupon("FREE_WEEK_OCT");
      setDiscountCoupon(100);
      setPaymethod("FreeWeek");
    }
  }, []);

  if (!center || !time) {
    return <div />;
  }

  const onChangeCoupon = (e) => {
    setCodeCoupon(e.target.value.trim().toUpperCase());
    setCoupon(undefined);
  };

  const onSubmitCoupon = (e) => {
    setLoadCoupon(true);
    e.preventDefault();
    validateCoupon(codeCoupon)
      .then((c) => {
        setCoupon(c);
        setDiscountCoupon(c.data.coupon.currentPercentageDiscount);
        setErrorCoupon(false);
        setLoadCoupon(false);
      })
      .catch((e) => {
        setCoupon(undefined);
        setErrorCoupon(true);
        setLoadCoupon(false);
      });
  };
  const sendData = async (medium: string, codeCoup?: string) => {
    const user = LocalStorage.getUser();
    const date = LocalStorage.getTime() || "";

    const center = LocalStorage.getCenter();
    const query = LocalStorage.getQueryParams() || {};
    const id = center?.id;
    const calendarid = center?.calendarId;

    setLoading(true);

    const hoy = moment(date).format("YYYY-MM-DD");

    getCalendar(hoy, center?.calendarId || "3198564").then((resp) => {
      const todayis = resp.data.datetimes.find(
        (el) =>
          el.date.substring(2, el.date.length) ==
          moment(date || "").format("YYYY-MM-DD"),
      ) || { times: [], date: "" };
      if (todayis.times.length == 0) {
        setLoading(false);
        addToast(
          "Lo sentimos, por el momento ya no tenemos citas disponibles el día de seleccionado",
          {
            appearance: "warning",
            autoDismiss: true,
          },
        );
        return;
      }

      const hay = todayis.times.find((el) => el.time == date);

      if (!hay) {
        setLoading(false);
        addToast(
          "Lo sentimos, la hora que elegiste probablemente ya no esta disponible, por favor selecciona otra",
          {
            appearance: "warning",
            autoDismiss: true,
          },
        );
        return;
      }
      const D = () => {
        const da = moment(date || Date.now())
          .utc()
          .format();
        const d = da.substring(0, da.length - 1);
        return d + ".000Z";
      };
      const val = D();

      const data: UserBooking = {
        firstName: user.firstName,
        lastName: `${user.lastNamePaternal} ${user.lastNameMaternal}`,
        email: user.email,
        cellphone: user.cellphone,
        hearAboutUs: user.hearAboutUs,
        birthdate: user.birthdate,
        centerId: id || "",
        datetime: val,
        amount: coupon || codeCoup ? 400 - 400 * (discountCoupon / 100) : 400,
        currency: "mxn",
        sex: "FEMALE",
        calendarId: Number(calendarid),
        medium,
        utmCampaign: query.utm_campaign,
        utmMedium: query.utm_medium,
        utmSource: query.utm_source,
        utmTerm: query.utm_term,
        utmContent: query.utm_content,
        test: query.test,
        code: coupon || codeCoup ? codeCoupon : undefined,
        fake: fakepayment,
      };
      sendBooking(data)
        .then((resp) => {
          if (medium == "OXXO") {
            typeof window !== undefined &&
              localStorage.setItem(
                "oxxoPayResponse",
                JSON.stringify(resp.data.booking.paymentOxxo),
              );
            router.push("oxxo");
          } else {
            router.push("congrats");
          }
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          addToast(
            "Lo sentimos, no pudimos agendar tu cita, intenta mas tarde",
            {
              appearance: "warning",
              autoDismiss: true,
            },
          );
        });
    });
  };
  return (
    <Fragment>
      <SEOUpdate
        title="Eva Center - Agendar Citas"
        description="Eva Center, la mejor tecnología para cuidar la salud de tus pechos"
        url={`https://evacenter.com/${route}/datos`}
      />
      <div className="pt-2 lg:pt-1 w-full lg:px-32 ">
        <div
          onClick={() => {
            router.push(`/${route}/datos`);
          }}
          className="relative flex items-center cursor-pointer px-4 md:pl-8 pt-8 lg:pb-4 lg:pt-12"
        >
          <BackIcon />
          <div
            style={{ color: "#716360" }}
            className="ml-2 text-center w-full font-medium text-lg lg:text-3xl font-hthaptik leading-120 mr-4"
          >
            Confirmar y pagar
          </div>
        </div>
      </div>
      <div className="h-full w-full flex justify-center pt-4 lg:pt-12">
        <div className="py-6  w-full lg:max-w-lg">
          <div className="my-4 bg-prevention20-pink w-full flex items-center justify-center py-4 ">
            <img
              className="h-20 w-20"
              src={require("../../../assets/images/preventionRange/cab1.png")}
              alt=""
            />
          </div>
          <div className="px-6 md:px-10">
            <Fragment>
              <NameCenter>{center.name.toLowerCase()}</NameCenter>
              <NameCity>{center.city.state.name.toLowerCase()}</NameCity>
              <FullAddressCenter>
                {fullAddress
                  .toLowerCase()
                  .replace(/(^|\s)\S/g, (L) => L.toUpperCase())}
              </FullAddressCenter>
              <Fragment>
                <div className="pt-4 flex justify-around">
                  <WrapDatesInfo>
                    <CalendarIcon />
                    <span className="ml-2 font-medium text-base font-hthaptik text-brownDark">
                      {moment(time).format("DD MMM yyyy")}
                    </span>
                  </WrapDatesInfo>
                  <WrapDatesInfo>
                    <TimeIcon />
                    <DateDescription>
                      <span className="ml-2 font-medium text-base font-hthaptik text-brownDark">
                        {" "}
                        {moment(time).format("HH:mm a")}
                      </span>
                    </DateDescription>
                  </WrapDatesInfo>
                </div>
              </Fragment>
              {/* <AddressCenter>{center.reference}</AddressCenter> */}
            </Fragment>
            <Separator />
          </div>
          <div className="px-6 md:px-10">
            <Subtitle>Escoge método de pago</Subtitle>
            {/* <PayMethodSelect
            name="Semana Gratis 🎉"
            value="FreeWeek"
            setPaymethod={setPaymethod}
            selected={paymethod == "FreeWeek"}
            disabled={date < initialDay || date > finallDay}
          /> */}
            <PayMethodSelect
              name="Pago en Centro"
              value="InCenter"
              setPaymethod={setPaymethod}
              selected={paymethod == "InCenter"}
              disabled={!(date < initialDay || date > finallDay)}
            />
            <PayMethodSelect
              name="Transferencia bancaria"
              value="Transfer"
              selected={paymethod == "Transfer"}
              setPaymethod={setPaymethod}
              disabled={!(date < initialDay || date > finallDay)}
            />
            <PayMethodSelect
              name="Tarjeta de crédito o débito"
              selected={paymethod == "Card"}
              value="Card"
              setPaymethod={setPaymethod}
              img={require("../../../assets/images/preventionRange/Card.svg")}
              disabled={!(date < initialDay || date > finallDay)}
            />
            {/* <PayMethodSelect
            name="Oxxo"
            value="Oxxo"
            setPaymethod={setPaymethod}
            img={require("../../assets/images/oxxo_logo.jpg")}
            selected={paymethod == "Oxxo"}
          /> */}
            {/* {paymethod == "FreeWeek" && (
            <WrapperInCenter>
              <TotalCoupon code={codeCoupon} discount="100" />
              <ButtonPayConfirm
                disabled={loading}
                onClick={() => {
                  sendData("EVA_CENTER", codeCoupon);
                }}
              >
                {loading ? <Loader color="#fff" size="40" /> : "Agendar"}
              </ButtonPayConfirm>
            </WrapperInCenter>
          )} */}
            {paymethod == "InCenter" && (
              <WrapperInCenter>
                <Coupon
                  loading={loadCoupon}
                  coupon={coupon}
                  couponCode={codeCoupon}
                  errorCoupon={errorCoupon}
                  onSubmit={onSubmitCoupon}
                  onChange={onChangeCoupon}
                />
                {!coupon ? (
                  <Total />
                ) : (
                  <TotalCoupon code={codeCoupon} discount={discountCoupon} />
                )}
                <ButtonPayConfirm
                  disabled={loading}
                  onClick={() => sendData("EVA_CENTER")}
                >
                  {loading ? (
                    <Loader color="#fff" size="40" />
                  ) : (
                    "Confirmar y pagar"
                  )}
                </ButtonPayConfirm>
              </WrapperInCenter>
            )}
            {paymethod == "Transfer" && (
              <Fragment>
                <Card>
                  <CardContent>
                    <div className="my-6">
                      <hr />
                    </div>
                    <MethodDescription>
                      <p>
                        Paga mediante tu aplicación de banco, en ventanilla o
                        por SPEI.
                      </p>
                      <p>Mándanos la confirmación de tu pago vía Whatsapp:</p>
                      <p>
                        <a
                          href="https://api.whatsapp.com/send?phone=522214139817&text=Hola, mando el comprobante de pago"
                          target="_blank"
                        >
                          +52 2214139817
                        </a>{" "}
                        o vía mail{" "}
                        <a href="mailto:info@evacenter.com">
                          info@evacenter.com
                        </a>
                      </p>
                    </MethodDescription>

                    <TitleCard>Datos Transferencia</TitleCard>
                    <Flex>
                      <ul className="text-marine font-oswald">
                        <ItemCardLeft>CLABE:</ItemCardLeft>
                        <ItemCardLeft>CUENTA:</ItemCardLeft>
                        <ItemCardLeft>RFC:</ItemCardLeft>
                        <ItemCardLeft>TITULAR:</ItemCardLeft>
                        <ItemCardLeft>BANCO:</ItemCardLeft>
                        <ItemCardLeft>CORREO:</ItemCardLeft>
                      </ul>

                      <ul className="text-marine font-work ml-4">
                        <ItemCardRight>012650001135607249</ItemCardRight>
                        <ItemCardRight>0113560724</ItemCardRight>
                        <ItemCardRight>EHE1801239V9</ItemCardRight>
                        <ItemCardRight>EVA HEALTH SAPI DE CV</ItemCardRight>
                        <ItemCardRight>BBVA</ItemCardRight>
                        <ItemCardRight>info@evacenter.com</ItemCardRight>
                      </ul>
                    </Flex>
                    <Coupon
                      loading={loadCoupon}
                      coupon={coupon}
                      couponCode={codeCoupon}
                      errorCoupon={errorCoupon}
                      onSubmit={onSubmitCoupon}
                      onChange={onChangeCoupon}
                    />
                  </CardContent>
                </Card>
                <WrapperInCenter>
                  {!coupon ? (
                    <Total />
                  ) : (
                    <TotalCoupon code={codeCoupon} discount={discountCoupon} />
                  )}
                  <ButtonPayConfirm
                    disabled={loading}
                    onClick={() => sendData("EVA_CENTER")}
                  >
                    {loading ? (
                      <Loader color="#fff" size="40" />
                    ) : (
                      "Confirmar y pagar"
                    )}
                  </ButtonPayConfirm>
                </WrapperInCenter>
              </Fragment>
            )}
            {paymethod == "Oxxo" && (
              <WrapperInCenter>
                {!coupon ? (
                  <Total />
                ) : (
                  <TotalCoupon code={codeCoupon} discount={discountCoupon} />
                )}
                <ButtonPayConfirm
                  disabled={loading}
                  onClick={() => sendData("OXXO")}
                >
                  {loading ? (
                    <Loader color="#fff" size="40" />
                  ) : (
                    "Generar Formato De Pago"
                  )}
                </ButtonPayConfirm>
              </WrapperInCenter>
            )}

            {paymethod == "Card" && (
              <Fragment>
                <div className="mt-6">
                  <hr />
                </div>
                <TitleCard>Datos de Tarjeta</TitleCard>
                <Paycard
                  coupon={coupon}
                  code={codeCoupon}
                  discount={discountCoupon}
                >
                  <Coupon
                    loading={loadCoupon}
                    coupon={coupon}
                    couponCode={codeCoupon}
                    errorCoupon={errorCoupon}
                    onSubmit={onSubmitCoupon}
                    onChange={onChangeCoupon}
                  />
                </Paycard>
              </Fragment>
            )}
            <div className="w-full flex justify-center py-6">
              <img
                src={require("../../../assets/images/preventionRange/safeCheckout.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

const pago = ({ route }: { route: string }) => (
  <ToastProvider>
    <Pay route={route} />
  </ToastProvider>
);

export default pago;
