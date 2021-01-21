import React from "react";
import Link from "next/link";
import body from "../../../../assets/images/membership/benefits/body_hero.jpg";
import back from "../../../../assets/images/membership/benefits/back-hero.png";

export default function index() {
  return (
    <div className="lg:h-80 w-full bg-darkbrown">
      <div className="lg:hidden">
        <img src={body} alt="" width="100%" />
      </div>
      <div className="justify-center h-full flex items-center  px-6 lg:px-0 py-12 lg:py-0">
        <div className="flex flex-col items-center lg:items-start w-full md:w-1/2 lg:w-5/12  font-hthaptik font-thin lg:pl-24">
          <p className="text-center lg:text-left text-2.3em md:text-2.7em leading-12 lg:text-5xl xl:text-6xl text-white tracking-wider">
            Un plan creado por{" "}
            <span className="font-bold">oncólogos expertos</span>
          </p>
          <p className="text-center lg:text-left lg:py-8 text-white text-14px lg:text-18px pt-5">
            Más de 10,000 pacientes en México han confiado en Eva para cuidar de
            su salud y tú también puedes ser parte.
          </p>
          <div className="flex flex-col lg:flex-row w-full lg:flex pt-5 md:items-center">
            <Link href="/membresia/register">
              <button
                className="mb-4 lg:w-auto md:w-300 w-full bg-peach tracking-wider text-white px-3 h-10 lg:h-auto lg:py-4 lg:px-8 text-16px"
                style={{ borderRadius: "4px" }}
              >
                Obtener
              </button>
            </Link>
            <p className="text-center pl-4 text-12px font-normal lg:text-14px text-white">
              Obtén todos los beneficios <br /> por sólo MXN $142/mes
            </p>
          </div>
        </div>
        <div className="w-7/12 hidden lg:block">
          <img src={back} alt="" />
        </div>
      </div>
    </div>
  );
}
