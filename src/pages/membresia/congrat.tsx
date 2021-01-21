import React, { useEffect } from "react";
import { useRouter } from "next/router";
import card1 from "../../assets/images/membership/congrat/gcard1.svg";
import card2 from "../../assets/images/membership/congrat/gcard2.svg";
import card3 from "../../assets/images/membership/congrat/gcard3.svg";
import card4 from "../../assets/images/membership/congrat/gcard4.svg";
import box from "../../assets/images/membership/congrat/boxeva.png";
import Faq from "../../components/Membership/Faq";
import Footer from "../../components/Footer";
import { ScheduledBanner } from "../../components/Banners/ScheduledBanner";
import Header from "../../components/Membership/Headerv2";
import { clearData } from "../../untils/localStorage";

import { BackIcon } from "../../components/Membership/Oxxo/Icons";

const congrat = () => {
  const router = useRouter();
  useEffect(() => {
    clearData();
  }, []);
  return (
    <div className="h-screen w-full">
      <Header noTransaparent />
      <div className="pt-16 lg:pt-24">
        <div
          onClick={() => router.push("/membresia")}
          className="flex items-center cursor-pointer px-6 py-6 lg:px-16"
        >
          <BackIcon />
          <div className="text-dark ml-2">Regresar</div>
        </div>
      </div>
      <div className="px-8 lg:px-16">
        <div className="lg:flex ">
          <div className="w-full lg:w-1/2">
            <p className="font-hthaptik text-2xl lg:text-5xl font-semibold text-primary pt-4 pb-3">
              ¡Felicidades!
            </p>
            <p className="font-hthaptik text-4xl lg:text-3.3rem lg:w-2/3 font-semibold tracking-03em text-dark leading-100 pb-6">
              Ya eres una <br /> Eva Member.
            </p>
            <div className="font-hthaptik text-xl lg:w-3/4 text-dark">
              <p className="pb-4">
                A partir de ahora, Eva será tu guía para cuidar de tu salud
                femenina.
              </p>
              <p>
                A través del <span className="font-bold">correo</span> que nos
                compartiste te haremos llegar nuestras novedades, noticias y el
                proceso para que puedas agendar tus citas.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img src={box} alt="" />
          </div>
        </div>
        <div className="flex items-center py-6 text-center">
          <hr className="lg:w-1/3 lg:border lg:border-gray-400" />
          <p className="w-full lg:w-1/3 font-hthaptik font-semibold text-md text-dark uppercase">
            A través de tu correo y whatsapp:
          </p>{" "}
          <hr className="lg:w-1/3 lg:border lg:border-gray-400" />
        </div>
        <div className="flex justify-center flex-wrap lg:flex-nowrap">
          <img className="mx-1 w-auto pb-8" src={card1} alt="" />
          <img className="mx-1 w-auto pb-8" src={card2} alt="" />
          <img className="mx-1 w-auto pb-8" src={card3} alt="" />
          <img className="mx-1 w-auto pb-8" src={card4} alt="" />
        </div>
      </div>
      <ScheduledBanner
        text={`Comienza a disfrutar tus beneficios.\nContacta a tu doctora.`}
        textButton="Contactar"
        hrefDesktop="https://calendly.com/eva-care-/orquidea-cruz"
        hrefMobile="https://api.whatsapp.com/send?phone=522214139817&text=%C2%A1Hola!%20Me%20gustar%C3%ADa%20hablar%20con%20mi%20doctora%20Eva"
        external
      />
      <Faq />
      <Footer membership />
    </div>
  );
};

export default congrat;
