import React from 'react'
import styled from '@emotion/styled'
import { tablet } from '../../lib/utils/layout'

const Root = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  user-select: none;
  pointer-events: none;
  overflow: hidden;
`

const Container = styled.div`
  position: absolute;
  left: 0;
  top: -25vh;
  width: 100vw;
  height: 100vh;
  z-index: -1;

  transform: skew(0deg, -6deg);

  background-color: rgba(242, 247, 255, 0.6);
  opacity: 0.9;

  ${tablet()} {
    width: 400vw;
    height: 80vh;
  }
`

const BoxContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const Box = styled.div`
  width: 420px;
  height: 60px;
  position: absolute;

  ${tablet()} {
    width: 200px;
  }
`

const Blob = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  position: absolute;
  z-index: -1;
  filter: blur(30px);

  ${tablet()} {
    width: 100px;
    height: 100px;
  }
`

const HeroBackground = () => {
  return (
    <Root>
      <Container>
        <BoxContainer>
          <Box
            style={{
              left: -150,
              bottom: 0,
              backgroundColor: '#8fad88',
              opacity: 0.3,
            }}
          />
          <Box style={{ left: 0, bottom: 60, backgroundColor: '#6297A7' }} />

          <Box style={{ right: -225, bottom: 0, backgroundColor: '#1B4079' }} />
          <Box
            style={{
              right: 0,
              bottom: 60,
              backgroundColor: '#CBDF90',
              width: 600,
            }}
          />
          <Box
            style={{
              right: 20,
              bottom: 120,
              backgroundColor: '#8FAD88',
              opacity: 0.5,
            }}
          />
        </BoxContainer>
      </Container>
      <Blob
        style={{
          right: -100,
          top: -100,
          backgroundColor: 'rgb(27, 64, 121, 0.4)',
        }}
      />

      <Blob
        style={{
          width: 168,
          height: 168,
          right: '25%',
          top: '50%',
          backgroundColor: 'rgb(98, 151, 167, 0.4)',
        }}
      />
    </Root>
  )
}

export default HeroBackground
