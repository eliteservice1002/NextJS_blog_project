import React from "react";

export default function InfoTransfer() {
  return (
    <div className="w-full pb-1 pt-4">
      <p className="text-dark font-hthaptik font-bold text-center ">
        Datos Transferencia
      </p>
      <div className="flex py-5 justify-center">
        <div className="flex">
          <div className="w-auto">
            <ul className="text-dark font-hthaptik">
              <li>Clabe:</li>
              <li>Cuenta:</li>
              <li>Rfc:</li>
              <li>Titular:</li>
              <li>Banco:</li>
              <li>Correo:</li>
            </ul>
          </div>
          <div className="w-auto">
            <ul className="text-dark font-hthaptik ml-4">
              <li>012650001135607249</li>
              <li>0113560724</li>
              <li>EHE1801239V9</li>
              <li>EVA HEALTH SAPI DE CV</li>
              <li>BBVA</li>
              <li>info@evacenter.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p className="font-hthaptik text-dark text-center">
          Mándanos la confirmación de tu pago vía whatsapp: <br />{" "}
          <a href="" className="text-peach">
            +52 2214139817{" "}
          </a>{" "}
          o vía mail
          <a href="" className="text-peach">
            {" "}
            info@evacenter.com
          </a>
        </p>
      </div>
    </div>
  );
}
