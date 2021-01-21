import React from "react";
import Swiper, { SwiperRefNode } from "react-id-swiper";
import { SwiperSlide } from "swiper/react";
import { MobileCarousel } from "./MobileCarousel";

const Opinion = () => {
  const ref = React.useRef<SwiperRefNode>(null);

  const goNext = () => {
    if (ref) {
      if (ref.current !== null) {
        if (ref.current.swiper) {
          ref.current.swiper.slideNext();
        }
      }
    }
  };

  const goPrev = () => {
    if (ref) {
      if (ref.current !== null) {
        if (ref.current.swiper) {
          ref.current.swiper.slidePrev();
        }
      }
    }
  };

  return (
    <div className="bg-yellowdark h-full relative lg:py-12 py-16 px-8">
      <div className="hidden lg:block py-16">
        <div
          className="font-oswald text-sm text-center text-wine"
          style={{ margin: "0 0 54px 0" }}
        >
          LO QUE OPINAN DE NUESTRO SEGURO EVA
        </div>
        <div className="max-w-4xl mx-auto swiper-container">
          <Swiper ref={ref} spaceBetween={50} slidesPerView={1}>
            <SwiperSlide>
              <p className="text-wine text-center font-dm text-2xl mx-auto title-dm tracking-wider">
                Este seguro lo he estado buscando por mucho tiempo, ya que no
                quiero que mi hijas pasen por algo como el cáncer de mama o en
                general de mujer
              </p>
              <div className="text-center font-oswald text-sm text-wine mt-2">
                - GLORIA ESTEFANÍA
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <p className="text-wine text-center font-dm text-2xl mx-auto max-w-2xl tracking-wider">
                “Me llevaron de la mano de principio a fin, sin ustedes me
                hubiese sentido perdida y sola. Gracias!! ”
              </p>
              <div className="text-center font-oswald text-sm text-wine mt-2">
                -Verónica Martínez, 49 años.
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <p className="text-wine text-center font-dm text-2xl mx-auto max-w-2xl tracking-wider">
                “Al principio estaba escéptica y resignada, mi esposo fue quien
                contrató el servicio. Pero una vez que me contactó la doctora y
                me explicó mi reporte de segunda opinión me sentí como si por
                primera vez todo hiciera sentido.”
              </p>
              <div className="text-center font-oswald text-sm text-wine mt-2">
                - Gloria Estefanía, 55 años.
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="flex justify-center items-center w-4/12 mx-auto mt-4">
            <button
              onClick={goPrev}
              className="text-wine font-work w-1/3 outline-none"
            >
              Anterior
            </button>
            <div
              className="w-4 px-3"
              style={{ border: "1px solid #EE8D8B" }}
            ></div>
            <button
              onClick={goNext}
              className="text-wine font-work w-1/3 outline-none"
            >
              Siguiente
            </button>
          </div>
        </div>

        <div
          className="hidden bg-peach text-white px-10 py-5 absolute"
          style={{ transform: "rotate(90deg)", right: "-9%", top: "50%" }}
        >
          COMPARTENOS TU EXPERIENCIA
        </div>
      </div>
      <div className="lg:hidden lg:py-10">
        <MobileCarousel />
      </div>
    </div>
  );
};

export default Opinion;
