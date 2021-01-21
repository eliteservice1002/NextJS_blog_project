import React from "react";
import { IconsBooking } from "./Icons";
import { Label, IconWrap, SelectT } from "./Wrappers.styles";
import { Loader } from "../../Loader";

export const SelectTime = ({
  bookedTime,
  onChange,
  options,
  load,
}: {
  bookedTime: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: any;
  load: boolean;
}) => {
  return (
    <div>
      <Label>Hora</Label>
      <div className={`relative `}>
        <SelectT value={bookedTime} onChange={onChange}>
          {load ? (
            options.length ? (
              options
            ) : (
              <option>No disponible</option>
            )
          ) : (
            <option>Cargando...</option>
          )}
        </SelectT>

        <IconWrap>
          {load ? (
            <IconsBooking type="time" />
          ) : (
            <div className="-mr-4 mt-4">
              <Loader color="#fff" size="40" />
            </div>
          )}
        </IconWrap>
      </div>
    </div>
  );
};
