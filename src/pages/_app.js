import React from "react";
import Zendesk, { ZendeskAPI } from "react-zendesk";
import { isBrowser } from "react-device-detect";
import Whats from "../components/FloatingWhats";

import { Store } from "../Store";

import "react-datepicker/dist/react-datepicker.css";
import "../styles/globals.scss";
// import "react-day-picker/lib/style.css";
import "../styles/calendar.css";
import "../styles/add-to-calendar.css";
import "react-phone-input-2/lib/style.css";
import "swiper/swiper-bundle.min.css";
import "../styles/swiper.css";
import "../styles/custome_global.css";

const ZENDESK_KEY = "e47b4083-2ba0-4a73-93da-83a0b5468f98";
const zendesKsettings = {
  color: {
    theme: "#EE8D8B",
    launcher: "#EE8D8B",
    launcherText: "#fff",
  },
};
const talkLabel = () =>
  ZendeskAPI("webWidget", "updateSettings", {
    webWidget: {
      launcher: {
        talkLabel: {
          "es-mx": "Solicitar llamada",
        },
      },
    },
  });

function MyApp({ Component, pageProps }) {
  return (
    <Store.Provider>
      <Component {...pageProps} />
      {isBrowser && (
        <Zendesk
          zendeskKey={ZENDESK_KEY}
          {...zendesKsettings}
          onLoaded={talkLabel}
        />
      )}
      <Whats />
    </Store.Provider>
  );
}

export default MyApp;
