import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.scss';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="https://cryptoduels.gq/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>

  )
}
