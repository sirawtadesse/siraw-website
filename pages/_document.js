import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="A blog about web development, programming tips, and technology insights from SirawDev." />
        <meta name="keywords" content="web development, programming, javascript, react, php, mysql, blog, tutorials" />
        <meta property="og:title" content="SirawDev Blog - Web Development Insights" />
        <meta property="og:description" content="A blog about web development, programming tips, and technology insights from SirawDev." />
        <meta property="og:url" content="https://sirawdev.com.et" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://sirawdev.com.et" />
        
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
          rel="stylesheet"
        />
        
        {/* Additional meta tags for blog SEO */}
        <meta name="author" content="SirawDev" />
        <meta name="theme-color" content="#3b82f6" />
        
        {/* RSS feed link */}
        <link rel="alternate" type="application/rss+xml" title="RSS Feed for SirawDev Blog" href="/rss.xml" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
        
        {/* Schema.org markup for blog posts will be added dynamically */}
      </body>
    </Html>
  );
}
