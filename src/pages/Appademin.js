import React from 'react'
import styled from 'styled-components'
// import { Helmet } from 'react-helmet'
import {
  mobile,
  middleContent,
  renderRichText,
  desktop,
  tablet,
} from '../utils/layout'
import Hero from '../components/Hero'
import StepsContainer from '../components/Steps'
import Team from '../components/Team'
import Features from '../components/Features'
import { useAppedemiContent } from '../utils/cms-hooks'

const Container = styled.div`
  font-family: 'Manrope';
  overflow: hidden;

  h2 {
    font-size: 48px;
    line-height: 48px;
    font-weight: 800;
    margin: 0;

    ${tablet()} {
      font-size: 38px;
    }
  }

  ${mobile()} {
    padding-top: 0;
  }
`

const Background = styled.div`
  > p {
    margin-top: 32px;
    font-size: 18px;
  }
`

const Content = styled.div`
  ${middleContent(true)}

  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 200px;

  ${desktop()} {
    grid-row-gap: 150px;
  }
`

const Appademin = ({ id }) => {
  const content = useAppedemiContent(id)

  if (!content) return null

  return (
    <Container>
      <Content>
        <Hero
          title={content.title}
          introduction={content.introduction}
          callToAction={content.callToAction}
        />
        {content.sectionsCollection.items.map((item) => {
          if (item.displayAsSteps) {
            return <StepsContainer {...item} key={`Feature_${item.title}`} />
          }
          return <Features {...item} key={`Feature_${item.title}`} />
        })}
        <Team {...content.team} />
        <Background>
          <h2>{content.backgroundTitle}</h2>
          {renderRichText(content.background)}
        </Background>
      </Content>
    </Container>
  )
}

export default Appademin
