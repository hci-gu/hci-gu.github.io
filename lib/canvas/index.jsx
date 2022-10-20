import React, { Suspense } from 'react'
import { Button } from 'antd'
import {
  Billboard,
  Html,
  OrbitControls,
  ContactShadows,
  Stage,
  softShadows,
  Environment,
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
  border: 2px solid #d5454f;
  color: #d5454f;
  width: 164px;
  height: 48px;
  font-size: 14px;
  border-radius: 8px;

  :hover {
    color: #d5454f;
    border: 1px solid #d5454f;
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
          camera={{ fov: 60, position: [-1, 3, -4.5] }}
          dpr={[1, 2]}
          shadows={false}
        >
          <Environment preset="city" />
          <Suspense fallback={null}>
            <Phone />
          </Suspense>
        </Canvas>
      </div>
    </Root>
  )
}

export default CanvasRoot
