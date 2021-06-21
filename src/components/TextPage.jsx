import React from 'react'
import styled from 'styled-components'
import { renderRichText, mobile } from '../utils/layout'
import { useTextPage } from '../utils/cms-hooks'

const Container = styled.div`
  padding-bottom: 100px;
  margin: 0 auto;
  width: 60%;
  max-width: 900px;

  ${mobile()} {
    width: 100%;
    padding: 1em;
  }
`

const TextPage = ({ id }) => {
  const page = useTextPage(id)

  if (!page) return null

  return <Container>{renderRichText(page.content)}</Container>
}

export default TextPage
