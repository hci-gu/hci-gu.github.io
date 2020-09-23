import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  /* padding-bottom: 100px; */
`

const TempEmail = styled.div`
  position: fixed;
  background-color: #f5853f;
  padding: 40px;
  bottom: 40px;
  left: 40px;

  font-size: 20px;
  border-radius: 10px;

  > a {
    color: black;
    font-weight: bold;
  }

  z-index: 99999;
`

const App = ({ children }) => {
  return (
    <Container>
      {children}
      <TempEmail>
        The email at Gothenburg University is currently down.<br></br> Please
        reach out to{' '}
        <a href="mailto:me@sebastianandreasson.com">
          me@sebastianandreasson.com
        </a>{' '}
        if you need to reach us.
      </TempEmail>
    </Container>
  )
}

export default App
