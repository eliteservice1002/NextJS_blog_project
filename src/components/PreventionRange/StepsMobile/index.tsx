import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Step from "./Step";

SwiperCore.use([Navigation]);

const index = () => {
  return (
    <div className="px-6 py-20 bg-prevention20-pink">
      <div className="text-brownDark text-3xl text-center leading-100 font-bold pb-8 font-hthaptik">
        Paso a paso de tu experiencia en Eva
      </div>
      <Swiper navigation>
        <SwiperSlide>
          <Step
            img={require("../../../assets/images/pasos-01.jpg")}
            title="Historial"
            resume="Creamos tu historial médico y familiar para darte resultados precisos."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Step
            img={require("../../../assets/images/pasos-02.jpg")}
            title="Relajación"
            resume="Te guiamos para regular la temperatura de tus pechos en completa privacidad."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Step
            img={require("../../../assets/images/pasos-03.jpg")}
            title="Tomas térmicas"
            resume="Se realiza el escaneo de mapas térmicos de tus pechos sin contacto ni radiación."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Step
            img={require("../../../assets/images/pasos-04.jpg")}
            title="Resultado"
            resume="Médicos radiólogos analizan y envían tus resultados entre 24 a 48 horas hábiles."
            parentheses="(La interpretación puede ser guiada por nuestros doctores)"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default index;
