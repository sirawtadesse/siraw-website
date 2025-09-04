import "@/styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Track page views for analytics
    const handleRouteChange = (url) => {
      // You can integrate with Google Analytics here
      console.log(`App navigated to: ${url}`);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>SirawDev Blog - Web Development Insights</title>
        <meta
          name="description"
          content="A blog about web development, programming tips, and technology insights from SirawDev."
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://sirawdev.com.et" />
        <meta property="og:title" content="SirawDev Blog - Web Development Insights" />
        <meta
          property="og:description"
          content="A blog about web development, programming tips, and technology insights from SirawDev."
        />
        <meta property="og:url" content="https://sirawdev.com.et" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://sirawdev.com.et/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SirawDev Blog" />
        <meta
          name="twitter:description"
          content="A blog about web development, programming tips, and technology insights."
        />
        <meta
          name="twitter:image"
          content="https://sirawdev.com.et/og-image.jpg"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Schema.org markup for blog */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "SirawDev Blog",
              "url": "https://sirawdev.com.et",
              "description": "A blog about web development, programming tips, and technology insights.",
              "publisher": {
                "@type": "Person",
                "name": "SirawDev"
              }
            })
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
