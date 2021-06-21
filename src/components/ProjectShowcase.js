import React from 'react'
import styled from 'styled-components'
import { mobile, smallLaptop, tablet } from '../utils/layout'

const Container = styled.div`
  width: 540px;
  height: 460px;

  display: flex;
  flex-direction: column;

  :hover {
    text-decoration: underline;
  }

  ${smallLaptop()} {
    width: 100%;
    height: auto;
  }
`

const Image = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  height: 380px;
  background-color: ${({ color }) => `${color}`};
  border-radius: 8px;

  ${smallLaptop()} {
    height: 300px;
  }
  ${tablet()} {
    height: 480px;
  }
  ${mobile()} {
    height: 380px;
  }

  > div {
    left: 25%;
    width: 50%;
    height: 80%;
    ${({ platform }) =>
      platform === 'Laptop' &&
      `
      right: 0;
      top: 10%;
      left: auto;
      width: 82.5%;

      ${smallLaptop()} {
        width: 75%;
      }
      ${tablet()} {
        width: 66%;
      }
    `};

    position: absolute;
    bottom: 0;
    background-image: ${({ platform }) =>
      `url('/img/assets/${
        platform === 'Mobile' ? 'pixel-phone' : 'macbook'
      }.png')`};
    background-size: cover;
    overflow-y: hidden;

    > img {
      position: absolute;
      box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.5);
      border-radius: 16px;
      left: 6%;
      top: 10%;
      width: 88%;

      ${({ platform }) =>
        platform === 'Laptop' &&
        `
        border-radius: 0px;
        left: 14%;
        top: 5%;
        width: 110%;

        ${smallLaptop()} {
          left: 16%;
          width: calc(105% + 30px);
        }
    `};
    }
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

const ProjectShowcase = ({ title, link, image, platform, tags, color }) => {
  return (
    <a href={link}>
      <Container>
        <Image color={color} platform={platform}>
          <div>
            <img src={image.url}></img>
          </div>
        </Image>
        <Text>
          <h3>{title}</h3>
          <span>{tags.join(', ')}</span>
        </Text>
      </Container>
    </a>
  )
}

export default ProjectShowcase
