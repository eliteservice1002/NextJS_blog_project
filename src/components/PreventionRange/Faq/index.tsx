import React, { useState } from "react";
import { qa } from "./faq";

const CircleButton = () => {
  return (
    <div>
      <svg
        className="hidden lg:block"
        width="50"
        height="50"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="24"
          cy="24"
          r="23.5"
          transform="rotate(-90 24 24)"
          stroke="white"
        />
        <path
          d="M31 21L24 28L17 21"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <svg
        className=" lg:hidden"
        width="30"
        height="30"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="24"
          cy="24"
          r="23.5"
          transform="rotate(-90 24 24)"
          stroke="white"
        />
        <path
          d="M31 21L24 28L17 21"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const Faq = () => {
  const [answer, setAnswer] = useState("");
  const q1 = (
    <div>
      Eva analiza los patrones térmicos de tus pechos, los cuales pueden verse
      afectados por la presencia de patologías como el cáncer de mama. En Eva
      Center, vivirás un proceso sin radiación y privado que durará sólo 10
      minutos. Haz clic aquí para ver un video en donde podrás ver cómo es la
      experiencia Eva.
    </div>
  );
  return (
    <div className="bg-lightbrown pb-10">
      <div className="h-full bg-lightbrown lg:pt-20 desktop:px-100px">
        <div className="w-full">
          <div id="faq" className="w-full bg-lightbrown lg:p-10">
            <div className="w-full lg:flex  p-8 lg:p-0 lg:text-left">
              <p
                className=" text-white text-3xl font-bold font-hthaptik mb-4 pr-5 pt-4 leading-none"
                style={{ letterSpacing: "0em" }}
              >
                Preguntas <br /> Frecuentes
              </p>
              <div className="lg:w-4/6 lg:flex lg:justify-end">
                <div className="flex-col lg:w-3/4 ">
                  {qa.map((item) => (
                    <div
                      key={item.question}
                      className="w-full flex justify-between items-center py-4 mb-6"
                      style={{
                        borderBottom: "1px solid #fff",
                        alignItems: "center",
                        position: "relative",
                      }}
                    >
                      <div className="flex-col w-full pr-8">
                        <div
                          onClick={() =>
                            setAnswer(answer !== item.answer ? item.answer : "")
                          }
                          className="cursor-pointer text-white text-left font-hthaptik w-full text-md lg:text-xl tracking-wide mb-3"
                        >
                          {item.question}
                        </div>
                        <div className="text-white text-left faqs-body font-md">
                          {answer === item.answer ? item.answer : ""}
                        </div>
                      </div>
                      <div
                        onClick={() =>
                          setAnswer(answer !== item.answer ? item.answer : "")
                        }
                        className=" justify-center mx-auto pt-4 lg:pt-0 text-center cursor-pointer"
                        style={{
                          transition: "all .3s ease",
                          position: "absolute",
                          right: "0",
                          top: "2px",
                          opacity: ".5",
                        }}
                      >
                        <CircleButton />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
