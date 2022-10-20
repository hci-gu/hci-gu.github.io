import React from 'react'
import styled from 'styled-components'
import { getIframeUrlForPage } from '../../../../lib/utils/rulla-pa'

const Container = styled.div`
  position: absolute;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;

  top: -60px;
  transform: scale(0.75);
  border: 1px solid black;
  border-radius: 10px;
  overflow: hidden;
`

const Phone = ({ page }) => {
  return (
    <Container>
      <iframe
        src={getIframeUrlForPage(page)}
        style={{
          border: 'none',
          background: 'none',
          width: '100%',
          height: '100%',
        }}
      ></iframe>
    </Container>
  )
}

export default Phone
