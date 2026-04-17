import { Helmet } from 'react-helmet-async'

const SITE = 'https://greenshrushti.in'
const BRAND = 'Green Shrushti'
const DEFAULT_IMAGE = `${SITE}/apple-touch-icon.png`

export default function SEO({ title, description, path = '/', image = DEFAULT_IMAGE }) {
  const fullTitle = title ? `${title} — ${BRAND}` : `${BRAND} — Waste Management, Recycling & Carbon Credits in Mumbai`
  const url = `${SITE}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={BRAND} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
