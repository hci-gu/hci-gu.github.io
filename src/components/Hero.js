import { Button } from 'antd'
import React from 'react'
import styled from 'styled-components'
import {
  mobile,
  desktop,
  tablet,
  renderRichText,
  largeLaptop,
} from '../utils/layout'
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
  }

  ${tablet()} {
    flex-direction: column;
  }
`

const Title = styled.h1`
  font-size: 72px;
  font-weight: 800;
`

const Description = styled.div`
  font-weight: 300;
  font-size: 22px;
`

const CTAButton = styled(Button)`
  align-self: flex-end;
  background-color: #1b4079;
  color: white;
  width: 196px;
  height: 62px;
  font-size: 20px;
  border-radius: 8px;
`

const Phone = styled.img`
  height: 850px;
  width: auto;

  ${desktop()} {
    height: 640px;
  }

  ${mobile()} {
    visibility: hidden;
  }
`

const Hero = ({ title, introduction, callToAction }) => {
  return (
    <Container>
      <HeroBackground />
      <Content>
        <div>
          <Title>{title}</Title>
          <Description>{renderRichText(introduction)}</Description>
          <CTAButton>{callToAction}</CTAButton>
        </div>
        <Phone src="/img/assets/hero-phone.png" />
      </Content>
    </Container>
  )
}

export default Hero
