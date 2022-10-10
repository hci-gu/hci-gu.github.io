import React, { forwardRef } from 'react'
import { Html, useGLTF, useScroll } from '@react-three/drei'
import { useState } from 'react'
import { useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import styled from 'styled-components'

const IframeWrapper = styled.div`
  border-radius: 36px;
  backgroundcolor: white;
  width: 328px;
  height: 711px;
  overflow: hidden;
`

const GlassPane = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
`

const firstPagePath = 'https://hci-gu.github.io/sci-project/#/'
const secondPagePath = 'https://hci-gu.github.io/sci-project/#/demo'
const thirdPagePath = 'https://hci-gu.github.io/sci-project/#/demo/calories'
const fourthPagePath = 'https://hci-gu.github.io/sci-project/#/demo/sedentary'
const fifthPagePath = 'https://hci-gu.github.io/sci-project/#/demo/activity'

function Phone(props, ref) {
  const iframeRef = useRef()
  const scroll = useScroll()
  const phoneRef = useRef()

  useFrame(() => {
    if (!iframeRef.current) return
    const r1 = scroll.range(0 / 8, 1 / 8)
    const r2 = scroll.range(2 / 8 + 1 / 12, 1 / 8)
    const r3 = scroll.range(4 / 8, 1 / 8)
    const r4 = scroll.range(5 / 8, 1 / 8)
    const r5 = scroll.range(6 / 8, 0.5 / 8)
    if (r1 < 0.75 && iframeRef.current.src == secondPagePath) {
      iframeRef.current.src = firstPagePath
    } else if (r1 > 0.75 && iframeRef.current.src == firstPagePath) {
      iframeRef.current.src = secondPagePath
    } else if (r2 < 0.5 && iframeRef.current.src == thirdPagePath) {
      iframeRef.current.src = secondPagePath
    } else if (r2 > 0.5 && iframeRef.current.src == secondPagePath) {
      iframeRef.current.src = thirdPagePath
    } else if (r3 < 0.5 && iframeRef.current.src == fourthPagePath) {
      iframeRef.current.src = thirdPagePath
    } else if (r3 > 0.5 && iframeRef.current.src == thirdPagePath) {
      iframeRef.current.src = fourthPagePath
    } else if (r4 < 0.5 && iframeRef.current.src == fifthPagePath) {
      iframeRef.current.src = fourthPagePath
    } else if (r4 > 0.5 && iframeRef.current.src == fourthPagePath) {
      iframeRef.current.src = fifthPagePath
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
              src={firstPagePath}
              style={{
                border: 'none',
                background: 'none',
                width: '100%',
                height: '100%',
                // transformOrigin: 'top left',
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
