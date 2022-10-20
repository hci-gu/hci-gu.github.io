import styled from '@emotion/styled'
import {
  mobile,
  tablet,
  smallLaptop,
  renderRichText,
} from '../../lib/utils/layout'
import AppDownload from './AppDownload'

const Container = styled.div`
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

const Introduction = ({
  name,
  subHeading,
  introduction,
  callToAction,
  introScreenshot,
  screenshot,
  appstore,
  googlePlay,
}) => {
  return (
    <Container>
      <Title>
        <h1>{name}</h1>
        <h2>{subHeading}</h2>
        <div>{renderRichText(introduction)}</div>
        <AppDownload
          title={callToAction}
          googlePlay={googlePlay}
          appstore={appstore}
        />
      </Title>
      <ScreenShots>
        <img src={introScreenshot} alt="screenshot of app intro"></img>
        <img
          src={screenshot}
          alt="screenshot of app step details"
          style={{ width: '70%', left: '60%', top: 220 }}
        ></img>
      </ScreenShots>
    </Container>
  )
}

export default Introduction
