import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styled from '@emotion/styled'
import { tablet } from '../../lib/utils/layout'

const HideOnMobile = styled.div`
  ${tablet()} {
    visibility: hidden;
  }
`

const LCanvas = ({ children }) => {
  return (
    <HideOnMobile>
      <Canvas
        mode="concurrent"
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          top: 0,
        }}
        camera={{ fov: 60, position: [0, 0, -5] }}
        dpr={[1, 2]}
        shadows={false}
      >
        <Environment preset="city" />
        {children}
      </Canvas>
    </HideOnMobile>
  )
}

export default LCanvas
