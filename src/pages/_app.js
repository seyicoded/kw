import { ReactNotifications } from "react-notifications-component";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-notifications-component/dist/theme.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/vercel.svg" />
        <title>Krib</title>
      </Head>
      <ReactNotifications />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
