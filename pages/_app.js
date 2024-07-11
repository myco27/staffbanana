import "../styles/globals.css";
import Script from "next/script";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TrackerTeer</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}
