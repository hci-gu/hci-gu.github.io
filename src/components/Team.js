import { Card } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import React from 'react'
import styled from 'styled-components'
import { renderRichText, tablet } from '../utils/layout'

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  z-index: -1;
  background-color: #f4f5f7;
`

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 64px 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > span {
    font-size: 18px;
    margin-bottom: 24px;
  }
`

const Description = styled.div`
  width: 70%;

  p {
    margin: 24px 64px;
    font-size: 18px;

    ${tablet()} {
      margin: 8px 16px;
      font-size: 14px;
    }
  }

  ${tablet()} {
    width: 100%;
  }
`

const People = styled.div`
  width: 100%;
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;

  ${tablet()} {
    grid-gap: 16px;
    grid-template-columns: repeat(2, 1fr);
  }
`

const PersonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > span {
    text-align: center;
    font-size: 14px;

    :nth-child(2) {
      font-weight: bold;
      font-size: 18px;
    }
  }
`

const Person = ({ name, role, image }) => {
  return (
    <PersonContainer>
      <Avatar size={56} src={image.url}></Avatar>
      <span>{name}</span>
      <span>{role}</span>
    </PersonContainer>
  )
}

const Team = ({ title, subtitle, description, membersCollection }) => {
  return (
    <Container>
      <Background />
      <h2>{title}</h2>
      <span>{subtitle}</span>
      <Description>
        <Card>{renderRichText(description)}</Card>
      </Description>
      <People>
        {membersCollection.items.map((p) => (
          <Person {...p} />
        ))}
      </People>
    </Container>
  )
}

export default Team
