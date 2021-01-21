import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getCenterBySlugName, generateToken } from "../../untils/api";
import { setCenter, clearQueryParams } from "../../untils/localStorage";

import {
  Title,
  Button,
  ButtonSection,
  MainContainer,
} from "../../components/Bookings/Team/Comps.styles";
import { GetServerSideProps } from "next";

const teamMembers = [
  {
    name: "ANA B.",
    team: "center_manager",
    code: "ana776498",
  },
  {
    name: "ANDREA V.",
    team: "customer_care",
    code: "andrea128284",
  },
  {
    name: "FERNANDO L.",
    team: "software",
    code: "fernando421823",
  },
  {
    name: "ITZEL C.",
    team: "center_manager",
    code: "itzel463646",
  },
  {
    name: "JOCELYN L.",
    team: "center_manager",
    code: "jocelyn231493",
  },
  {
    name: "KAREN V.",
    team: "center_manager",
    code: "karen736224",
  },
  {
    name: "LAURA M.",
    team: "center_manager",
    code: "laura428880",
  },
  {
    name: "MICHELLE P.",
    team: "customer_care",
    code: "marianne163575",
  },
  {
    name: "ROCIO F.",
    team: "center_manager",
    code: "rocio747275",
  },
  {
    name: "Narda Roldan",
    team: "customer_care",
    code: "narda.roldan",
  },
  {
    name: "Nahomi Arias",
    team: "customer_care",
    code: "nahomi.arias",
  },
  {
    name: "Magda Rodriguez",
    team: "center_manager",
    code: "magda.rodriguez",
  },
  {
    name: "Alejandra Pascacio",
    team: "center_manager",
    code: "alejandra.pascacio",
  },
  {
    name: "Carla Fuentes",
    team: "center_manager",
    code: "carla.fuentes",
  },
  {
    name: "Miriam Quintero",
    team: "center_manager",
    code: "miriam.quintero",
  },
  {
    name: "Arantxa Medina",
    team: "center_manager",
    code: "arantxa.medina",
  },
  {
    name: "Beatriz Vera",
    team: "center_manager",
    code: "beatriz.vera",
  },
  {
    name: "Diana Cardenas",
    team: "center_manager",
    code: "diana.cardenas",
  },
  {
    name: "Mariel Tresgallo",
    team: "center_manager",
    code: "mariel.tresgallo",
  },
  {
    name: "Michelle Maldonado",
    team: "center_manager",
    code: "michelle.maldonado",
  },
  {
    name: "Elisa Acevedo",
    team: "center_manager",
    code: "elisa.acevedo",
  },
];

const utmSource = [
  "whatsapp",
  "facebook",
  "phone",
  "instagram",
  "zendesk_chat",
  "email",
  "in_situ",
];

