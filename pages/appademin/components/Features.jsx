import React from 'react'
import styled from '@emotion/styled'
import { mobile, renderRichText, tablet } from '../../../lib/utils/layout'

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

  > div {
    margin-left: 40px;
    display: flex;
    flex-direction: column;

    ${tablet()} {
      margin-left: 16px;
    }

    > span {
      font-size: 24px;
      font-weight: bold;
    }

    > p {
      font-size: 16px;
      color: rgba(24, 25, 31, 0.5);

      ${mobile()} {
        font-size: 14px;
      }
    }
  }
`

const FeatureImage = styled.div`
  width: 72px;
  height: 72px;
  padding: 18px;
  background-color: #f4f5f7;
  border-radius: 50%;

  ${tablet()} {
    width: 60px;
    height: 60px;
  }
`

const featureItem = ({ title, description, graphic }) => {
  return (
    <Feature key={`Feature_${title}`}>
      <FeatureImage>
        <img src={graphic.url} alt={title} />
      </FeatureImage>
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
