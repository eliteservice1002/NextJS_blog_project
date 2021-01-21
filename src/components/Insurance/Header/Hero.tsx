import React from "react";

import Header from "./index";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center bg-darkL bg-no-repeat h-screen lg:bg-insurance-lg bg-insurance-sm"
      id="hero"
      style={{ backgroundBlendMode: "darken" }}
    >
      <Header />
      <div className="flex desktop:px-100px px-5 h-full">
        <div className="w-full lg:w-7/12 flex justify-start items-end pb-40 lg:items-center lg:pt-0 lg:pb-0">
          <div className="flex-col w-full">
            <h1 className="tracking-wider text-7xl font-california text-white m-0 p-0 lg:text-116px">
              Tu seguridad,
            </h1>
            <br />
            <div className="hidden lg:block">
              <br />
              <br />
            </div>
            <div className="text-4xl text-left lg:text-7xl text-white font-dm title-hero leading-none w-full lg:px-0">
              Nuestra prioridad
            </div>
            <br />
            <div className="text-white lg:text-left lg:text-2xl font-thin w-9/12 tracking-wider">
              Conoce el seguro creado por{" "}
              <span className="font-semibold italic">expertos en cáncer</span>{" "}
              que te permite cuidar de ti y tus seres queridos
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
