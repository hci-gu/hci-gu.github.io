import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import {
  desktop,
  laptop,
  mobile,
  renderRichText,
  smallLaptop,
  tablet,
} from '../../../utils/layout'
import { ArrowRightOutlined } from '@ant-design/icons'
import { Carousel } from 'antd'

const Container = styled.div``

const CarouselContainer = styled.div`
  margin: 32px auto;
  height: 425px;
  border-radius: 12px;
  background-color: #1b4079;
  color: white;

  ${desktop()} {
    width: 65.8vw;
  }
  ${laptop()} {
    width: 77.2vw;
  }
  ${tablet()} {
    width: 90vw;
    height: auto;
  }
  ${mobile()} {
    width: calc(100vw - 2em);
    height: auto;
  }
`

const ProjectContainer = styled.div`
  width: 100%;
  height: 425px;
  padding: 40px 48px;
  display: grid;
  grid-template-columns: 50% 50%;

  > div {
    width: 100%;
    height: 100%;
    > h3 {
      color: white;
      font-weight: 800;
      font-size: 24px;
    }

    > p {
      color: white;
      font-size: 16px;
      font-weight: 200;
    }

    > a {
      color: white;
      font-size: 20px;
      font-weight: 600;
    }
  }

  ${mobile()} {
    padding: 16px 18px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 180px;
    height: auto;
  }
`

const ImageContainer = styled.div`
  justify-self: center;
  position: relative;
  width: 100%;
  height: 100%;
  > img {
    position: absolute;
    ${({ device }) => device === 'phone' && `top: -35%;`}
    width: 110%;
    ${({ device }) => device === 'phone' && `width: 120%;`}
    height: auto;

    ${smallLaptop()} {
      ${({ device }) => device === 'phone' && `top: -15%;`}
    }
    ${tablet()} {
      ${({ device }) => device === 'phone' && `top: 0;`}
    }
    ${mobile()} {
      margin-top: 10%;
      ${({ device }) =>
        device === 'phone' &&
        `
        top: 0;
        margin-top: 0;
        height: 100%;
        object-fit: cover;
        object-position: top;
        border-bottom: 1px solid black;
      `}
      position: inherit;
      left: 5%;
      width: 90%;
    }
  }
`

const Project = ({ title, description, device, link, image }) => {
  return (
    <ProjectContainer>
      <div>
        <h3>{title}</h3>
        {renderRichText(description)}
        <a href={link} target="_blank">
          Läs mer <ArrowRightOutlined />
        </a>
      </div>
      <ImageContainer device={device}>
        <img src={image.url}></img>
      </ImageContainer>
    </ProjectContainer>
  )
}

const Projects = ({ title, projects }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <CarouselContainer>
        <Carousel dotPosition="bottom" dots={{ className: 'carousel-dots' }}>
          {projects.map((project, i) => (
            <Project key={`Project_${i}`} {...project} />
          ))}
        </Carousel>
      </CarouselContainer>
    </Container>
  )
}

export default Projects
