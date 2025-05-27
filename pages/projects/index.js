import styled from '@emotion/styled'
import { INDEX_QUERY, PROJECTS_QUERY } from '../../lib/utils/queries'
import { getCMSData } from '../api/cms/[page]'
import { middleContent, mobile } from '../../lib/utils/layout'
import ProjectShowcase from '../../components/ProjectShowcase'
import { Masonry } from 'react-plock'
import Tags from '../../components/Tags'
import { Space } from '@mantine/core'
import { useAtomValue } from 'jotai'
import { selectedTagsAtom } from '../../lib/state'

const Container = styled.div`
  font-family: 'Manrope';
  ${mobile()} {
    padding-top: 0;
  }
`

const Content = styled.div`
  ${middleContent()}
`

export default function ({ content }) {
  const selectedTags = useAtomValue(selectedTagsAtom)
  const filteredProjects = content.projects.filter((project) => {
    if (selectedTags.length === 0) return true
    return project.tags.some((tag) => selectedTags.includes(tag))
  })

  return (
    <Container>
      <Content>
        <Tags tags={content.tags} controls />
        <Space h="md" />
        <Masonry
          items={filteredProjects}
          config={{
            columns: [1, 2, 3],
            gap: [24, 12, 24],
            media: [640, 768, 1024],
          }}
          render={(p, idx) => (
            <ProjectShowcase {...p} key={`ProjectShowcase_${idx}`} />
          )}
        />
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
      content: { ...data, projects, tags: Array.from(tags) },
    },
  }
}
