import React from "react";

export default function index() {
  return (
    <div className="w-full lg:flex">
      <div className="lg:w-1/2 bg-beige p-20 text-center">
        <div className="text-eva-red font-dm text-2xl lg:text-3xl font-semibold tracking-wide">
          Requisitos
        </div>
        <div className="mt-8 font-thin font-oswald text-eva-red text-base lg:text-lg">
          TENER ENTRE 18 Y 65 AÑOS DE EDAD
        </div>
        <div className="mt-4 font-thin font-oswald text-eva-red text-base lg:text-lg">
          NO TENER DIAGNÓSTICO PREVIO DE NINGÚN TIPO DE CÁNCER
        </div>
      </div>
      <div className="lg:w-1/2 bg-cover bg-no-repeat bg-center lg:bg-Irequirements-lg h-full hidden lg:block lg:h-auto"></div>
    </div>
  );
}
