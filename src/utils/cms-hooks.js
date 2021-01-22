import { useEffect } from 'react'
import { useQuery } from 'urql'
import { useRecoilState, useRecoilValue } from 'recoil'
import { contentAtom, localeAtom, projectAtom } from '../state'

const ProjectQuery = `
query ($id: String!, $locale: String!) {
  project(id: $id, locale: $locale) {
    name
    subHeading
    introduction {
      json
    }
    callToAction
    articlesTitle
    teamIntroduction
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

export const useProject = (id) => {
  const locale = useRecoilValue(localeAtom)
  const [result] = useQuery({
    query: ProjectQuery,
    variables: { id, locale: locale.value },
  })
  const [project, setProject] = useRecoilState(projectAtom)
  const { data } = result

  useEffect(() => {
    if (data) setProject(data.project)
  }, [data, setProject])

  return project
}

const WebContentQuery = `
query($id:String!, $locale: String!) {
  webContent(id: $id, locale: $locale) {
   	title
    introduction {
      json
    }
    footerTitle
    footerContent {
      json
    }
    sectionsCollection {
      items {
        title
        description {
          json
        }
      }
    }
  }
}
`

export const useGenericContent = (id = '5BaRlonhLZbVN59DVybNWF') => {
  const locale = useRecoilValue(localeAtom)
  const [result] = useQuery({
    query: WebContentQuery,
    variables: { id, locale: locale.value },
  })
  const [content, setContent] = useRecoilState(contentAtom)
  const { data } = result

  useEffect(() => {
    if (data) setContent(data.webContent)
  }, [data, setContent])

  return content
}
