import '../styles/globals.css'
import Head from 'next/head'
import { React, useEffect } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

const MyApp = ({ Component, pageProps }) => {
    const router = useRouter()
    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url)
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return (
        <div className="bg-dark-blue">
            <Head>
                <title>Blocos PoA 2024</title>
                <link rel="icon" href="/favicon.png" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    name="description"
                    content="Calendario de blocos de rua de Porto Alegre 2024"
                />
                <meta
                    name="keywords"
                    content="blocos, carnaval, porto alegre, 2024, calendario, rua, carnaval de rua"
                />
                <meta name="author" content="lucaoskaique" />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <meta
                    property="og:title"
                    content="Calendario de blocos de rua de Porto Alegre 2024"
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://blocos-poa-2024.vercel.app" />
                <meta
                    property="og:image"
                    content="/assets/images/event-logo-new.png"
                />
                <meta
                    property="og:description"
                    content="Calendario de blocos de rua de Porto Alegre 2024"
                />
                <meta property="og:site_name" content="Blocos PoA 2024" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@blocospoa2024" />
                <meta
                    name="twitter:title"
                    content="Calendario de blocos de rua de Porto Alegre 2024"
                />
                <meta
                    name="twitter:description"
                    content="Calendario de blocos de rua de Porto Alegre 2024"
                />
                <meta
                    name="twitter:image"
                    content="/assets/images/event-logo-new.png"
                />
                <meta
                    name="twitter:image:alt"
                    content="Calendario de blocos de rua de Porto Alegre 2024"
                />
                <meta
                    name="twitter:creator"
                    content="@lucaoskaique"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
            </Head>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            {/* eslint-disable-next-line @next/next/inline-script-id */}
            <Script
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
