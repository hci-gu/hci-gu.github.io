import React from 'react'
import styled from 'styled-components'
import { Link as ReactRouterLink } from 'react-router-dom'

const Link = styled.a`
  color: #4c74b9;
  text-decoration: none;
  padding-bottom: 0.5px;
  border-bottom: 0.5px solid #4c74b9;

  ${({ twitter }) =>
    twitter &&
    `
    color: #00acee;
    border-color: #00acee;
  `}
`

export default ({ children, href, twitter, to }) => {
  const link = (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      twitter={twitter}
    >
      {children}
    </Link>
  )

  if (to) {
    return (
      <ReactRouterLink to={to} style={{ textDecoration: 'none' }}>
        {link}
      </ReactRouterLink>
    )
  }
  return link
}
