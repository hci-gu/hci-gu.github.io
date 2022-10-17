import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

const LCanvas = ({ children }) => {
  return (
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
  )
}

export default LCanvas
