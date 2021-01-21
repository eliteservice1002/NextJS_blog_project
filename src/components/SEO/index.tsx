import React, { Component } from "react";
import Head from "next/head";

/* Base SEO for the SPA */
class SEO extends Component {
  render() {
    return (
      <Head>
        {/* Base Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="author" content="Eva Center" />
        <meta
          name="keywords"
          content="higa, higia, el bra, bra, brassier, eva, evatech, eva center, deteccion cancer, cancer mama, deteccion indolora cancer, salud pecho, riesgo cancer, estudio cancer"
        ></meta>
        <title>Eva Center</title>
        <meta
          name="description"
          content="Eva Center, la mejor tecnología para cuidar la salud de tus pechos"
        />

        <script type="application/ld+json">{`
          {
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "Eva Center",
              "legalName": "EVA HEALTH SAPI DE CV",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Julian Rios"
                },
                {
                  "@type": "Person",
                  "name": "Antonio Torres"
                },
                {
                  "@type": "Person",
                  "name": "Raymundo Gonzalez"
                }
              ],
              "foundingDate": "2017",
              "url": "https://evacenter.com",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+52-55-5350-8883",
                  "contactType": "customer service",
                  "areaServed": "MX"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/evacenter.mx",
                "https://www.twitter.com/evacenter_mx",
                "https://www.instagram.com/evacenter.mx",
                "https://www.linkedin.com/company/eva-tech/"
              ]
          }
        `}</script>

        <meta property="og:title" content="Eva Center" />
        <meta property="og:site_name" content="Eva Center" />
        <meta property="og:type" content="webpage" />
        <meta property="og:url" content="https://evacenter.com" />
        <meta property="og:image" content="http://evacenter.com/og_image.jpg" />
        <meta
          property="og:image:secure_url"
          content="https://evacenter.com/og_image.jpg"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content="Eva Logo" />
        <meta
          property="og:description"
          content="Eva Center, la mejor tecnología para cuidar la salud de tus pechos"
        />
        <meta property="og:locale" content="es_MX" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@evacenter_mx" />
        <meta name="twitter:creator" content="@evacenter_mx" />
        <meta name="twitter:title" content="Eva Center" />
        <meta
          name="twitter:image"
          content="https://evacenter.com/og_image.jpg"
        />
        <meta
          name="twitter:description"
          content="Eva Center, la mejor tecnología para cuidar la salud de tus pechos"
        />

        <link rel="canonical" href="https://evacenter.com" />
        <link rel="alternate" href="https://evacenter.com" hrefLang="es" />
      </Head>
    );
  }
}

export default SEO;
