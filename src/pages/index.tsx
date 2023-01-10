import Head from "next/head";
import { Layout } from "../components/views/Layout";
import { Inicio } from "../components/views/Inicio";
export default function Home() {
  return (
    <>
      <Head>
        <title>Miltondw-FullStack Developer</title>
        <meta
          name='description'
          content='Hola soy Milton Estrada FullStack Developer me apasiona la tecnología y estar en constante aprendizaje buscando aportar todo lo que e aprendido'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Inicio />
      </Layout>
    </>
  );
}
export async function getServerSideProps() {
  const URL = "http://localhost:3000/api/";
  const res = await fetch(URL || process.env.API_URL);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
