import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import Faq from './faq'
import Team from './team'
import Link from '../../components/Link'
import { mobile, tablet, smallLaptop } from '../../utils/layout'

const Container = styled.div`
  margin: 0 auto;
  width: 75%;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;

  ${mobile()} {
    width: 100%;
    padding: 1em;
  }
`

const Wrapper = styled.div`
  margin-top: 150px;
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
    text-align: center;
    font-size: 64px;
    line-height: 64px;
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
  > p {
    text-align: justify;
    font-weight: 300;
    margin-top: 50px;
    width: 500px;
  }

  ${mobile()} {
    > p {
      width: 100%;
    }
  }
`

const AppstoreBadges = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > span {
    font-weight: 200;
    font-size: 20px;
  }

  > a > img {
    width: 200px;
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

const Description = styled.div`
  margin: 0 auto;
  margin-top: 100px;

  > h2 {
    margin: 20px auto;
    max-width: 600px;
    text-align: center;
  }
  > p {
    margin: 0 auto;
    max-width: 600px;
    text-align: justify;
  }
`

const Landing = () => {
  return (
    <>
      <Helmet>
        <title>WFH movement</title>
        <meta name="title" content="WFH movement" />
        <meta
          name="description"
          content="Compare your movement patterns before and after working from home."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="hci-gu.github.io/wfh-movement" />
        <meta property="og:title" content="WFH movement" />
        <meta
          property="og:description"
          content="Compare your movement patterns before and after working from home."
        />
        <meta
          property="og:image"
          content="https://hci-gu.github.io/img/wfh-movement/share.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://hci-gu.github.io/wfh-movement/"
        />
        <meta property="twitter:title" content="WFH movement" />
        <meta
          property="twitter:description"
          content="Compare your movement patterns before and after working from home."
        />
        <meta
          property="twitter:image"
          content="https://hci-gu.github.io/img/wfh-movement/share.png"
        />
      </Helmet>
      <Container>
        <Wrapper>
          <Title>
            <h1>WFH movement</h1>
            <h2>Have your movement patterns changed?</h2>
            <p>
              Compare your movement patterns before and after working from home.
              <br></br>
              <br></br>
              Download the WFH app to visualize steps data from sources such as
              Apple Health, Google fitness and Garmin, to get an idea of how
              your movement patterns have changed after working from home.
            </p>
            <AppstoreBadges>
              <span>Get the app!</span>
              <a
                href="https://play.google.com/store/apps/details?id=com.wfhmovement.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/wfh-movement/google-play-badge.png"
                  alt="Google play button"
                ></img>
              </a>
              <a
                href="https://apps.apple.com/us/app/id1518224904"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/wfh-movement/appstore-badge.png"
                  alt="Appstore button"
                  style={{ marginTop: 10 }}
                ></img>
              </a>
            </AppstoreBadges>
          </Title>
          <ScreenShots>
            <img
              src="/img/wfh-movement/screenshot_intro.png"
              alt="screenshot of app intro"
            ></img>
            <img
              alt="screenshot of app step details"
              src="/img/wfh-movement/screenshot.png"
              style={{ width: '70%', left: '60%', top: 220 }}
            ></img>
          </ScreenShots>
        </Wrapper>
        <Description>
          <h2>
            Do you think that you are moving more or less since you began
            working from home?
          </h2>
          <p>
            This app allows you to explore whether your movement patterns have
            changed after Covid 19 and recommendations to work from home. The
            app visualizes your movement in the form of steps data from your
            phone, through Apple Health, Google fitness or Garmin.
            <br></br>
            <br></br>
            The Work From Home app was developed for research purposes by the
            Division of Human Computer Interaction at the Department of Applied
            Information Technology, University of Gothenburg, Sweden.
            <br></br>
            <br></br>
            No data will be sent to our servers until you explicitly agree to
            share your data. You can read more about our handling of data in the{' '}
            <Link to="/wfh-movement/privacy-policy">privacy policy</Link> and in
            the FAQ.
          </p>
        </Description>
        <Faq />
        <Team />
      </Container>
    </>
  )
}

export default Landing
