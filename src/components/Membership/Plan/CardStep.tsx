import React from "react";

export default function CardStep({ step }) {
  return (
    <div>
      <div className="flex justify-center">
        <img src={step.img} alt="" />
      </div>
      <p
        className="text-center font-oswald text-2xl "
        style={{
          fontSize: "16px",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        {step.title}
      </p>
      <p className="text-center font-hthaptik text-dark">{step.content}</p>
    </div>
  );
}
