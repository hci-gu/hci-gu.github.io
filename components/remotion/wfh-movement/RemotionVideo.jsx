import React from 'react'
import { AbsoluteFill, Composition, Sequence, useVideoConfig } from 'remotion'
import styled from 'styled-components'
import { tablet } from '../../../utils/layout'
import LineChartAnimatedShort from './AnimatedChart'
import { Scene } from './Scene'

const Root = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 2rem;

  > h1 {
    margin: 0;
  }

  ${tablet()} {
    padding: 0;
  }
`

const DownloadTheApp = () => {
  const { fps } = useVideoConfig()
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={12 * fps}>
        <Root />
      </Sequence>
      <Sequence from={0 * fps} durationInFrames={5 * fps}>
        <LineChartAnimatedShort />
      </Sequence>
      <Sequence from={5 * fps} durationInFrames={12 * fps}>
        <Scene />
      </Sequence>
    </AbsoluteFill>
  )
}

const RemotionVideo = () => {
  return <DownloadTheApp />
}

export default RemotionVideo
