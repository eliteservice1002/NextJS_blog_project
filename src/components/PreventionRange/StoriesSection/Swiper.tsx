import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import React, { useState } from "react";
import { Video } from "./Ivideo";

SwiperCore.use([Pagination]);

const index = ({ videos }: { videos: Video[] }) => {
  const [showVideo, setShowVideo] = useState(-1);

  const onClicked = (e) => {
    setShowVideo(e);
  };
  return (
    <div className="w-full flex items-center">
      <Swiper pagination={{ clickable: true }}>
        {videos.map((v, i) => (
          <SwiperSlide key={i}>
            <div onClick={() => onClicked(i)}>
              {!(showVideo === i) && (
                <Image
                  src={v.img}
                  className="rounded-lite h-400 object-cover"
                  width="1000"
                  height="1000"
                />
              )}
            </div>
            {showVideo === i && (
              <div className="w-full justify-center items-center">
                <video
                  className="rounded-lite h-400 mb-12"
                  width="100%"
                  height="100%"
                  style={{ objectFit: "cover" }}
                  src={v.video}
                  controls
                  autoPlay
                  playsInline
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default index;
