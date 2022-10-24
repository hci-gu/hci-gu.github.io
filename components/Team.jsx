import { Paper } from '@mantine/core'
import styled from '@emotion/styled'
import { mobile, renderRichText, tablet } from '../lib/utils/layout'
import Image from 'next/image'

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

  > h2 {
    font-size: 48px;
    line-height: 48px;
    font-weight: 800;
    margin: 0;
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
  grid-template-columns: repeat(5, auto);
  justify-items: center;
  align-items: center;

  ${tablet()} {
    grid-gap: 16px;
    grid-template-columns: repeat(3, auto);
  }
  ${mobile()} {
    grid-template-columns: repeat(2, auto);
  }
`

const PersonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > strong {
    margin-top: 8px;
    font-weight: bold;
    font-size: 18px;
  }
  > span {
    text-align: center;
    font-size: 14px;
  }
`

const Person = ({ name, role, image, website }) => {
  return (
    <a href={website}>
      <PersonContainer>
        <Image
          src={image.url}
          alt={image.description}
          width={56}
          height={56}
          style={{ borderRadius: 56 }}
        />
        <strong>{name}</strong>
        <span>{role}</span>
      </PersonContainer>
    </a>
  )
}

const Team = ({ title, subtitle, description, membersCollection }) => {
  return (
    <Container>
      <Background />
      <h2>{title}</h2>
      <span>{subtitle}</span>
      <Description>
        <Paper radius="md" withBorder p="lg">
          {renderRichText(description)}
        </Paper>
      </Description>
      <People>
        {membersCollection.items.map((p, i) => (
          <Person {...p} key={`Person_${i}`} />
        ))}
      </People>
    </Container>
  )
}

export default Team
