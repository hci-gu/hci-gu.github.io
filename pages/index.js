import Head from 'next/head'
import styled from '@emotion/styled'
import { INDEX_QUERY, PROJECTS_QUERY, TAGS_QUERY } from '../lib/utils/queries'
import {
  mobile,
  middleContent,
  renderRichText,
  tablet,
  smallLaptop,
} from '../lib/utils/layout'
import ProjectShowcase from '../components/ProjectShowcase'
import { getCMSData } from './api/cms/[page]'
import { Masonry } from 'react-plock'
import Tags from '../components/Tags'
import { useAtomValue } from 'jotai'
import { selectedTagsAtom } from '../lib/state'

const Container = styled.div`
  font-family: 'Manrope';
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
  font-size: 32px;
  line-height: 80px;
  text-align: center;

  font-weight: 900;
  color: #22223b;

  > h1 {
    font-weight: 900;
    font-size: 4.5rem;
    letter-spacing: 0.2rem;
    margin: 0;
    padding: 0;
  }
  > h3 {
    margin: 0;
    line-height: 0.75rem;
    font-size: 0.75rem;
    font-weight: 300;
  }

  ${smallLaptop()} {
    > h1 {
      font-size: 3.5rem;
    }
  }

  ${tablet()} {
    > h1 {
      font-size: 3rem;
    }
    > h3 {
      margin: 0 auto;
      width: 75%;
    }
  }

  ${mobile()} {
    font-size: 1rem;
    line-height: 2rem;
    text-align: center;

    > h3 {
      margin-top: 12px;
      font-size: 1rem;
      line-height: 1rem;
    }
  }
`

const Description = styled.div`
  padding: 8px;

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

const Index = ({ content }) => {
  const projects = [{ intro: '' }, ...content.projects]
  const selectedTags = useAtomValue(selectedTagsAtom)

  const projectsFiltered = projects.filter((project) => {
    if (!project.tags) return true
    if (selectedTags.length === 0) return true
    return project.tags.some((tag) => selectedTags.includes(tag))
  })

  return (
    <>
      <Head>
        <title>Division of Human-Computer Interaction</title>
        <meta name="title" content="Division of Human-Computer Interaction" />
        <meta
          name="description"
          content="Human-Computer Interaction at Gothenburg University"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="hci-gu.github.io" />
        <meta property="og:title" content="HCI@GU" />
        <meta
          property="og:description"
          content="Human-Computer Interaction at Gothenburg University"
        />
      </Head>
      <Container>
        <Content>
          <Masonry
            items={projectsFiltered}
            config={{
              columns: [1, 2, 3],
              gap: [24, 12, 24],
              media: [640, 768, 1024],
            }}
            render={(project, idx) => {
              const index = projects.indexOf(project)
              if (index === 0) {
                return (
                  <div key={idx}>
                    <Title>
                      <h1>HCI@GU</h1>
                      <h3>
                        Human-Computer Interaction at the Department of Applied
                        IT, University of Gothenburg
                      </h3>
                    </Title>
                    <Description>
                      <LongDescription>
                        {renderRichText(content.shortIntroduction)}
                      </LongDescription>
                      <ShortDescription>
                        {renderRichText(content.shortIntroduction)}
                      </ShortDescription>
                    </Description>
                    <Tags tags={content.tags} controls />
                  </div>
                )
              }
              return <ProjectShowcase {...project} key={idx} />
            }}
          />
        </Content>
      </Container>
    </>
  )
}

export async function getServerSideProps(context) {
  const data = await getCMSData(
    INDEX_QUERY,
    '5BaRlonhLZbVN59DVybNWF',
    context.locale
  )
  const tags = new Set()
  const projects = data.projectsCollection.items.map((p) => {
    p.tags = p.tagsCollection.items.map((t) => t.name)
    delete p.tagsCollection

    return p
  })
  projects.sort((a, b) => new Date(b.date) - new Date(a.date))

  projects.forEach((p) => {
    p.tags.forEach((t) => {
      tags.add(t)
    })
  })

  return {
    props: {
      content: {
        ...data,
        projects,
        tags: Array.from(tags),
      },
    },
  }
}

export default Index
