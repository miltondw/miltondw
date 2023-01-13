import Head from "next/head";
import { Layout } from "../components/Layout";
import { Landing } from "../components/views/Landing";
export default function Home({ data }: any) {
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
        <Landing data={data} />
      </Layout>
    </>
  );
}
export async function getServerSideProps() {
  const res = await fetch(process.env.BASE_URL || "http://localhost:3000/api/");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
