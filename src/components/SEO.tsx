import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
}

export const SEO = ({
  title = 'Windows XP Portfolio - Anubhav Gain',
  description = 'DevSecOps Engineer & Cyber Security Expert portfolio showcasing CI/CD security integration, SIEM, cloud security, and vulnerability management skills.',
  keywords = 'DevSecOps, Cyber Security, CI/CD, SIEM, Cloud Security, Windows XP, Portfolio',
  image = '/og-image.jpg',
  url = 'https://your-domain.com'
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Anubhav Gain" />
      <link rel="canonical" href={url} />
    </Helmet>
  )
} 