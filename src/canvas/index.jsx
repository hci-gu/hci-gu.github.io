import React, { Suspense, useMemo } from 'react'
import * as THREE from 'three'

import { Html, OrbitControls, Shadow } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, softShadows } from '@react-three/drei'
import { useRef } from 'react'
import styled from 'styled-components'
import Appademin from '../pages/Appademin'
import Phone from './components/iPhone'

softShadows()

const Screen = styled.div`
  transform: translateZ(0);

  width: 200%;
  height: 610px;
  transform: scale(0.5);
  margin-left: -50%;
  border-radius: 24px;
  overflow: hidden;

  > iframe,
  img {
    border: none;
    width: 100%;
    height: 100%;
  }
`

// const Phone = () => {
//   const group = useRef()
//   const { nodes, materials } = useGLTF('/models/minimal_smart_phone/scene.gltf')
//   const texture = useMemo(
//     () => new THREE.TextureLoader().load('/img/wfh-movement/screen.png'),
//     []
//   )
//   console.log(texture)

//   useFrame((state) => {
//     const t = state.clock.getElapsedTime()
//     group.current.rotation.x = THREE.MathUtils.lerp(
//       group.current.rotation.x,
//       Math.cos(t / 2) / 10 + 0.25,
//       0.1
//     )
//     group.current.rotation.y = THREE.MathUtils.lerp(
//       group.current.rotation.y,
//       Math.sin(t / 4) / 10,
//       0.1
//     )
//     group.current.rotation.z = THREE.MathUtils.lerp(
//       group.current.rotation.z,
//       Math.sin(t / 4) / 20,
//       0.1
//     )
//     group.current.position.y = THREE.MathUtils.lerp(
//       group.current.position.y,
//       (-5 + Math.sin(t)) / 5,
//       0.1
//     )
//   })

//   return (
//     <group ref={group} dispose={null}>
//       <group rotation={[-Math.PI / 2, 0, 0]}>
//         <group rotation={[Math.PI / 2, 0, 0]}>
//           <group
//             position={[0, 0, 0]}
//             rotation={[-Math.PI / 5, 0, -Math.PI]}
//             scale={[-0.5, 1.05, 0.0425125]}
//           >
//             <mesh
//               geometry={nodes.Cube_Metallic_phone_0.geometry}
//               material={materials.Metallic_phone}
//             />
//             <mesh
//               geometry={nodes.Cube_Screen_0.geometry}
//               material={materials.Screen}
//             >
//               <meshBasicMaterial
//                 attach="material"
//                 map={texture}
//                 mapScale={0.25}
//               />
//             </mesh>
//             <mesh
//               geometry={nodes.Cube_Camera_0.geometry}
//               material={materials.Camera}
//             />
//           </group>
//         </group>
//       </group>
//     </group>
//   )
// }

const Root = styled.div`
  position: relative;
  width: 100%;
  height: 800px;

  > div {
    position: absolute;
    left: -150px;
    width: 150%;
    height: 100%;
  }
`

const CanvasRoot = () => {
  return (
    <Root>
      <div>
        <Canvas camera={{ position: [1.5, 1.5, 1.5] }}>
          {/* <fog attach="fog" args={['orange', 15, 150]} /> */}
          <OrbitControls
          // enablePan={false}
          // enableZoom={false}
          // maxPolarAngle={Math.PI / 3.2}
          // minPolarAngle={Math.PI / 3.2}
          />
          <ambientLight intensity={5} />
          <pointLight position={[1, 2, 1]} intensity={5} />
          <Suspense fallback={null}>
            <Phone />
          </Suspense>
        </Canvas>
      </div>
    </Root>
  )
}

export default CanvasRoot
