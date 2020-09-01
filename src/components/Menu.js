import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { mobile, middleContent } from '../utils/layout'

const MENU_HEIGHT = 64

const Container = styled.div`
  height: ${MENU_HEIGHT * 2}px;

  ${mobile()} {
    height: ${MENU_HEIGHT}px;
  }

  margin-bottom: 10px;
`

const Content = styled.div`
  ${middleContent({ padding: false })}
  display: flex;
  font-size: 24px;
  line-height: ${MENU_HEIGHT}px;

  > a {
    width: 80px;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    color: black;

    margin-left: 100px;
    :nth-child(1) {
      margin-left: 0;
    }

    :hover {
      opacity: 0.75;
    }
  }

  ${mobile()} {
    justify-content: space-around;

    > a {
      margin-left: 0px;
    }
  }
`

const Logo = styled.div`
  width: ${MENU_HEIGHT * 2}px;
  height: ${MENU_HEIGHT * 2}px;

  > img {
    height: 100%;
  }

  ${mobile()} {
    width: ${MENU_HEIGHT}px;
    height: ${MENU_HEIGHT}px;
  }
`

const Menu = ({ links = true }) => {
  return (
    <Container>
      <Content>
        <Logo>
          <img
            src="/img/gu_logo.jpg"
            alt="Gothenburg university logotype"
          ></img>
        </Logo>
        {links && <Link to="/">Home</Link>}
        {links && (
          <a
            href="https://ait.gu.se/english/hci"
            target="_blank"
            rel="noopener noreferrer"
          >
            About
          </a>
        )}
        {links && <a href="mailto:alexandra.weilenmann@ait.gu.se">Contact</a>}
      </Content>
    </Container>
  )
}

export default Menu
