import styled from '@emotion/styled'
import Section from './Section'
import FAQ from './FAQ'
import Articles from './Articles'
import Team from './Team'
import { tablet } from '../../lib/utils/layout'

const Container = styled.div`
  margin: 0 auto;
  width: 75%;
  min-height: 100vh;
  font-family: 'Poppins';

  ${tablet()} {
    width: 100%;
    padding: 1em;
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

const Project = ({ project, intro }) => {
  return (
    <Container>
      {intro()}
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
