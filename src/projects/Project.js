import React from 'react'
import styled from 'styled-components'
import { useQuery } from 'urql'
import Section from '../components/projects/Section'
import FAQ from '../components/projects/FAQ'
import { useRecoilValue } from 'recoil'
import { localeAtom } from '../state'
import Articles from '../components/projects/Articles'
import Team from '../components/projects/Team'

const Container = styled.div``

const ProjectQuery = `
query ($id: String!, $locale: String!) {
  project(id: $id, locale: $locale) {
    name
    subHeading
    introduction {
      json
    }
    callToAction
    sectionsCollection {
      items {
        title
        description {
          json
        }
        image {
          url
        }
        backgroundImage {
          url
        }
        alignImageLeft
      }
    }
    faqCollection {
      items {
        title
        faqItemsCollection {
          items {
            question
            answer {
              json
            }
          }
        }
      }
    }
    articlesCollection {
      items {
        title
        publisher
        publisherLogo {
          url
        }
        link
      }
    }
    teamCollection {
      items {
        name
        twitter
        website
      }
    }
  }
}
`

const Sections = ({ sections }) => {
  return (
    <div>
      {sections.map((section, i) => (
        <Section section={section} key={`Section_${i}`} />
      ))}
    </div>
  )
}

const Project = ({ id, intro }) => {
  const locale = useRecoilValue(localeAtom)
  const [result] = useQuery({
    query: ProjectQuery,
    variables: { id, locale: locale.value },
  })

  const { data, fetching, error } = result

  return (
    <Container>
      {data && intro(data.project)}
      {data && <Sections sections={data.project.sectionsCollection.items} />}
      {data && <FAQ faq={data.project.faqCollection.items} />}
      {data && <Articles articles={data.project.articlesCollection.items} />}
      {data && <Team team={data.project.teamCollection.items} />}
    </Container>
  )
}

export default Project
