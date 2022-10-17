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