const TeamPage = () => {
  const router = useRouter();
  const [previousMember, setPreviousMember] = useState([
    { name: "", team: "", code: "" },
  ]);
  const [utmParams, setUtmParams] = useState<{
    utmSource: string;
    utmMedium: string;
    utmCampaign: string;
    utmContent?: string;
  }>({
    utmSource: "",
    utmMedium: "",
    utmCampaign: "",
  });
  const [test, setTest] = useState(false);
  const [extendCalendar, setExtendCalendar] = useState(false);
  const [centerQA, setCenterQA] = useState(false);

  useEffect(() => {
    clearQueryParams();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.name === "utmMedium") {
      if (event.target.value !== "") {
        setUtmParams({
          ...utmParams,
          utmMedium: event.target.value.split(",")[1],
          utmCampaign: event.target.value.split(",")[0],
        });
      } else {
        setUtmParams({
          ...utmParams,
          utmMedium: "",
          utmCampaign: "",
        });
      }
    } else {
      setUtmParams({
        ...utmParams,
        utmSource: event.target.value,
      });
    }
  };

  const queryParams = `?utm_medium=${utmParams.utmSource}&utm_campaign=${
    utmParams.utmMedium
  }&utm_term=${utmParams.utmCampaign}${
    utmParams.utmContent && utmParams.utmContent !== ""
      ? `&utm_content=${utmParams.utmContent}`
      : ""
  }&test=${test}&calendar=${extendCalendar}`;

  const handleSubmit = () => {
    if (!centerQA) {
      router.push(`/citas/${queryParams}`);
    } else {
      generateToken()
        .then(() => getCenterBySlugName("qa-testing"))
        .then((center) => {
          setCenter(center.data.center);
          router.push(`/citas/fecha${queryParams}`);
        });
    }
  };

  return (
    <>
      <MainContainer>
        <Title>Crear URL personalizada</Title>
        <form>
          <div className="block py-5">
            <label
              htmlFor="utmMedium"
              className="block text-sm leading-5 font-medium text-gray-700"
            >
              Miembro del equipo
            </label>
            <select
              id="utmMedium"
              name="utmMedium"
              className="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
              onChange={handleChange}
            >
              {previousMember.length > 2 ? (
                previousMember.map((member) => (
                  <option
                    key={member.code}
                    value={[member.code, member.team, member.name]}
                  >
                    {member.name}
                  </option>
                ))
              ) : (
                <>
                  <option value="">Selecciona</option>
                  {teamMembers.map((member) => (
                    <option
                      key={member.code}
                      value={[member.code, member.team, member.name]}
                    >
                      {member.name}
                    </option>
                  ))}
                </>
              )}
            </select>
          </div>
          <div className="block py-5">
            <label
              htmlFor="utmSource"
              className="block text-sm leading-5 font-medium text-gray-700"
            >
              Medio de contacto
            </label>
            <select
              id="utmSource"
              name="utmSource"
              className="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
              onChange={handleChange}
            >
              <option value="">Selecciona</option>
              {utmSource.map((source, index) => (
                <option key={index} value={source}>
                  {source}
                </option>
              ))}
            </select>
          </div>
          <div className="block py-5">
            <label
              htmlFor="utmContent"
              className="block text-sm leading-5 font-medium text-gray-700"
            >
              Campaña
            </label>
            <select
              id="utmContent"
              name="utmContent"
              className="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
              onChange={(evt) => {
                setUtmParams({
                  ...utmParams,
                  utmContent: evt.target.value,
                });
              }}
            >
              <option value="">Selecciona</option>
              <option value="PAID_LEADS">PAID_LEADS</option>
            </select>
          </div>
          <div className="block py-5">
            <label
              htmlFor="test"
              className="block text-sm leading-5 font-medium text-gray-700"
            >
              Real o Prueba
            </label>
            <span
              role="checkbox"
              tabIndex={0}
              aria-checked={test}
              className={`${
                test ? "bg-yellow-600" : "bg-green-600"
              } relative inline-flex flex-shrink-0 h-7 w-12 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline`}
              onClick={() => {
                setTest(!test);
              }}
            >
              <span
                aria-hidden="true"
                className={`${
                  test ? "translate-x-5" : "translate-x-0"
                } inline-block h-6 w-6 rounded-full bg-white shadow transform transition ease-in-out duration-200`}
              ></span>
            </span>
          </div>
          <div className="block py-5">
            <label
              htmlFor="expand"
              className="block text-sm leading-5 font-medium text-gray-700"
            >
              Ampliar Calendario
            </label>
            <span
              role="checkbox"
              tabIndex={0}
              aria-checked={extendCalendar}
              className={`${
                extendCalendar ? "bg-yellow-600" : "bg-green-600"
              } relative inline-flex flex-shrink-0 h-7 w-12 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline`}
              onClick={() => {
                setExtendCalendar(!extendCalendar);
              }}
            >
              <span
                aria-hidden="true"
                className={`${
                  extendCalendar ? "translate-x-5" : "translate-x-0"
                } inline-block h-6 w-6 rounded-full bg-white shadow transform transition ease-in-out duration-200`}
              ></span>
            </span>
          </div>
          <div className="block py-5">
            <label
              htmlFor="center"
              className="block text-sm leading-5 font-medium text-gray-700"
            >
              Usar centro de pruebas
            </label>
            <span
              role="checkbox"
              tabIndex={0}
              aria-checked={centerQA}
              className={`${
                centerQA ? "bg-yellow-600" : "bg-green-600"
              } relative inline-flex flex-shrink-0 h-7 w-12 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline`}
              onClick={() => setCenterQA(!centerQA)}
            >
              <span
                aria-hidden="true"
                className={`${
                  centerQA ? "translate-x-5" : "translate-x-0"
                } inline-block h-6 w-6 rounded-full bg-white shadow transform transition ease-in-out duration-200`}
              ></span>
            </span>
          </div>
        </form>
        <ButtonSection style={{ textAlign: "center" }}>
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={utmParams.utmSource === "" || utmParams.utmMedium === ""}
          >
            Agendar cita
          </Button>
        </ButtonSection>
      </MainContainer>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.writeHead(302, { Location: "https://internal.evacenter.com" });
  context.res.end();
  return { props: {} };
};

export default TeamPage;
