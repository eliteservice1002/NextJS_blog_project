import React from "react";

const Conditions = () => {
  return (
    <div className="w-full lg:flex conditions-container">
      <div className="w-full lg:w-5/12 bg-Iconditions-sm h-40 lg:bg-Iconditions-lg lg:h-auto bg-cover bg-center bg-no-repeat"></div>
      <div
        className="w-full lg:w-7/12 h-full px-10 py-12 lg:px-16 lg:py-20 flex-col items-center"
        style={{ background: "#A3AAA6" }}
      >
        <div className="text-white font-dm lg:text-4xl text-center lg:text-left text-2xl leading-tight">
          Tenemos a los mejores especialistas de México dispuestos a ayudarte
        </div>
        <div className="font-thin text-white font-work text-center lg:text-left">
          Conoce a detalle las condiciones del Seguro Eva y sé parte.
        </div>
        <a
          target="_blank"
          href="/seguro-eva-resumen.pdf"
          className="bg-white text-gray-700 px-3 py-4 lg:px-8 lg:py-4 font-oswald text-sm lg:text-base flex items-center mt-4 mx-auto lg:mx-0"
          style={{ width: "fit-content" }}
        >
          RESUMEN DE CONDICIONES DEL SEGURO
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
  );
};

export default Conditions;
