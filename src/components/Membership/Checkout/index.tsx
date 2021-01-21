import React, { useState, useEffect } from "react";
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
import InfoTransfer from "./InfoTransfer";
import PlanOptions from "./PlanOptions";
import { getQueryParams, setOxxoPay } from "../../../untils/localStorage";
import { sendEmail } from "../../../untils/email";
import { UtmsProps } from "../../../untils/interfaces";
import { templateReplace } from "../../../untils/paymentsHelper";
import membershipHTML from "../../../email/membership";
import { oxxoHTML } from "../../../email/oxxo";
import LoadingIcon from "./LoadingIcon";
import { Plan, UserProps } from "./Interfaces";
import cardErrors from "./cardErrors.json";
import cards from "../../../assets/images/cards.svg";
import oxxo from "../../../assets/images/oxxo_logo.jpg";
import ssl from "../../../assets/images/ssl.svg";
import {
  generateTokenCheckoutMembership,
  checkoutMembershipStep1,
  checkoutMembershipStep2,
  checkoutMembershipOxxo,
} from "../../../untils/api";

moment.locale("es");

const Card = () => {
  const router = useRouter();
  const elements = useElements();
  const stripe = useStripe();
  const [user, setUser] = useState<UserProps | undefined>(undefined);
  const [utms, setUtms] = useState<UtmsProps | undefined>(undefined);
  const [payOption, setPayOption] = useState("");
  const [cardNumber, setCardNumber] = useState(false);
  const [cardExp, setCardExp] = useState(false);
  const [cardCvc, setCardCvc] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [paymentIntentId, setPaymentIntentId] = useState("");
  const [paymentMethodId, setPaymentMethodId] = useState("");
  const [plan, setPlan] = useState<Plan>({
    count: 0,
    interval: "month",
    type: "fixed_count",
  });
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [options, setOptions] = useState([]);
  const [errorMessage, setErrorMessage] = useState<string | undefined | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tokenAuth, setTokenAuth] = useState("");
  const [refCard, setRefCard] = useState(null);
  const [refExp, setRefExp] = useState(null);
  const [refCvc, setRefCvc] = useState(null);

  const fakepayment =
    process.env.NEXT_PUBLIC_FAKE_PAYMENT === "true" ? true : false;
  const mPriceId = process.env.NEXT_PUBLIC_UNIVERSAL_MEMBERSHIP_PRICE;

  useEffect(() => {
    window.scrollTo(0, 0);
    const utms = getQueryParams();
    setUtms(utms);
    const _user = localStorage.getItem("membershipUser");
    if (_user) {
      setUser(JSON.parse(_user));
    } else {
      router.push("/membresia/register");
    }
    async function fetchToken() {
      const token = await generateTokenCheckoutMembership();
      setTokenAuth(token.access_token);
      return token;
    }
    fetchToken();
  }, []);

  const val = () => {
    if (
      acceptTerms == false ||
      cardCvc == false ||
      cardExp == false ||
      cardNumber == false
    )
      return true;
    else return false;
  };

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

  const handleSubmitStep1 = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const cardElement = elements.getElement(CardNumberElement);
    console.log("cardElement", cardElement);
    if (cardElement) {
      const payload = await stripe.createToken(cardElement);
      if (payload.error) {
        console.log("[error]", payload.error);
        if (payload.error.type === "validation_error" && payload.error.code) {
          console.log(payload.error.code);
          console.log(
            "cardErrors[payload.error.code]",
            cardErrors[payload.error.code],
          );
          setErrorMessage(cardErrors[payload.error.code]);
        } else {
          setErrorMessage(payload.error.message);
        }
        setIsLoading(false);
        return { error: true };
      } else {
        setErrorMessage(null);
        if (payload.token && user) {
          const data = {
            membership: {
              firstName: user.firstName,
              lastName: `${user.paternalLastName} ${user.paternalLastName}`,
              birthdate: user.birthdate,
              sex: user.extraInfo.membership.sex,
              cellphone: user.cellphone,
              email: user.email,
              cardOwnerName: `${user.firstName} ${user.paternalLastName} ${user.paternalLastName}`,
              priceId: mPriceId,
              amount: 1699,
              currency: "mxn",
              utmMedium: utms.utm_medium,
              utmSource: utms.utm_source,
              utmCampaign: utms.utm_campaign,
              utmTerm: utms.utm_term,
              utmContent: utms.utm_content,
              test: utms.test,
              medium: "WEBSITE",
              membershipCode: "MEM_WITHOUT_CENTER_2020_07",
              token: payload.token.id,
              hearAboutUs: user.hearAboutUs,
              fake: fakepayment,
            },
          };
          console.log("data", payload);

          try {
            const datos = await checkoutMembershipStep1(data, tokenAuth);
            console.log(datos);
            setOptions(datos.plans);
            setPaymentIntentId(datos.paymentIntentId);
            setPaymentMethodId(datos.paymentMethodId);
            datos && setShowOptions(true);
            setIsLoading(false);
            return { error: false, datos };
          } catch (error) {
            setIsLoading(false);
            console.error("error", error.response);
            let message: string =
              error.response?.data?.message ?? "No se pudo procesar el pago";
            if (message.includes("duplicate")) {
              message = "Usuario ya cuenta con membresia";
            }
            swal({
              text: "Ha sucedido un error al realizar tu operación",
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
            return { error: true };
          }
        }
      }
    }
  };

  const handleSubmitStrp2 = async (event) => {
    event.preventDefault();
    let step1 = {
      data: {
        paymentIntentId: "",
        paymentMethodId: "",
      },
    };
    if (paymentIntentId == "") {
      const resStep1 = await handleSubmitStep1(event);
      if (resStep1.error) {
        return;
      } else {
        step1 = resStep1.datos;
      }
    }
    setIsLoading(true);
    let data;
    if (plan.count == 0) {
      data = {
        paymentIntentId: paymentIntentId || step1.data.paymentIntentId,
        paymentMethodId: paymentMethodId || step1.data.paymentMethodId,
        fake: fakepayment,
      };
    } else {
      data = {
        paymentIntentId: paymentIntentId || step1.data.paymentIntentId,
        paymentMethodId: paymentMethodId || step1.data.paymentMethodId,
        plan,
        fake: fakepayment,
      };
    }
    try {
      const reps = await checkoutMembershipStep2(data, tokenAuth);
      console.log(reps);
      await sendEmail({
        alias: "Eva",
        subject: "Confirmación de Compra - Membresia Eva",
        html: membershipHTML,
        to: [(user && user.email) || ""],
      });
      setIsLoading(false);
      router.push("/membresia/congrat");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      const message: string =
        error.response?.data?.message ?? "No se pudo procesar el pago";
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
    }
  };

  const handledOxxo = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    if (user) {
      const data = {
        membership: {
          firstName: user.firstName,
          lastName: `${user.paternalLastName} ${user.maternalLastName}`,
          birthdate: user.birthdate,
          sex: user.extraInfo.membership.sex,
          cellphone: user.cellphone,
          email: user.email,
          priceId: mPriceId, // 50MXN 'price_1HEgdsJIMfr2vAUGMpDw7thb', // 1699MXN 'price_1HCC11JIMfr2vAUG5zTJYgVD', //'price_1H8BrbJIMfr2vAUGZ8Dc4dAo',
          amount: 1699,
          currency: "mxn",
          medium: "OXXO",
          membershipCode: "MEM_WITHOUT_CENTER_2020_07",
          utmMedium: utms.utm_medium,
          utmSource: utms.utm_source,
          utmCampaign: utms.utm_campaign,
          utmTerm: utms.utm_term,
          utmContent: utms.utm_content,
          test: utms.test,
          hearAboutUs: user.hearAboutUs,
          fake: fakepayment,
        },
      };
      console.log(data);

      try {
        const datos = await checkoutMembershipOxxo(data, tokenAuth);
        console.log("oxxo pay response: ", datos);
        setOxxoPay(JSON.stringify(datos));

        const html = templateReplace(oxxoHTML, {
          "{{ code }}": datos.oxxoPaymentData.number,
          "{{ name }}": user.firstName,
          "{{ price }}": datos.oxxoPaymentData.amount,
          "{{ expirationDate }}": moment
            .unix(datos.oxxoPaymentData.expiresAfter)
            .format("DD/MM/YYYY"),
        });

        await sendEmail({
          alias: "Eva",
          subject: "Referencia de pago - Membresia Eva",
          html: html,
          to: [(user && user.email) || ""],
        });
        setIsLoading(false);
        router.push("/membresia/oxxo");
      } catch (error) {
        setIsLoading(false);
        console.error("error", error.response);
        let message: string =
          error.response?.data?.message ?? "No se pudo procesar el pago";
        if (message.includes("duplicate")) {
          message = "Usuario ya cuenta con membresia";
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
      <div className="px-4 lg:px-0 flex flex-col lg:flex-row justify-around w-full">
        <div className="w-full lg:w-1/3">
          <div className="py-4 font-medium text-dark"> Opciones de Pago</div>
          <div
            className={`border ${
              payOption == "transfer" && "border-primary"
            } w-full flex my-2 rounded-lg updateColor`}
          >
            <label className="w-full p-4 block text-gray-500 font-bold">
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
            }  w-full flex my-2 rounded-lg justify-between`}
          >
            <label className="w-full p-4 text-gray-500 font-bold flex justify-between">
              <div>
                <input
                  className="mr-2 leading-tight form-radio text-primary"
                  type="radio"
                  value="card"
                  checked={payOption == "card"}
                  onChange={(e) => {
                    setPayOption(e.target.value);
                  }}
                />
                <span className="text-sm text-gray-700">
                  Tarjeta de Crédito
                </span>
              </div>
              <img src={cards} alt="" />
            </label>
          </div>
          <div
            className={`border ${
              payOption == "oxxo" ? "border-primary" : ""
            } w-full flex my-2 rounded-lg justify-between`}
          >
            <label className="w-full p-4 text-gray-500 font-bold flex justify-between">
              <div>
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
              </div>
              <img src={oxxo} alt="" />
            </label>
          </div>
          {payOption == "card" ? (
            <div className="font-hthaptik">
              <div className="pb-6">
                <label htmlFor="cardNumber" className="text-dark font-medium">
                  Tarjeta:
                </label>
                <CardNumberElement
                  onReady={(e) => setRefCard(e)}
                  id="cardNumber"
                  options={ELEMENT_OPTIONS}
                  className="h-10 p-2 w-full border border-gray-500 rounded my-1 text-gray-800"
                  onChange={(e) => {
                    setCardNumber(true);
                  }}
                />
              </div>
              <div className="pb-6 flex flex-wrap">
                <div className="w-2/3 pr-2">
                  <CardExpiryElement
                    onReady={(e) => setRefExp(e)}
                    id="expiry"
                    options={ELEMENT_OPTIONS}
                    className="h-10 p-2 w-full border border-gray-500 rounded my-1 text-gray-800"
                    onChange={() => {
                      setCardExp(true);
                    }}
                  />
                </div>
                <div className="w-1/3 pl-2 flex items-center">
                  <CardCvcElement
                    onReady={(e) => setRefCvc(e)}
                    id="cvc"
                    options={ELEMENT_OPTIONS}
                    className="h-10 p-2 w-full border border-gray-500 rounded my-1 text-gray-800 mr-2"
                    onChange={() => {
                      setCardCvc(true);
                    }}
                  />
                </div>
                <div className="text-orange-700 font-hthaptik text-center w-full py-3">
                  {errorMessage}
                </div>

                {!showOptions && (
                  <div className="w-full my-4">
                    <button
                      className="text-white py-1 px-3 bg-aqua rounded-lg"
                      onClick={(e) => {
                        handleSubmitStep1(e);
                      }}
                    >
                      Desglosar pago a meses sin intereses
                    </button>
                  </div>
                )}
                {showOptions && (
                  <div className="w-full my-4">
                    <button
                      className="text-white py-1 px-3 bg-aqua"
                      onClick={() => {
                        refCard.clear();
                        refExp.clear();
                        refCvc.clear();
                        setShowOptions(false);
                        setPaymentIntentId("");
                        setPaymentMethodId("");
                        setPlan({
                          count: 0,
                          interval: "month",
                          type: "fixed_count",
                        });
                      }}
                    >
                      Probar otra tarjeta
                    </button>
                  </div>
                )}
                {showOptions && (
                  <div className="w-full mt-2 mb-4">
                    <h3 className="text-marine font-hthaptik">
                      Opciones de Pago:
                    </h3>
                    <select
                      name=""
                      id=""
                      className="h-10 p-2 w-full border border-gray-500 rounded my-1 text-gray-800"
                      onChange={(e) => {
                        const d = {
                          interval: "month",
                          type: "fixed_count",
                          count: Number(e.target.value),
                        };
                        setPlan(d);
                      }}
                    >
                      <option value={0}>1 solo pago</option>
                      {options.map(
                        (op: {
                          count: number;
                          interval: string;
                          type: string;
                        }) => (
                          <option key={op.count} value={op.count}>
                            {op.count} pagos mensuales
                          </option>
                        ),
                      )}
                    </select>
                  </div>
                )}
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
                <div className="flex justify-center pt-10">
                  <button
                    className="w-full font-haptik text-center bg-peach text-white px-6 py-2 disabled:opacity-25 rounded-md tracking-wider"
                    onClick={(e) => {
                      handledOxxo(e);
                    }}
                  >
                    Generar formato de pago por $1,699 MXN
                  </button>
                </div>
              ) : payOption == "transfer" ? (
                <InfoTransfer />
              ) : payOption == "card" ? (
                <div>
                  <div className="py-4">
                    <label className=" block text-gray-500 font-work">
                      <input
                        className="mr-2 leading-tight"
                        type="checkbox"
                        onChange={() => {
                          setAcceptTerms(!acceptTerms);
                        }}
                      />
                      <span className="text-sm text-gray-700">
                        Acepto términos y condiciones
                      </span>
                    </label>
                  </div>

                  <div className="w-full">
                    <button
                      className="w-full font-hthaptik text-center bg-peach text-white px-8 py-3 disabled:opacity-25 rounded-md"
                      type="submit"
                      disabled={val()}
                      onClick={(e) => {
                        handleSubmitStrp2(e);
                      }}
                    >
                      Pagar $1,699 MXN
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
