import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'

export const sizes = {
  mobile: 640,
  tablet: 940,
  smallLaptop: 1200,
  laptop: 1440,
  laptopMedium: 1600,
  largeLaptop: 1800,
  desktop: 1920,
  largeDesktop: 2560,
}

export const isMobile = () => window.innerWidth <= sizes.mobile
export const isLaptop = () => window.innerWidth <= sizes.laptop
export const isSize = (key) => window.innerWidth <= sizes[key]

export const mobile = () => `@media (max-width: ${sizes.mobile}px)`
export const tablet = () => `@media (max-width: ${sizes.tablet}px)`
export const smallLaptop = () => `@media (max-width: ${sizes.smallLaptop}px)`
export const laptop = () => `@media (max-width: ${sizes.laptop}px)`
export const laptopMedium = () => `@media (max-width: ${sizes.laptopMedium}px)`
export const largeLaptop = () => `@media (max-width: ${sizes.largeLaptop}px)`
export const desktop = () => `@media (max-width: ${sizes.desktop}px)`
export const largeDesktop = () => `@media (max-width: ${sizes.largeDesktop}px)`
export const middleContent = ({ padding = true } = {}) => `
  margin: 0 auto;
  width: 100%;
  padding: 0 17.1%;

  ${desktop()} {
    padding: 0 12.1%;
  }

  ${laptop()} {
    padding: 0 11.4%;
  }

  ${smallLaptop()} {
    padding: 0 8%;
  }

  ${tablet()} {
    padding: 0 5%;
  }

  ${mobile()} {
    width: 100%;
    ${padding && 'padding: 1em;'} 
  }
`

export const labelForUri = (uri) => {
  if (uri.includes('mailto')) {
    return 'Mail to link for ' + uri.split(':')[1]
  }
  return `Link to ${uri}`
}

export const renderRichText = (richText) => {
  const Text = ({ children }) => <p>{children}</p>

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <a
            href={node.data.uri}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={labelForUri(node.data.uri)}
          >
            {children}
          </a>
        )
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const img = richText.links.assets.block.find(
          (i) => i.sys.id === node.data.target.sys.id
        )
        return <img src={img?.url} alt={img?.title} />
      },
    },
    renderText: (text) =>
      text
        .split('\n')
        .flatMap((text, i) => [i > 0 && <br key={`${text}_${i}`} />, text]),
  }

  return documentToReactComponents(richText.json, options)
}
