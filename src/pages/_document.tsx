import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="og:title" content="Stephen Cooper - CV" />
        <meta name="og:description" content="Welcome to my CV. Hire me. Go on." />
        <meta name="og:image" content="thumb.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
