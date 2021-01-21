import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

const GA_TRACKING_ID = "GTM-KJD2DGT";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          {process.env.NODE_ENV === "production" ? (
            <script
              dangerouslySetInnerHTML={{
                __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GA_TRACKING_ID}');
          `,
              }}
            />
          ) : null}
          {process.env.NODE_ENV === "production" ? (
            <script
              dangerouslySetInnerHTML={{
                __html: `
                (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:1923889,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
              }}
            />
          ) : null}
          <link
            rel="preload"
            href="/fonts/GTHaptikThin.woff"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/GTHaptikBold.woff"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/GTHaptikLight.woff"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/GTHaptikRegular.woff"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/GTHaptikMedium.woff"
            as="font"
            crossOrigin=""
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Head>
        <body>
          {process.env.NODE_ENV === "production" ? (
            <noscript
              dangerouslySetInnerHTML={{
                __html: `<iframe
              src="https://www.googletagmanager.com/ns.html?id=${GA_TRACKING_ID}"
              height="0"
              width="0"
              style="display:none;visibility:hidden"
            ></iframe>`,
              }}
            />
          ) : null}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
