import React from 'react'
import styled from 'styled-components'
import { renderRichText } from '../utils/layout'

const Container = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;

  ${({ align }) => align === 'right' && `direction: rtl;`}
`

const ImageContainer = styled.div``

const Bubble = styled.div`
  position: relative;
  background-color: ${({ color }) => color};
  height: 100%;
  min-height: 400px;
  width: 400px;

  border-radius: 50%;
  display: flex;
  justify-content: flex-end;

  > img {
    margin-top: 20px;
    margin-right: 20px;
    width: auto;
    max-width: 90%;
    max-height: 400px;
    right: 0;
    border-radius: 40px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4));
  }
`

const TextContainer = styled.div`
  ${({ align }) => align === 'right' && `direction: ltr;`}
  > span {
    font-weight: 800;
    font-size: 14px;
    line-height: 18px;

    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;

    color: #4d7c8a;
  }

  > h2 {
    font-weight: 800;
    font-size: 40px;
    line-height: 54px;

    color: #18191f;
  }

  > p {
    font-size: 18px;
    line-height: 32px;

    color: #18191f;
  }
  > a {
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;

    color: #1b4079;

    display: flex;
    align-items: center;
    > svg {
      margin-left: 10px;
    }
  }
`

const Arrow = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.2931 6.70711C14.9026 6.31658 14.9026 5.68342 15.2931 5.29289C15.6837 4.90237 16.3168 4.90237 16.7074 5.29289L22.7073 11.2929C23.0979 11.6834 23.0979 12.3166 22.7073 12.7071L16.7074 18.7071C16.3168 19.0976 15.6837 19.0976 15.2931 18.7071C14.9026 18.3166 14.9026 17.6834 15.2931 17.2929L19.586 13H2.01103C1.45265 13 1 12.5523 1 12C1 11.4477 1.45265 11 2.01103 11H19.586L15.2931 6.70711Z"
      fill="#1B4079"
    />
  </svg>
)

const Initiative = ({
  title,
  align = 'left',
  linkTo,
  color,
  image,
  description,
}) => {
  return (
    <Container align={align}>
      <ImageContainer>
        <Bubble color={color}>
          <img src={image.url} />
        </Bubble>
      </ImageContainer>
      <TextContainer align={align}>
        <span>Initiativ</span>
        <h2>{title}</h2>
        <p>{renderRichText(description)}</p>
        <a href={linkTo}>
          Read more <Arrow />
        </a>
      </TextContainer>
    </Container>
  )
}

export default Initiative