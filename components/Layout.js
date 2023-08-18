import Head from "next/head";

const Layout = (props) => {
  return (
    <div className="PageWrapper">
      <Head>
        <title>Dilraj's Library | Powered by Google </title>
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <main className="Main">{props.children}</main>
    </div>
  );
};

export default Layout;
