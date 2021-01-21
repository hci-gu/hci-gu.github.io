import React from 'react'
import styled from 'styled-components'
import { useQuery } from 'urql'
import { useParams } from 'react-router-dom'
import Section from '../components/projects/Section'
import { mobile, tablet, smallLaptop } from '../utils/layout'
import FAQ from '../components/projects/FAQ'

const Container = styled.div``

const ProjectQuery = `
query ($id: String!) {
  project(id: $id) {
    name
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

const Project = ({ id }) => {
  const [result] = useQuery({
    query: ProjectQuery,
    variables: { id },
  })

  const { data, fetching, error } = result

  return (
    <Container>
      {data && <Sections sections={data.project.sectionsCollection.items} />}
      {data && <FAQ faq={data.project.faqCollection.items} />}
    </Container>
  )
}

export default Project
