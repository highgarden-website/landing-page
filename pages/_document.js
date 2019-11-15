import Document, { Html, Head, Main, NextScript } from "next/document"
import React from "react"

export default class HighgardenDoc extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width,minimum-scale=1" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta name="google" content="notranslate" />
          <meta
            name="keywords"
            content="capital, investments, money, savings, fund, risk, growth"
          />
          <meta name="author" content="highgarden.capital" />
          <meta
            name="description"
            content="Basados en la transparencia, la seguridad,  y pensando en el mediano y largo plazo, creamos tres estrategias de inversión para ayudarte a multiplicar tu capital."
          />
          <meta
            name="subject"
            content="Basados en la transparencia, la seguridad,  y pensando en el mediano y largo plazo, creamos tres estrategias de inversión para ayudarte a multiplicar tu capital."
          />
          <link rel="canonical" href="https://highgarden.capital" />
          <meta name="referrer" content="no-referrer" />
          <meta name="format-detection" content="telephone=no" />
          <meta httpEquiv="x-dns-prefetch-control" content="off" />
          <meta httpEquiv="Window-Target" content="_value" />
          <meta name="ICBM" content="-38, -57.55" />
          <meta name="geo.position" content="-38;-57.55" />
          <meta name="geo.region" content="AR[01]" />
          <link rel="manifest" href="/static/site.webmanifest" />
          <meta
            name="msapplication-config"
            content="/static/browserconfig.xml"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon-16x16.png"
          />
          <link
            rel="mask-icon"
            href="/static/safari-pinned-tab.svg"
            color="#000"
          />
          <meta property="og:locale" content="es_AR" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Descubrí la mejor manera de hacer crecer tu capital | highgarden.capital"
          />
          <meta
            property="og:description"
            content="Basados en la transparencia, la seguridad,  y pensando en el mediano y largo plazo, creamos tres estrategias de inversión para ayudarte a multiplicar tu capital."
          />
          <meta property="og:url" content="https://highgarden.capital" />
          <meta
            property="og:site_name"
            content="Descubrí la mejor manera de hacer crecer tu capital | highgarden.capital"
          />
          <meta property="og:image" content="/static/og-image.png" />
          <meta
            property="og:image:secure_url"
            content="https://highgarden.capital/static/og-image.png"
          />

          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:description"
            content="Basados en la transparencia, la seguridad,  y pensando en el mediano y largo plazo, creamos tres estrategias de inversión para ayudarte a multiplicar tu capital."
          />
          <meta
            name="twitter:title"
            content="Descubrí la mejor manera de hacer crecer tu capital | highgarden.capital"
          />
          <meta
            name="twitter:image"
            content="https://highgarden.capital/static/og-image.png"
          />
          <link rel="stylesheet" href="/static/global.css" />
          <link rel="stylesheet" href="https://cdn.plyr.io/3.5.2/plyr.css" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
