import React from "react";
import { FormHeader } from "../../components/Insurance/Header";
import Checkout from "../../components/Insurance/Checkout";
import Footer from "../../components/Footer";

export default function pago() {
  return (
    <div>
      <div className="bg-cream w-full h-12 lg:h-20">
        <FormHeader />
      </div>
      <div className="py-6 px-3 lg:px-24 lg:pb-32 lg:pt-24 flex justify-center">
        <Checkout />
      </div>
      <Footer />
    </div>
  );
}
