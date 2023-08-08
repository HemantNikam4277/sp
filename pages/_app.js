import DefaultLayout from '@/layout/DefaultLayout'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from "next/head";
import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo';
import SEO from '../src/constants/seoData';
import * as ga from '../src/lib/ga'
import '../src/styles/globals.css'


export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return <> <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head><ChakraProvider>
      <DefaultSeo
          {...SEO}
        />

    <DefaultLayout>
      <Component {...pageProps} />
      </DefaultLayout>

    </ChakraProvider>
    </>


}
