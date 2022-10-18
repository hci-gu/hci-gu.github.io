import styled from '@emotion/styled'
import {
  mobile,
  middleContent,
  renderRichText,
  desktop,
  tablet,
} from '../../lib/utils/layout'
import Team from '../../components/Team'
import Meta from '../../components/Meta'

import Hero from './components/Hero'
import StepsContainer from './components/Steps'
import Features from './components/Features'
import Projects from './components/Projects'
import { useCMSQuery, withCMSClient } from '../../lib/utils/cms'
import { APPADEMIN_QUERY } from '../../lib/utils/queries'

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
      text-align: center;
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

  ${tablet()} {
    grid-row-gap: 100px;
  }
`

const Appademin = ({ content }) => {
  return (
    <>
      {content.meta && (
        <Meta
          name={content.meta.name}
          description={content.meta.description}
          shareImage={content.meta.shareImage.url}
          link={content.meta.link}
        />
      )}
      <Container>
        <Content>
          <Hero {...content} />
          {content.sectionsCollection.items.map((item) => {
            if (item.displayAsSteps) {
              return <StepsContainer {...item} key={`Feature_${item.title}`} />
            }
            return <Features {...item} key={`Feature_${item.title}`} />
          })}
          <Projects
            title={content.projectsTitle}
            projects={content.projectsCollection.items}
          />
          <Team {...content.team} />
          <Background>
            <h2>{content.backgroundTitle}</h2>
            {renderRichText(content.background)}
          </Background>
        </Content>
      </Container>
    </>
  )
}

export default withCMSClient(() => {
  const content = useCMSQuery(APPADEMIN_QUERY, '1e2oEtgX80ZRIyYdbacVkO')

  if (!content) return null

  return <Appademin content={content.appademin} />
})
