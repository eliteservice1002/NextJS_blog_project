import React from "react";
import Link from "next/link";
import getInsuranceImg from "../../../assets/images/insurance/desktop/get.jpg";
import getInsuranceMobile from "../../../assets/images/insurance/mobile/insurance.jpg";

export default function index() {
  return (
    <div>
      <div
        className="hidden bg-no-repeat bg-cover bg-center lg:flex"
        style={{ backgroundImage: `url(${getInsuranceImg})`, height: "32rem" }}
      >
        <div
          className="w-1/2 h-full p-20 lg:flex justify-center items-center hidden"
          id="insurance"
        >
          <div>
            <div className="text-4xl text-eva-red font-oswald">
              ADQUIERE HOY TU SEGURO POR <br />{" "}
              <span className="text-peach">$499 AL AÑO</span> Y DISFRUTA DE{" "}
              <br /> TODOS LOS BENEFICIOS
            </div>
            <Link href="/seguro/register">
              <div className="cursor-pointer bg-peach text-white px-8 py-4 font-oswald text-md flex items-center mt-4 tracking-widest w-56 justify-center">
                ADQUIRIR AHORA
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
                    stroke="#5B2732"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-1/2 h-full"></div>
      </div>
      <div className="lg:hidden" id="insurance-mobile">
        <div>
          <img
            src={getInsuranceMobile}
            alt="Eva seguro"
            className="w-full h-full"
          />
        </div>
        <div className="bg-beige p-5 flex items-center justify-center h-64">
          <div>
            <div className="text-2xl text-eva-red font-oswald">
              ADQUIERE HOY TU SEGURO POR <br />{" "}
              <span className="text-peach">$499 AL AÑO</span> Y DISFRUTA DE{" "}
              <br /> TODOS LOS BENEFICIOS
            </div>
            <Link href="/seguro/register">
              <div className="cursor-pointer bg-peach text-white px-8 py-4 font-oswald text-md flex items-center mt-4 tracking-widest w-56 justify-center">
                ADQUIRIR AHORA
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
                    stroke="#5B2732"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
