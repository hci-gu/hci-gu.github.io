import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function SmartWatch(props, ref) {
  const { nodes, materials } = useGLTF('/models/applewatch.gltf')
  return (
    <group
      {...props}
      dispose={null}
      ref={ref}
      position={[-12, 0, 0]}
      scale={1.25}
    >
      <group rotation={[0, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Apple_Watch_Series_5001_1.geometry}
          material={materials['Material #72']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Apple_Watch_Series_5001_2.geometry}
          material={materials['Material #71']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Apple_Watch_Series_5001_3.geometry}
          material={materials['Material #74']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Apple_Watch_Series_5001_4.geometry}
          material={materials['Material #73']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Apple_Watch_Series_5001_5.geometry}
          material={materials['Material #75']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Apple_Watch_Series_5001_6.geometry}
          material={materials['Material #76']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Apple_Watch_Series_5001_7.geometry}
          material={materials['Material #77']}
        />
      </group>
    </group>
  )
}

export default forwardRef(SmartWatch)

useGLTF.preload('/models/applewatch.gltf')
