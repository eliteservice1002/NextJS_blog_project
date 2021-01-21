import React from "react";
import americanLife from "../../../assets/images/insurance/mobile/american-life.png";
import american from "../../../assets/images/insurance/desktop/american.png";
import cnsf from "../../../assets/images/insurance/desktop/cnsf.png";

export default function index() {
  return (
    <div className="bg-lightgrass w-full p-10 text-white lg:px-100px">
      <div className="lg:hidden">
        <div className="flex justify-center items-center">
          <img src={americanLife} alt="" className="w-full" />
        </div>
        <div className="mt-8">
          Un seguro protegido y regulado por la Comisión Nacional de Seguros y
          Fianzas y Pan American Life Insurance. Respaldado por la CONDUSEF
        </div>
      </div>
      <div className="hidden lg:flex items-center">
        <div className="w-1/3 mr-8">
          <div className="text-white text-lg font-noto leading-tight">
            Un seguro protegido y regulado por la Comisión Nacional de Seguros y
            Fianzas y Pan American Life Insurance. Respaldado por la CONDUSEF
          </div>
        </div>
        <div className="w-1/3 flex items-center">
          <div className="w-2/3 mr-8">
            <img src={american} alt="" className="h-16" />
          </div>
          <div className="1/3">
            <img src={cnsf} alt="" className="mx-auto h-16" />
          </div>
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <a
            target="_blank"
            href="/condiciones-generales.pdf"
            className="bg-white text-gray-700 px-8 py-4 font-oswald text-md flex items-center"
          >
            CONDICIONES GENERALES
            <svg
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3"
            >
              <path
                d="M1 1L8 8L1 15"
                stroke="#EE8D8B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
