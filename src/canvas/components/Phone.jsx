/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useTexture } from '@react-three/drei'

export default function Phone() {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/smart_phone/scene.gltf')
  const texture = useTexture('/models/smart_phone/screen.png')

  useEffect(() => {
    materials['Screen'].map = texture
    materials['Screen'].needsUpdate = true
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 2) / 10 + 0.25,
      0.1
    )
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 4) / 10,
      0.1
    )
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(t / 4) / 20,
      0.1
    )
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      (-5 + Math.sin(t)) / 10,
      0.1
    )
  })

  return (
    <group ref={group} position={[0, 0.5, -0.4]} castShadow receiveShadow>
      <group rotation={[-Math.PI / 5, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            rotation={[Math.PI / 2, 0, 0]}
            scale={[-1.05 / 1.4, -2.2 / 1.4, -0.09 / 1.4]}
          >
            <mesh
              geometry={nodes.Cube_Camera_0.geometry}
              material={materials.Camera}
            />
            <mesh
              geometry={nodes.Cube_Metallic_phone_0.geometry}
              material={materials.Metallic_phone}
            />
            <mesh
              geometry={nodes.Cube_Screen_0.geometry}
              material={materials.Screen}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/phone/scene.gltf')
