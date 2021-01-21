import React from "react";
import bussiness from "../../../assets/images/insurance/desktop/bussiness.png";
import bussinessMobile from "../../../assets/images/insurance/mobile/bussiness.png";

export default function index() {
  return (
    <div className="bg-white py-8">
      <div className="text-gray-700 font-oswald tracking-widest text-center">
        EMPRESAS QUE HAN CONFIADO EN NOSOTROS:
        <div className="px-5 lg:px-0 lg:max-w-4xl mx-auto mt-10">
          <img src={bussiness} alt="" className="w-full hidden lg:block" />
          <img src={bussinessMobile} alt="" className="w-full lg:hidden" />
        </div>
      </div>
    </div>
  );
}
