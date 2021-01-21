import React from "react";
import Link from "next/link";
import { isBrowser, isMobile } from "react-device-detect";
import back_video from "../../../assets/images/membership/time-bg.jpg";

export default function index() {
  return (
    <div>
      <div className="lg:hidden lg:absolute" style={{ paddingTop: "56px" }}>
        {isMobile && (
          <video
            src={require("../../../assets/images/membership/member_hero_final.mp4")}
            poster={back_video}
            playsInline
            autoPlay
            loop
            muted
          />
        )}
      </div>
      <div className="lg:h-600 flex items-center lg:px-0 px-6 ">
        <div className="lg:w-6/12 lg:items-start md:flex md:flex-col md:items-center w-full lg:z-10 font-hthaptik font-thin lg:pl-24 lg:pt-24 relative ">
          <p
            className="text-2.7em top-30px text-center md:text-3em w-full lg:text-left lg:text-72px xl:text-100px text-white absolute tracking-wider lg:static lg:-top-30px"
            style={{ lineHeight: "100%" }}
          >
            La <span className="font-bold">cobertura</span> <br /> más completa
          </p>
          <p
            className="md:w-300 w-full justify-center text-center text-white mt-32 text-14px lg:text-18px pt-5 lg:mt-0 lg:w-3/5 lg:mb-8 lg:text-left tracking-wider"
            style={{ lineHeight: "125%" }}
          >
            Con nuestro plan de cobertura anual tendrás la más avanzada
            tecnología, los médicos más preparados y los mejores servicios para
            cuidar tu salud
          </p>
          <div className="flex flex-col lg:flex-row pt-5 w-full lg:w-2/3 items-center">
            <Link href="/membresia/register">
              <button
                className="mb-4 lg:mb-0 bg-peach lg:w-auto md:w-300 w-full tracking-wider text-white px-3 h-10 lg:h-auto lg:py-4 lg:px-8 text-16px"
                style={{ borderRadius: "4px" }}
              >
                Obtener
              </button>
            </Link>
            <p className="text-center lg:text-left pl-4 text-12px font-normal lg:text-14px text-white tracking-wider">
              Obtén todos los beneficios <br /> por sólo MXN $142/mes
            </p>
          </div>
        </div>
        <div
          className="hidden lg:block lg:absolute max-w-5xl"
          style={{ right: "0px", top: "90px", width: "60vw" }}
        >
          {isBrowser && (
            <video
              src={require("../../../assets/images/membership/member_hero_final.mp4")}
              poster={back_video}
              playsInline
              autoPlay
              loop
              muted
            />
          )}
        </div>
      </div>
    </div>
  );
}
