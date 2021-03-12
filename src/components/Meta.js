import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ name, description, shareImage, link }) => {
  return (
    <Helmet>
      <title>{name}</title>
      <meta name="title" content={name} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={link} />
      <meta property="og:title" content={name} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={shareImage} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={link} />
      <meta property="twitter:title" content={name} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={shareImage} />
    </Helmet>
  )
}

export default Meta
