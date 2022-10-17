import React from 'react'
import styled from '@emotion/styled'
import { renderRichText, mobile } from '../lib/utils/layout'

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

const TextPage = ({ page }) => {
  return <Container>{renderRichText(page.content)}</Container>
}

export default TextPage
