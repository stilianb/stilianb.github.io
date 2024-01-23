import { type AppType } from "next/dist/shared/lib/utils";
import Script from "next/script";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="h-screen bg-base text-text flex p-4">
    <Script src="https://kit.fontawesome.com/5dffb3fca8.js" />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
