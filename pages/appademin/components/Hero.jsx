import { Button } from 'antd'
import React from 'react'
import styled from '@emotion/styled'
import {
  desktop,
  tablet,
  renderRichText,
  largeLaptop,
} from '../../../lib/utils/layout'
import HeroBackground from './HeroBackground'

const Container = styled.div``

const Content = styled.div`
  display: flex;
  justify-content: space-between;

  ${tablet()} {
    flex-direction: column;
  }

  a {
    align-self: flex-end;

    ${tablet()} {
      align-self: center;
    }
  }
`

const TextContent = styled.div`
  margin-top: 100px;
  width: 60%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  ${largeLaptop()} {
    margin-top: 60px;
  }

  ${tablet()} {
    width: 100%;
    margin-top: 0;
  }
`

const Title = styled.h1`
  font-size: 72px;
  font-weight: 800;

  ${tablet()} {
    font-size: 38px;
    text-align: center;
  }
`

const Description = styled.div`
  font-weight: 300;
  font-size: 22px;

  ${tablet()} {
    margin: 0 auto;
    width: 90%;
    text-align: justify;
    font-size: 14px;
  }
`

const CTAButton = styled(Button)`
  background-color: #1b4079;
  color: white;
  width: 196px;
  height: 62px;
  font-size: 20px;
  border-radius: 8px;

  ${tablet()} {
    height: 48px;
  }

  :hover {
    background-color: #163564;
  }

  border: none;
`

const Image = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${tablet()} {
    display: none;
  }

  > span {
    font-size: 15px;
    font-weight: 200;
    margin-left: -10px;
    margin-top: -32px;

    ${desktop()} {
      margin-top: -28px;
    }
  }
`

const Phone = styled.img`
  height: 850px;
  width: auto;

  ${desktop()} {
    height: 640px;
  }

  ${tablet()} {
    display: none;
  }
`

const Hero = ({ title, introduction, callToAction, callToActionHref }) => {
  return (
    <Container>
      <HeroBackground />
      <Content>
        <TextContent>
          <Title>{title}</Title>
          <Description>{renderRichText(introduction)}</Description>
          <a href={callToActionHref}>
            <CTAButton>{callToAction}</CTAButton>
          </a>
        </TextContent>
        <Image src="/img/assets/hero-phone.png">
          <Phone src="/img/assets/hero-phone.png" />
          <span>
            App utvecklad av Appademin, läs mer <a to="/wfh-movement">här</a>.
          </span>
        </Image>
      </Content>
    </Container>
  )
}

export default Hero
