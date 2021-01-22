import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { mobile, middleContent, renderRichText } from '../utils/layout'
import LandingSection from '../components/LandingSection'

const Container = styled.div`
  overflow: hidden;

  ${mobile()} {
    padding-top: 0;
  }
`

const Content = styled.div`
  ${middleContent()}
`

const Title = styled.div`
  grid-column: 1 / -1;
  max-width: 1400px;
  font-size: 56px;
  line-height: 110px;

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

const Landing = ({ content }) => {
  console.log('contet', content)
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
            <div>
              <Title>
                <h1>{content.title}</h1>
              </Title>
              <Description>{renderRichText(content.introduction)}</Description>
            </div>
            <div>
              {content.sectionsCollection.items.map((section) => (
                <LandingSection {...section} />
              ))}
            </div>
          </Content>
        )}
      </Container>
    </>
  )
}

export default Landing
