import "../styles/globals.css";

import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

import { store } from "../store/store";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />;
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
