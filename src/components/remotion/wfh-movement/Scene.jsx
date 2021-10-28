import {
  ContactShadows,
  OrbitControls,
  TrackballControls,
  TransformControls,
} from '@react-three/drei'
import { ThreeCanvas } from '@remotion/three'
import React, { Suspense, useEffect, useState } from 'react'
import {
  AbsoluteFill,
  continueRender,
  delayRender,
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion'
import styled from 'styled-components'
import { mobile, tablet } from '../../../utils/layout'
import Phone from './Phone'

const TextContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 10vh;
  width: 66.7%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins';

  > h1 {
    font-size: 48px;
    line-height: 54px;
    text-align: center;
    color: #0f0f0f;
  }
  > h2 {
    font-size: 28px;
    text-align: center;
    color: #0f0f0f;
  }

  > a > img {
    margin-top: 10px;
    height: 60px;
  }

  ${tablet()} {
    width: 100%;
    bottom: 35vh;
    > h1 {
      font-size: 36px;
      line-height: 40px;
    }
    > h2 {
      font-size: 20px;
      font-weight: 300;
    }
  }
`

export const Text = () => {
  const frame = useCurrentFrame()
  const opacity = interpolate(frame, [0, 160, 220], [0, 0, 1])
  const marginBottom = interpolate(frame, [0, 160, 220], [0, 0, 200], {
    extrapolateRight: 'clamp',
    easing: Easing.quad,
  })
  const springMargin = spring({
    fps: 60,
    from: 0,
    to: 125,
    frame: marginBottom,
    config: {
      damping: 100,
    },
  })

  return (
    <TextContainer
      style={{
        opacity,
        marginBottom: springMargin,
      }}
    >
      <h1>
        Testa själv med appen<br></br> <strong>WFH Movement</strong>
      </h1>
      <h2>Och bidra till forskning</h2>
      <a
        href="https://apps.apple.com/us/app/id1518224904"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/img/assets/appstore-badge.png" alt="Appstore button"></img>
      </a>
    </TextContainer>
  )
}

export const SecondaryText = () => {}

export const Scene = () => {
  const { width, height } = useVideoConfig()
  const [handle] = useState(() => delayRender())

  useEffect(() => {
    setTimeout(() => {
      continueRender(handle)
    }, 1000)
  }, [])

  return (
    <AbsoluteFill>
      <ThreeCanvas
        width={width}
        height={height}
        color="white"
        antialias
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.6} />
        {/* <directionalLight position={[-2, 1, 0]} intensity={0.6} />
        <pointLight position={[-15, 15, 0]} intensity={0.15} /> */}
        <Phone />
        <ContactShadows
          rotation-x={Math.PI / 2}
          position={[0, -2.5, 0]}
          opacity={0.8}
          width={30}
          height={30}
          blur={1.25}
          far={10}
        />
      </ThreeCanvas>
      <Text />
    </AbsoluteFill>
  )
}

export default Scene
