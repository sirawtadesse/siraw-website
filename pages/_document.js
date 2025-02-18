import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Global SEO Meta Tags */}
        <meta name="google-site-verification" content="drRq1jqFYtVYv4uHYIO3lBo7rcXebL3f2hCJIxi_0BI" />
        <meta name="description" content="Portfolio of Siraw Tadesse, a full-stack software developer from Addis Ababa University. Explore projects, experience, and skills." />
        <meta name="keywords" content="Portfolio, Full-Stack, Developer, Siraw Tadesse, Software, Projects, Addis Ababa University" />
        <meta property="og:title" content="Siraw Tadesse Portfolio" />
        <meta property="og:description" content="Discover the projects and expertise of Siraw Tadesse, a passionate full-stack developer." />
        <meta property="og:url" content="https://siraw-website.vercel.app" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://siraw-website.vercel.app" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
