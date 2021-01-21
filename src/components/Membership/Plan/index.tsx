import React from "react";
import Link from "next/link";
import unirme from "../../../assets/images/membership/unirme.svg";
import plan from "../../../assets/images/membership/plan.svg";
import resolve from "../../../assets/images/membership/resolve.svg";
import content from "../../../assets/images/membership/content.svg";
import Card from "./CardStep";

export default function index() {
  const steps = [
    {
      img: plan,
      title: "CREAR MI PLAN DE PREVENCIÓN",
      content:
        "Tendrás una llamada de introducción con tu Doctora Eva y juntas crearán tu plan de prevención y agendarán tus estudios.",
    },
    {
      img: resolve,
      title: "RESOLVER TODAS MIS DUDAS",
      content:
        "Podrás contactar a tu Doctora Eva en todo momento para resolver cualquier consulta médica.",
    },
    {
      img: content,
      title: "RECIBIR CONTENIDO EXCLUSIVO",
      content:
        "Tendrás acceso a la comunidad Eva y recibirás contenido exclusivo cada semana para cuidar de tu salud.",
    },
  ];

  return (
    <div>
      <div className="py-24">
        <p className="text-center text-3xl text-dark font-hthaptik">
          Un plan de cobertura creado por{" "}
          <span className="text-peach">
            oncólogos <br /> expertos en cáncer de mama
          </span>
        </p>
        <div className="lg:flex px-10 py-10">
          <div
            key="20"
            className="w-full lg:w-1/4 px-4 mb-5 flex justify-center"
          >
            <div>
              <div className="flex justify-center">
                <img src={unirme} alt="" />
              </div>
              <p
                className="text-center font-oswald text-2xl"
                style={{
                  fontSize: "16px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                UNIRME
              </p>
              <p className="text-center font-hthaptik text-dark">
                <Link href="/membresia/register">
                  <span className="text-peach">Haz clic aquí </span>
                </Link>{" "}
                para adquirir online o contacta a nuestro equipo de Eva Care
                para más información al <br />{" "}
                <span className="font-semibold">(+55) 5350 8883.</span>
              </p>
            </div>
          </div>
          {steps.map((step, i) => (
            <div
              key={i}
              className={"w-full lg:w-1/4 px-4 mb-5 flex justify-center"}
            >
              <Card step={step} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
