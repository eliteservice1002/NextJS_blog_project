import React, { useEffect } from "react";
import Header from "../../components/Membership/Headerv2";
import Banner from "../../components/Membership/Banner";
import Affiliates from "../../components/Membership/Affiliates";
import Detection from "../../components/Membership/DetectionPercentage";
import Details from "../../components/Membership/MembershipDetails";
import Plan from "../../components/Membership/Plan";
import Obtain from "../../components/Membership/Obtain";
import Opinion from "../../components/Membership/Opinion";
import Faq from "../../components/Membership/Faq";
import Footer from "../../components/Footer";
import SEOUpdate from "../../components/SEO/update";
import { storeQueryParameters } from "../../untils/helpers";

const index = () => {
  useEffect(() => {
    storeQueryParameters();
  }, []);

  return (
    <div>
      <SEOUpdate
        title="Membresia - Eva"
        description={
          "Un plan hecho por las expertas en salud femenina  . Una protección de $100,000 en caso de detección de cáncer* por primera vez, consultas médicas generales ilimitadas, consultas gineco-oncológicas*, exploraciones Eva y más."
        }
        url={"https://evacenter.com/membresia"}
      />
      <Header />
      <div className="h-auto w-full bg-darkbrown">
        <Banner />
        <Affiliates />
        <Detection />
      </div>
      <Details />
      <Plan />
      <Obtain />
      <Opinion />
      <Faq />
      <Footer membership />
    </div>
  );
};

export default index;
