import React, { useState } from "react";
import Image from "next/image";
import Swiper from "./Swiper";
import { DoctorOpinions, PatientOpinions } from "./Opinions";

export default function index({ backgroundImg }) {
  const [opinion, setOpinion] = useState(1);
  return (
    <div className="relative">
      <div className="hidden lg:flex">
        <Image
          layout="fill"
          className="object-center object-cover"
          src={backgroundImg}
        />
      </div>
      <div className="relative lg:h-760 py-16 px-4 lg:py-32 lg:px-20 flex items-center">
        <div className="flex flex-col lg:flex-row bg-white lg:h-417px w-full">
          <div className="lg:w-1/2 flex items-center flex-col justify-center">
            <div className="">
              <Image
                layout="fixed"
                width={150}
                height={20}
                className={`object-center object-cover`}
                src={require("../../../assets/images/preventionRange/starts.png")}
              />
            </div>
            <div className="font-hthaptik text-brownDark leading-120 text-2xl font-thin pb-16">
              <span className="font-bold">+1,000 Mujeres </span>
              <br /> Recomiendan Eva.
            </div>
          </div>
          <div className="flex flex-col justify-center items-start w-full lg:w-3/5 ">
            <div className="flex w-full lg:w-2/3 flex-col justify-center items-center">
              <div className="text-brownDark leading-100 font-bold font-hthaptik text-3xl pb-6 ">
                La opinión de
              </div>
              <div className="flex w-full">
                <div
                  onClick={() => setOpinion(1)}
                  className={`mr-1 font-semibold font-hthaptik cursor-pointer w-full lg:w-1/2 text-center text-brownDark border-b-2 text-base  ${
                    opinion === 1
                      ? "border-primary"
                      : "border-prevention20-pink"
                  } `}
                >
                  Pacientes
                </div>
                <div
                  onClick={() => setOpinion(2)}
                  className={`mr-1 font-semibold font-hthaptik cursor-pointer w-full lg:w-1/2 text-center text-brownDark border-b-2 text-base ${
                    opinion === 2
                      ? "border-primary"
                      : "border-prevention20-pink"
                  }`}
                >
                  Doctores
                </div>
              </div>
            </div>
            <div className="flex-none lg:w-2/3 w-full">
              {opinion == 2 && <Swiper opinions={DoctorOpinions} />}
              {opinion == 1 && <Swiper opinions={PatientOpinions} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
