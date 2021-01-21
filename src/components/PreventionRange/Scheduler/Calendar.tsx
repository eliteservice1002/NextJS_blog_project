import React from "react";
import DatePicker, { setDefaultLocale, registerLocale } from "react-datepicker";
import { Label } from "./Wrappers.styles";
import es from "date-fns/locale/es";

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
    <div className="w-full">
      <Label>FECHA</Label>
      <label className="inline-flex items-center py-1">
        <DatePicker
          className="capitalize bg-transparent block appearance-none w-full text-darkbrown pb-2 pt-5 pl-2 pr-8 rounded leading-tight focus:outline-none font-hthaptik font-light "
          minDate={new Date()}
          maxDate={addTwoWeeks}
          useWeekdaysShort={true}
          selected={startDate}
          onChange={onChange}
          dateFormat="eeee, d MMM"
        />
      </label>
    </div>
  );
};
