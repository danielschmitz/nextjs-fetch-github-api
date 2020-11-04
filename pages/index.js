import Head from "next/head";
import Repos from "../components/repos";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next App!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <Repos></Repos>
        </div>
      </main>
    </div>
  );
}
