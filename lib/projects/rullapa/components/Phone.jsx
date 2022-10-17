import React, { forwardRef } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import styled from 'styled-components'
import { Html } from './Html'
import { getIframeUrlForPage } from '../utils'

const IframeWrapper = styled.div`
  border-radius: 36px;
  backgroundcolor: white;
  width: 328px;
  height: 711px;
  background-color: #fff;
  overflow: hidden;
`

function Phone(props, ref) {
  const iframeRef = useRef()
  const scroll = useScroll()
  const phoneRef = useRef()

  useFrame(() => {
    const page = Math.floor(scroll.offset * scroll.pages)
    const nextPage = getIframeUrlForPage(page)
    if (iframeRef.current.src !== nextPage) {
      iframeRef.current.src = nextPage
    }
  })

  const { nodes, materials } = useGLTF('/models/iphone/model.gltf')

  return (
    <group ref={ref} {...props} dispose={null} scale={2.4}>
      <group position={[-0.18, 1.56, 0]} ref={phoneRef}>
        <mesh
          geometry={nodes.Circle038.geometry}
          material={nodes.Circle038.material}
        />
        <mesh
          geometry={nodes.Circle038_1.geometry}
          material={materials['Front.001']}
        />
        <mesh
          geometry={nodes.Circle038_2.geometry}
          material={nodes.Circle038_2.material}
        />
        <mesh
          geometry={nodes.Circle038_3.geometry}
          material={materials['BackGrey.001']}
        />
        <mesh
          geometry={nodes.Circle038_4.geometry}
          material={materials['Rubber.001']}
        />
        <mesh
          geometry={nodes.AntennaLineTop001.geometry}
          material={nodes.AntennaLineTop001.material}
          position={[0, 0.02, 0]}
        />
        <mesh
          geometry={nodes.AntennaLineBottom001.geometry}
          material={nodes.AntennaLineBottom001.material}
          position={[0, -2.68, 0]}
        />
        <mesh
          geometry={nodes.AppleLogo001.geometry}
          material={materials['AppleLogo.001']}
          position={[0.17, 0.52, -0.08]}
        />
        <mesh
          geometry={nodes.BackCameraBottomLens001.geometry}
          material={nodes.BackCameraBottomLens001.material}
          position={[0.7, 0.88, -0.08]}
        />
        <mesh
          geometry={nodes.BackCameraTopLens001.geometry}
          material={nodes.BackCameraTopLens001.material}
          position={[0.7, 1.18, -0.08]}
        />
        <mesh
          geometry={nodes.BackCameraBottomGreyRing001.geometry}
          material={nodes.BackCameraBottomGreyRing001.material}
          position={[0.7, 0.88, -0.09]}
        />
        <mesh
          geometry={nodes.BackCameraP1001.geometry}
          material={materials['Black.015']}
          position={[0.7, 1.03, -0.09]}
        />
        <mesh
          geometry={nodes.FrontSpeakerBG001.geometry}
          material={materials['FrontSpeaker.001']}
          position={[0.16, 1.32, 0.08]}
        />
        <mesh
          geometry={nodes.FrontCameraContainer001.geometry}
          material={materials['FrontCameraBlack.002']}
          position={[0.34, 1.32, 0.08]}
        />
        <mesh
          geometry={nodes.CameraBump001.geometry}
          material={nodes.CameraBump001.material}
          position={[0.7, 1.04, -0.08]}
        />
        <mesh
          geometry={nodes.BackCameraTopGreyRing001.geometry}
          material={nodes.BackCameraTopGreyRing001.material}
          position={[0.7, 1.18, -0.09]}
        />
        <mesh
          geometry={nodes.iPhoneLogo001.geometry}
          material={materials['iPhoneLogo.001']}
          position={[0.2, -1.18, -0.08]}
        />
        <mesh
          geometry={nodes.MuteSwitch001.geometry}
          material={nodes.MuteSwitch001.material}
          position={[-0.65, 0.92, 0.01]}
        />
        <group position={[0.97, 0.56, 0]}>
          <mesh
            geometry={nodes.Circle032.geometry}
            material={nodes.Circle032.material}
          />
          <mesh
            geometry={nodes.Circle032_1.geometry}
            material={nodes.Circle032_1.material}
          />
        </group>
        <group position={[0.98, -0.04, 0]}>
          <mesh
            geometry={nodes.Circle031.geometry}
            material={materials['Black.014']}
          />
          <mesh
            geometry={nodes.Circle031_1.geometry}
            material={nodes.Circle031_1.material}
          />
        </group>
        <mesh
          geometry={nodes.VolumeButtons001.geometry}
          material={nodes.VolumeButtons001.material}
          position={[-0.66, 0.21, 0]}
        />
        <Html
          occlude={[phoneRef]}
          transform
          position={[0.165, -0.235, 0.09]}
          distanceFactor={1.8}
        >
          <IframeWrapper>
            <iframe
              ref={iframeRef}
              src={'https://hci-gu.github.io/sci-project/#/'}
              style={{
                border: 'none',
                background: 'none',
                width: '100%',
                height: '100%',
              }}
            ></iframe>
          </IframeWrapper>
        </Html>
      </group>
    </group>
  )
}

useGLTF.preload('/models/iphone/model.gltf')

export default forwardRef(Phone)
