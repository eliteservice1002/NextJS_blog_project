import React from "react";
import DatePicker, { setDefaultLocale, registerLocale } from "react-datepicker";
import { Label } from "../Scheduler/Wrappers.styles";
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
  return (
    <div className="w-full border border-darkLight border-solid rounded">
      <Label>Fecha de nacimiento</Label>
      <label className="inline-flex items-center py-1 w-full">
        <DatePicker
          locale="es"
          className="capitalize bg-transparent block appearance-none text-darkbrown pb-2 pt-5 pl-2 pr-8 rounded leading-tight focus:outline-none font-hthaptik font-light "
          maxDate={new Date()}
          useWeekdaysShort={true}
          selected={startDate}
          onChange={onChange}
          dateFormat="d / MMM / yyyy"
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
        />
      </label>
    </div>
  );
};
