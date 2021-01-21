import React, { useEffect } from "react";
import Header from "../../components/Header";
import Slick from '../../components/Carousel/slick'
import Postpage from './Postpage';
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
      <div style={{ width: '100%', paddingTop: 73 }}>
        {/* <Carousel /> */}
        <Slick />
      </div>
      <Postpage />
    </div>
  );
};

export default index;
