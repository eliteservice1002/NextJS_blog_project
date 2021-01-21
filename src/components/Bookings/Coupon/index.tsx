import React from "react";
import { Loader } from "../../Loader";

export default function index({
  loading,
  coupon,
  couponCode,
  errorCoupon,
  onSubmit,
  onChange,
}) {
  return (
    <div className="mt-6">
      <hr />
      <div className="mb-8 mt-8">
        {/* <h3 className="text-base font-hthaptik text-brownDark uppercase font-bold">
          Código de Invitación
        </h3> */}
        <form onSubmit={onSubmit}>
          <div
            style={{ borderRadius: "8px" }}
            className="flex flex-row border focus:outline-black p-2 leading-18 border-darkLight"
          >
            <input
              value={couponCode}
              className="flex-grow border-none outline-none text-16 font-hthaptik text-brownDark uppercase mx-4"
              onChange={onChange}
              placeholder="Código de Invitación"
            />
            <button
              disabled={!couponCode}
              className="w-24 bg-primary text-white py-md px-xl font-spectral text-16 rounded-lite inline-flex items-center lg:w-32 justify-center text-center outline-none disabled:opacity-75"
              style={{ outline: "none" }}
            >
              {!loading ? (
                "Aplicar"
              ) : (
                <div className="-mb-6 -mt-2 ml-6">
                  <Loader color="#fff" size="50" />
                </div>
              )}
            </button>
          </div>
          {errorCoupon && (
            <span className="block text-red-600">
              Código de invitación no válido
            </span>
          )}
          {coupon && (
            <span className="block text-green-500">
              Código de invitación aplicado exitosamente
            </span>
          )}
        </form>
      </div>
      <hr />
    </div>
  );
}
