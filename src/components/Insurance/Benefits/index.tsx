import React from "react";

const BenefitsList = ({
  children,
  number,
}: {
  children: JSX.Element | JSX.Element[];
  number: string;
}) => {
  return (
    <div className="flex w-full my-10">
      <div className="w-2/12 mr-4 lg:mr-0 flex justify-center items-center">
        <div
          className="w-12 h-12 lg:w-16 lg:h-16 border-peach text-peach flex items-center justify-center font-trend text-sm lg:text-xl"
          style={{ border: "1px solid", borderRadius: "50%" }}
        >
          {number}.
        </div>
      </div>
      <div className="w-10/12 flex items-center">{children}</div>
    </div>
  );
};

const Benefits = () => {
  return (
    <div className="w-full lg:flex" id="benefits">
      <div className="w-full lg:w-5/12 bg-cover bg-center bg-no-repeat lg:min-h-screen lg:bg-Ibenefits-lg bg-Ibenefits-sm lg:h-1200px h-339px"></div>
      <div className="lg:w-7/12 bg-beige py-10 lg:py-12 px-5 lg:px-16">
        <div
          className="font-california text-eva-red text-5xl lg:text-6xl w-full text-center"
          style={{ transform: "rotate(-9deg)" }}
        >
          Conoce los <br /> Beneficios
        </div>
        <BenefitsList number="01">
          <div className="text-eva-red font-oswald tracking-widest">
            APOYO ECONÓMICO DE <span className="font-bold"> $100,000 MXN </span>
            EN PRIMER DIAGNÓSTICO DE CÁNCER DE LA MUJER (MAMA, OVARIO, CÉRVICO
            UTERINO)
          </div>
        </BenefitsList>
        <BenefitsList number="02">
          <div className="text-eva-red font-oswald tracking-widest">
            <span className="font-bold"> ACOMPAÑAMIENTO PSICOLÓGICO </span> PARA
            PACIENTE Y FAMILIA DE NÚCLEO
          </div>
        </BenefitsList>
        <BenefitsList number="03">
          <div className="text-eva-red font-oswald tracking-widest">
            <span className="font-bold"> SEGUNDA OPINIÓN</span> EN PLAN DE
            TRATAMIENTO CON PANEL MULTIDISCIPLINARIO DE ONCÓLOGOS ESPECIALISTAS
          </div>
        </BenefitsList>
        <BenefitsList number="04">
          <div className="text-eva-red font-oswald tracking-widest">
            ASISTENCIA <span className="font-bold"> NUTRICIONAL</span> ILIMITADA
          </div>
        </BenefitsList>
        <BenefitsList number="05">
          <div className="text-eva-red font-oswald tracking-widest">
            ASISTENCIA <span className="font-bold"> MÉDICA </span> REMOTA CON
            LOS MEJORES ESPECIALISTAS
          </div>
        </BenefitsList>
        <BenefitsList number="06">
          <div className="text-eva-red font-oswald tracking-widest">
            ACCESO A UNA <span className="font-bold"> RED DE APOYO</span> CON
            MUJERES SOBREVIVIENTES DE CÁNCER DE MAMA
          </div>
        </BenefitsList>
        <BenefitsList number="07">
          <div className="text-eva-red font-oswald tracking-widest">
            DESCUENTOS EN <span className="font-bold"> TRANSPORTE </span> PARA
            ACUDIR A TRATAMIENTOS
          </div>
        </BenefitsList>
        <BenefitsList number="08">
          <div className="text-eva-red font-oswald tracking-widest">
            DESCUENTOS EN{" "}
            <span className="font-bold"> ESTUDIOS DE SEGUIMIENTO:</span>{" "}
            MASTOGRAFÍAS, ECOGRAFÍAS, PAPANICOLAU, GAMMAGRAFÍA ÓSEA.
          </div>
        </BenefitsList>
      </div>
    </div>
  );
};

export default Benefits;
