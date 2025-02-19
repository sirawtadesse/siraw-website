import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Full-Stack Developer Portfolio | Siraw Tadesse</title>
        <meta
          name="description"
          content="Portfolio of Siraw Tadesse, a full-stack developer from Addis Ababa University. Explore projects, experience, and skills."
        />
        <meta name="robots" content="index,follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://siraw-website.vercel.app" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Siraw Tadesse Portfolio" />
        <meta
          property="og:description"
          content="Discover the projects and expertise of Siraw Tadesse, a full-stack developer."
        />
        <meta property="og:url" content="https://siraw-website.vercel.app" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://siraw-website.vercel.app/og-image.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Siraw Tadesse Portfolio" />
        <meta
          name="twitter:description"
          content="Portfolio of Siraw Tadesse, a full-stack developer."
        />
        <meta
          name="twitter:image"
          content="https://siraw-website.vercel.app/og-image.jpg"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
