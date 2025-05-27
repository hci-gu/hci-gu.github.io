import { Paper } from '@mantine/core'
import styled from '@emotion/styled'
import {
  laptop,
  mobile,
  renderRichText,
  smallLaptop,
  tablet,
} from '../lib/utils/layout'
import Image from 'next/legacy/image'

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  z-index: -1;
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

const People = styled.div`
  margin: 64px auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  ${laptop()} {
    grid-template-columns: repeat(1, 1fr);
  }
`

const ProfileContainer = styled(Paper)`
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  height: 440px;

  ${laptop()} {
    height: auto;
  }

  ${mobile()} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
  }

  > p {
    width: 100%;
    height: 100%;
    margin-left: 116px;

    ${mobile()} {
      margin-left: 0;
      padding: 0 16px;
      margin-top: 64px;
    }
  }
`

const PersonContainer = styled.div`
  position: absolute;
  /* background-color: white; */
  top: -30px;
  left: 12px;
  width: 100px;
  height: 168px;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: start;
  text-align: start;

  ${mobile()} {
    left: auto;
    align-items: center;
    text-align: center;
  }

  > div {
    position: relative;
    border-radius: 56px;
    padding: 4px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: white;
    z-index: 10;
  }

  > strong {
    font-weight: bold;
    font-size: 16px;
  }
  > span {
    font-size: 13px;
  }

  ${mobile()} {
    width: 80vw;
  }
`

const BorderHider = styled.div`
  position: absolute;
  top: 40%;
  left: -5%;
  width: 110%;
  height: 65%;
  background-color: white;
  z-index: -1;
`

const Person = ({ name, role, description, image, website }) => {
  return (
    <a href={website}>
      <ProfileContainer radius="md" withBorder p="lg">
        <PersonContainer>
          <div>
            <Image
              src={image.url}
              alt={image.description}
              width={56}
              height={56}
              style={{
                borderRadius: 56,
              }}
              objectFit="cover"
            />
            <BorderHider />
          </div>
          <strong>{name}</strong>
          <span>{role}</span>
        </PersonContainer>
        {description && <p>{renderRichText(description)}</p>}
      </ProfileContainer>
    </a>
  )
}

const Team = ({ title, subtitle, description, membersCollection }) => {
  const shuffledMembers = [...membersCollection.items].sort(
    () => Math.random() - 0.5
  )
  return (
    <Container>
      <Background />
      <h2>{title}</h2>
      <People>
        {shuffledMembers.map((p, i) => (
          <Person {...p} key={`Person_${i}`} />
        ))}
      </People>
    </Container>
  )
}

export default Team
