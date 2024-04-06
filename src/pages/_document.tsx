import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="og:title" content="Stephen Cooper - CV" />
        <meta name="og:description" content="Welcome to my CV. Hire me. Go on." />
        <meta name="og:image" content="/CV/thumb.png" />
        <meta name="theme-color" content="#00798b" />
        <meta name="color-scheme" content="only light" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
