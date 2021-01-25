import React from 'react'
import styled from 'styled-components'
import Section from '../components/projects/Section'
import FAQ from '../components/projects/FAQ'
import Articles from '../components/projects/Articles'
import Team from '../components/projects/Team'
import { useProject } from '../utils/cms-hooks'

const Container = styled.div``

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
  const project = useProject(id)

  if (!project) return <div></div>
  return (
    <Container>
      {intro(project)}
      <Sections sections={project.sectionsCollection.items} />
      <FAQ faq={project.faqCollection.items} />
      <Articles
        articles={project.articlesCollection.items}
        title={project.articlesTitle}
      />
      <Team
        team={project.teamCollection.items}
        introduction={project.teamIntroduction}
      />
    </Container>
  )
}

export default Project
