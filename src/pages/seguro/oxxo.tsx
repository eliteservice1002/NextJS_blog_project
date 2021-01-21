import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useBarcode } from "react-barcodes";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  pdf,
  Image,
} from "@react-pdf/renderer";
import moment from "moment-timezone";
import "moment/locale/es";
moment.locale("es");

import { clearData } from "../../untils/localStorage";

import oxxo from "../../assets/images/membership/oxxo.svg";
import eva from "../../assets/images/logo_W.png";
import { OxxoPayResponse } from "../../untils/interfaces";
import {
  oxxoLegend,
  footer,
} from "../../components/Membership/Oxxo/imagesBase64";
import { header } from "../../components/Insurance/Oxxo/imagesBase64";

// Create styles
const styles = StyleSheet.create({
  page: { margin: 0, padding: 0 },
  sectionHeader: {
    margin: 0,
    padding: 0,
    flexGrow: 1,
  },
});

interface Props {
  price: number;
  number: string;
  barcode: string;
  date: number;
}

const MyDocument = ({ price, number, barcode, date }: Props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.sectionHeader}>
        <Image
          src={{
            data: Buffer.from(header, "base64"),
            format: "png",
          }}
        />
        <Text style={{ textAlign: "center", color: "#2D3748", fontSize: 15 }}>
          Recuerda realizar tu pago de seguro en OXXO antes del{" "}
          {moment.unix(date).format("DD MMMM YYYY")}
        </Text>
        <Text style={{ textAlign: "center", color: "#EE8D8B", paddingTop: 20 }}>
          ${price.toFixed(2)} MXN
        </Text>
        <Image
          src={{
            data: Buffer.from(oxxoLegend, "base64"),
            format: "png",
          }}
        />
        <View
          style={{
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#EE8D8B",
            width: 450,
            marginHorizontal: "auto",
            marginTop: 20,
            paddingVertical: 10,
          }}
        >
          <Text style={{ textAlign: "center", color: "#2D3748" }}>
            {number}
          </Text>
        </View>
        <Image
          src={{
            data: Buffer.from(barcode, "base64"),
            format: "png",
          }}
          style={{ width: 300, marginHorizontal: "auto", marginVertical: 20 }}
        />
        <Image
          src={{
            data: Buffer.from(footer, "base64"),
            format: "png",
          }}
        />
      </View>
    </Page>
  </Document>
);

const index = () => {
  const router = useRouter();
  const [oxxoPayJSON, setOxxoPayJSON] = useState<OxxoPayResponse | undefined>();

  useEffect(() => {
    const oxxoPayLS = localStorage.getItem("oxxoPayResponse");

    if (!oxxoPayLS) {
      router.push("/seguro");
      return;
    } else {
      setOxxoPayJSON(JSON.parse(oxxoPayLS));
    }
  }, []);

  const { inputRef } = useBarcode({
    value: oxxoPayJSON ? oxxoPayJSON.oxxoPaymentData.number : "1",
    options: {
      background: "#ffffff",
      height: 30,
    },
  });

  if (oxxoPayJSON === undefined) {
    return (
      <div>
        <canvas ref={inputRef}></canvas>
      </div>
    );
  }

  const oxxoPayBlocksArr = oxxoPayJSON.oxxoPaymentData.number.match(
    /.{1,4}(.$)?/g,
  );

  return (
    <div className="flex flex-wrap justify-center w-full max-w-lg mx-auto">
      <div className="h-16 w-full bg-peach">
        <div className="flex justify-center py-3 items-center">
          <img src={eva} alt="logo" width="150" />
          <p className="text-white text-34px">| Seguro</p>
        </div>
      </div>
      <div className="text-center h-full w-full">
        <div className="flex justify-center py-2">
          <img src={oxxo} alt="" className="h-12" />
        </div>
        <p className="font-work text-lg py-2 text-gray-700">
          Recuerda realizar tu pago de seguro en OXXO antes del{" "}
          {moment
            .unix(oxxoPayJSON.oxxoPaymentData.expiresAfter)
            .format("DD MMMM YYYY")}
        </p>

        <p className="text-xl font-bold pt-4 text-peach">
          ${oxxoPayJSON.oxxoPaymentData.amount.toFixed(2)} MXN
        </p>
        <div className="flex justify-center pt-5">
          {oxxoPayBlocksArr?.map((numberBlock, i) => (
            <p
              className="text-xs lg:text-md py-1 px-1 bg-gray-200 text-gray-900 mr-1 rounded-lg"
              key={"b-" + i}
            >
              {numberBlock}
            </p>
          ))}
        </div>

        <div className="my-4 flex justify-center">
          <canvas ref={inputRef} />
        </div>

        <p className="text-left px-6 py-2  text-sm text-gray-400">
          Instrucciones de pago en Oxxo
        </p>
        <ol className="text-left px-10 text-xs text-gray-800 list-decimal">
          <li>
            <span>Acude a la tienda OXXO más cercana. </span>
            <span>.</span>
          </li>
          <li>
            <span>Indica en caja que quieres realizar un pago de </span>
            <strong>OXXO Pay</strong>
            <span>.</span>
          </li>
          <li>
            <span>
              Dicta al cajero el número de referencia en esta ficha para que
              tecleé directamente en la pantalla de venta.
            </span>
          </li>
          <li>
            <span>Realiza el pago correspondiente con dinero en efectivo.</span>
          </li>
          <li>
            <span>
              Al confirmar tu pago, el cajero te entregará un comprobante
              impreso.{" "}
            </span>
            <strong>
              En el podrás verificar que se haya realizado correctamente.
            </strong>
            <span>Conserve este comprobante de pago.</span>
          </li>
        </ol>
      </div>
      <button
        className="w-full bg-peach text-white py-2 "
        onClick={async () => {
          const blob = await pdf(
            <MyDocument
              price={oxxoPayJSON.oxxoPaymentData.amount}
              number={
                oxxoPayJSON.oxxoPaymentData.number
                  .match(/.{1,4}(.$)?/g)
                  ?.join("  ") ?? ""
              }
              barcode={
                inputRef.current
                  ?.toDataURL()
                  .replace("data:image/png;base64,", "") ?? ""
              }
              date={oxxoPayJSON.oxxoPaymentData.expiresAfter}
            />,
          ).toBlob();
          const win = window.open(URL.createObjectURL(blob), "_blank");
          if (win) win.focus();
        }}
      >
        Descargar Código
      </button>
      <button
        className="w-full bg-grass text-white py-2 mt-2"
        onClick={() => {
          clearData();
          router.push("/seguro");
        }}
      >
        Terminar
      </button>
    </div>
  );
};

export default index;
