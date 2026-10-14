import styled from '@emotion/styled'
import { renderRichText, tablet } from '../lib/utils/layout'
import Image from 'next/legacy/image'

const Container = styled.div`
  border-top: 2px solid black;
  position: relative;
  margin-top: 100px;
  background-color: black;
  height: 500px;

  display: flex;

  ${tablet()} {
    background-position-x: -200px;
  }
  ${tablet()} {
    height: 400px;
  }

  /* > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  } */
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

const Footer = ({ title, content, children }) => {
  return (
    <Container>
      <Content>
        <h2>{title}</h2>
        {renderRichText(content)}
      </Content>
      <Image
        layout="fill"
        objectFit="cover"
        src="/img/footer-map.png"
        alt="Map showing the department location in Gothenburg"
      />
    </Container>
  )
}

export default Footer
