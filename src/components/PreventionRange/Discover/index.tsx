import React, { useState } from "react";
import Image from "next/image";

interface Video {
  imgDesktop?: string;
  videoDesktop?: string;
  imgMobile?: string;
  videoMobile?: string;
}

export default function index({ video }: { video?: Video }) {
  const [showVideoMobile, setShowVideoMobile] = useState(false);
  const [showVideoDesktop, setShowVideoDesktop] = useState(false);

  return (
    <div className="bg-prevention20-pink lg:bg-white py-8 lg:py-20 lg:pl-24">
      <div className="flex">
        <div className="flex flex-col justify-center align-center w-full lg:w-1/3 ">
          <div
            style={{ lineHeight: "100%" }}
            className="text-brownDark text-28px lg:text-4xl text-center w-full lg:w-3/5 px-6 font-bold font-hthaptik"
          >
            <span className="hidden lg:flex justify-center text-center w-full">
              Descubre <br /> Eva Center
            </span>
            <span className="lg:hidden"> Descubre Eva Center</span>
          </div>
          <div className="text-brownDark text-base w-full text-center px-6 pb-8 pt-1 lg:w-3/5 font-hthaptik ">
            Un examen preciso, sin dolor y que en menos de 10 minutos te ayuda a
            conocer más sobre la salud de tus pechos.
          </div>
          <div className="hidden lg:w-3/5 lg:flex justify-center aling-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className=" font-hthaptik w-160 text-center bg-primary text-white rounded py-3"
              type="submit"
            >
              Agendar cita
            </button>
          </div>
        </div>
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:h-full w-2/3 pr-32">
          <div onClick={() => setShowVideoDesktop(true)}>
            {!showVideoDesktop && (
              <Image
                src={video.imgDesktop}
                className="rounded-lite h-220 md:h-400 lg:h-85p"
                width="1000"
                height="600"
              />
            )}
          </div>
          {showVideoDesktop && (
            <video
              className="rounded-lite h-220 md:h-400 lg:h-85p"
              width="100%"
              style={{ objectFit: "cover" }}
              src={video.videoDesktop}
              controls
              autoPlay
              playsInline
            />
          )}
        </div>
      </div>
      <div>
        <div className="lg:hidden">
          <div onClick={() => setShowVideoMobile(true)}>
            {!showVideoMobile && (
              <Image
                src={video.imgMobile}
                className="rounded-lite h-220 md:h-400 object-cover "
                width="1000"
                height="600"
              />
            )}
          </div>
          {showVideoMobile && (
            <video
              className="rounded-lite h-220 md:h-400"
              width="100%"
              style={{ objectFit: "cover" }}
              src={video.videoMobile}
              controls
              autoPlay
              playsInline
            />
          )}
        </div>
      </div>
    </div>
  );
}
