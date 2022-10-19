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
          }
          website
        }
      }
    }
    projectsTitle
    projectsCollection {
      items {
        title
        tags
        link
        description {
          json
        }
        image {
          url
        }
      }
    }
    oldProjectsTitle
    oldProjectsCollection {
      items {
        title
        tags
        link
        description {
          json
        }
        image {
          url
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
        }
      }
    }
    initiativesCollection {
      items {
        title
        description {
          json
        }
        linkTo
        color
        image {
          url
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
        image {
          url
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
