import React from 'react'
import styled from 'styled-components'
import Menu from './components/Menu'

const Container = styled.div`
  padding-bottom: 100px;
`

const App = ({ children }) => {
  return <Container>{children}</Container>
}

export default App
