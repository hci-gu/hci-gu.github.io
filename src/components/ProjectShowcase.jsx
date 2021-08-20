import React from 'react'
import styled from 'styled-components'
import { mobile, smallLaptop, tablet } from '../utils/layout'

const Container = styled.div`
  width: 540px;
  height: 460px;

  display: flex;
  flex-direction: column;

  > img {
    width: 100%;
    height: auto;
  }

  :hover {
    text-decoration: underline;
  }

  ${smallLaptop()} {
    width: 100%;
    height: auto;
  }
`

const Text = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  > h3 {
    font-size: 24px;
    font-weight: 600;
    margin: 0;
  }

  > span {
    margin-top: 5px;
    font-size: 16px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.5);
  }
`

const ProjectShowcase = ({ title, link, image, tags }) => {
  return (
    <a href={link}>
      <Container>
        <img src={image.url}></img>
        <Text>
          <h3>{title}</h3>
          <span>{tags.join(', ')}</span>
        </Text>
      </Container>
    </a>
  )
}

export default ProjectShowcase
