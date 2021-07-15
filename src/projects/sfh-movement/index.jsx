import React from 'react'
import styled from 'styled-components'
import { mobile, tablet, smallLaptop, renderRichText } from '../../utils/layout'
import Project from '../Project'
import Meta from '../../components/Meta'
import Footer from '../../components/Footer'
import AppDownload from '../../components/projects/AppDownload'

const Container = styled.div`
  margin: 0 auto;
  width: 75%;
  min-height: 100vh;
  font-family: 'Poppins';

  ${tablet()} {
    width: 100%;
    padding: 1em;
  }
`

const Wrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-evenly;

  ${tablet()} {
    justify-content: center;
  }

  ${mobile()} {
    margin-top: 0px;
    flex-direction: column;
  }
`

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    margin-top: 50px;
    text-align: center;
    font-size: 64px;
    line-height: 64px;
    font-weight: 800;
    color: #131d29;
    margin-bottom: 0;
    letter-spacing: 1px;

    ${tablet()} {
      font-size: 48px;
    }
  }
  h2 {
    margin: 0;
    font-weight: 100;
    text-align: center;
  }
  > div {
    margin-top: 50px;
  }
  > div > p {
    text-align: justify;
    font-weight: 300;
    font-size: 16px;
    width: 500px;
  }

  ${mobile()} {
    > div > p {
      width: 100%;
    }
  }
`

const ScreenShots = styled.div`
  width: 350px;
  height: 700px;
  position: relative;
  > img {
    position: absolute;
    width: 100%;
  }

  ${smallLaptop()} {
    padding: 50px;
    width: 225px;
  }

  ${tablet()} {
    padding: 0;
    width: 0;
    height: auto;

    > img {
      visibility: hidden;
    }
  }
`

const Introduction = ({ name, subHeading, introduction, callToAction }) => {
  return (
    <Wrapper>
      <Title>
        <h1>{name}</h1>
        <h2>{subHeading}</h2>
        <div>{renderRichText(introduction)}</div>
        <AppDownload
          title={callToAction}
          googlePlay="https://play.google.com/store/apps/details?id=com.wfhmovement.app.sfh"
          appstore="https://apps.apple.com/us/app/id1556414814"
        />
      </Title>
      <ScreenShots>
        <img
          src="/img/sfh-movement/screenshot_intro.png"
          alt="screenshot of app intro"
        ></img>
        <img
          alt="screenshot of app step details"
          src="/img/sfh-movement/screenshot.png"
          style={{ width: '70%', left: '60%', top: 220 }}
        ></img>
      </ScreenShots>
    </Wrapper>
  )
}

const Landing = () => {
  return (
    <>
      <Meta
        name="SFH Movement"
        description="Rör du dig mer eller mindre sedan du började studera hemifrån?"
        shareImage="https://hci-gu.github.io/img/sfh-movement/share.png"
        link="https://hci-gu.github.io/sfh-movement/"
      />
      <Container>
        <Project
          id={import.meta.env.VITE_CONTENTFUL_SFH_PROJECT_ID}
          intro={(props) => <Introduction {...props} />}
        />
      </Container>
      <Footer />
    </>
  )
}

export default Landing
