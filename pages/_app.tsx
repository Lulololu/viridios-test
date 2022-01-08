import "../styles/normalize.css"; // Next.js authorizes Materialize.css (Global CSS) to be imported ONLY from _app.js
import type { AppProps } from "next/app";
import Header from "../Components/Layout/Header/Header";
import Layout from "../Components/Layout/Layout";

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Header />
    <Component {...pageProps} />
  </Layout>
);

export default App;
