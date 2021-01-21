import React from "react";
import Link from "next/link";

export default function index() {
  return (
    <div>
      <div className="bg-peach w-full h-64 flex justify-center items-center">
        <div className="text-white font-noto max-w-2xl mx-auto text-center text-xl font-thin leading-snug">
          Sé parte de una comunidad que disfruta compartiendo el cuidado de la
          salud, experiencias que transforman vidas y protegiendo a su familia
          de cualquier adversidad.
        </div>
      </div>
      <div className="lg:hidden h-12 bg-beige w-full"></div>
      <div
        className="h-16 w-full py-5 btn-f body-size__xs"
        style={{ background: "#968B89" }}
      >
        <div className="mx-auto flex text-white text-xs justify-center items-center px-3">
          <div className="h-full mr-2 lg:mr-5 w-1/3 lg:w-auto">© Eva 2020</div>
          <div className="h-full mr-5 hidden lg:block">
            TODOS LOS DERECHOS RESERVADOS
          </div>
          <Link href="/terms">
            <div className="h-full mr-2 lg:mr-5 w-1/3 lg:w-auto">
              TÉRMINOS Y CONDICIONES
            </div>
          </Link>
          <Link href="/privacy">
            <div className="h-full mr-2 lg:mr-5 w-1/3 lg:w-auto">
              PÓLITICA DE PRIVACIDAD
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
