import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import swal from "@sweetalert/with-react";
import { loadStripe } from "@stripe/stripe-js";
import moment from "moment-timezone";
import "moment/locale/es";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import InfoTransfer from "../../Membership/Checkout/InfoTransfer";
import PlanOptions from "./PlanOptions";
import { getQueryParams, setOxxoPay } from "../../../untils/localStorage";
import { sendSlackMessage } from "../../../untils/slack";
import { sendEmail } from "../../../untils/email";
import { templateReplace } from "../../../untils/paymentsHelper";
import { UtmsProps } from "../../../untils/interfaces";
import { confirmEmailHTML } from "../../../email/confirmation";
import { oxxoHTML } from "../../../email/oxxo";
import LoadingIcon from "../../Membership/Checkout/LoadingIcon";
import { UserProps } from "./Interfaces";
import cardErrors from "../../Membership/Checkout/cardErrors.json";
import cards from "../../../assets/images/cards.svg";
import oxxo from "../../../assets/images/oxxo_logo.jpg";
import ssl from "../../../assets/images/ssl.svg";

moment.locale("es");

const Card = () => {
  const router = useRouter();
  const elements = useElements();
  const stripe = useStripe();
  const [user, setUser] = useState<UserProps | undefined>(undefined);
  const [payOption, setPayOption] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | undefined | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [utms, setUtms] = useState<UtmsProps | undefined>(undefined);
  const fakepayment =
    process.env.NEXT_PUBLIC_FAKE_PAYMENT == "true" ? true : false;
  const mPriceId = process.env.NEXT_PUBLIC_INSURANCE_PRICE;

  useEffect(() => {
    console.log(
      "NEXT_PUBLIC_INSURANCE_PRICE",
      process.env.NEXT_PUBLIC_INSURANCE_PRICE,
    );
    window.scrollTo(0, 0);
    const utm = getQueryParams();
    console.log(utm);
    setUtms(utm);
    const _user = localStorage.getItem("insuranceUser");
    if (_user) {
      setUser(JSON.parse(_user));
    } else {
      router.push("/seguro/register");
    }
  }, []);

  const BASE_URL =
    "https://bdnoucke3e.execute-api.us-east-1.amazonaws.com/Prod/";
  const generateToken = useCallback(async () => {
    try {
      const { data } = await axios.post(`${BASE_URL}/auth/token`, {
        app: "potential-users",
        clientId:
          process.env.GATSBY_POTENTIAL_USERS_CLIENT_ID ||
          "dGKf7oA9R20JVOHA67VUauF9dcVK3PE7",
      });
      return data.access_token;
    } catch (error) {
      console.error(error);
    }
  }, []);

  const ELEMENT_OPTIONS = {
    style: {
      base: {
        fontSize: "18px",
        color: "#424770",
        letterSpacing: "0.025em",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#9e2146",
      },
    },
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const cardElement = elements.getElement(CardNumberElement);

    if (cardElement) {
      const payload = await stripe.createToken(cardElement);
      if (payload.error) {
        console.log("[error]", payload.error);
        if (payload.error.type === "validation_error" && payload.error.code) {
          console.log(payload.error.code);
          setErrorMessage(cardErrors[payload.error.code]);
        } else {
          setErrorMessage(payload.error.message);
        }

        setIsLoading(false);
      } else {
        setErrorMessage(null);
        if (payload.token && user) {
          const cardOwnerName = `${user.firstName} ${user.paternalLastName} ${user.maternalLastName}`;

          const data = {
            payment: {
              amount: 499,
              originalPrice: 499,
              currency: "mxn",
              kind: "INSURANCE",
              medium: "WEBSITE",
              cardOwnerName,
              token: payload.token.id,
              test: utms.test,
              priceId: mPriceId,
              potentialUser: {
                firstName: user.firstName,
                lastName: `${user.paternalLastName} ${user.maternalLastName}`,
                email: user.email,
                cellphone: user.cellphone,
                birthdate: user.birthdate,
                extraInfo: {
                  ...user.extraInfo,
                },
                utmSource: utms.utm_source,
                utmMedium: utms.utm_medium,
                utmCampaign: utms.utm_campaign,
                utmTerm: utms.utm_term,
                utmContent: utms.utm_content,
                medium: "INSURANCE_V1_APP",
              },
              fake: fakepayment,
            },
          };

          const token = await generateToken();
          try {
            const response = await axios.post(
              `${BASE_URL}payments-v1/insurance`,
              data,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              },
            );
            setIsLoading(false);
            const id = response.data.potentialUser.id
              .substring(0, 4)
              .toUpperCase();
            const html = templateReplace(confirmEmailHTML, {
              "{{ name }}":
                data.payment.potentialUser.firstName.charAt(0).toUpperCase() +
                data.payment.potentialUser.firstName.slice(1).toLowerCase(),
              "{{ cert }}": id,
            });
            await sendEmail({
              alias: "Eva Center",
              subject: "Confirmación de Compra - Seguro Eva",
              html,
              to: [user.email],
            });
            await sendSlackMessage(data.payment.potentialUser, "buy");
            router.push("/seguro/thanks");
          } catch (error) {
            setIsLoading(false);
            const message: string =
              error.response?.data?.message ??
              "No se pudo procesar el pago, revisa que los datos de tu tarjeta sean correctos";
            setErrorMessage(message);
            console.error("error", error.response);
            // Sentry.captureException(error);
          }
        }
      }
    }
  };

  const handledOxxo = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setIsLoading(true);
    event.preventDefault();
    if (user) {
      const payload = {
        payment: {
          amount: 499,
          priceId: mPriceId,
          currency: "mxn",
          test: utms.test,
          potentialUser: {
            firstName: user.firstName,
            lastName: `${user.paternalLastName} ${user.maternalLastName}`,
            email: user.email,
            cellphone: user.cellphone,
            birthdate: user.birthdate,
            utmSource: utms.utm_source,
            utmMedium: utms.utm_medium,
            utmCampaign: utms.utm_campaign,
            utmTerm: utms.utm_term,
            utmContent: utms.utm_content,
            medium: "INSURANCE_V1_APP",
          },
          fake: fakepayment,
        },
      };

      try {
        const token = await generateToken();
        const response = await axios.post(
          "https://bdnoucke3e.execute-api.us-east-1.amazonaws.com/Prod/payments-v1/insurance/cash/oxxo",
          payload,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        console.log("oxxo pay response: ", response.data);
        setOxxoPay(JSON.stringify(response.data));

        const html = templateReplace(oxxoHTML, {
          "{{ code }}": response.data.oxxoPaymentData.number,
          "{{ name }}": user.firstName,
          "{{ price }}": response.data.oxxoPaymentData.amount,
          "{{ expirationDate }}": moment
            .unix(response.data.oxxoPaymentData.expiresAfter)
            .format("DD/MM/YYYY"),
        });

        await sendEmail({
          alias: "Eva",
          subject: "Referencia de pago - Seguro Eva",
          html: html,
          to: [(user && user.email) || ""],
        });
        setIsLoading(false);
        router.push("/seguro/oxxo");
      } catch (error) {
        setIsLoading(false);
        console.error("error", error.response);
        let message: string =
          error.response?.data?.message ?? "No se pudo procesar el pago";
        if (message.includes("duplicate")) {
          message = "Usuario ya cuenta con seguro";
        }
        swal({
          text: "Ha sucedido un error al realizar tu operacion",
          icon: "error",
          content: <div>{message}</div>,
          button: {
            text: "OK",
            value: true,
            visible: true,
            className: "",
            closeModal: true,
          },
        });
        // Sentry.captureException(error);
      }
    }
  };

  return (
    <div className="w-full">
      <div>{isLoading && <LoadingIcon paymentIntentId />}</div>
      <div className="text-3xl font-hthaptik text-dark font-light">Pagar</div>
      <div className="lg:px-0 px-4 flex flex-col lg:flex-row justify-around w-full">
        <div className="w-full lg:w-1/3">
          <div className="py-4 font-medium text-dark"> Opciones de Pago</div>
          <div
            className={`border ${
              payOption == "transfer" && "border-primary"
            } p-4 flex my-2 rounded-lg`}
          >
            <label className="updateColor md:w-2/3 block text-gray-500 font-bold">
              <input
                className="mr-2 leading-tight form-radio text-primary"
                type="radio"
                value="transfer"
                checked={payOption == "transfer"}
                onChange={(e) => {
                  setPayOption(e.target.value);
                }}
              />
              <span className="text-sm text-gray-700">
                Transferencia bancaria
              </span>
            </label>
          </div>
          <div
            className={`border ${
              payOption == "card" && "border-primary"
            }  p-4 flex my-2 rounded-lg justify-between`}
          >
            <label className="md:w-2/3 block text-gray-500 font-bold">
              <input
                className="mr-2 leading-tight form-radio text-primary"
                type="radio"
                value="card"
                checked={payOption == "card"}
                onChange={(e) => {
                  setPayOption(e.target.value);
                }}
              />
              <span className="text-sm text-gray-700">Tarjeta de Crédito</span>
            </label>
            <img src={cards} alt="" />
          </div>
          <div
            className={`border ${
              payOption == "oxxo" ? "border-primary" : ""
            } p-4 flex my-2 rounded-lg justify-between `}
          >
            <label className="md:w-2/3 block text-gray-500 font-bold">
              <input
                className="mr-2 leading-tight form-radio text-primary"
                type="radio"
                value="oxxo"
                checked={payOption == "oxxo"}
                onChange={(e) => {
                  setPayOption(e.target.value);
                }}
              />
              <span className="text-sm text-gray-700">Pago Oxxo</span>
            </label>
            <img src={oxxo} alt="" />
          </div>
          {payOption == "card" ? (
            <div>
              <div className="pb-6">
                <label htmlFor="cardNumber" className="font-medium text-dark">
                  Tarjeta:
                </label>
                <CardNumberElement
                  id="cardNumber"
                  options={ELEMENT_OPTIONS}
                  className="h-10 p-2 w-full border border-gray-300 rounded my-1 text-gray-800"
                />
              </div>
              <div className="pb-6 flex flex-wrap">
                <div className="w-2/3 pr-2">
                  <CardExpiryElement
                    id="expiry"
                    options={ELEMENT_OPTIONS}
                    className="h-10 p-2 w-full border border-gray-300 rounded my-1 text-gray-800"
                  />
                </div>
                <div className="w-1/3 pl-2 flex items-center">
                  <CardCvcElement
                    id="cvc"
                    options={ELEMENT_OPTIONS}
                    className="h-10 p-2 w-full border border-gray-300 rounded my-1 text-gray-800 mr-2"
                  />
                </div>
                <div className="text-orange-700 font-hthaptik text-center w-full py-3">
                  {errorMessage}
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="lg:hidden py-4">
          <hr />
        </div>
        <div className="w-full lg:w-5/12">
          <div className="flex w-full items-center py-4 justify-between">
            <div className="font-medium text-dark">Resumen</div>
            <img src={ssl} alt="" width="40" />
          </div>
          <div
            className={`w-full border p-4 flex justify-center my-2 rounded-lg 
            
            font-hthaptik text-dark`}
          >
            <div className="w-2/3">
              <PlanOptions />
              {payOption == "oxxo" ? (
                <div>
                  <button
                    onClick={handledOxxo}
                    className="rounded-md w-full tracking-wider font-hthaptik text-center bg-peach text-white px-8 py-3 disabled:opacity-25 my-10"
                    type="submit"
                  >
                    Generar formato de pago por $499 MXN
                  </button>
                </div>
              ) : payOption == "transfer" ? (
                <InfoTransfer />
              ) : payOption == "card" ? (
                <div>
                  <div className="w-full py-8">
                    <button
                      onClick={handleSubmit}
                      className="w-full tracking-widest font-hthaptik text-center bg-peach text-white px-8 py-3 disabled:opacity-25 rounded-md"
                      type="submit"
                    >
                      PAGAR $499 MXN
                    </button>
                  </div>
                </div>
              ) : (
                <div> </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_KEY || "pk_test_6pRNASCoBOKtIshFeQd4XMUh",
);

const index = () => {
  return (
    <Elements stripe={stripePromise}>
      <div className="w-full">
        <Card />
      </div>
    </Elements>
  );
};

export default index;
