import React from 'react'
import styled from 'styled-components'
import { renderRichText, tablet } from '../utils/layout'

const Container = styled.div`
  border-top: 2px solid black;
  position: relative;
  margin-top: 200px;
  background-color: black;
  height: 500px;

  display: flex;

  background-image: url('https://api.mapbox.com/styles/v1/sebastianait/ckeixhcr42fz519ocbrn46crk/static/pin-l+fff(11.9357634,57.7066293)/11.931968,57.706721,12.5,0,30/1000x250@2x?&access_token=pk.eyJ1Ijoic2ViYXN0aWFuYWl0IiwiYSI6ImNrZWlvaXlhMTI3dm8ycm1peHlwOW0yNGMifQ.hXGRGr7WQWwyrvMfUaNiCQ');
  background-size: cover;

  ${tablet()} {
    background-position-x: -200px;
  }
  ${tablet()} {
    height: 400px;
  }
`

const Content = styled.div`
  margin: 40px 10%;
  margin-bottom: 0;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  border-bottom: none;
  width: 500px;

  padding: 1em 2em;
  z-index: 2;

  color: #fff;
  background-color: rgba(17, 17, 29, 0.9);

  > h2 {
    color: #fff;
    margin: 0;
    font-size: 44px;
  }

  ${tablet()} {
    width: 100%;
  }
`

const Footer = ({ title, content }) => {
  return (
    <Container>
      <Content>
        <h2>{title}</h2>
        {content && renderRichText(content)}
      </Content>
    </Container>
  )
}

export default Footer
