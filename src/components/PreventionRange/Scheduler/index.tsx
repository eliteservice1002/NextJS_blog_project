import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import moment from "moment";
import api from "../../../api";
import {
  groupByCenter,
  findByIdCalendar,
  firstWordUppercase,
} from "../../../untils/helpers";
import { Calendar } from "./Calendar";
import { SelectTime } from "./SelectTime";
import { setCenter, setTime } from "../../../untils/localStorage";
import SelectCustom from "./CustomSelect";
import { TextAddress } from "./Wrappers.styles";

export default function index({
  token,
  route,
}: {
  token: string;
  route: string;
}) {
  const router = useRouter();
  const [centers, setCenters] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [parseDate, setParseDate] = useState(
    moment(new Date()).format("YYYY-MM-DD"),
  );
  const [groupByCenters, setGroupByCenters] = useState({});
  const [centersByCity, setCentersByCity] = useState([]);
  const [calendarId, setCalendarId] = useState("");
  const [schedules, setSchedules] = useState([]);
  const [bookedTime, setBookedTime] = useState();
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCenters = async () => {
      const centers = await api.centers.getCenters(token);
      setCenters(centers);
      setGroupByCenters(groupByCenter(centers));
      setCities(fetchCities(groupByCenter(centers)));
      return centers;
    };
    fetchCenters();
  }, []);

  useEffect(() => {
    const fetchSchedules = async () => {
      const time = await updateSchedules(calendarId);
      return time;
    };
    fetchSchedules();
  }, [calendarId, parseDate]);

  const updateSchedules = async (cId: string) => {
    if (!!cId) {
      const time = await api.calendar.getTime(
        { id: cId, date: parseDate },
        token,
      );
      const { times } = time.datetimes[0];
      const booked = times.length ? times[0].time : [];
      setSchedules(time.datetimes[0].times);
      setBookedTime(booked);
      setLoading(true);
      return time;
    }
    return null;
  };

  const onChangeCalendar = (e) => {
    setStartDate(e);
    setParseDate(moment(e).format("YYYY-MM-DD"));
    setLoading(false);
  };

  const onChangeTime = (e) => {
    setBookedTime(e.props.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("authToken", token);
    setCenter(findByIdCalendar(centers, calendarId));
    setTime(bookedTime);
    router.push(`${route}/datos`);
  };

  const fetchCities = (groupByCenters) => {
    const newNames = {
      "NUEVO LEÓN": "Monterrey",
      "CIUDAD DE MÉXICO": "CDMX",
      MÉXICO: "Estado de México",
      PUEBLA: "Puebla",
    };

    const arrCities = Object.keys(groupByCenters)
      .sort()
      .map((center, i) => (
        <option key={i} value={center}>
          {newNames[center]}
        </option>
      ))
      .sort();
    return [...arrCities];
  };

  const centerByCity = (city) =>
    city != undefined &&
    groupByCenters[city].map((center, i) => (
      <div className="w-full">
        <option key={i} value={center.calendarId}>
          {firstWordUppercase(center.center)}
        </option>
        <TextAddress>
          <span className="hidden lg:flex">
            {firstWordUppercase(center.fullAddress).substring(0, 50) + "..."}
          </span>
          <span className="lg:hidden">
            {firstWordUppercase(center.fullAddress).substring(0, 45) + "..."}
          </span>
        </TextAddress>
      </div>
    ));

  const timeOptions = () =>
    schedules.map((dTime) => (
      <option key={dTime.time} value={dTime.time}>
        {moment(dTime.time).format("HH:mm A")}
      </option>
    ));

  const onChangeCity = (e) => {
    if ("Selecciona tu ciudad" == e?.props?.value) {
      setCentersByCity([centersByCity[0]]);
      setSchedules([]);
    } else {
      if (e?.props?.value) {
        setCentersByCity([...centerByCity(e?.props?.value)]);
        setSchedules([]);
      }
    }
  };

  const onChangeCenter = (e) => {
    if ("Selecciona tu Eva Center" == e?.props?.value) {
      setCalendarId("");
      setSchedules([]);
      setLoading(false);
    } else {
      setCalendarId(e?.props?.children[0]?.props?.value);
      setLoading(false);
    }
  };
  return (
    <div
      className="flex justify-center flex-col lg:-mr-4"
      style={{ zIndex: 1 }}
    >
      <div
        className="bg-white w-full p-6 lg:p-8 lg:mt-12 lg:h-440 lg:w-420 lg:rounded-mid"
        style={{ zIndex: 2 }}
      >
        <div
          className="hidden lg:flex text-brownDark font-hthaptik text-3xl font-medium lg:pb-4"
          style={{ lineHeight: "100%" }}
        >
          Cuidamos la salud de tus pechos de forma privada y no invasiva.
        </div>
        <div className="lg:hidden text-brownDark font-hthaptik text-lg font-medium text-center w-full">
          ¡Aparta tu cita por $400 MXN!
        </div>

        <form onSubmit={onSubmit}>
          <SelectCustom
            firstText="Selecciona tu ciudad"
            label="CIUDAD"
            options={cities}
            onChange={onChangeCity}
          />
          <SelectCustom
            firstText="Selecciona tu Eva Center"
            label="CENTRO"
            options={centersByCity}
            onChange={onChangeCenter}
          />
          <div className="mt-2">
            <div className="flex flex-grow w-full border border-darkLight border-solid rounded ">
              <Calendar startDate={startDate} onChange={onChangeCalendar} />
              <div
                className="mt-2 bg-darkLight"
                style={{
                  width: 2,
                  height: "40px",
                  float: "left",
                }}
              ></div>
              <SelectTime
                firstText="Selecciona Horario"
                onChange={onChangeTime}
                options={timeOptions()}
                load={loading}
              />
            </div>
          </div>
          <div className="mt-3">
            <button
              className="w-full bg-primary text-white rounded py-3 disabled:cursor-not-allowed font-hthaptik"
              type="submit"
              disabled={!schedules.length}
            >
              {" "}
              <span className="hidden lg:flex text-center w-full justify-center">
                Agendar cita por $400 MXN
              </span>
              <span className="lg:hidden text-center">Agendar</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
