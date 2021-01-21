import React from "react";

export default function index() {
  return (
    <div className="lg:px-24 px-6 pt-10">
      <div className="flex flex-col items-center border-t border-white text-white font-hthaptik py-12 lg:py-32">
        <p className="xl:w-1/3 lg:w-3/5 text-2xl text-center lg:text-34px font-thin lg:pb-20 pb-12">
          Más del 97% de los cánceres de mama{" "}
          <span className="font-bold">detectados a tiempo</span> son{" "}
          <span className="font-bold">curables</span>
        </p>
        <p className="lg:w-4/5 text-xl text-center font-thin text-12px lg:text-24px italic pt-6">
          Con tu Membresía Eva estarás protegida y siempre acompañada
        </p>
      </div>
    </div>
  );
}
