import React from 'react'
import styled from 'styled-components'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { tablet, mobile, laptop, smallLaptop } from '../../utils/layout'
import { useLayoutBreakpoint } from '../../utils/hooks'

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
    margin-top: 20px;
    font-size: 30px;
    font-weight: 600;
  }

  ${laptop()} {
    padding: 10% 5%;

    > h2 {
      font-size: 24px;
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

  > div {
    width: 50%;
    font-size: 1.2em;
  }

  ${laptop()} {
    padding: 10px;
    > img {
      width: 30%;
      min-width: auto;
    }
    > div > p {
      width: 75%;
      padding: 10px;
      font-size: 0.8em;
    }
  }
  ${smallLaptop()} {
    > div > p {
      font-size: 0.7em;
    }
  }
`

const ContainerMobile = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  width: 100%;

  display: flex;
  flex-direction: column;

  ${tablet()} {
    width: 75%;
  }
  ${mobile()} {
    width: 100%;
  }

  > div > p {
    margin-top: 20px;
    font-size: 12px;
  }
`

const ContentMobile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 250px;
  padding: 0 40px;

  ${({ alignLeft }) => alignLeft && `flex-direction: row-reverse;`}

  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  ${({ image }) => image && `background-image: url("${image}");`}

  > img {
    height: 45%;
  }

  > h2 {
    max-width: 40%;
    font-size: 16px;
  }
`

const SectionMobile = ({ section }) => {
  return (
    <ContainerMobile>
      <ContentMobile
        alignLeft={section.alignImageLeft}
        image={section.backgroundImage ? section.backgroundImage.url : null}
      >
        <h2>{section.title}</h2>
        <img src={section.image.url}></img>
      </ContentMobile>
      <div>{documentToReactComponents(section.description.json, {})}</div>
    </ContainerMobile>
  )
}

const Section = ({ section }) => {
  const layout = useLayoutBreakpoint()

  if (layout === 'mobile' || layout === 'tablet') {
    return <SectionMobile section={section} />
  }

  return (
    <Container
      image={section.backgroundImage ? section.backgroundImage.url : null}
    >
      <h2>{section.title}</h2>
      <Content alignLeft={section.alignImageLeft}>
        <img src={section.image.url}></img>
        <div>{documentToReactComponents(section.description.json, {})}</div>
      </Content>
    </Container>
  )
}

export default Section
