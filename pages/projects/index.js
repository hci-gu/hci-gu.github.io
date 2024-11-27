import styled from '@emotion/styled'
import { INDEX_QUERY } from '../../lib/utils/queries'
import { getCMSData } from '../api/cms/[page]'
import { middleContent, mobile } from '../../lib/utils/layout'
import ProjectShowcase from '../../components/ProjectShowcase'
import ProjectGrid from '../../components/ProjectGrid'

const Container = styled.div`
  font-family: 'Manrope';
  ${mobile()} {
    padding-top: 0;
  }
`

const Content = styled.div`
  ${middleContent()}
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

export default function ({ content }) {
  return (
    <Container>
      <Content>
        <h1>{content.projectsTitle}</h1>
        <ProjectGrid>
          {content.projectsCollection.items &&
            content.projectsCollection.items.map((p, i) => (
              <ProjectShowcase {...p} key={`ProjectShowcase_${i}`} />
            ))}
        </ProjectGrid>
        <h1>{content.oldProjectsTitle}</h1>
        <ProjectGrid>
          {content.oldProjectsCollection.items &&
            content.oldProjectsCollection.items.map((p, i) => (
              <ProjectShowcase {...p} key={`OldProjectShowcase_${i}`} />
            ))}
        </ProjectGrid>
      </Content>
    </Container>
  )
}

export async function getServerSideProps(context) {
  const data = await getCMSData(
    INDEX_QUERY,
    '5BaRlonhLZbVN59DVybNWF',
    context.locale
  )

  return {
    props: {
      content: data,
    },
  }
}
