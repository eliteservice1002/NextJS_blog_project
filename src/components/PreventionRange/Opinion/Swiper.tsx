import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Pagination]);

const index = ({ opinions }) => {
  const icons = [
    "/img/Opinion/Icon_1.png",
    "/img/Opinion/Icon_2.png",
    "/img/Opinion/Icon_3.png",
  ];
  return (
    <div className="opinion w-full flex items-center">
      <Swiper
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="dot swiper-pagination-bullet">
          <img src=${icons[index]}/></span>`;
          },
        }}
      >
        {opinions.map((opinion, i) => (
          <SwiperSlide key={i}>
            <div className="py-12 text-center text-base w-full p-4 font-spectral font-medium text-brownDark leading-120">
              “{opinion.opinion}”
              <br />
              <div className="font-bold uppercase pt-6 tracking-06em font-hthaptik pb-2">
                {opinion.name}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default index;
