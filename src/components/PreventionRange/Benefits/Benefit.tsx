import React from "react";
import Image from "next/image";

export default function Benefit({ img, title, resume }) {
  return (
    <div className="pb-12 px-16 flex items-center flex-col lg:w-1/4 lg:px-16">
      <Image
        width="100"
        height="100"
        layout="fixed"
        className={`object-center object-cover`}
        src={img}
      />
      <div
        className="font-hthaptik text-center text-brownDark font-bold text-24px lg:text-2xl leading-100 lg:px-2 pt-4 lg:-mt-6"
        style={{ whiteSpace: "pre-wrap", zIndex: 2 }}
      >
        {title}
      </div>
      <div className="font-hthaptik text-brownDark text-lg text-center font-light	lg:text-base leading-120 pt-2 lg:pt-4 tracking-04em">
        {resume}
      </div>
    </div>
  );
}
