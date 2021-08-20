import React from 'react'
import styled from 'styled-components'
import { mobile, renderRichText } from '../utils/layout'
import Repositories from './Repositories'

const Container = styled.div`
  margin: 25px auto;
  display: flex;
  flex-direction: column;

  > h2 {
    font-weight: 800;
    font-size: 40px;
    line-height: 54px;
    color: #18191f;

    ${mobile()} {
      font-size: 36px;
      line-height: 50px;
      text-align: center;
    }
  }
`

const renderProjects = () => {
  return <Repositories />
}

const LandingSection = ({ title, description }) => {
  return (
    <Container>
      <h2>{title}</h2>
      {renderRichText(description)}
      {/* <Team > */}
    </Container>
  )
}

export default LandingSection
