import React from "react";
import Image from "next/image";

export const ResponsiveHero = ({ imgD, imgM }) => {
  return (
    <div>
      <div className="hidden lg:flex">
        <Image
          layout="fill"
          className={`object-center lg:object-cover`}
          src={imgD}
        />
      </div>
      <div className="lg:hidden flex">
        <Image
          layout="fill"
          className={`banner_mobile object-center object-cover`}
          src={imgM}
        />
      </div>
    </div>
  );
};

export const ResponsiveWave = ({ imgD, imgM }) => {
  return (
    <div>
      <div className="hidden lg:flex">
        <Image
          layout="fill"
          className={`object-center lg:object-cover`}
          src={imgD}
        />
      </div>
      <div className="lg:hidden flex">
        <Image
          layout="fill"
          className={`object-center object-cover`}
          src={imgM}
        />
      </div>
    </div>
  );
};
