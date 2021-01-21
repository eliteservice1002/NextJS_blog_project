import React from "react";
import BannerStories from "./BannerStories";
import Videos from "./Swiper";
import { Video, Opinion } from "./Ivideo";

export default function index({
  videos,
  opinions,
}: {
  videos: Video[];
  opinions: Opinion[];
}) {
  return (
    <div>
      <div className="lg:hidden">
        <div className="text-brownDark text-3xl text-center leading-100 font-bold pb-8 font-hthaptik">
          Conoce las historias
        </div>
        <Videos videos={videos} />
      </div>
      <div className="hidden lg:flex lg:flex-col">
        <BannerStories
          color={opinions[0].color}
          img={opinions[0].img}
          title={opinions[0].title}
          opinion={opinions[0].opinion}
        />
        <BannerStories
          color={opinions[1].color}
          reverse={true}
          img={opinions[1].img}
          title={opinions[1].title}
          opinion={opinions[1].opinion}
        />
      </div>
    </div>
  );
}
