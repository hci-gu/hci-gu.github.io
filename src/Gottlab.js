import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;

  font-family: 'Poppins', sans-serif;
`

const Text = styled.div`
  margin: 0 auto;
  width: 60%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  color: white;

  > h1 {
    font-size: 90px;
    letter-spacing: 8px;
    font-weight: 700;
  }
  > h2 {
    font-size: 24px;
    font-weight: 100;
  }
`

const Background = styled.div`
  position: absolute;
  width: 110%;
  height: 110%;
  z-index: -1;
  background-position-x: -10%;
  background-position-y: -10%;
  background-image: url('/img/gbg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  /* Add the blur effect */
  filter: blur(8px);

  > div {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
  }
`

const Gottlab = ({ children }) => {
  return (
    <Container>
      <Background>
        <div></div>
      </Background>
      <Text>
        <h1>gôttlab</h1>
        <h2>
          A creative space from the division of Human-Computer Interaction
        </h2>
      </Text>
    </Container>
  )
}

export default Gottlab
