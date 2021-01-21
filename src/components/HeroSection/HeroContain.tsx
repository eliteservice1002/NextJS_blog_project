import React, { ReactNode, useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import Image from "next/image";

type VideoProps = React.DetailedHTMLProps<
  React.VideoHTMLAttributes<HTMLVideoElement>,
  HTMLVideoElement
>;

export const Video = React.forwardRef<HTMLVideoElement, VideoProps>(
  (props, ref) => (
    <video
      style={{
        objectFit: "cover",
        width: "100vw",
        height: "600px",
        position: "absolute",
        top: 0,
        left: 0,
      }}
      ref={ref}
      {...props}
    ></video>
  ),
);

export const HeroContain = ({ children }: { children: ReactNode }) => {
  const [testMobile, setTestMobile] = useState(true);

  useEffect(() => {
    setTestMobile(isMobile);
  }, []);

  return (
    <div className="relative">
      {testMobile ? (
        <div>
          <Image
            layout="fill"
            className="lg:flex lg:items-center lg:justify-center object-center object-cover pointer-events-none rounded-mid"
            src={require("../../assets/images/mobile-portada.jpg")}
          />
          <Video
            src={require("../../assets/videos/hero_mobile_video_3.mp4")}
            autoPlay
            loop
            muted
            playsInline
          ></Video>
        </div>
      ) : (
        <div>
          <Image
            layout="fill"
            className="lg:flex lg:items-center lg:justify-center object-center object-cover pointer-events-none rounded-mid"
            src={require("../../assets/images/web-portada.jpg")}
          />
          <Video
            src={require("../../assets/videos/hero_web_video.mp4")}
            autoPlay
            loop
            muted
            playsInline
          ></Video>
        </div>
      )}
      {children}
    </div>
  );
};
