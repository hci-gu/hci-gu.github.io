import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;

  ${({ align }) => align === 'right' && `direction: rtl;`}
`

const ImageContainer = styled.div``

const Bubble = styled.div`
  position: relative;
  background-color: #d5fafc;
  height: 100%;
  min-height: 400px;
  width: 400px;

  border-radius: 50%;
  display: flex;
  justify-content: flex-end;

  > img {
    margin-top: 20px;
    margin-right: 20px;
    width: 70%;
    height: 80%;
    right: 0;
    border-radius: 40px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4));
  }
`

const TextContainer = styled.div`
  ${({ align }) => align === 'right' && `direction: ltr;`}
  > span {
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height, or 129% */

    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-feature-settings: 'liga' off;

    /* Secondary */

    color: #4d7c8a;
  }

  > h2 {
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
    line-height: 54px;
    /* identical to box height, or 135% */

    font-feature-settings: 'liga' off;

    /* Text / Gray 900 */

    color: #18191f;
  }

  > p {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 32px;
    /* or 178% */

    font-feature-settings: 'liga' off;

    /* Text / Gray 900 */

    color: #18191f;
  }
  > a {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    /* identical to box height, or 150% */

    font-feature-settings: 'liga' off;

    /* Primary */

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

const Initiative = ({ title, align = 'left' }) => {
  return (
    <Container align={align}>
      <ImageContainer>
        <Bubble>
          <img src="https://images.unsplash.com/photo-1603015269169-225cb700e29a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjg1fHx1c2luZyUyMGFwcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        </Bubble>
      </ImageContainer>
      <TextContainer align={align}>
        <span>Initiative</span>
        <h2>{title}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
          diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem
          egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non.
          Non commodo volutpat, pharetra, vel.
        </p>
        <a>
          Read more <Arrow />
        </a>
      </TextContainer>
    </Container>
  )
}

export default Initiative
