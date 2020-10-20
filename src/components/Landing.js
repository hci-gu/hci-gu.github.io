import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { mobile, middleContent } from '../utils/layout'
import Link from './Link'

const Container = styled.div`
  /* border-bottom: 2px solid black; */
  overflow: hidden;

  ${mobile()} {
    padding-top: 0;
  }
`

const Content = styled.div`
  ${middleContent()}

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: space-between;

  ${mobile()} {
    grid-template-columns: 1fr;
  }
`

const Title = styled.div`
  grid-column: 1 / -1;
  max-width: 1400px;
  font-size: 56px;
  line-height: 110px;

  font-weight: 900;
  color: #22223b;

  > h1 {
    margin: 0;
    padding: 0;
  }

  ${mobile()} {
    font-size: 1rem;
    line-height: 2rem;
  }
`

const Description = styled.div`
  width: 600px;
  padding: 20px 0;
  color: rgb(25, 25, 25);
  text-align: justify;

  ${mobile()} {
    width: 100%;
  }
`

const Landing = () => {
  return (
    <>
      <Helmet>
        <title>Division of Human-Computer Interaction</title>
        <meta name="title" content="Division of Human-Computer Interaction" />
        <meta
          name="description"
          content="Division of Human-Computer Interaction at Gothenburg University"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="hci-gu.github.io" />
        <meta
          property="og:title"
          content="Division of Human-Computer Interaction"
        />
        <meta
          property="og:description"
          content="Division of Human-Computer Interaction at Gothenburg University"
        />
        <meta
          property="og:image"
          content="https://hci-gu.github.io/img/share.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://hci-gu.github.io/wfh-movement/"
        />
        <meta property="twitter:title" content="WFH movement" />
        <meta
          property="twitter:description"
          content="Compare your movement patterns before and after working from home."
        />
        <meta
          property="twitter:image"
          content="https://hci-gu.github.io/img/wfh-movement/share.png"
        />
      </Helmet>
      <Container>
        <Content>
          <Title>
            <h1>Division of Human-Computer Interaction</h1>
          </Title>
          <Description>
            <p>
              The purpose of our work is to contribute to a sustainable and
              serene way of living with technology. In a world where IT is
              constantly present, it is important to understand this presence
              and how it affects us. Human-Computer Interaction (HCI) has often
              focused on developing new artefacts to visualize and design a
              future world of information technology. Now we already live with
              technology around us, so our role as researchers and developers is
              instead to enhance and embellish our ways of living with
              technology. Because even though we are in the middle of
              digitalization and have almost endless possibilities of doing
              things with the help of IT, there is still a lot that does not
              work as we wish, and some that even makes it more difficult and
              causes stress. We want to understand and influence this
              development.
              <br></br>
              <br></br>
              The division started in the summer of 2019 and is currently
              expanding, focusing on becoming an important player within
              research, education, and collaboration at the University of
              Gothenburg.
              <br></br>
              <br></br>
              <Link href="https://www.gu.se/en/applied-information-technology/division-of-human-computer-interaction">
                Read more about the division
              </Link>
              <br></br>
              <br></br>
              We are part of the{' '}
              <Link href="https://www.gu.se/en/applied-information-technology">
                Department of Applied IT
              </Link>
              , University of Gothenburg.
            </p>
          </Description>
        </Content>
      </Container>
    </>
  )
}

export default Landing
