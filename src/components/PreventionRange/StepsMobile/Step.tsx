import React from "react";
import Image from "next/image";

export default function Step({
  img,
  title,
  resume,
  parentheses,
}: {
  img: string;
  title: string;
  resume: string;
  parentheses?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        layout="fixed"
        width={150}
        height={150}
        className={`rounded-80px object-center object-cover`}
        src={img}
      />
      <div className="text-brownDark text-2xl text-center font-medium pt-6 font-hthaptik">
        {title}
      </div>
      <div className="text-brownDark text-base text-center font-light	leading-120 pt-2 lg:pt-4 tracking-04em px-10 font-hthaptik">
        {resume}
        <span
          style={{
            fontSize: "12px",
            letterSpacing: "0.05em",
            color: "rgb(113 99 96)",
            marginTop: "12px",
          }}
        >
          <br />
          {parentheses}
        </span>
      </div>
    </div>
  );
}
