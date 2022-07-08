import Head from "next/head";
import Home from "./src/atomic/pages/Home"
export default function App() {
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
      <Home />
    </div>
  )
}
