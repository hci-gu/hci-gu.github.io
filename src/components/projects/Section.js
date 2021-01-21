import React from 'react'
import styled from 'styled-components'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { mobile, tablet, laptop } from '../../utils/layout'

const Container = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  height: 600px;

  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  ${({ image }) => image && `background-image: url("${image}");`}

  padding: 5% 10%;

  > h2 {
    font-size: 30px;
    font-weight: 600;
  }

  ${laptop()} {
    padding: 10% 5%;

    > h2 {
      font-size: 24px;
    }
  }

  ${tablet()} {
    padding: 0;
    max-width: 100%;
    height: auto;
    background-image: none;

    > h2 {
      text-align: center;
    }
  }
`

const Content = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  ${({ alignLeft }) => !alignLeft && `flex-direction: row-reverse;`}

  > img {
    width: 40%;
    min-width: 300px;
  }

  > p {
    width: 50%;
    font-size: 1.2em;
  }

  ${laptop()} {
    padding: 10px;
    > img {
      width: 30%;
    }
    > p {
      width: 75%;
      padding: 10px;
      font-size: 1em;
    }
  }

  ${tablet()} {
    flex-direction: column;

    > img {
      width: 50%;
    }
    > p {
      width: 100%;
    }
  }
`

const Section = ({ section }) => {
  return (
    <Container
      image={section.backgroundImage ? section.backgroundImage.url : null}
    >
      <h2>{section.title}</h2>
      <Content alignLeft={section.alignImageLeft}>
        <img src={section.image.url}></img>
        <p>{documentToReactComponents(section.description.json, {})}</p>
      </Content>
    </Container>
  )
}

export default Section
