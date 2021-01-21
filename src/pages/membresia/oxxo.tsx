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

import oxxo from "../../assets/images/membership/oxxo.png";
import eva from "../../assets/images/logo_W.png";
import { OxxoPayResponse } from "../../untils/interfaces";
import Header from "../../components/Membership/Header";
import Footer from "../../components/Footer";
import {
  header,
  oxxoLegend,
  footer,
} from "../../components/Membership/Oxxo/imagesBase64";
import {
  WhatsAppIcon,
  PhoneIcon,
  EmailIcon,
  BackIcon,
} from "../../components/Membership/Oxxo/Icons";

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
  date: string;
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
          Recuerda realizar tu pago de Membresía en OXXO antes {date}
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
    if (oxxoPayLS === "" || oxxoPayLS === undefined || oxxoPayLS === null) {
      router.push("/membresia");
      return;
    }
    const oxxoPayJSON = JSON.parse(oxxoPayLS) as OxxoPayResponse;
    setOxxoPayJSON(oxxoPayJSON);
  }, []);

  const { inputRef } = useBarcode({
    value: oxxoPayJSON?.oxxoPaymentData.number ?? "1",
    options: {
      background: "#ffffff",
      height: 30,
      width: 1.5,
      fontSize: 10,
    },
  });

  if (oxxoPayJSON === undefined) {
    return (
      <div>
        <canvas ref={inputRef} />
      </div>
    );
  }

  const oxxoPayBlocksArr = oxxoPayJSON.oxxoPaymentData.number.match(
    /.{1,4}(.$)?/g,
  );

  return (
    <div>
      <Header />
      <div className="pt-16 lg:pt-20 w-full">
        <div
          onClick={() => {
            clearData();
            router.push("/membresia");
          }}
          className="flex items-center cursor-pointer pl-4 md:pl-8 pt-8 lg:pl-32 lg:py-12 lg:pt-20"
        >
          <BackIcon />
          <div className="text-dark ml-2">Regresar</div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-full max-w-2xl mx-auto rounded-lg border my-8 lg:-mt-24">
        <div className="h-16 w-full bg-peach rounded-t-lg">
          <div className="flex justify-center py-4 items-center">
            <div className="flex flex-row items-center">
              <div className="pr-4">
                <img src={eva} alt="logo" width="90" />
              </div>
              <div
                style={{
                  width: 2,
                  backgroundColor: "white",
                  height: "30px",
                  float: "left",
                }}
              ></div>
              <span className="text-white text-1xl pl-4"> Membresia</span>
            </div>
          </div>
        </div>
        <div className="text-center h-full w-full">
          <div className="flex justify-center py-6">
            <img src={oxxo} alt="" className="h-12" />
          </div>
          <div className="flex justify-center">
            <p className="w-2/3 lg:w-1/2 font-work text-base text-gray-700">
              Recuerda realizar tu pago de{" "}
              <span className="font-bold">Membresía</span> en{" "}
              <span className="font-bold">OXXO</span> antes del{" "}
              <span className="font-bold">
                {moment
                  .unix(oxxoPayJSON.oxxoPaymentData.expiresAfter)
                  .format("DD MMMM YYYY")}
              </span>
            </p>
          </div>

          <p className="text-xl py-6 text-peach font-semibold font-work">
            {`$ ${oxxoPayJSON.oxxoPaymentData.amount.toFixed(2)} MXN`}
          </p>
          <div className="border-t-2 border-b-2 py-4">
            <div className="flex justify-center pt-5 flex-wrap">
              {oxxoPayBlocksArr?.map((numberBlock, i) => (
                <p
                  className="text-xs lg:text-md py-2 px-2 bg-lightgrey text-gray-900 mr-1"
                  key={"b-" + i}
                >
                  {numberBlock}
                </p>
              ))}
            </div>

            <div className="my-4 flex justify-center">
              <canvas ref={inputRef} />
            </div>
          </div>
          <div className="border-b-2 py-4 flex flex-col items-center">
            <div className="w-full lg:w-4/6">
              <p className="text-left px-6 py-2  text-sm text-gray-400">
                Instrucciones de pago en Oxxo
              </p>
              <ol className="text-left px-10 text-xs text-gray-800 list-decimal">
                <li>
                  <span>Acude a la tienda OXXO más cercana. </span>
                  <span>.</span>
                </li>
                <li>
                  <span>
                    Utiliza el número de referencia o el código de barras de
                    esta ficha.{" "}
                  </span>
                  <span>.</span>
                </li>
                <li>
                  <span>
                    Realiza el pago correspondiente con dinero en efectivo (OXXO
                    cobra una comisión de <strong>$12.00</strong> en depósitos).
                  </span>
                </li>
                <li>
                  <span>
                    Al confirmar tu pago, el cajero te entregará un comprobante
                    impreso.{" "}
                  </span>
                  En el podrás verificar que se haya realizado correctamente.
                </li>
              </ol>
            </div>
            <div className="">
              <button
                className="w-300 bg-peach text-white py-2 my-4 rounded"
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
                      date={moment
                        .unix(oxxoPayJSON.oxxoPaymentData.expiresAfter)
                        .format("DD MMMM YYYY")}
                    />,
                  ).toBlob();
                  const win = window.open(URL.createObjectURL(blob), "_blank");
                  if (win) win.focus();
                }}
              >
                Descargar Código
              </button>
            </div>
          </div>
          <div className="py-8 border-b-2">
            <div className="pb-8 font-dark font-work">
              ¡Comunícate con nosotros!
            </div>
            <div className="flex justify-around items-center">
              <div className="flex flex-col items-center">
                <WhatsAppIcon />
                <a href="https://api.whatsapp.com/send?phone=522214139817&text=Hola, quiero saber mas sobre sus servicios">
                  <div className="font-work text-primary font-bold text-xs pt-2">
                    Whatsapp
                  </div>
                  <div className="font-work text-dark text-xs pt-2">
                    (+52) 221 413 9817
                  </div>
                </a>
              </div>
              <div className="flex flex-col items-center ">
                <PhoneIcon />
                <a href="tel:5553508883">
                  <div className="font-work text-primary font-bold text-xs pt-2">
                    Llamada
                  </div>
                  <div className="font-work text-dark text-xs pt-2">
                    (55) 5350 8883
                  </div>
                </a>
              </div>
              <div className="flex flex-col items-center">
                <EmailIcon />
                <a href="mailto:hola@evacenter.com?subject=¡Hola!, Solicito más información sobre sus paquetes de mastografia y exploraciones">
                  <div className="font-work text-primary font-bold text-xs pt-2">
                    Correo
                  </div>
                  <div className="font-work text-dark text-xs pt-2">
                    hola@evacenter.com
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-8 flex justify-center">
          <div className="font-work text-dark text-xs text-center w-4/5">
            <span className="font-bold">
              Si tienes alguna duda o comentarios,
            </span>{" "}
            por favor no dudes en escribirnos a{" "}
            <span className="font-bold">hola@evacenter.com</span> o llamarnos al
            (55) 5350 8883
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
