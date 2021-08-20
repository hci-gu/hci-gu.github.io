import React, { Suspense } from 'react'
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
import AppDownload from '../components/projects/AppDownload'
import { tablet } from '../utils/layout'

softShadows()

const Root = styled.div`
  position: relative;
  width: 100%;
  height: 800px;

  > div {
    position: absolute;
    left: -100px;
    width: 150%;
    height: 100%;
  }

  ${tablet()} {
    display: none;
  }
`

const CanvasHtml = styled.div`
  transform: scale(0.4);
`

const CanvasRoot = () => {
  return (
    <Root>
      <div>
        <Canvas
          camera={{ fov: 60, position: [-3.5, 3, -4.5] }}
          dpr={[1, 2]}
          color="#000000"
        >
          {/* <color attach="background" args={['#101010']} /> */}
          <OrbitControls
            position={[0, 0, 0]}
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 3.2}
            minPolarAngle={Math.PI / 3.2}
          />
          <Billboard material={<MeshBasicMaterial />}>
            <Html transform position={[2.5, -1, 0]}>
              <CanvasHtml>
                <AppDownload
                  title={'Ladda ner appen!'}
                  googlePlay="https://play.google.com/store/apps/details?id=com.wfhmovement.app"
                  appstore="https://apps.apple.com/us/app/id1518224904"
                />
              </CanvasHtml>
            </Html>
          </Billboard>
          {/* <Sphere args={[2, 25, 25]} position={[1, 2.5, 5]}>
            <meshBasicMaterial attach="material" color="#1b4079" />
          </Sphere> */}
          <Suspense fallback={null}>
            <Stage
              adjustCamera={false}
              environment="studio"
              preset="rembrandt"
              intensity={0.5}
              contactShadowOpacity={0}
              shadowBias={-0.0015}
            >
              <Phone />
            </Stage>
          </Suspense>
          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -2.5, 0]}
            opacity={0.4}
            width={20}
            height={30}
            blur={1.25}
            far={10}
          />
        </Canvas>
      </div>
    </Root>
  )
}

export default CanvasRoot
