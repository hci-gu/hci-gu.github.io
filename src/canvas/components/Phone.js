/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { Html, useAspect, useGLTF, useTexture } from '@react-three/drei'

export default function Phone(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/phone/scene.gltf')
  const texture = useTexture('/img/wfh-movement/screen.png')
  useEffect(() => {
    console.log(materials['Material.001'])
    materials['Material.001'].map = texture
    materials['Material.001'].roughness = 0.4
    materials['Material.001'].needsUpdate = true
    // texture.repeat.x = 4
    // texture.repeat.y = 4
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

  const scale = useAspect(
    180, // Pixel-width
    320, // Pixel-height
    1 // Optional scaling factor
  )

  return (
    <group ref={group} {...props} dispose={null} scale={0.075}>
      <group rotation={[-Math.PI / 5, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, -Math.PI]}>
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
              material={materials['Material.001']}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/phone/scene.gltf')
