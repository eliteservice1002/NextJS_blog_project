import React from "react";
import Brand from "./Brand.styles";
//@ts-ignore
import cofe from "../../../assets/images/prevention-20/cofe.png";
//@ts-ignore
import fda from "../../../assets/images/prevention-20/fda.png";
//@ts-ignore
import ce from "../../../assets/images/prevention-20/ce.png";
//@ts-ignore
import academy from "../../../assets/images/prevention-20/academy.png";
//@ts-ignore
import brownCofe from "../../../assets/images/prevention-20/cofeB.png";
//@ts-ignore
import brownFda from "../../../assets/images/prevention-20/fdaB.png";
//@ts-ignore
import brownCe from "../../../assets/images/prevention-20/ceB.png";
//@ts-ignore
import brownAcademy from "../../../assets/images/prevention-20/academyB.png";

export default function index() {
  return (
    <div className="w-full py-10 lg:py-1" style={{ zIndex: 1 }}>
      <div className="lg:text-left uppercase text-10 tracking-wider lg:text-sm py-2 text-darkbrown w-full text-center lg:text-white font-hthaptik ">
        Aprobado por:{" "}
      </div>
      <div className="hidden lg:flex w-full flex-row justify-between">
        <Brand url={fda} />
        <Brand url={cofe} />
        <Brand url={ce} />
        <Brand url={academy} />
      </div>
      <div className="lg:hidden flex justify-between py-2 px-8">
        <Brand url={brownFda} />
        <Brand url={brownCofe} />
        <Brand url={brownCe} />
        <Brand url={brownAcademy} />
      </div>
    </div>
  );
}
