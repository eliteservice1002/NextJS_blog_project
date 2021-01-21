import React from "react";
import { IconCheck } from "./IconCheck";

export default function Package() {
  const list = [
    "Eva Center, la mejor tecnología para cuidar tus pechos",
    "Mastografía",
    "Consulta privada gineco-oncológica",
    "Seguro contra cáncer de mama, ovario y cervicouterino",
    "Segunda opinión oncológica en caso de diagnóstico",
    "Consultas online",
    "Acceso a comunidad y contenido exclusivo",
  ];

  return (
    <div className="py-6 text-dark">
      <ul>
        {list.map((check, i) => (
          <li key={i} className="flex items-center py-2">
            <IconCheck /> {check}
          </li>
        ))}
        <li className="flex items-center py-2">
          <IconCheck />
          <p>
            Sólo <span className="font-semibold"> MX$142/mes </span> o{" "}
            <span className="font-semibold"> MX$1,699/año </span>
          </p>
        </li>
      </ul>
    </div>
  );
}
