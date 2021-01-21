import React from "react";
import Link from "next/link";
import back_bg_video from "../../../assets/images/membership/back_bg_vide.png";
import Package from "./Package";

export default function index() {
  return (
    <>
      <div className="w-full bg-darkbrown">
        <div className="w-full relative inline-block lg:h-auto">
          <div
            className="absolute h-full w-full top-0 left-0 "
            style={{ zIndex: -1 }}
          >
            <video
              className="w-full"
              src={require("../../../assets/images/membership/que_bg.mp4")}
              poster={back_bg_video}
              playsInline
              autoPlay
              loop
              muted
            />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex justify-center items-center h-70v  lg:h-650 w-full">
        <div className="bg-white w-2/3 flex font-hthaptik font-thin rounded-lg">
          <div className="w-1/2 flex items-center justify-center">
            <div className="lg:w-9/12 xl:w-4/6 ">
              <p className="font-bold text-dark text-4xl">
                ¿Qué incluye la Membresía Eva?
              </p>
              <div className="flex ">
                <Link href="/membresia/register">
                  <button
                    className="bg-peach text-white py-1 px-4 mr-1"
                    style={{ borderRadius: "4px" }}
                  >
                    Obtener
                  </button>
                </Link>
                <Link href="/membresia/beneficios">
                  <button
                    className="border py-1 px-4 ml-1 text-dark"
                    style={{ borderRadius: "4px" }}
                  >
                    Conoce más detalle
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <Package />
          </div>
        </div>
      </div>
      <div className="inherit  lg:hidden">
        <div className=" lg:hidden ">
          <div className=" h-auto lg:h-auto">
            <div className="">
              <video
                src={require("../../../assets/images/membership/que_bg.mp4")}
                poster={back_bg_video}
                playsInline
                autoPlay
                loop
                muted
              />
            </div>
          </div>
          <div className="justify-center w-full flex ">
            <div className="bg-white w-5/6  font-hthaptik font-thin rounded-lg">
              <div className="w-full flex items-center justify-center">
                <div className="w-full">
                  <p className="font-bold text-dark text-4xl">
                    ¿Qué incluye la Membresía Eva?
                  </p>
                </div>
              </div>
              <div className="w-full md:flex md:justify-center">
                <Package />
              </div>
              <div className="flex flex-wrap  px-10 justify-center w-full">
                <div className="justify-center flex flex-wrap">
                  <Link href="/membresia/register">
                    <div
                      className="bg-peach text-center text-white py-2 px-4 w-full mb-2"
                      style={{ borderRadius: "4px" }}
                    >
                      Obtener Online
                    </div>
                  </Link>
                  <Link href="/membresia/beneficios">
                    <div
                      className="border py-2 px-4 text-center text-dark w-full mt-1"
                      style={{ borderRadius: "4px" }}
                    >
                      Conoce más detalle
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
