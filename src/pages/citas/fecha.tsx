import React, { Fragment, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import DayPicker from "react-day-picker";
import moment from "moment-timezone";
import "moment/locale/es";
moment.locale("es");

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Loader } from "../../components/Loader";
import SEOUpdate from "../../components/SEO/update";
import HelpSection from "../../components/Bookings/HelpSection";

import { Store } from "../../Store";
import { setTime as saveTime, getQueryParams } from "../../untils/localStorage";
import { getCenter } from "../../untils/localStorage";
import {
  CalendarResponse,
  Center,
  DateProps,
  DateRangeProps,
  Time,
} from "../../untils/interfaces";
import { getCalendar } from "../../untils/api";

import { storeQueryParameters } from "../../untils/helpers";

import {
  Bold,
  Flex,
  MiddleWidth,
} from "../../components/Bookings/Globals/index.styles";
import {
  AddressCenter,
  FullAddressCenter,
  ButtonConfirm,
  ButtonSelected,
  ButtonTime,
  Description,
  DescriptionTime,
  Hour,
  IconLocation,
  ImgCab,
  LocationButton,
  MonthName,
  NameCenter,
  NameCity,
  OneThird,
  Separator,
  TitleCalendar,
  TitleCenter,
  TitleTime,
  Wrap,
  WrapName,
  WrapSection,
  WrapTimes,
} from "../../components/Bookings/Date/Date.styles";

const MONTHS = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const WEEKDAYS_SHORT = ["D", "L", "M", "M", "J", "V", "S"];

const Navbar = ({ month, onPreviousClick, onNextClick }) => {
  return (
    <div>
      <button
        style={{ outlineColor: "#EE8D8B" }}
        className="float-left"
        onClick={() => onPreviousClick()}
      >
        ←
      </button>
      <button
        style={{ outlineColor: "#EE8D8B" }}
        className="float-right"
        onClick={() => onNextClick()}
      >
        →
      </button>
      <div
        className="bg-local bg-center bg-cover text-center"
        style={{
          backgroundImage: `url(${require("../../assets/images/Line.png")})`,
        }}
      >
        <div className="datedAside">
          <p>
            <MonthName>{moment(new Date(month)).format("MMMM YYYY")}</MonthName>
          </p>
        </div>
      </div>
    </div>
  );
};

// Generates a list of weeks to iterate to fetch the corresponding dates.
const generateWeeks = (numberOfWeeks: number) => {
  const weeks = [];
  for (let i = 0; i < numberOfWeeks * 7; i += 7) {
    weeks.push(i);
  }
  return weeks;
};

