import React, { useEffect, useState } from "react";
import moment from "moment";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useElements,
  useStripe,
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { ToastProvider, useToasts } from "react-toast-notifications";
import { useRouter } from "next/router";

import { Loader } from "../../Loader";

import * as LocalStorage from "../../../untils/localStorage";

import { UserBooking } from "../../../untils/interfaces";
import { sendBooking, getCalendar } from "../../../untils/api";

import { AcceptText, Total, TotalCoupon } from "../Pay/Pay.styles";

import { Label, Input } from "../../PreventionRange/Scheduler/Wrappers.styles";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

const emojiRegExp = /\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]/;
const numberRegExp = /^[a-zA-Z\s]*$/;

const ELEMENT_OPTIONS = {
  style: {
    base: {
      borderRadius: "8px",
      fontSize: "18px",
      color: "#7F6A5E",
      letterSpacing: "0.025em",
      "::placeholder": {
        color: "#7F6A5E",
        fontWeight: "200",
      },
    },
    invalid: {
      color: "#9e2146",
    },
  },
};

const Paycard = ({ coupon, codeCoupon, discount, children }) => {
  const router = useRouter();
  const { addToast } = useToasts();
  const [name, setName] = useState("");
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState<boolean>(
    true,
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [accept, setAccept] = useState<boolean>(false);
  const elements = useElements();
  const stripe = useStripe();
  const [postal, setPostal] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | undefined | null>(
    null,
  );
  const fakepayment =
    process.env.NEXT_PUBLIC_FAKE_PAYMENT == "true" ? true : false;

  useEffect(() => {
    const user = LocalStorage.getUser();
    setName(
      `${user.firstName} ${user.lastNamePaternal} ${user.lastNameMaternal}`,
    );
  }, []);

  const sendData = async () => {
    const user = LocalStorage.getUser();
    const date = LocalStorage.getTime() || "";
    const center = LocalStorage.getCenter();
    const query = LocalStorage.getQueryParams() || {};
    const id = center?.id;
    const calendarid = center?.calendarId;
    setIsSubmitButtonDisabled(true);
    console.log(isSubmitButtonDisabled);
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardNumberElement);

    if (cardElement) {
      const payload = await stripe.createToken(cardElement);

      if (payload.error) {
        console.log("[error]", payload.error);
        const errors: { [key: string]: string } = {
          incorrect_number: "El número de tarjeta es incorrecto.",
          incomplete_number: "El número de tarjeta esta incompleto.",
          invalid_number:
            "El número de tarjeta no es un número de tarjeta válido.",
          incomplete_expiry:
            "El mes de vencimiento de la tarjeta esta incompelto.",
          invalid_expiry_month:
            "El mes de vencimiento de la tarjeta no es válido.",
          invalid_expiry_month_past:
            "El mes de vencimiento de la tarjeta esta en el pasado.",
          invalid_expiry_year:
            "El año de vencimiento de la tarjeta no es válido.",
          invalid_expiry_year_past:
            "El año de vencimiento de la tarjeta esta en el pasado.",
          invalid_cvc: "El código de seguridad de la tarjeta no es válido.",
          incomplete_cvc:
            "El codigo de seguridad de la tarjeta esta incompelto.",
          expired_card: "La tarjeta ha caducado.",
          incorrect_cvc: "El código de seguridad de la tarjeta es incorrecto.",
          incorrect_zip: "Falló la validación del código postal de la tarjeta.",
          card_declined: "La tarjeta fué rechazada.",
          missing: "El cliente al que se está cobrando no tiene tarjeta",
          processing_error: "Ocurrió un error procesando la tarjeta.",
          rate_limit:
            "Ocurrió un error debido a consultar la API demasiado rápido. Por favor, avísanos si recibes este error continuamente.",
        };
        if (payload.error.type === "validation_error" && payload.error.code) {
          console.log(payload.error.code);
          setErrorMessage(errors[payload.error.code]);
          setLoading(false);
        } else {
          setErrorMessage(payload.error.message);
        }
      } else {
        setErrorMessage(null);
        if (payload.token) {
          const hoy = moment(date).format("YYYY-MM-DD");

          getCalendar(hoy, center?.calendarId || "3198564").then((resp) => {
            const todayis = resp.data.datetimes.find(
              (el) =>
                el.date.substring(2, el.date.length) ==
                moment(date || "").format("YYYY-MM-DD"),
            ) || { times: [], date: "" };
            if (todayis.times.length == 0) {
              setLoading(false);
              addToast(
                "Lo sentimos, por el momento ya no tenemos citas disponibles el día de seleccionado",
                {
                  appearance: "warning",
                  autoDismiss: true,
                },
              );
              return;
            }

            const hay = todayis.times.find((el) => el.time == date);

            if (!hay) {
              setLoading(false);
              addToast(
                "Lo sentimos, la hora que elegiste probablemente ya no esta disponible, por favor selecciona otra",
                {
                  appearance: "warning",
                  autoDismiss: true,
                },
              );
              return;
            }
            const D = () => {
              const da = moment(date || Date.now())
                .utc()
                .format();
              const d = da.substring(0, da.length - 1);
              return d + ".000Z";
            };
            const val = D();

            const nameParts = name.split(" ");

            const data: UserBooking = {
              firstName: user.firstName,
              lastName: `${user.lastNamePaternal} ${user.lastNameMaternal}`,
              email: user.email,
              cellphone: user.cellphone,
              hearAboutUs: user.hearAboutUs,
              birthdate: user.birthdate,
              centerId: id || "",
              datetime: val,
              token: payload.token?.id,
              amount: coupon ? 400 - 400 * (discount / 100) : 400,
              currency: "mxn",
              sex: "FEMALE",
              calendarId: Number(calendarid),
              medium: "WEBSITE",
              utmCampaign: query.utm_campaign,
              utmMedium: query.utm_medium,
              utmSource: query.utm_source,
              utmTerm: query.utm_term,
              utmContent: query.utm_content,
              test: query.test,
              paymentFirstName: nameParts[0],
              paymentLastName: nameParts ? nameParts.slice(1).join(" ") : "",
              code: coupon ? codeCoupon : undefined,
              fake: fakepayment,
            };
            console.log(data);
            sendBooking(data)
              .then(() => {
                setIsSubmitButtonDisabled(false);
                setLoading(false);
                router.push("congrats");
              })
              .catch(() => {
                setLoading(false);
                addToast(
                  "Lo sentimos, no pudimos agendar tu cita, intenta mas tarde",
                  {
                    appearance: "warning",
                    autoDismiss: true,
                  },
                );
              });
          });
        }
      }
    }
  };

  const validName = () => {
    return (
      !(name.length < 2) && !emojiRegExp.test(name) && numberRegExp.test(name)
    );
  };

  const validPostal = () => {
    return (
      postal.length === 5 && !emojiRegExp.test(name) && numberRegExp.test(name)
    );
  };

  return (
    <>
      {/* {loading && (
        <div
          style={{
            top: "0px",
            position: "fixed",
            width: "100%",
            height: "100%",
            background: "#00000096",
            left: "0px",
          }}
        >
          <Loader size=""/>
          <p className="text-white text-center pt-64">Generando tu cita</p>
        </div>
      )} */}
      <div className="pb-4 mt-2">
        <Label>NOMBRE EN LA TARJETA</Label>
        <Input
          type="text"
          name="name"
          placeholder="Nombre"
          autoComplete="cc-name"
          minLength={3}
          maxLength={255}
          value={name}
          onChange={(evt) => {
            const value = evt.target.value;
            setName(value);
          }}
        />
        <span className={`${validName() ? "hidden" : "block"} text-red-600`}>
          El nombre es inválido
        </span>
      </div>
      <div className="pb-4">
        <label htmlFor="cardNumber" className="text-brownDark  text-xs">
          NUMERO DE LA TARJETA
        </label>
        <CardNumberElement
          id="cardNumber"
          options={ELEMENT_OPTIONS}
          className="h-10 p-2 w-full border border-gray-500 rounded my-1 text-brownDark"
        />
      </div>
      <div className="pb-4 flex flex-wrap">
        <div className="w-1/2 pr-2">
          <label htmlFor="expiry" className="text-brownDark text-xs">
            FECHA VENCIMIENTO
          </label>
          <CardExpiryElement
            id="expiry"
            options={ELEMENT_OPTIONS}
            className="h-10 p-2 w-full border border-gray-500 rounded my-1 text-gray-800"
          />
        </div>
        <div className="w-1/2 pl-2">
          <label htmlFor="cvc" className="text-brownDark text-xs">
            CVC
          </label>
          <CardCvcElement
            id="cvc"
            options={ELEMENT_OPTIONS}
            className="h-10 p-2 w-full border border-gray-500 rounded my-1 text-gray-800"
          />
        </div>
      </div>
      <div className="pb-4">
        {errorMessage && <div className="text-red-600">{errorMessage}</div>}
      </div>
      <div className="-mt-6">{children}</div>
      {!coupon ? (
        <Total />
      ) : (
        <TotalCoupon code={codeCoupon} discount={discount} />
      )}

      <div className="flex justify-center py-3">
        <AcceptText>
          <input
            type="checkbox"
            checked={accept}
            onChange={() => {
              setAccept(!accept);
            }}
            value="accept"
          />{" "}
          Acepto términos y condiciones
        </AcceptText>
      </div>
      <div className="text-center flex justify-between ">
        <button
          style={{
            borderRadius: "8px",
            background: "#ee8d8b",
            fontSize: "16px",
          }}
          className={`text-center w-full py-3 text-white px-8 ${
            !accept ? "opacity-50" : ""
          }`}
          onClick={(event) => {
            event.preventDefault();
            sendData();
          }}
          disabled={loading && !accept}
        >
          {loading ? <Loader color="#fff" size="40" /> : "Confirmar y pagar"}
        </button>
      </div>
    </>
  );
};

const index = ({ code, coupon, discount, children }) => (
  <ToastProvider>
    <div className="pb-2">
      <Elements stripe={stripePromise}>
        <Paycard
          coupon={coupon}
          codeCoupon={code}
          discount={discount}
          children={children}
        />
      </Elements>
    </div>
  </ToastProvider>
);

export default index;
