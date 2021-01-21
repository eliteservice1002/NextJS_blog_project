import React from "react";
import Header from "../../components/Membership/Headerv2";
import Banner from "../../components/Membership/Benefits/Banner";
import Hero from "../../components/Membership/Benefits/Hero";
import Paraph from "../../components/Membership/Benefits/common/Paragraph";
import img1 from "../../assets/images/membership/benefits/img-1.png";
import img2 from "../../assets/images/membership/benefits/img-2.png";
import img3 from "../../assets/images/membership/benefits/img-3.png";
import img4 from "../../assets/images/membership/benefits/img-4.png";
import img5 from "../../assets/images/membership/benefits/img-5.png";
import img7 from "../../assets/images/membership/benefits/img-7.png";
import Faq from "../../components/Membership/Faq";
import Footer from "../../components/Footer";

export default function beneficios() {
  return (
    <>
      <Header />
      <Hero />
      {/*NOTE body */}
      <div className="mt-24">
        <Banner url={img1} title="Mastografía">
          <Paraph>
            La mamografía también llamada mastografía salva vidas continúa
            siendo el estándar de oro. Es la mejor prueba para detectar el
            cáncer de mama en sus etapas iniciales
          </Paraph>

          <Paraph>
            {" "}
            Los mejores equipos mastográficos y los mejores médicos radiólogos
            del país interpretarán tu mastografía anual.{" "}
          </Paraph>

          <Paraph>
            Los radiólogos del Equipo Eva cuentan con más de 25 años de
            experiencia y se encuentran rectificados por el Colegio Mexicano de
            Radiología e Imagen. Siguen las prácticas más actualizadas de
            calidad y procesos como los del MD Anderson Cáncer Center en
            Houston.
          </Paraph>

          <Paraph>
            Tu mastografía se hará en colaboración con Salud Digna A.C. quienes
            cuentan con algunos de los{" "}
            <span className="font-normal">
              equipos mastográficos más avanzados de Latinoamérica. Sin embargo,
              nuestros Radiólogos Eva serán quienes realicen la interpretación
              definitiva y entreguen tu resultado concluyente.
            </span>
          </Paraph>
        </Banner>

        <Banner url={img2} title="Eva Center" reverse to="/" externaleva>
          <Paraph>
            Con tu membresía podrás obtener acceso a exámenes de monitoreo
            no-invasivo para cuidar la salud de tus pechos sin dolor, en
            privacidad y en menos de 10 minutos.
          </Paraph>
          <Paraph> Visita nuestra página y conoce más.</Paraph>
        </Banner>

        <Banner title="Consulta gineco-oncológica" url={img3}>
          <Paraph>
            En caso de ser necesario, tendrás un médico ginecólogo con
            subespecialidad en oncología cuidando de tu salud. Nuestro médicos
            te recibirán en sus consultorios privados a lo largo de la
            república.{" "}
          </Paraph>
          <Paraph>
            Trabajamos con una red de los mejores oncólogos y gineco-oncólogos
            del país. Líderes de opinión de instituciones como INCan, Hospital
            Español, FUCAM, Centro Médico ABC y muchos más.
          </Paraph>
        </Banner>

        <Banner
          large={true}
          to="/seguro"
          title="Seguro contra cáncer de mama, ovario y cervicouterino*"
          url={img4}
          reverse
          externaleva
        >
          <Paraph>
            En caso de ser diagnosticada con cáncer de mama, ovario o
            cervicouterino recibirás $100,000.00 MXN en apoyo económico y
            acompañamiento psicológico y nutricional.{" "}
          </Paraph>
          <Paraph>
            *El rango de edad para adquirir el seguro es entre los 18 - 65 años
            de edad y es renovado hasta los 69 años de edad.
          </Paraph>
        </Banner>

        <Banner title="Consultas online" url={img5}>
          <Paraph>
            Tu Doctora Eva será tu acompañante a lo largo de todo el proceso.
            Ella estará disponible para responder cualquier consulta que tengas,
            sin ningún costo adicional.
          </Paraph>
        </Banner>
        <Banner
          title="Comunidad Eva"
          reverse
          url={img7}
          to="https://blog.evacenter.com/ "
          externaleva
        >
          <Paraph>
            Con tu membresía podrás obtener acceso ilimitado a los mejores
            artículos redactados por expertos en oncología. Al mismo tiempo que
            podrás ser parte de nuestra comunidad para compartir tus dudas y
            experiencias.
          </Paraph>
        </Banner>
      </div>
      <Faq />
      <Footer />
    </>
  );
}
