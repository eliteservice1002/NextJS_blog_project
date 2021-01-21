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
        url="https://evacenter.com/prevencion-20"
      />
      <Hero
        imgM={require("../../assets/images/prevention-20/body-hero-20-sm.png")}
        imgD={require("../../assets/images/prevention-20/body-hero-20-lg.png")}
        imgWaveM={require("../../assets/images/prevention-20/wave-sm.png")}
        imgWaveD={require("../../assets/images/prevention-20/wave-lg.png")}
        startTitle="Somos tus aliadas"
        endTitle="Cuidamos la salud de tus pecos de forma privada y no invasiva."
        padding="pt-40"
        gradient="from-prevention20F to-prevention20T"
      >
        <div className="hidden lg:flex">
          {token && <Scheduler token={token} route="prevencion-20" />}
        </div>
      </Hero>
      <div className="lg:hidden">
        {token && <Scheduler token={token} route="prevencion-20" />}
        <Approved />
      </div>
      <div className="lg:hidden">
        <Discover
          video={{
            imgMobile: "/img/Discover/discover-20-sm.png",
            videoMobile: "/videos/eva.mp4",
            imgDesktop: "/img/Discover/discover-20-lg.png",
            videoDesktop: "/videos/eva.mp4",
          }}
        />
      </div>
      <Benefits search />
      <div className="hidden lg:flex lg:flex-col">
        <Discover
          video={{
            imgMobile: "/img/Discover/discover-20-sm.png",
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
        backgroundImg={require("../../assets/images/prevention-20/backgroundImg-20.png")}
      />
      <Stories
        opinions={[
          {
            img: "/img/Discover/opinion1-20.png",
            title: "“Eva me enseñó a monitorear mi salud”",
            opinion:
              "El 20% de casos de cáncer de mama se detectan en mujeres jóvenes. Con Eva cuídate a tiempo. ",
            color: "bg-prevention20-peach",
          },
          {
            img: "/img/Discover/opinion2-20.png",
            title: "“Eva es mi mejor aliada”",
            opinion:
              "A los 28 años Eva salvó mi vida a través de la detección temprana del cáncer de mama.",
            color: "bg-prevention20-red",
          },
        ]}
        videos={[
          {
            img: "/img/Discover/stories-20-sm.png",
            video:
              "https://798944760764-files.s3.amazonaws.com/videos/04_final_ads_mujer_20_2.mp4",
          },
          {
            img: "/img/Discover/stories2-20-sm.png",
            video:
              "https://798944760764-files.s3.amazonaws.com/videos/01_final_ads_mujer_30.mp4",
          },
        ]}
      />
      <TakecareBanner />
      <Faq />
      <Footer />
    </div>
  );
}
