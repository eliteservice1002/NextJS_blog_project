import React from "react";
import ins from "../../../assets/images/membership/institu.svg";
import ins_mobile from "../../../assets/images/membership/institu_mobile.svg";

export default function index() {
  return (
    <div className="h-40 pt-10 lg:pt-24 ">
      <div className="flex justify-center items-center">
        <div className="lg:flex justify-center text-center items-center">
          <p
            className="text-sm font-hthaptik mr-6"
            style={{ color: "#BFB4AF" }}
          >
            Médicos afiliados a:
          </p>
          <img src={ins} className="hidden lg:block" alt="" />
          <img src={ins_mobile} className="lg:hidden" alt="" />
        </div>
      </div>
    </div>
  );
}
