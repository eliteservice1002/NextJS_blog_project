import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import ell1 from "../../../assets/images/membership/Ell1.jpg";
import ell2 from "../../../assets/images/membership/Ell2.jpg";
import ell3 from "../../../assets/images/membership/Ell3.jpg";
SwiperCore.use([Pagination]);

export default function index() {
  const opinions = [
    {
      name: "Gabriela Mar",
      age: 23,
      comments:
        "Sin su programa de cobertura no hubiese podido pagar por mi tratamiento, fueron  mis ángeles guardianes",
      img: ell3,
    },
    {
      name: "Karla Guillén",
      age: 52,
      comments: "Ser Eva Member ha sido una experiencia maravillosa",
      img: ell1,
    },
    {
      name: "Hilda Garza",
      age: 27,
      comments: "Lo recomiendo ampliamente a mis familiares y amigas",
      img: ell2,
    },
  ];
  return (
    <>
      <div className="w-full lg:hidden">
        <Swiper
          autoplay={{ delay: 2500 }}
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={1}
        >
          {opinions.map((opinion) => (
            <SwiperSlide key={opinion.name}>
              <div className="flex items-start px-6 my-24">
                <img src={opinion.img} alt="" />
                <div className="ml-3 ">
                  <p className="font-bold">
                    {opinion.name}{" "}
                    <span className="text-gray-500 font-normal opacity-70">
                      {opinion.age} años
                    </span>
                  </p>
                  <div
                    style={{
                      boxShadow: " 0px 17px 30px rgb(193 174 172 / 52%)",
                      borderRadius: "10px",
                    }}
                    className="bg-white rounde-xl p-4"
                  >
                    <p>“{opinion.comments}”</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full hidden lg:flex lg:px-24 px-4 py-24 font-hthaptik text-dark">
        {opinions.map((opinion) => (
          <div key={opinion.age} className="w-1/3 px-4">
            <div className="flex items-start">
              <img src={opinion.img} alt="" />
              <div className="ml-3 ">
                <p className="font-bold">
                  {opinion.name}{" "}
                  <span className="text-gray-500 font-normal opacity-70">
                    {opinion.age} años
                  </span>
                </p>
                <div
                  style={{
                    boxShadow: " 0px 17px 30px rgb(193 174 172 / 52%)",
                    borderRadius: "10px",
                  }}
                  className="bg-white rounde-xl p-4"
                >
                  <p>“{opinion.comments}”</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
