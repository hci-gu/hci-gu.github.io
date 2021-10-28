import React, { useEffect, useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'
import { useGLTF, useTexture } from '@react-three/drei'
import { useCurrentFrame } from 'remotion'
import useMovement from './hooks/useMovement'

export default function Phone() {
  const frame = useCurrentFrame()
  const group = useRef()
  const { scene, nodes, materials } = useGLTF(`/models/smart_phone/scene.gltf`)

  const texture = useTexture(`/models/smart_phone/screen.png`)
  const texture2 = useTexture(`/models/smart_phone/screen_2.png`)

  //   useLayoutEffect(() => {
  //     Object.assign(materials.Screen, {
  //       roughness: 0.15,
  //       metalness: 1,
  //       emissive: new THREE.Color('#000'),
  //       envMapIntensity: 0.15,
  //     })
  //     materials['Screen'].map = texture
  //     materials['Screen'].needsUpdate = true
  //   }, [scene, nodes, materials])

  useEffect(() => {}, [frame])

  const { rotateX, left, depth, top, scaleX, scale } = useMovement()

  return (
    <group
      ref={group}
      castShadow
      receiveShadow
      position={[left, top, depth]}
      rotation={[0, -Math.PI + rotateX, 0]}
      scale={[scaleX * scale, -2.2 * scale, -0.12 * scale]}
    >
      <mesh
        geometry={nodes.Cube_Camera_0.geometry}
        material={materials.Camera}
      />
      <mesh
        geometry={nodes.Cube_Metallic_phone_0.geometry}
        material={materials.Metallic_phone}
      />
      <mesh geometry={nodes.Cube_Screen_0.geometry}>
        <meshStandardMaterial map={texture} />
      </mesh>
    </group>
  )
}

useGLTF.preload(`${URL}/models/smart_phone/scene.gltf`)
