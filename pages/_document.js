import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="An efficient and user-friendly asset management system." />
        <meta name="keywords" content="Asset Management, Inventory, Tracking" />
        <meta property="og:title" content="Asset Management System" />
        <meta property="og:description" content="An efficient and user-friendly asset management system." />
        <meta property="og:url" content="https://your-asset-management-domain.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://your-asset-management-domain.com" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
