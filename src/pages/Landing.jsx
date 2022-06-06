import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import {
  mobile,
  middleContent,
  renderRichText,
  tablet,
  smallLaptop,
} from '../utils/layout'
import LandingSection from '../components/LandingSection'
import Education from '../components/Education'
import Footer from '../components/Footer'
import CanvasRoot from '../canvas'
import Team from '../components/Team'
import ProjectShowcase from '../components/ProjectShowcase'
import Initiative from '../components/Initiative'

const Container = styled.div`
  ${mobile()} {
    padding-top: 0;
  }
`

const Content = styled.div`
  ${middleContent()}
`

const Header = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${smallLaptop()} {
    grid-template-columns: 400px 1fr;
  }

  ${tablet()} {
    grid-template-columns: 1fr;
  }
`

const Title = styled.div`
  grid-column: 1 / -1;
  max-width: 1400px;
  font-size: 36px;
  line-height: 80px;

  font-weight: 900;
  color: #22223b;

  > h1 {
    font-weight: 900;
    margin: 0;
    padding: 0;
  }

  ${mobile()} {
    font-size: 1rem;
    line-height: 2rem;
    text-align: center;
  }
`

const Description = styled.div`
  width: 600px;
  padding: 20px 0;

  > div {
    color: rgb(25, 25, 25);
    text-align: justify;
  }

  ${smallLaptop()} {
    width: 100%;
  }
`

const LongDescription = styled.div`
  ${mobile()} {
    display: none;
  }
`

const ShortDescription = styled.div`
  display: none;

  ${mobile()} {
    display: block;
  }
`

const Projects = styled.div`
  margin: 25px auto;
  margin-bottom: 75px;
  > h1 {
    font-weight: 800;
    font-size: 40px;
    line-height: 54px;

    color: #18191f;

    ${mobile()} {
      text-align: center;
      font-size: 36px;
      line-height: 50px;
    }
  }

  > div {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;

    ${mobile()} {
      grid-template-columns: 1fr;
    }
  }
`

const Initiatives = styled.div`
  margin: 25px auto;
  margin-bottom: 75px;

  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 75px;

  ${mobile()} {
    grid-row-gap: 25px;
  }
`

const MobilePromoContainer = styled.div`
  position: relative;
  display: none;
  width: 100%;

  ${mobile()} {
    display: flex;
  }

  > img {
    width: 150px;
    margin: 0 auto;
  }
`

const ImageBackground = styled.div`
  overflow: hidden;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;

  > div {
    position: absolute;
    z-index: -1;
    bottom: -50vw;
    left: calc(50% - 37.5vw);
    width: 75vw;
    height: 75vw;
    border-radius: 50%;
    background-color: #96e2e6;
  }
`

const FullWidthBorder = styled.div`
  position: absolute;
  bottom: 0;
  left: -10vw;
  width: 120vw;

  border-bottom: 1px solid black;
`

const MobilePromo = () => {
  return (
    <MobilePromoContainer>
      <img src="/img/assets/landing-promo-mobile.png"></img>
      <ImageBackground>
        <div></div>
      </ImageBackground>
      <FullWidthBorder />
    </MobilePromoContainer>
  )
}

const Landing = ({ content }) => {
  return (
    <>
      <Helmet>
        <title>Division of Human-Computer Interaction</title>
        <meta name="title" content="Division of Human-Computer Interaction" />
        <meta
          name="description"
          content="Division of Human-Computer Interaction at Gothenburg University"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="hci-gu.github.io" />
        <meta
          property="og:title"
          content="Division of Human-Computer Interaction"
        />
        <meta
          property="og:description"
          content="Division of Human-Computer Interaction at Gothenburg University"
        />
        <meta
          property="og:image"
          content="https://hci-gu.github.io/img/share.png"
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
        {content && (
          <Content>
            <Header>
              <div>
                <Title>
                  <h1>{content.title}</h1>
                </Title>
                <Description>
                  <LongDescription>
                    {renderRichText(content.introduction)}
                  </LongDescription>
                  <ShortDescription>
                    {renderRichText(content.shortIntroduction)}
                  </ShortDescription>
                </Description>
              </div>
              <CanvasRoot />
              <MobilePromo />
            </Header>

            <Initiatives>
              {content.initiativesCollection.items &&
                content.initiativesCollection.items.map((initiative, i) => (
                  <Initiative
                    {...initiative}
                    align={i % 2 === 0 ? 'left' : 'right'}
                    key={`Initiative_${i}`}
                  />
                ))}
            </Initiatives>

            {content.coursesCollection.items && (
              <Education
                title={content.educationTitle}
                description={content.educationDescription}
                courses={content.coursesCollection.items}
              />
            )}

            <Projects>
              <h1>{content.projectsTitle}</h1>
              <div>
                {content.projectsCollection.items &&
                  content.projectsCollection.items.map((p, i) => (
                    <ProjectShowcase {...p} key={`ProjectShowcase_${i}`} />
                  ))}
              </div>
            </Projects>
            {content.team && <Team {...content.team} />}
            <div>
              {content.sectionsCollection.items.map((section, i) => (
                <LandingSection {...section} key={`Section_${i}`} />
              ))}
            </div>
          </Content>
        )}
        <a href="/appademin" style={{ visibility: 'hidden' }}>
          preview
        </a>
      </Container>
      <Footer />
    </>
  )
}

export default Landing
