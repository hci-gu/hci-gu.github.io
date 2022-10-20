import React from 'react'
import styled from '@emotion/styled'
import { mobile } from '../../lib/utils/layout'

const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  top: ${({ page }) => page * 100}vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ align }) => align};
  padding-left: 10vw;
  padding-right: 10vw;

  > h1 {
    margin: 0;
    font-size: 8vw;
    ${({ small }) => small && 'font-size: 4vw;'}
    ${({ align }) => align === 'center' && 'text-align: center;'}
  }
  > p {
    font-size: 2vw;
    ${({ small }) => small && 'font-size: 1vw;'}
    ${({ align }) => align === 'center' && 'text-align: center;'}
    ${({ align }) => align === 'flex-end' && 'text-align: right;'}
    width: 40vw;
    font-weight: 200;
  }

  ${mobile()} {
    left: ${({ page }) => page * 100}vw;

    align-items: center;
    padding-left: 5vw;
    padding-right: 5vw;

    top: 75vh;

    border: 1px solid black;
    height: 30vh;
    z-index: 100;
  }
`

const Page = ({ page, title, text, align = 'flex-start', small = false }) => {
  return (
    <Container page={page} align={align} small={small}>
      <h1>{title}</h1>
      <p>{text}</p>
    </Container>
  )
}

export default Page
