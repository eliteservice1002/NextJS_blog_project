import React, { useCallback, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import axios from "axios";

import { sendSlackMessage } from "../../../untils/slack";
import { numberRegExp, emailRegExp } from "../../../untils/stringHelper";

interface InputTypes {
  fullName: string;
  email: string;
  cellphone: string;
  subject: string;
}

interface PayloadProps {
  firstName: string;
  lastName: string;
  email: string;
  cellphone: string;
  medium: string;
  extraInfo: {
    insurance: {
      subject: string;
    };
  };
}

const BASE_URL = "https://bdnoucke3e.execute-api.us-east-1.amazonaws.com/Prod/";

const ConversationForm = ({
  setFormMobile,
}: {
  setFormMobile?: (value: boolean) => void;
}) => {
  const {
    register,
    handleSubmit,
    errors,
    control,
    setValue,
    setError,
  } = useForm<InputTypes>();
  const [sendError, setSendError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState<boolean>(false);

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

  const clearForm = () => {
    setValue("fullName", "");
    setValue("email", "");
    setValue("cellphone", "");
    setValue("subject", "");
  };

  const handleOnSubmit = async (data: InputTypes) => {
    setSendError(false);
    setIsLoading(true);
    const fullName = data.fullName.toUpperCase();
    const email = data.email.toLowerCase();

    const names = fullName.trim().split(" ");
    let _names = { firstName: "", lastName: "" };
    if (names.length == 2) {
      _names = { firstName: `${names[0]}`, lastName: `${names[1]}` };
    } else if (names.length == 3) {
      _names = {
        firstName: `${names[0]}`,
        lastName: `${names[1]} ${names[2]}`,
      };
    } else if (names.length == 4) {
      _names = {
        firstName: `${names[0]} ${names[1]}`,
        lastName: `${names[2]} ${names[3]}`,
      };
    } else {
      _names = { firstName: `${names[0]}`, lastName: "" };
    }
    const payload: PayloadProps = {
      ..._names,
      email,
      cellphone: data.cellphone,
      medium: "INSURANCE_V1_APP",
      extraInfo: {
        insurance: {
          subject: data.subject,
        },
      },
    };

    try {
      const token = await generateToken();
      await axios.post(
        `${BASE_URL}potential-users-v1/create`,
        { potentialUser: payload },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setIsLoading(false);
      clearForm();
      setIsSent(true);
      await sendSlackMessage(payload, "conversation");
    } catch (error) {
      setIsLoading(false);
      setSendError(true);
      console.error(error);
    }

    setIsLoading(false);
  };

  return (
    <div
      className="bg-white w-full pt-8 lg:pt-12 pb-10 px-3"
      style={{ borderRadius: "24px" }}
    >
      <div className="pl-5 w-full lg:hidden mt-2 h-5 pr-3">
        <svg
          className="cursor-pointer float-right"
          onClick={() => (setFormMobile ? setFormMobile(false) : null)}
          width="20"
          height="20"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2L27.5 27.5"
            stroke="#7D7D82"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M27.5 2L2 27.5"
            stroke="#7D7D82"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="px-3 lg:px-5 relative">
        <h1 className="text-gray-800 font-oswald lg:text-lg mb-8 tracking-widest font-semibold">
          INICIEMOS LA CONVERSACIÓN
        </h1>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <div className="mb-5 relative">
            <label
              htmlFor="fullName"
              className="text-gray-700 text-xs my-1 font-sans absolute px-1 bg-white"
              style={{ top: "-0.75rem", left: "0.8rem" }}
            >
              Nombre completo
            </label>
            <input
              name="fullName"
              placeholder="Nombre y Apellidos"
              maxLength={50}
              ref={register({
                required: true,
                minLength: 3,
                maxLength: 50,
                pattern: numberRegExp,
                validate: {
                  apellido: (value: string) => {
                    const values = value.trim().split(" ");
                    const minChars = values
                      .map((val) => val.length === 1)
                      .reduce((acc, val) => acc || val);
                    if (minChars) {
                      return "Nombre y/o apellido deben ser mas de una letra";
                    }
                    return values.length === 1
                      ? "Debes colocar al menos un apellido"
                      : undefined;
                  },
                },
              })}
              className="px-1 py-3 border-gray-500 border w-full rounded-sm pl-4 text-gray-700"
              autoComplete="off"
            />
            <div className="text-red-600 text-sm pl-2">
              {errors.fullName
                ? errors.fullName.message
                  ? errors.fullName.message
                  : "El nombre es incorrecto"
                : ""}
            </div>
          </div>
          <div className="mb-5 relative">
            <label
              htmlFor="email"
              className="text-gray-700 pl-1 text-xs absolute bg-white px-1"
              style={{ top: "-0.6rem", left: "0.8rem" }}
            >
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              maxLength={320}
              ref={register({
                required: true,
                maxLength: 320,
                pattern: emailRegExp,
              })}
              className="px-1 py-3 border-gray-500 border w-full rounded-sm text-gray-700 pl-4 lowercase"
            />
            <div className="text-red-600 text-sm pl-2">
              {errors.email && "El email es incorrecto"}
            </div>
          </div>
          <div className="mb-5">
            <div className="w-full mr-2 relative">
              <label
                htmlFor="birthdate"
                className="text-gray-700 pl-1 text-xs absolute z-10 bg-white px-1"
                style={{ top: "-0.6rem", left: "0.8rem" }}
              >
                Número Telefónico
              </label>
              <Controller
                as={
                  <PhoneInput
                    country="mx"
                    disableDropdown
                    countryCodeEditable={false}
                    inputStyle={{
                      background: "#fff",
                      width: "100%",
                      color: "#325D70",
                      fontSize: "0.9rem",
                      paddingTop: "0.9rem",
                      paddingBottom: "0.9rem",
                      border: "1px solid #a0aec0",
                      borderRadius: "2px",
                    }}
                  />
                }
                name="cellphone"
                control={control}
                rules={{ required: true, minLength: 11, maxLength: 15 }}
              />
              <div className="text-red-700 text-sm pl-2">
                {errors.cellphone && "El número es incorrecto"}
              </div>
            </div>
          </div>
          <div className="mb-3 relative">
            <label
              htmlFor="birthdate"
              className="text-gray-700 pl-1 text-xs absolute px-1 bg-white"
              style={{ top: "-0.6rem", left: "0.8rem" }}
            >
              Escribe tu asunto
            </label>
            <textarea
              name="subject"
              placeholder="Escribir mensaje"
              ref={register}
              className="px-1 py-3 border-gray-500 border w-full rounded-sm text-gray-700 bg-white pl-4"
            ></textarea>
          </div>
          <div className="w-full text-center">
            <button
              className={`${
                isSent ? "bg-grass" : "bg-peach"
              } text-white text-center font-oswald text-sm px-8 py-3 mx-auto tracking-widest w-40`}
            >
              {isLoading ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    margin: "auto",
                    background: " rgba(255, 255, 255, 0)",
                    display: "block",
                    shapeRendering: "auto",
                  }}
                  width="30px"
                  height="30px"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid"
                >
                  <circle
                    cx="50"
                    cy="50"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="10"
                    r="35"
                    strokeDasharray="164.93361431346415 56.97787143782138"
                    transform="rotate(117.927 50 50)"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      repeatCount="indefinite"
                      dur="1s"
                      values="0 50 50;360 50 50"
                      keyTimes="0;1"
                    ></animateTransform>
                  </circle>
                </svg>
              ) : isSent ? (
                "ENVIADO"
              ) : (
                "CONTACTAR"
              )}
            </button>
            {sendError && (
              <p className="text-red-600">
                Error en el envio de la información, por favor intente mas
                tarde.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConversationForm;
