import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Router from "../Router";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
