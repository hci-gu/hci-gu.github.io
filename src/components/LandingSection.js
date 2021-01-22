import React from 'react'
import styled from 'styled-components'
import { renderRichText } from '../utils/layout'
import Repositories from './Repositories'

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > h2 {
    font-size: 36px;
    font-weight: bold;
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
      {title === 'Projekt' || title === 'Projects' ? renderProjects() : null}
    </Container>
  )
}

export default LandingSection
