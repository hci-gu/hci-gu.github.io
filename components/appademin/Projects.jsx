import styled from '@emotion/styled'
import {
  desktop,
  laptop,
  mobile,
  renderRichText,
  tablet,
} from '../../lib/utils/layout'
import { ArrowRightOutlined } from '@ant-design/icons'
import { Carousel } from '@mantine/carousel'
import Image from 'next/future/image'

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
  grid-template-columns: 60% 40%;

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
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    width: 90%;
    height: auto;

    ${mobile()} {
      ${({ device }) =>
        device === 'phone' &&
        `
        top: 0;
        margin-top: 0;
        height: 90%;
        object-fit: cover;
        object-position: top;
        border-bottom: 1px solid black;
      `}
      ${({ device }) =>
        device === 'laptop' &&
        `
        width: auto;
        height: 80%;
      `}
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
        <Image
          src={image.url}
          alt={image.description}
          width={250}
          height={250}
        />
      </ImageContainer>
    </ProjectContainer>
  )
}

const Projects = ({ title, projects }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <CarouselContainer>
        <Carousel withIndicators loop withControls={false}>
          {projects?.map((project, i) => (
            <Carousel.Slide key={`Project_${i}`}>
              <Project {...project} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </CarouselContainer>
    </Container>
  )
}

export default Projects
