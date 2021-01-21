import React from "react";
import { IconsBooking } from "./Icons";
import { Label, IconWrap, SelectT } from "./Wrappers.styles";

export const SelectCenters = ({
  onChange,
  options,
}: {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: any;
}) => {
  return (
    <div>
      <Label>Lugar</Label>
      <div className="relative">
        <SelectT onChange={onChange}>{options}</SelectT>
        <IconWrap>
          <IconsBooking type="place" />
        </IconWrap>
      </div>
    </div>
  );
};
