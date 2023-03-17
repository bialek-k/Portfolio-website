import { useEffect } from "react";
import Layout from "../components/Layout";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

import { hotjar } from "react-hotjar";
import { GoogleAnalytics, event } from "nextjs-google-analytics";

export function reportWebVitals({ id, name, label, value }) {
  event(name, {
    category: label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    label: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  });
}

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    hotjar.initialize(3412146, 6);
  }, []);

  return (
    <ThemeProvider>
      <Layout>
        <GoogleAnalytics trackPageViews />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
