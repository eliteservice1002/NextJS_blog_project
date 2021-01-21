import React, { useState, useEffect } from "react";
import moment from "moment";
import { useRouter } from "next/router";
import api from "../../../api";
import { Calendar } from "./Calendar";
import { SubmitButton } from "./Button";
import { SelectTime } from "./SelectTime";
import { SelectCenters } from "./SelectCenters";
import { CenteredWrap, AroundWrap } from "./Wrappers.styles";
import { groupByCenter, findByIdCalendar } from "../../../untils/helpers";
import { setToken, setCenter, setTime } from "../../../untils/localStorage";

export default function Schedule({ token }: { token: string }) {
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  const [parseDate, setParseDate] = useState(
    moment(new Date()).format("YYYY-MM-DD"),
  );
  const [groupByCenters, setGroupByCenters] = useState({});
  const [centers, setCenters] = useState([]);
  const [calendarId, setCalendarId] = useState("");
  const [schedules, setSchedules] = useState([]);
  const [bookedTime, setBookedTime] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCenters = async () => {
      const centers = await api.centers.getCenters(token);
      setCenters(centers);
      setGroupByCenters(groupByCenter(centers));
      setCalendarId(centers[0].calendarId);
      const time = await updateSchedules(centers[0].calendarId);
      return time;
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

  const changedDate = (e) => {
    setStartDate(e);
    setParseDate(moment(e).format("YYYY-MM-DD"));
    setLoading(false);
  };

  const changedCenter = (e) => {
    setCalendarId(e.target.value);
    setLoading(false);
  };

  const changedTime = (e) => {
    setBookedTime(e.target.value);
  };

  const placeOptions = Object.keys(groupByCenters).map((state) => (
    <optgroup key={state} label={state}>
      {groupByCenters[state].map((commercial) => (
        <option key={commercial.calendarId} value={commercial.calendarId}>
          {commercial.center
            .toLowerCase()
            .replace(/(^|\s)\S/g, (L) => L.toUpperCase())}
        </option>
      ))}
    </optgroup>
  ));

  const timeOptions = schedules.map((dTime) => (
    <option key={dTime.time} value={dTime.time}>
      {moment(dTime.time).format("HH:mm A")}
    </option>
  ));

  const onSubmit = (e) => {
    e.preventDefault();
    setToken(token);
    setCenter(findByIdCalendar(centers, calendarId));
    setTime(bookedTime);
    router.push("/citas/datos");
  };

  return (
    <form onSubmit={onSubmit}>
      <CenteredWrap>
        <AroundWrap>
          <SelectCenters onChange={changedCenter} options={placeOptions} />
          <Calendar startDate={startDate} onChange={changedDate} />
          <SelectTime
            bookedTime={bookedTime}
            onChange={changedTime}
            options={timeOptions}
            load={loading}
          />
          <SubmitButton disabled={!schedules.length} text="Agendar" />
        </AroundWrap>
      </CenteredWrap>
    </form>
  );
}
