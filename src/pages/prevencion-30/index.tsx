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
        url="https://evacenter.com/prevencion-30"
      />
      <Hero
        imgM={require("../../assets/images/prevention-20/body-hero-30-sm.png")}
        imgD={require("../../assets/images/prevention-20/body-hero-30-lg.png")}
        imgWaveM={require("../../assets/images/prevention-20/wave-sm.png")}
        imgWaveD={require("../../assets/images/prevention-20/wave-lg.png")}
        startTitle="Cuídate por ellos y por ti"
        endTitle="Un estudio de mama preciso, privado y no invasivo."
        gradient="from-prevention40F to-prevention40T"
      >
        <div className="hidden lg:flex">
          {token && <Scheduler token={token} route="prevencion-30" />}
        </div>
      </Hero>
      <div className="lg:hidden">
        {token && <Scheduler token={token} route="prevencion-30" />}
        <Approved />
      </div>
      <div className="lg:hidden">
        <Discover
          video={{
            imgMobile: "/img/Discover/discover_play_sm.png",
            videoMobile: "/videos/eva.mp4",
            imgDesktop: "/img/Discover/discover_play.png",
            videoDesktop: "/videos/eva.mp4",
          }}
        />
      </div>
      <Benefits />
      <div className="hidden lg:flex lg:flex-col">
        <Discover
          video={{
            imgMobile: "/img/Discover/discover_play_sm.png",
            videoMobile: "/videos/eva.mp4",
            imgDesktop: "/img/Discover/discover_play.png",
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
            img: "/img/Discover/opinion2-40.png",
            title: "“Me cuido por ellos”",
            opinion:
              "Veo crecer tranquila a mis hijos porque cuido mis pechos con Eva",
            color: "bg-prevention20-purple",
          },
          {
            img: "/img/Discover/opinion1-40.png",
            title: "“Juntas nos cuidamos”",
            opinion:
              "Quiero que mi mamá cuide de su salud para que está conmigo mucho tiempo y ella quiere que cuide de mí para que pueda acompañarla.",
            color: "bg-prevention20-peach",
          },
        ]}
        videos={[
          {
            img: "/img/Discover/stories-30-sm.png",
            video:
              "https://798944760764-files.s3.amazonaws.com/videos/02_final_ads_bebe.mp4",
          },
          {
            img: "/img/Discover/stories2-30-sm.png",
            video:
              "https://798944760764-files.s3.amazonaws.com/videos/07_final_ads_mujer-20-hijaymama.mp4",
          },
        ]}
      />
      <TakecareBanner />
      <Faq />
      <Footer />
    </div>
  );
}
