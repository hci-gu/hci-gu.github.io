import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { mobile, middleContent, renderRichText, tablet } from '../utils/layout'
import LandingSection from '../components/LandingSection'
import Footer from '../components/Footer'
import CanvasRoot from '../canvas'
import Team from '../components/Team'
import ProjectShowcase from '../components/ProjectShowcase'

const Container = styled.div`
  overflow: hidden;

  ${mobile()} {
    padding-top: 0;
  }
`

const Content = styled.div`
  ${middleContent()}
`

const Header = styled.div`
  display: flex;

  > div {
    width: 50%;
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
  }
`

const Description = styled.div`
  width: 600px;
  padding: 20px 0;
  color: rgb(25, 25, 25);
  text-align: justify;

  ${mobile()} {
    width: 100%;
  }
`

const Projects = styled.div`
  margin: 25px auto;
  margin-bottom: 75px;
  > h1 {
    font-size: 48px;
  }

  > div {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;

    ${tablet()} {
      grid-template-columns: 1fr;
    }
  }
`

const Bubble = styled.div`
  position: absolute;
  background-color: #3ccc39;
  opacity: 0.75;
  width: 700px;
  height: 650px;
  top: -150px;
  right: -200px;
  border-radius: 350px;
  z-index: -1;
`

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
                  {renderRichText(content.introduction)}
                </Description>
              </div>
              <Bubble />
              <CanvasRoot />
            </Header>

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
