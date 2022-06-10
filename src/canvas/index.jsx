import React, { Suspense } from 'react'
import { Button } from 'antd'
import {
  Billboard,
  Html,
  OrbitControls,
  ContactShadows,
  Stage,
  softShadows,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styled from 'styled-components'
import Phone from './components/Phone'
import { MeshBasicMaterial } from 'three'
import { isSize, smallLaptop, tablet } from '../utils/layout'

softShadows()

const Root = styled.div`
  position: relative;
  width: 100%;
  height: 800px;

  > div {
    position: absolute;
    /* left: -100px; */
    width: 120%;
    height: 100%;
  }

  ${tablet()} {
    display: none;
  }
`

const CanvasHtml = styled.div`
  transform: scale(0.4);

  * {
    user-select: none;
  }

  ${smallLaptop()} {
    display: none;
  }
`

const CTAButton = styled(Button)`
  background-color: rgba(255, 255, 255, 0.75);
  border: 1px solid #1b4079;
  color: #1b4079;
  width: 164px;
  height: 48px;
  font-size: 12px;
  border-radius: 8px;

  :hover {
    color: #163564;
    border: 1px solid #163564;
  }
`

const billboardOffsetForScreen = () => {
  if (isSize('laptopMedium')) return 1
  else if (isSize('largeLaptop')) return 2
  return 2.5
}

const CanvasRoot = ({ buttonText = '' }) => {
  return (
    <Root>
      <div>
        <Canvas
          camera={{ fov: 60, position: [-3.5, 3, -4.5] }}
          dpr={[1, 2]}
          shadows={false}
        >
          <OrbitControls
            position={[0, 0, 0]}
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 3.2}
            minPolarAngle={Math.PI / 3.2}
          />
          <Billboard material={<MeshBasicMaterial />}>
            <Html transform position={[billboardOffsetForScreen(), -1.5, 0]}>
              <CanvasHtml>
                <a href="/wfh-movement">
                  <CTAButton>{buttonText}</CTAButton>
                </a>
              </CanvasHtml>
            </Html>
          </Billboard>
          <Suspense fallback={null}>
            <Stage
              adjustCamera={false}
              environment="studio"
              preset="rembrandt"
              intensity={0.75}
              contactShadow={{
                position: [0, -1.25, 0],
                opacity: 0.3,
                blur: 1.25,
              }}
            >
              <Phone />
            </Stage>
          </Suspense>
        </Canvas>
      </div>
    </Root>
  )
}

export default CanvasRoot