const date = () => {
  const router = useRouter();
  const [dates, setDates] = useState<CalendarResponse | undefined>(undefined);
  const [dateRange, setDateRange] = useState<DateRangeProps | undefined>(
    undefined,
  );
  const [times, setTimes] = useState<Time[] | undefined>();
  const [timeSelected, setTimeSelected] = useState<string | undefined>(
    undefined,
  );
  const [selectedDay, setSelectedDay] = useState<DateProps>({
    day: parseInt(moment().format("DD")),
    month: parseInt(moment().format("MM")) - 1,
    year: parseInt(moment().format("YYYY")),
  });

  const [expandCalendar, setExpandCalendar] = useState<boolean>(false);

  useEffect(() => {
    if (!Object.keys(getQueryParams()).length) {
      storeQueryParameters();
    }
  }, []);

  useEffect(() => {
    if (dates) {
      const year = dates.datetimes[0].date.slice(2).split("-")[0];
      const month =
        parseInt(dates.datetimes[0].date.slice(2).split("-")[1]) - 1;
      const day = parseInt(dates.datetimes[0].date.slice(2).split("-")[2]) - 1;

      const year2 = dates.datetimes[dates.datetimes.length - 1].date
        .slice(2)
        .split("-")[0];
      const month2 =
        parseInt(
          dates.datetimes[dates.datetimes.length - 1].date
            .slice(2)
            .split("-")[1],
        ) - 1;
      const day2 =
        parseInt(
          dates.datetimes[dates.datetimes.length - 1].date
            .slice(2)
            .split("-")[2],
        ) + 1;
      setDateRange({
        start: {
          day: day,
          month: month,
          year: Number(year),
        },
        end: {
          day: day2,
          month: month2,
          year: Number(year2),
        },
      });
    }
  }, [dates]);

  const findDate = useCallback(
    (daySelected: string) => {
      const find = dates?.datetimes.find(
        (t) => t.date.slice(2) === daySelected,
      );
      if (find) setTimes(find.times);
    },
    [dates],
  );
  /* end */
  const [center, setCenter] = useState<Center>();
  const [fullAddress, setFullAddress] = useState("");
  useEffect(() => {
    const center = getCenter();
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
    setCenter(center);
    setExpandCalendar(getQueryParams().calendar);
    // If center not set, send user back to select the center
    if (!center) {
      router.push("/citas");
      return;
    }
    const calendarId = center.calendarId;
    const fetchByWeek = async (acc: CalendarResponse, week: number) => {
      const { data } = await getCalendar(
        moment().add(week, "day").format("YYYY-MM-DD"),
        calendarId,
      );
      const accumulator = await acc;
      accumulator.datetimes.push(...data.datetimes);
      accumulator.months.push(...data.months);
      return accumulator;
    };

    const getDateTimes = () => {
      let weeks = generateWeeks(2);
      if (getQueryParams().calendar) {
        weeks = generateWeeks(9);
      }

      const datesAvailable = weeks.reduce(fetchByWeek, {
        datetimes: [],
        months: [],
      });

      datesAvailable.then((dates) => {
        setDates(dates);
        setTimes(dates.datetimes[0].times);
      });
    };
    getDateTimes();
  }, []);

  const store = Store.useContainer();
  if (!center) {
    return (
      <Fragment>
        <SEOUpdate
          title="Eva Center - Agendar Citas"
          description="Eva Center, la mejor tecnología para cuidar la salud de tus pechos"
          url="https://evacenter.com/citas/fecha"
        />
        <Header noTransaparent />
        <Footer />
      </Fragment>
    );
  }
  return (
    <Fragment>
      <SEOUpdate
        title="Eva Center - Agendar Citas"
        description="Eva Center, la mejor tecnología para cuidar la salud de tus pechos"
        url="https://evacenter.com/citas/fecha"
      />
      <Header noTransaparent />
      <WrapSection>
        <Wrap>
          <OneThird>
            <Fragment>
              <ImgCab />
              <TitleCenter>Eva Center</TitleCenter>
              <NameCity>
                {center.city.state.name === "MÉXICO"
                  ? "Estado de México"
                  : center.city.state.name.toLowerCase()}
              </NameCity>
              <WrapName>
                <IconLocation />
                <NameCenter>{center.name.toLowerCase()}</NameCenter>
              </WrapName>

              <AddressCenter>{center.reference}</AddressCenter>
              <FullAddressCenter>
                {fullAddress
                  .toLowerCase()
                  .replace(/(^|\s)\S/g, (L) => L.toUpperCase())}
              </FullAddressCenter>

              <LocationButton href={center.mapUrl} target="_blank">
                <div className="pt-4">Abrir ubicación</div>
              </LocationButton>
              <Separator />
              <Description>
                En Eva Center vivirás una experiencia única, íntima, indolora y
                no invasiva en solo <Bold>10 minutos</Bold>.
              </Description>
            </Fragment>
          </OneThird>

          <OneThird style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}>
            <TitleCalendar>Selecciona día</TitleCalendar>
            {dateRange && dates ? (
              <DayPicker
                className="w-full mx-auto lg:mx-0 mt-8"
                months={MONTHS}
                weekdaysShort={WEEKDAYS_SHORT}
                fromMonth={new Date(Date.now())}
                toMonth={
                  expandCalendar
                    ? new Date(moment().add(2, "M").toDate())
                    : new Date(moment().add(7, "days").toDate())
                }
                selectedDays={[
                  new Date(
                    selectedDay.year,
                    selectedDay.month,
                    selectedDay.day,
                  ),
                ]}
                onDayClick={(day: Date) => {
                  const date = moment(day).format("YYYY,MM,DD").split(",");
                  findDate(moment(day).format("YYYY-MM-DD"));
                  setSelectedDay({
                    year: parseInt(date[0]),
                    month: parseInt(date[1]) - 1,
                    day: parseInt(date[2]),
                  });
                }}
                navbarElement={Navbar}
                disabledDays={{
                  before: new Date(Date.now()),
                  after: expandCalendar
                    ? new Date(moment().add(2, "M").toDate())
                    : new Date(moment().add(7, "days").toDate()),
                }}
              />
            ) : (
              <div className="mb-32 w-full flex justify-center">
                <Loader />
              </div>
            )}
          </OneThird>

          <OneThird>
            <TitleTime>Selecciona hora</TitleTime>
            <DescriptionTime>Duración: 10min </DescriptionTime>
            {times ? (
              <WrapTimes>
                {times.length == 0 ? (
                  <div className="w-full h-full flex items-center opacity-50 justify-center">
                    Horarios no disponibles
                  </div>
                ) : (
                  times.map((el, index) =>
                    el.time != timeSelected ? (
                      <ButtonTime
                        onClick={() => setTimeSelected(el.time)}
                        key={"ti" + index}
                      >
                        <Hour>{moment(el.time).format("HH:mm a")}</Hour>
                      </ButtonTime>
                    ) : (
                      <Flex key={"ti" + index}>
                        <MiddleWidth style={{ paddingRight: "4px" }}>
                          <ButtonSelected>
                            {moment(el.time).format("HH:mm a")}
                          </ButtonSelected>
                        </MiddleWidth>
                        <MiddleWidth style={{ paddingLeft: "4px" }}>
                          <ButtonConfirm
                            onClick={() => {
                              saveTime(el.time);
                              router.push("/citas/datos");
                            }}
                          >
                            Confirmar
                          </ButtonConfirm>
                        </MiddleWidth>
                      </Flex>
                    ),
                  )
                )}
              </WrapTimes>
            ) : (
              <div className="w-full h-full flex items-center opacity-50 justify-center">
                Horarios no disponibles
              </div>
            )}
          </OneThird>
        </Wrap>
      </WrapSection>
      <HelpSection />
      <Footer />
    </Fragment>
  );
};

export default date;
