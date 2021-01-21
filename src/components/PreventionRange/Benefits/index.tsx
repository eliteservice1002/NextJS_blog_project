import React from "react";
import Benefit from "./Benefit";
import badge from "../../../assets/images/preventionRange/badge.png";
import heart from "../../../assets/images/preventionRange/heart.png";
import person from "../../../assets/images/preventionRange/person.png";
import thunder from "../../../assets/images/preventionRange/thunder.png";
import searchImg from "../../../assets/images/preventionRange/search.png";

export default function index({ search }: { search?: boolean }) {
  return (
    <div className="py-20 lg:bg-prevention20-pink lg:flex">
      {!search && (
        <Benefit
          img={badge}
          title="Certero y avalado"
          resume="Tus resultados son analizados por los mejores médicos radiólogos."
        />
      )}
      {search ? (
        <Benefit
          img={heart}
          title="Controla tu bienestar"
          resume="Evita la detección tardía de cualquier enfermedad."
        />
      ) : (
        <Benefit
          img={heart}
          title="Sin dolor y sin radiación"
          resume="No invasivo y completamente seguro."
        />
      )}
      {search && (
        <Benefit
          img={searchImg}
          title="Resultados precisos"
          resume="Tus resultados son analizados por los mejores médicos radiólogos."
        />
      )}
      <Benefit
        img={person}
        title="Completa privacidad"
        resume="En Eva nadie te ve, te toca o te juzga."
      />
      <Benefit
        img={thunder}
        title={`Solo 10 minutos`}
        resume="En menos tiempo de lo que te toma hacerte las uñas."
      />
      {/* Cuidar la salud de tus pechos nunca había sido tan rápido. */}
    </div>
  );
}
