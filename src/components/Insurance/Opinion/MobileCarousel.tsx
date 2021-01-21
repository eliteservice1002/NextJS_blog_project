import React from "react";
import Swiper, { SwiperRefNode } from "react-id-swiper";
import { SwiperSlide } from "swiper/react";

export const MobileCarousel = () => {
  const ref2 = React.useRef<SwiperRefNode>(null);

  const goNext2 = () => {
    if (ref2) {
      if (ref2.current !== null) {
        if (ref2.current.swiper) {
          ref2.current.swiper.slideNext();
        }
      }
    }
  };

  const goPrev2 = () => {
    if (ref2) {
      if (ref2.current !== null) {
        if (ref2.current.swiper) {
          ref2.current.swiper.slidePrev();
        }
      }
    }
  };

  return (
    <div className="max-w-xl mx-auto swiper-container p-8">
      <Swiper ref={ref2} spaceBetween={50} slidesPerView={1}>
        <SwiperSlide>
          <p className="text-wine text-center text-xl mx-auto max-w-2xl font-chronicle">
            "Este seguro lo he estado buscando por mucho tiempo, ya que no
            quiero que mi hijas pasen por algo como el cáncer de mama o en
            general de mujer"
          </p>
          <div className="text-center font-oswald text-sm text-wine mt-2">
            - Josefina Benítez, 62 años.
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <p className="text-wine text-center font-chronicle text-xl mx-auto max-w-2xl">
            “Me llevaron de la mano de principio a fin, sin ustedes me hubiese
            sentido perdida y sola. Gracias!! ”
          </p>
          <div className="text-center font-oswald text-sm text-wine mt-2">
            -Verónica Martínez, 49 años.
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <p className="text-wine text-center font-chronicle text-lg mx-auto max-w-2xl">
            “Al principio estaba escéptica y resignada, mi esposo fue quien
            contrató el servicio. Pero una vez que me contactó la doctora y me
            explicó mi reporte de segunda opinión me sentí como si por primera
            vez todo hiciera sentido.”
          </p>
          <div className="text-center font-oswald text-sm text-wine mt-2 mb-3">
            - Gloria Estefanía, 55 años.
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-center items-center w-6/12 mx-auto mt-8">
        <button
          onClick={goPrev2}
          className="text-wine font-work w-1/3 outline-none mr-2 text-xs"
        >
          Anterior
        </button>
        <div
          className="w-4 px-3 mr-3"
          style={{ border: "1px solid #EE8D8B" }}
        ></div>
        <button
          onClick={goNext2}
          className="text-wine font-work w-1/3 outline-none text-xs"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
