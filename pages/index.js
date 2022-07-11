import Head from "next/head";
import Home from "../atomic/pages/Home";
export default function App({ data }) {
  return (
    <div>
      <Head>
        <html lang="es" translate="no">
          <title>Miltondw FrontEnd</title>
          <meta
            name="description"
            content="Hola, mi nombre es Milton, soy desarrollador web, me especializo en desarrollo frontEnd. Siempre en b&uacute;squeda de nuevos retos"
          />
          <link rel="icon" href="/favicon.ico" />
        </html>
      </Head>
      <Home data={data} />
    </div>
  );
}
export async function getServerSideProps() {
  const res = await fetch(process.env.BASE_URL);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
