import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  height: 44px;
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  font-size: 24px;

  > a {
    width: 80px;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    color: black;

    border-bottom: 1px solid black;

    margin-left: 100px;
    :nth-child(1) {
      margin-left: 0;
    }

    :hover {
      opacity: 0.75;
    }
  }
`

const Menu = () => {
  return (
    <Container>
      <Content>
        <Link to="/">Home</Link>
        <a
          href="https://ait.gu.se/english/hci"
          target="_blank"
          rel="noopener noreferrer"
        >
          About
        </a>
        <a href="mailto:alexandra.weilenmann@ait.gu.se">Contact</a>
      </Content>
    </Container>
  )
}

export default Menu
