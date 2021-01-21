import React from "react";
import { useRouter } from "next/router";
import ladys from "../../../assets/images/insurance/desktop/ladys.png";
import ladysMobile from "../../../assets/images/insurance/desktop/ladys.png";

export default function index() {
  const router = useRouter();
  return (
    <div>
      <div className="w-full bg-cover bg-center bg-no-repeat lg:bg-Imembership-lg bg-Imembership-sm flex">
        <div className="lg:w-1/2 w-2/12"></div>
        <div className="w-10/12 lg:w-1/2 flex justify-end lg:justify-center items-center p-5 lg:p-10">
          <div>
            <div className="title-dm font-dm text-white text-2xl lg:text-6xl text-center leading-snug">
              ¿Conoces la <br /> Membresía Eva?
            </div>
            <div className="text-white text-center font-oswald tracking-widest text-xs lg:text-xl">
              TE CUIDAMOS DESDE LA PREVENCIÓN HASTA EL TRATAMIENTO
            </div>
            <div className="font-thin font-noto text-xs lg:text-lg text-center text-white">
              La Membresía Eva te asegura detectar a tiempo <br />
              cualquier anomalía en tu pecho
            </div>
            <button
              onClick={() => router.push("/membresia")}
              className="bg-peach text-white px-3 py-4 lg:px-12 lg:py-4 font-oswald text-xs lg:text-md flex items-center mt-4 tracking-widest mx-auto"
            >
              DESCUBRE MÁS SOBRE MEMBRESÍA EVA
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
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className="w-full lg:h-56 h-24"
        style={{
          background:
            "linear-gradient(89.76deg, #F9936A 0.03%, #F89269 26.46%, #FE9F6D 71.8%, #F79268 99.97%)",
        }}
      >
        <img src={ladys} alt="" className="mx-auto h-full hidden lg:block" />
        <img
          src={ladysMobile}
          alt=""
          className="mx-auto h-full w-full lg:hidden"
        />
      </div>
    </div>
  );
}
