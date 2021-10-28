import React, { useEffect, useRef, useState } from 'react'
import { Player } from '@remotion/player'
import styled from 'styled-components'
import RemotionVideo from './RemotionVideo'
import { useLayoutBreakpoint, useViewPort } from '../../../utils/hooks'

const Container = styled.div``

const widthForKey = (key, width) => {
  switch (key) {
    case 'mobile':
    case 'tablet':
      return Math.floor(width * 0.9)
    case 'laptop':
    case 'smallLaptop':
      return 900
    default:
      return 1200
  }
}

const WFHMovementVideo = () => {
  const ref = useRef()
  const [showControls, setShowControls] = useState(false)

  const key = useLayoutBreakpoint()
  const { width } = useViewPort()
  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('timeupdate', (e) => {
        if (e.detail.frame >= 900) {
          ref.current.pause()
          setShowControls(true)
        }
      })
    }
  }, [])

  return (
    <Container>
      <Player
        ref={ref}
        controls={showControls}
        style={{ margin: '0 auto' }}
        autoPlay
        durationInFrames={16 * 60}
        compositionWidth={widthForKey(key, width)}
        compositionHeight={720}
        fps={60}
        component={RemotionVideo}
      />
    </Container>
  )
}

export default WFHMovementVideo
