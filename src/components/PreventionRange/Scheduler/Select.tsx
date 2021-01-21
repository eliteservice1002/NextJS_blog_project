import React from "react";
import { Label, Select, IconWrap } from "./Wrappers.styles";
import { IconOpen } from "./Icons";

export default function index({ label, onChange, options }) {
  return (
    <div
      className="border-darkbrown boder border-solid mt-2"
      style={{ zIndex: 1 }}
    >
      <Label>{label}</Label>
      <div className="relative">
        <Select onChange={onChange}>{options}</Select>
        <IconWrap>
          <IconOpen />
        </IconWrap>
      </div>
    </div>
  );
}
