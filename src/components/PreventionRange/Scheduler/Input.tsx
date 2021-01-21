import React from "react";
import { Label, Input } from "./Wrappers.styles";

export default function index({
  autocomplete,
  type,
  label,

  placeholder,
  maxlength,
  refs,
  name,
}) {
  return (
    <div className="mt-2">
      <Label>{label}</Label>
      <div className="flex ">
        <div className="ml-2 pt-4 flex justify-start items-center ">
          <img
            className="relative h-15px "
            src={require("../../../assets/images/preventionRange/mexico_phone.jpg")}
            alt=""
          />
          <span className="relative text-brownDark font-hthaptik text-base pl-2">
            +52
          </span>
        </div>
        <Input
          style={{ marginLeft: "-4.5rem" }}
          padding="pl-20"
          type={type}
          maxLength={maxlength}
          placeholder={placeholder}
          autoComplete={autocomplete}
          ref={refs}
          name={name}
        />
      </div>
    </div>
  );
}
