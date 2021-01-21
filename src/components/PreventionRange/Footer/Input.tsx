import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
interface InputTypes {
  email: string;
}

export const emailRegExp = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/;
export const InputMail = () => {
  const { register, handleSubmit, errors, control, setValue } = useForm<
    InputTypes
  >();
  const [load, setLoad] = React.useState(false);

  const sendMail = async (data) => {
    setLoad(true);
    try {
      const datas = {
        record: {
          email: data.email,
          test: true,
        },
      };

      const datos = await axios.post(
        "https://bdnoucke3e.execute-api.us-east-1.amazonaws.com/Prod//airtable-v1/add-record-to-newsletter",
        datas,
      );
      datos && setLoad(false);
      console.log(datos);
      setValue("email", "");
    } catch (error) {
      setLoad(false);
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex py-1 w-full">
        <form onSubmit={handleSubmit(sendMail)} className="w-full flex">
          <input
            type="email"
            name="email"
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
            placeholder="Ingresa tu correo"
            className="placeholder-brownDark py-2 px-2 font-hthaptik inline-flex items-center"
            style={{
              backgroundColor: "white",
              opacity: "0.7",
              width: "calc(100% - 50px)",
              color: "#716360",
              border: "1px solid #716360",
              boxSizing: "border-box",
              borderRadius: "4px 0px 0px 4px",
            }}
          />
          <button
            disabled={load}
            type="submit"
            className="bg-primary px-4 pb-4 pt-3 disabled:bg-red-300 flex-1 block"
            style={{
              borderRadius: "0px 4px 4px 0px",
            }}
          >
            {!load ? (
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.75 0.383928C15.6607 0.321428 15.5446 0.285713 15.4286 0.285713C15.3304 0.285713 15.2321 0.312499 15.1429 0.366071L0.285714 8.9375C0.0982143 9.04464 -0.00892857 9.25 0 9.46429C0.0178571 9.6875 0.151786 9.875 0.357143 9.95536L3.88393 11.4018L13.4286 3.14286L5.71429 12.5982V15.7143C5.71429 15.9554 5.86607 16.1696 6.08929 16.25C6.15179 16.2768 6.22321 16.2857 6.28571 16.2857C6.45536 16.2857 6.61607 16.2143 6.72321 16.0804L8.88393 13.4464L12.9286 15.0982C13 15.125 13.0714 15.1429 13.1429 15.1429C13.2411 15.1429 13.3393 15.1161 13.4196 15.0714C13.5714 14.9821 13.6786 14.8393 13.7054 14.6696L15.9911 0.955357C16.0268 0.732142 15.9375 0.517857 15.75 0.383928Z"
                  fill="white"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  margin: "auto",
                  background: "none",
                  display: "block",
                  shapeRendering: "auto",
                }}
                width="16px"
                height="16px"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
              >
                <circle
                  cx="50"
                  cy="50"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="10"
                  r="35"
                  strokeDasharray="164.93361431346415 56.97787143782138"
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
            )}
          </button>
        </form>
      </div>
      <div className="text-red-200 text-sm pl-2">
        {errors.email && "El email es incorrecto"}
      </div>
    </div>
  );
};
