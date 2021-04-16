import React from 'react'
import styled from 'styled-components'
import { mobile, renderRichText, tablet } from '../utils/layout'

const Container = styled.div`
  > h1 {
    font-size: 48px;
  }

  > div {
    margin-top: 50px;
  }
`

const Grid = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;

  ${mobile()} {
    grid-template-columns: 1fr;
  }
`

const Feature = styled.div`
  display: flex;
  justify-content: center;

  > img {
    width: 72px;
    height: 72px;

    ${tablet()} {
      width: 60px;
      height: 60px;
    }
  }

  > div {
    margin-left: 40px;
    display: flex;
    flex-direction: column;

    > span {
      font-size: 24px;
      font-weight: bold;
    }

    > p {
      font-size: 16px;
      color: rgba(24, 25, 31, 0.5);
    }
  }
`

const featureItem = ({ title, description }) => {
  return (
    <Feature key={`Feature_${title}`}>
      <img src="/img/assets/feature-icon.png" alt={title} />
      <div>
        <span>{title}</span>
        {renderRichText(description)}
      </div>
    </Feature>
  )
}

const Features = ({ title, featuresCollection }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <Grid>{featuresCollection.items.map((props) => featureItem(props))}</Grid>
    </Container>
  )
}

export default Features
