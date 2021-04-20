import { Button } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { desktop, tablet, renderRichText, largeLaptop } from '../utils/layout'
import HeroBackground from './HeroBackground'

const Container = styled.div``

const Content = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
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
  }

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
        <div>
          <Title>{title}</Title>
          <Description>{renderRichText(introduction)}</Description>
          <a href={callToActionHref}>
            <CTAButton>{callToAction}</CTAButton>
          </a>
        </div>
        <Phone src="/img/assets/hero-phone.png" />
      </Content>
    </Container>
  )
}

export default Hero
