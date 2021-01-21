import React from "react";
import DatePicker, { setDefaultLocale, registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import { IconsBooking } from "./Icons";
import { Label } from "./Wrappers.styles";

setDefaultLocale("es");
registerLocale("es", es);

export const Calendar = ({
  startDate,
  onChange,
}: {
  startDate: Date;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
  const addTwoWeeks = new Date();
  addTwoWeeks.setDate(addTwoWeeks.getDate() + 7);
  return (
    <div>
      <Label>Fecha</Label>
      <label className="inline-flex items-center">
        <DatePicker
          className="capitalize w-64 bg-transparent block appearance-none w-ful border border-white-200 text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-white-500 lg:w-48"
          minDate={new Date()}
          maxDate={addTwoWeeks}
          useWeekdaysShort={true}
          selected={startDate}
          onChange={onChange}
          dateFormat="eeee, d MMM"
        />
        <div className="pl-56 lg:pl-40 absolute m-1">
          <IconsBooking type="calendar" />
        </div>
      </label>
    </div>
  );
};
