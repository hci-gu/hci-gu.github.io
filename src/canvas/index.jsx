import React, { Suspense } from 'react'

import { Billboard, Html, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styled from 'styled-components'
import Phone from './components/Phone'

const Root = styled.div`
  position: relative;
  width: 100%;
  height: 800px;

  > div {
    position: absolute;
    left: -150px;
    top: -100px;
    width: 150%;
    height: 100%;
  }
`

const CanvasRoot = () => {
  return (
    <Root>
      <div>
        <Canvas camera={{ position: [1.5, 1.5, 1.5] }} shadows>
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 3.2}
            minPolarAngle={Math.PI / 3.2}
          />
          <ambientLight intensity={5} />
          <spotLight
            intensity={1.5}
            angle={0.1}
            penumbra={2}
            position={[10, 15, 10]}
            castShadow
          />
          {/* <Html transform position={[0, -1, 0]} rotation={[0, Math.PI / 4, 0]}>
            <h2>WFH Movement</h2>
          </Html> */}
          <Suspense fallback={null}>
            <Phone></Phone>
          </Suspense>
        </Canvas>
      </div>
    </Root>
  )
}

export default CanvasRoot
