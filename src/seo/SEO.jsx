import { Helmet } from "react-helmet-async";

/**
 * SEO Component for dynamic meta tags
 */
export default function SEO({ 
  title, 
  description, 
  keywords, 
  ogTitle, 
  ogDescription, 
  ogImage, 
  ogUrl,
  articleData 
}) {
  const siteName = "Civic Pulse Media";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={articleData ? "article" : "website"} />
      <meta property="og:url" content={ogUrl || window.location.href} />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage || "https://picsum.photos/seed/civicpulse/1200/630"} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage || "https://picsum.photos/seed/civicpulse/1200/630"} />

      {/* Structured Data (JSON-LD) */}
      {articleData && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": articleData.title,
            "image": [articleData.image],
            "datePublished": articleData.date,
            "author": [{
              "@type": "Person",
              "name": articleData.author
            }]
          })}
        </script>
      )}
    </Helmet>
  );
}
