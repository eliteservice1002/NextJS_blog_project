import React, { useEffect, useState } from "react";
import Header from "../../components/PreventionRange/Header";
import SEOUpdate from "../../components/SEO/update";
import Hero from "../../components/PreventionRange/HeroSection";
import Scheduler from "../../components/PreventionRange/Scheduler";
import Approved from "../../components/PreventionRange/ApprovedSection";
import Discover from "../../components/PreventionRange/Discover";
import Benefits from "../../components/PreventionRange/Benefits";
import StepsMobile from "../../components/PreventionRange/StepsMobile";
import Steps from "../../components/PreventionRange/StepsSection";
import Opinion from "../../components/PreventionRange/Opinion";
import Stories from "../../components/PreventionRange/StoriesSection";
import Footer from "../../components/PreventionRange/Footer";
import { TakecareBanner } from "../../components/PreventionRange/TakecareBanner";
import Faq from "../../components/PreventionRange/Faq";
import { generateToken } from "../../untils/api";
import { storeQueryParameters } from "../../untils/helpers";

export default function index() {
  const [token, setToken] = useState("");

  useEffect(() => {
    storeQueryParameters();
    async function fn() {
      const token = await generateToken();
      setToken(token);
    }
    fn();
  });

  return (
    <div>
      <Header />
      <SEOUpdate
        title="Eva Center - Agendar Citas"
        description="Eva Center, la mejor tecnología para cuidar la salud de tus pechos"
        url="https://evacenter.com/prevencion-50"
      />
      <Hero
        imgM={require("../../assets/images/prevention-20/body-hero-50-sm.png")}
        imgD={require("../../assets/images/prevention-20/body-hero-50-lg.png")}
        imgWaveM={require("../../assets/images/prevention-20/wave-sm.png")}
        imgWaveD={require("../../assets/images/prevention-20/wave-lg.png")}
        startTitle="Cuidarte nunca fue tan sencillo"
        endTitle="Un examen auxiliar para la detección temprana del cáncer de mama. "
        gradient="from-prevention50F to-prevention50T"
      >
        <div className="hidden lg:flex">
          {token && <Scheduler token={token} route="prevencion-50" />}
        </div>
      </Hero>
      <div className="lg:hidden">
        {token && <Scheduler token={token} route="prevencion-50" />}
        <Approved />
      </div>
      <div className="lg:hidden">
        <Discover
          video={{
            imgMobile: "/img/Discover/discover-50-sm.png",
            videoMobile: "/videos/eva.mp4",
            imgDesktop: "/img/Discover/discover-50-sm.png",
            videoDesktop: "/videos/eva.mp4",
          }}
        />
      </div>
      <Benefits />
      <div className="hidden lg:flex lg:flex-col">
        <Discover
          video={{
            imgMobile: "/img/Discover/discover-50-sm.png",
            videoMobile: "/videos/eva.mp4",
            imgDesktop: "/img/Discover/discover-20-lg.png",
            videoDesktop: "/videos/eva.mp4",
          }}
        />
        <Steps padding="py-16 lg:py-sl bg-prevention20-pink" />
      </div>
      <div className="lg:hidden">
        <StepsMobile />
      </div>
      <Opinion
        backgroundImg={require("../../assets/images/preventionRange/bodyOpinion.png")}
      />
      <Stories
        opinions={[
          {
            img: "/img/Discover/opinion2-50.png",
            title: "“Eva es mi mejor aliada”",
            opinion:
              "Cuando me di cuenta que el cáncer de mama puede crecer al tamaño de una pelota de golf en menos de 12 meses, comencé a buscar métodos para complementar mi mastografía",
            color: "bg-prevention20-peach",
          },
          {
            img: "/img/Discover/opinion1-50.png",
            title: "“Eva complementa mis estudios”",
            opinion:
              "Cuando descubrí que Eva tiene un examen preciso y no invasivo, no dudé en hacerla mi aliada para cuidar la salud de mis pechos.",
            color: "bg-prevention20-red",
          },
        ]}
        videos={[
          {
            img: "/img/Discover/stories-50-sm.png",
            video:
              "https://798944760764-files.s3.amazonaws.com/videos/06_final_ads_mujer_60.mp4",
          },
          {
            img: "/img/Discover/stories-40-sm.png",
            video:
              "https://798944760764-files.s3.amazonaws.com/videos/03_final_ads_mujer_50.mp4",
          },
        ]}
      />
      <TakecareBanner />
      <Faq />
      <Footer />
    </div>
  );
}
