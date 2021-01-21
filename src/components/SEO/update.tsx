import React from "react";
import Head from "next/head";

interface Props {
  title: string;
  description: string;
  url: string;
}

/* Update SEO Component - Only certain metadata gets updated */
const SEOUpdate = ({ title, description, url }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="keywords"
        content="eva, evatech, eva center, deteccion cancer, cancer mama, deteccion indolora cancer, salud pecho, riesgo cancer, estudio cancer"
      ></meta>
      <meta name="description" content={description} />

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

      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />

      <meta property="og:site_name" content="Eva Center" />
      <meta property="og:type" content="webpage" />
      <meta property="og:image" content="http://evacenter.com/og_image.jpg" />
      <meta
        property="og:image:secure_url"
        content="https://evacenter.com/og_image.jpg"
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="300" />
      <meta property="og:image:alt" content="Eva Logo" />
      <meta property="og:locale" content="es_MX" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@evacenter_mx" />
      <meta name="twitter:creator" content="@evacenter_mx" />
      <meta name="twitter:image" content="https://evacenter.com/og_image.jpg" />

      <link rel="canonical" href={url} />
      <link rel="alternate" href={url} hrefLang="es" />
    </Head>
  );
};

export default SEOUpdate;
