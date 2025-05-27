export const INDEX_QUERY = `
query($id:String!, $locale: String!) {
  webContent(id: $id, locale: $locale) {
   	title
    introduction {
      json
    }
    shortIntroduction {
      json
    }
    heroButtonText
    sectionsCollection {
      items {
        title
        description {
          json
        }
      }
    }
    team {
      title
      subtitle
      description {
        json
      }
      membersCollection {
        items {
          name
          role
          image {
            url
            description
          }
          description {
            json
          }
          website
        }
      }
    }
    projectsTitle
    projectsCollection {
      items {
        title
        link
        description {
          json
        }
        image {
          url
          description
        }
        tagsCollection {
          items {
            name
          }
        }
      }
    }
    educationTitle
    educationDescription {
      json
    }
    coursesCollection {
      items {
        name
        points
        description {
          json
        }
        icon {
          url
          description
        }
      }
    }
    footer {
      title
      content {
        json
      }
    }
  }
}
`

export const APPADEMIN_QUERY = `
query($id: String!, $locale:String!) {
  appademin(id:$id, locale: $locale) {
    title
    introduction {
      json
    }
    callToAction
    callToActionHref
    sectionsCollection {
      items {
        title
        displayAsSteps
        featuresCollection (limit: 10) {
          items {
            title
            description {
              json
            }
            graphic {
              url
              description
            }
          }
        }
      }
    }
    projectsTitle
    projectsCollection {
      items {
        title
        description {
          json
        }
        device
        link
        linkDescription
        image {
          url
          description
        }
      }
    }
    team {
      title
      subtitle
      description {
        json
      }
      membersCollection {
        items {
          name
          role
          image {
            url
            description
          }
          description {
            json
          }
          website
        }
      }
    }
    backgroundTitle
    background {
      json
    }
    meta {
      name
      description
      link
      shareImage {
        url
      }
    }
  }
}
`

export const PROJECT_QUERY = `
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
          description
        }
        backgroundImage {
          url
          description
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
          description
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

export const FOOTER_INDEX_QUERY = `
query($id:String!, $locale: String!) {
  webContent(id: $id, locale: $locale) {
    footer {
      title
      content {
        json
      }
    }
  }
}
`

export const FOOTER_APPADEMIN_QUERY = `
query($id: String!, $locale:String!) {
  appademin(id:$id, locale: $locale) {
    footer {
      title
      content {
        json
      }
    }
  }
}
`

export const PROJECTS_QUERY = `
query($locale: String!) {
  projectShowcaseCollection(locale: $locale) {
    items {
      title
      link
      description {
        json
      }
      image {
        url
        description
      }
      date
      tagsCollection {
        items {
          name
        }
      }
    }
  }
}
`

export const TAGS_QUERY = `
query($locale: String!) {
  tagsCollection(locale: $locale) {
    items {
      name
    }
  }
}
`

export const TEXT_PAGE_QUERY = `
query($slug: String!, $locale: String!) {
  textPageCollection(
    where: { slug: $slug }
    limit: 1
    locale: $locale
  ) {
    items {
      name
      content {
        json
        links {
          assets {
            block {
              title
              url
              sys {
                id
              }
            }
          }
        }
      }
    }
  }
}
`
