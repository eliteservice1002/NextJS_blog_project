import React from "react";
import SelectCustom from "./CustomSelect";

export const SelectTime = ({
  onChange,
  options,
  load,
  firstText,
}: {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: any;
  load: boolean;
  firstText: string;
}) => {
  return (
    <div className="w-full">
      <SelectCustom
        first
        firstText={firstText}
        label="Hora"
        options={
          load
            ? options.length
              ? options
              : [<option>No disponible</option>]
            : []
        }
        onChange={onChange}
        time
      />
    </div>
  );
};
