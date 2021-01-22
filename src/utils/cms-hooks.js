import { useQuery } from 'urql'
import { useRecoilValue } from 'recoil'
import { localeAtom } from '../state'

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

  const { data, fetching, error } = result

  if (!data || fetching || error) return null
  return data.project
}

export const useGenericContent = (id) => {
  const locale = useRecoilValue(localeAtom)
  const [result] = useQuery({
    query: ProjectQuery,
    variables: { id, locale: locale.value },
  })

  const { data, fetching, error } = result

  if (!data || fetching || error) return null
  return data.project
}
