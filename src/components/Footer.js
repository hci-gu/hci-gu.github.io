import React from 'react'
import styled from 'styled-components'
import { mobile, tablet } from '../utils/layout'

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
  ${mobile()} {
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
    margin: 0;
    font-size: 44px;
  }
`

const Text = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 17px;
  }

  > span,
  > a {
    font-weight: 100;
    color: #fff;
  }
`

const Footer = () => {
  return (
    <Container>
      <Content>
        <h2>Get in touch</h2>
        <Text>
          <strong>Alexandra Weilenmann</strong>
          <span>Head of Division</span>
          <strong>E-mail: </strong>
          <a href="mailto:alexandra.weilenmann@ait.gu.se">
            alexandra.weilenmann@ait.gu.se
          </a>
        </Text>
        <Text>
          <strong>Hus Patricia</strong>
          <span>Forskningsgången 6</span>
          <span>417 56 Göteborg</span>
        </Text>
      </Content>
    </Container>
  )
}

export default Footer
