import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
  const meta = {
    title: "Kyle Sutherland Portfolio and Blog",
    description:
      "A concise portfolio and blog showcasing the professional work of Kyle Sutherland",
    image: "https://assets.vercel.com/image/upload/q_auto/front/vercel/dps.png",
    icon: "/favicon.png"
  };

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourname" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
