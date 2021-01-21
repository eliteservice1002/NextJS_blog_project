import React, { useState } from "react";

import { qa } from "./faq";

const CircleButton = () => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
    >
      <circle
        cx="24"
        cy="24"
        r="23.5"
        transform="rotate(-90 24 24)"
        stroke="#5C2933"
      />
      <path
        d="M24 17V31"
        stroke="#5C2933"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 24H31"
        stroke="#5C2933"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Faq = () => {
  const [answer, setAnswer] = useState("");
  return (
    <div className="bg-beige lg:p-5">
      <div className="h-full bg-beige desktop:px-100px">
        <div className="w-full">
          <div id="faq" className="w-full bg-beige lg:p-24">
            <div className="w-full text-center p-5 lg:p-0  lg:text-left">
              <div className="text-6xl lg:text-6xl font-california text-peach m-0 p-0">
                Paso a paso
              </div>
              <div
                className="text-4xl text-wine lg:text-5xl font-chronicle mb-4 mt-0 pt-0 leading-none"
                style={{ letterSpacing: "0em" }}
              >
                <span className="hidden desktop:block">¿Preguntas?</span>
                <span className="block desktop:hidden text-4xl">
                  Preguntas frecuentes
                </span>
              </div>
              <div className="flex-col">
                {qa.map((item) => (
                  <div
                    key={item.question}
                    className="w-full flex justify-between items-center py-4 mb-6"
                    style={{
                      borderBottom: "1px solid #5C2933",
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    <div className="flex-col w-full">
                      <div className="flex">
                        <div
                          onClick={() =>
                            setAnswer(answer !== item.answer ? item.answer : "")
                          }
                          className="w-10/12 cursor-pointer text-wine text-left font-oswald text-md lg:text-xl tracking-wide mb-3"
                        >
                          {item.question.toUpperCase()}
                        </div>
                        <div
                          onClick={() =>
                            setAnswer(answer !== item.answer ? item.answer : "")
                          }
                          className="w-12/12 mt-2 justify-center mx-auto text-center cursor-pointer btn-circle-plus"
                        >
                          <CircleButton />
                        </div>
                      </div>
                      <div className="text-wine text-left faqs-body font-work">
                        {answer === item.answer ? item.answer : ""}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
