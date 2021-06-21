import React from 'react'
import styled from 'styled-components'
import { renderRichText } from '../utils/layout'
import Repositories from './Repositories'

const Container = styled.div`
  margin: 25px auto;
  display: flex;
  flex-direction: column;

  > h2 {
    font-size: 48px;
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
