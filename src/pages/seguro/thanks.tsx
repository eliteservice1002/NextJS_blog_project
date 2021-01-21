import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { FormHeader } from "../../components/Insurance/Header";

interface UserProps {
  fullName: string;
  birthdate: string;
  email: string;
  cellphone: string;
  extraInfo: {
    insurance: {
      sex: string;
      city: string;
      cancer: boolean;
    };
  };
}

const index = () => {
  const [user, setUser] = useState<null | UserProps>(null);
  const router = useRouter();
  useEffect(() => {
    // addTags('seguro');
    const _user = localStorage.getItem("insuranceUser");
    if (_user) {
      setUser(JSON.parse(_user));
    }
  }, []);

  if (!user) {
    return <div />;
  }

  return (
    <div className="flex flex-col items-stretch min-h-screen">
      <div
        className="bg-cream w-full h-12 lg:h-20"
        style={{ borderBottom: "1px solid rgba(215,215,215,0.4)" }}
      >
        <FormHeader />
      </div>
      <div
        className="flex-grow block w-full overflow-x-hidden pt-5 px-5 font-hthaptik"
        style={{ background: "#f7f8f9eb" }}
      >
        <div className="py-4 mx-auto max-w-lg">
          <div className="text-center py-2">
            <h1 className="text-xl text-center lg:text-2xl text-green-800">
              COMPRA CONFIRMADA
            </h1>
            <div className="w-full flex justify-center py-4">
              <svg
                className="h-20 w-20 text-green-800"
                viewBox="0 0 79 79"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.875 39.5L35.2917 47.9167L52.125 31.0833M77.375 39.5C77.375 44.4738 76.3953 49.3989 74.4919 53.9941C72.5885 58.5893 69.7987 62.7646 66.2817 66.2817C62.7646 69.7987 58.5893 72.5885 53.9941 74.4919C49.3989 76.3953 44.4738 77.375 39.5 77.375C34.5262 77.375 29.6011 76.3953 25.0059 74.4919C20.4107 72.5885 16.2353 69.7987 12.7183 66.2817C9.20131 62.7646 6.41146 58.5893 4.50806 53.9941C2.60467 49.3989 1.625 44.4738 1.625 39.5C1.625 29.4549 5.61539 19.8213 12.7183 12.7183C19.8213 5.61539 29.4549 1.625 39.5 1.625C49.5451 1.625 59.1787 5.61539 66.2817 12.7183C73.3846 19.8213 77.375 29.4549 77.375 39.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="mb-20 py-10 bg-white flex justify-center max-w-lg mx-auto">
          <div className="w-full py-4 px-5">
            <p className="text-center text-2xl text-red-dark pb-5">
              {user && user.fullName}
            </p>
            <p className="pb-6">
              A tu correo{" "}
              <span className="opacity-50">({user && user.email})</span> llegara
              la confirmacion de compra.
            </p>
            <p className="pb-6">
              Felicidades por adquirir el Seguro Eva para cáncer de la mujer.
              Ahora estás protegida por <strong>$100,000</strong> pesos en caso
              de un primer diagnóstico de:{" "}
            </p>
            <ul className="pb-6 pl-10 list-disc">
              <li>Cáncer de mama.</li>
              <li>Cáncer cérvico-uterino.</li>
              <li>Cáncer de ovario.</li>
            </ul>
            <p className="pb-6">
              Tu número de certificado llegará a tu correo pronto. Para resolver
              dudas sobre tu seguro, así como para recibir tu indemnización en
              caso de diagnóstico de cáncer, contáctanos al{" "}
              <a href="tel:+528008904774" className="text-blue-700">
                800-890-4774
              </a>
            </p>
            <p>¡Estamos para cuidarte!</p>
            <div className="mt-4 text-center">
              <p className=" text-sm text-eva-red my-2">
                CONDICIONES GENERALES DEL SEGURO
              </p>
              <div>
                <a
                  href="/condiciones-generales.pdf"
                  className="mx-auto font-thin text-center bg-eva-red text-white px-8 py-3 disabled:opacity-25"
                >
                  DESCARGAR
                </a>
              </div>
            </div>
            <div className="mt-10 text-center">
              <div>
                <button
                  onClick={() => {
                    localStorage.clear();
                    router.push("/seguro");
                  }}
                  className="mx-auto font-thin text-center bg-grass text-white px-8 py-3 disabled:opacity-25 flex items-center"
                >
                  FINALIZAR
                  <svg
                    enableBackground="new 0 0 24 24"
                    height="15px"
                    id="Layer_1"
                    version="1.1"
                    viewBox="0 0 24 24"
                    width="15px"
                    fill="#fff"
                    className="ml-2"
                  >
                    <path
                      clipRule="evenodd"
                      d="M21.652,3.211c-0.293-0.295-0.77-0.295-1.061,0L9.41,14.34  c-0.293,0.297-0.771,0.297-1.062,0L3.449,9.351C3.304,9.203,3.114,9.13,2.923,9.129C2.73,9.128,2.534,9.201,2.387,9.351  l-2.165,1.946C0.078,11.445,0,11.63,0,11.823c0,0.194,0.078,0.397,0.223,0.544l4.94,5.184c0.292,0.296,0.771,0.776,1.062,1.07  l2.124,2.141c0.292,0.293,0.769,0.293,1.062,0l14.366-14.34c0.293-0.294,0.293-0.777,0-1.071L21.652,3.211z"
                      fillRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
