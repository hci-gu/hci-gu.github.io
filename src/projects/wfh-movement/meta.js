import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = () => {
  return (
    <Helmet>
      <title>WFH movement</title>
      <meta name="title" content="WFH movement" />
      <meta
        name="description"
        content="Compare your movement patterns before and after working from home."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="hci-gu.github.io/wfh-movement" />
      <meta property="og:title" content="WFH movement" />
      <meta
        property="og:description"
        content="Compare your movement patterns before and after working from home."
      />
      <meta
        property="og:image"
        content="https://hci-gu.github.io/img/wfh-movement/share.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://hci-gu.github.io/wfh-movement/"
      />
      <meta property="twitter:title" content="WFH Movement" />
      <meta
        property="twitter:description"
        content="Compare your movement patterns before and after working from home."
      />
      <meta
        property="twitter:image"
        content="https://hci-gu.github.io/img/wfh-movement/share.png"
      />
    </Helmet>
  )
}

export default Meta
