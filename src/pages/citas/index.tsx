import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastProvider, useToasts } from "react-toast-notifications";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Loader } from "../../components/Loader";
import SEOUpdate from "../../components/SEO/update";
import HelpSection from "../../components/Bookings/HelpSection";

import { generateToken, getCenters } from "../../untils/api";
import {
  getFilterQueryParameters,
  groupBy,
  sortCenters,
  storeQueryParameters,
} from "../../untils/helpers";
import { Center, CenterFilters } from "../../untils/interfaces";
import { clearCenter, setCenter } from "../../untils/localStorage";

import {
  BannerContain,
  BannerContent,
  BannerText,
  Bold,
  ButtonCity,
  CenterCity,
  CentersContain,
  CentersTitle,
  PageContent,
} from "../../components/Bookings/Centers/Centers.styles";
import { FullWidth } from "../../components/Bookings/Globals/index.styles";

const Page = () => {
  const router = useRouter();
  const { addToast } = useToasts();
  const [centers, setCenters] = useState<Center[]>([]);
  const states = ["MÉXICO", "CIUDAD DE MÉXICO", "NUEVO LEÓN", "PUEBLA"];

  const getCentersData = async (filters?: CenterFilters) => {
    try {
      const {
        data: { centers },
      } = await getCenters(filters);
      const centersWithoutTest = centers.filter(
        (center) => center.slugName !== "test-commercial",
      );
      setCenters(sortCenters(centersWithoutTest));
    } catch (error) {
      addToast("Ha ocurrido un error, vuelve a intentar por favor.", {
        appearance: "warning",
        autoDismiss: true,
      });
    }
  };

  const getCentersDataWithToken = async (filters: CenterFilters) => {
    await generateToken();
    getCentersData(filters);
  };

  useEffect(() => {
    const filters = getFilterQueryParameters();
    getCentersDataWithToken(filters);
    clearCenter();
    storeQueryParameters();
  }, []);

  const centersByState = groupBy(centers, (item) => item.city.state.name);

  return (
    <Fragment>
      <SEOUpdate
        title="Eva Center - Agendar Citas"
        description="Eva Center, la mejor tecnología para cuidar la salud de tus pechos"
        url="https://evacenter.com/citas"
      />
      <Header noTransaparent />
      <PageContent>
        <BannerContain>
          <BannerContent>
            <BannerText>
              <Bold>COVID19:</Bold> Todas las instalaciones son completamente
              sanitizadas siguiendo un plan estricto de limpieza, higiene y
              desinfección.
            </BannerText>
          </BannerContent>
        </BannerContain>
        <CentersTitle>Selecciona tu ubicación más cercana</CentersTitle>
        <CentersContain>
          {states.map((state, index) => {
            const items = centersByState[state] ? centersByState[state] : [];
            return (
              <FullWidth key={"st" + index}>
                <CenterCity index={index}>
                  {state === "MÉXICO" ? "ESTADO DE MÉXICO" : state}
                </CenterCity>
                {centers.length ? (
                  items.map((center, centerIndex) => {
                    return (
                      <FullWidth key={"cen" + centerIndex}>
                        <ButtonCity
                          onClick={() => {
                            setCenter(center);
                            router.push("/citas/fecha");
                          }}
                        >
                          {center.name.toLowerCase()}
                        </ButtonCity>
                      </FullWidth>
                    );
                  })
                ) : (
                  <Loader />
                )}
              </FullWidth>
            );
          })}
        </CentersContain>
      </PageContent>
      <HelpSection />
      <Footer />
    </Fragment>
  );
};

const index = () => {
  return (
    <ToastProvider>
      <Page />
    </ToastProvider>
  );
};
export default index;
