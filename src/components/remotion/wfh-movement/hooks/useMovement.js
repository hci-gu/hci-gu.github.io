import {
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion'

const baseSpringConfig = {
  mass: 1,
  damping: 12,
  stiffness: 100,
}

const useMovement = () => {
  const { fps, width } = useVideoConfig()
  const frame = useCurrentFrame()

  const initialMotion = interpolate(frame, [0, 120], [0, 120], {
    extrapolateRight: 'clamp',
    easing: Easing.quad,
  })
  const secondaryMotion = interpolate(frame, [0, 120, 180], [0, 0, 60], {
    extrapolateRight: 'clamp',
    easing: Easing.quad,
  })

  const rotateX = spring({
    fps,
    from: Math.PI,
    to: 0,
    frame: initialMotion,
    config: baseSpringConfig,
  })
  const depth = spring({
    fps,
    from: -2,
    to: 0,
    frame: initialMotion,
    config: baseSpringConfig,
  })
  const top = spring({
    fps,
    from: -8,
    to: 0,
    frame: initialMotion,
    config: baseSpringConfig,
  })

  const rotateX2 = spring({
    fps,
    from: 0,
    to: width < 720 ? 0 : -Math.PI / 5,
    frame: secondaryMotion,
    config: baseSpringConfig,
  })
  const left = spring({
    fps,
    from: 0,
    to: width < 720 ? 0 : 3,
    frame: secondaryMotion,
    config: baseSpringConfig,
  })
  const scaleX = spring({
    fps,
    from: -1.05,
    to: width < 720 ? 1.05 : -0.9,
    frame: secondaryMotion,
    config: baseSpringConfig,
  })
  const scale = spring({
    fps,
    from: 1,
    to: width < 720 ? 0.6 : 1,
    frame: secondaryMotion,
    config: baseSpringConfig,
  })
  const top2 = spring({
    fps,
    from: 0,
    to: width < 720 ? -1.5 : 0,
    frame: secondaryMotion,
    config: baseSpringConfig,
  })

  return {
    rotateX: rotateX + rotateX2,
    left,
    depth,
    top: top + top2,
    scaleX,
    scale,
  }
}

export default useMovement
