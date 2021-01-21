import React from "react";
import Navbar from "../../components/Prevention/Nav";
import SEOUpdate from "../../components/SEO/update";
import Hero from "../../components/Prevention/HeroSection";
import Approved from "../../components/ApprovedSection";
import { StyledButton } from "../../components/Prevention/common/Button/Button.styles";
import { WhatsappIcon } from "../../components/Footer/Icons";
import Scheduler from "../../components/Prevention/Scheduler";
import Steps from "../../components/StepsSection";
import Cab from "../../components/CabsSection";
import ForWhom from "../../components/ForWhomSection";
import Footer from "../../components/Footer";
import Banners from "../../components/Prevention/Banners";
import BannerButton from "../../components/Prevention/common/Button";

import api from "../../api";

export default function index({ token }: { token: string }) {
  return (
    <div>
      <Navbar />
      <SEOUpdate
        title="Eva Center - Agendar Citas"
        description="Eva Center, la mejor tecnología para cuidar la salud de tus pechos"
        url="https://evacenter.com/prevencion"
      />
      <Hero
        img="lg:bg-hero-body-lg bg-hero-body-sm"
        startTitle="Somos un examen sin dolor, privado y rápido para la detección auxiliar del "
        darkTitle="cáncer de mama"
        endTitle=""
      >
        <div className="lg:hidden">
          <StyledButton primary={false}>
            <WhatsappIcon />
            <a href="https://api.whatsapp.com/send?phone=522214139817&text=¡Hola!, Solicito más información sobre Eva Center">
              Contáctanos
            </a>
          </StyledButton>
        </div>
      </Hero>
      <Scheduler token={token} />
      <Approved showText={false} />
      <Steps padding="py-8 lg:py-xl" />
      <Cab />
      <ForWhom padding="py-16 lg:pt-20 lg:px-sl px-6" />
      <Banners
        text={"Estamos aquí para"}
        darkText={" ayudarte"}
        img="lg:bg-we-are-here-lg bg-we-are-here-sm h-40"
      >
        <BannerButton primary={false} href="/citas" text="Agenda tu cita" />
      </Banners>
      <Banners
        text={"Ama y cuida tus pechos"}
        darkText={" a tiempo"}
        img="lg:bg-love-lg bg-love-sm lg:h-400 p-4"
      >
        <BannerButton primary={true} href="/" text="Conoce más" />
      </Banners>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const response = await api.auth.token();
  const token = await response.access_token;
  return {
    props: { token },
  };
}
