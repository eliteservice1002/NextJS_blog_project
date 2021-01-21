import React from "react";
import Image from "next/image";

export default function BannerStories({
  reverse,
  img,
  title,
  opinion,
  color,
}: {
  reverse?: boolean;
  img: string;
  title: string;
  opinion: string;
  color: String;
}) {
  return (
    <div className={`flex h-450 w-full mt-20 ${reverse && "flex-row-reverse"}`}>
      <div className="w-1/2 flex justify-center">
        <Image
          layout="intrinsic"
          width={10000}
          height={700}
          className="flex items-center justify-center object-center object-cover"
          src={img}
        />
      </div>
      <div
        className={`w-1/2 flex flex-col justify-center items-center h-450 ${color}`}
      >
        <div className="text-white w-1/2 text-center font-hthaptik font-medium leading-100 text-4xl tracking-wide">
          {title}
        </div>
        <div className="text-white w-1/3 pt-4 text-center font-hthaptik font-thin leading-100 text-lg tracking-wide">
          {opinion}
        </div>
      </div>
    </div>
  );
}
