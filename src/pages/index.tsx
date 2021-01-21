import Header from "../components/Header";
import Hero from "../components/HeroSection";
import Approved from "../components/ApprovedSection";
import Cab from "../components/CabsSection";
import Steps from "../components/StepsSection";
import Technology from "../components/TechnologySection";
import {
  ScheduledBanner,
  ContactBanner,
  EnterpriseBanner,
} from "../components/Banners";
import ForWhom from "../components/ForWhomSection";
import ClientsSection from "../components/ClientsSection";
import Investigation from "../components/InvestigationSection";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <div className="w-full">
      <SEO />
      <Header />
      <Hero />
      <Approved showText={true} />
      <Cab />
      <Steps padding="py-16 lg:py-sl" />
      <Technology />
      <ScheduledBanner
        text="Toma el control de la salud de tus pechos"
        textButton="Agenda tu cita"
        hrefDesktop="/citas"
      />
      <ForWhom padding="lg:px-sl px-6 pb-sl lg:pb-0" />
      <Investigation />
      <ContactBanner />
      <EnterpriseBanner />
      <ClientsSection />
      <Footer />
    </div>
  );
}
