import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding-bottom: 100px;
`

const App = ({ children }) => {
  return <Container>{children}</Container>
}

export default App
