import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Asset Management System</title>
        <meta
          name="description"
          content="A comprehensive system to manage your assets efficiently."
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://your-asset-management-domain.com" />
        <meta property="og:title" content="Asset Management System" />
        <meta
          property="og:description"
          content="A comprehensive system to manage your assets efficiently."
        />
        <meta property="og:url" content="https://your-asset-management-domain.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://your-asset-management-domain.com/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Asset Management System" />
        <meta
          name="twitter:description"
          content="A comprehensive system to manage your assets efficiently."
        />
        <meta
          name="twitter:image"
          content="https://your-asset-management-domain.com/og-image.jpg"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
