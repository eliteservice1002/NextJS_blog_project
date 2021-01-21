import React from "react";

export default function PlanOptions() {
  return (
    <div>
      <span className="text-base" style={{ lineHeight: "120%" }}>
        Opciones de Plan
      </span>
      <div className="flex flex-row justify-between text-sm py-2">
        <div>Plan anual</div>
        <div>MX $1,699/año</div>
      </div>
      {/* <div className="text-xs text-aqua">
        Ahorra 10% de descuento en tu plan anual
      </div> */}
      <div className="py-4">
        <hr />
      </div>
      <div className="flex flex-row justify-between text-base">
        <div>Total</div>
        <div className="font-medium text-xl">$1,699 MXN</div>
      </div>
    </div>
  );
}
