import Head from "next/head";
import Navbar from "./navbar";

const Layout = props => (
  <div>
    <Head>
      <title>BitzPrice</title>
      <link
        href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/cerulean/bootstrap.min.css"
        rel="stylesheet"
      ></link>
    </Head>
    <Navbar />
    <div className="container">{props.children}</div>
  </div>
);

export default Layout;
