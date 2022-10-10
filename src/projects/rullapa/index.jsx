import React, { Suspense, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  ScrollControls,
  useScroll,
  Scroll,
  Environment,
} from '@react-three/drei'
import styled from 'styled-components'
import Phone from './components/Phone'
import SmartWatch from './components/Watch'
import Page from './components/Page'
import InitialPage from './components/InitialPage'

const Composition = () => {
  const scroll = useScroll()
  const phone = useRef(null)
  const watch = useRef(null)
  const zoom = 2

  useFrame((_, delta) => {
    if (!phone.current || !watch.current) return
    const r1 = scroll.range(0 / 8, 1 / 8)
    const r1_1 = scroll.range(2 / 8, 1 / 12)
    const r1_2 = scroll.range(2 / 8, 1 / 12)
    const r2 = scroll.range(2 / 8 + 1 / 12, 1 / 8)
    const r3 = scroll.range(4 / 8, 1 / 8)
    const r4 = scroll.range(5 / 8, 1 / 8)
    const r5 = scroll.range(7 / 8, 1 / 8)
    phone.current.position.x = THREE.MathUtils.damp(
      phone.current.position.x,
      (3 * r1 + -7 * r1_2 + 4 * r5) * zoom,
      3,
      delta
    )
    phone.current.position.y = THREE.MathUtils.damp(
      phone.current.position.y,
      (-2 * r1 + 5.5 * r1_1 + -5.5 * r2 + 1 * r5) * zoom,
      4,
      delta
    )
    phone.current.position.z = THREE.MathUtils.damp(
      phone.current.position.z,
      (2 * r1 + -10 * r1_1 + 10 * r2) * zoom,
      8,
      delta
    )
    phone.current.rotation.z = THREE.MathUtils.damp(
      phone.current.rotation.z,
      (Math.PI / 2) * r1_1 - (Math.PI / 2) * r2,
      8,
      delta
    )
    phone.current.rotation.x = THREE.MathUtils.damp(
      phone.current.rotation.x,
      (Math.PI / 2) * r1_1 - (Math.PI / 2) * r2,
      10,
      delta
    )
    phone.current.rotation.y = THREE.MathUtils.damp(
      phone.current.rotation.y,
      Math.PI * 2 * r1 +
        -Math.PI * 2 * r2 +
        Math.PI * 2 * r3 +
        Math.PI * 2 * r4,
      4,
      delta
    )

    watch.current.position.x = THREE.MathUtils.damp(
      watch.current.position.x,
      (-16 + 12 * r1_1 + 8 * r1_2 + 12 * r2) * zoom,
      3,
      delta
    )
    watch.current.position.y = THREE.MathUtils.damp(
      watch.current.position.y,
      (-1.5 + 4 * r2) * zoom,
      3,
      delta
    )
    watch.current.rotation.x = THREE.MathUtils.damp(
      watch.current.rotation.x,
      Math.PI * 2 * r1_1,
      3,
      delta
    )
  })

  return (
    <>
      <Phone ref={phone} />
      <SmartWatch ref={watch} />
    </>
  )
}

const Container = styled.div`
  height: 100vh;
`

const Landing = () => {
  return (
    <Container>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 15], fov: 60 }}>
        <Environment preset="city" />
        <ScrollControls damping={6} pages={8} distance={1.5}>
          <Composition />
          <Scroll html style={{ width: '100%', zIndex: 10 }}>
            <InitialPage />
            <Page
              page={1.2}
              title="Se din rörelse"
              text="Få en överblick över din dagliga rörelse och få tips på hur du kan
              förbättra din hälsa."
            />
            <Page
              page={2.25}
              title="Med data från en smartklocka"
              text="Puls och accelerometerdata"
              align="center"
              small
            />
            <Page
              page={3.5}
              title="Mät dina kalorier"
              text="Se hur mycket du förbränner under en dag för att kunna hålla koll på din vikt."
              align="flex-end"
            />
            <Page
              page={4.5}
              title="Upp och rulla"
              text="Påminnelser om att röra sig om du varit stillasittande för länge."
              align="flex-end"
            />
            <Page
              page={5.5}
              title="Träning & rörelse"
              text="Få kåll på din träning samt vardagsmotion som bryter upp ditt stillasittande."
              align="flex-end"
            />
            <h2
              style={{
                position: 'absolute',
                left: '0',
                width: '100vw',
                textAlign: 'center',
                fontSize: '8vw',
                top: '770vh',
              }}
            >
              Testa själv
            </h2>
            <p
              style={{
                position: 'absolute',
                left: '0',
                width: '100vw',
                textAlign: 'center',
                fontSize: '1.5vw',
                fontWeight: 200,
                top: '790vh',
              }}
            >
              Klicka runt i telefonen för att utforska funktionerna
            </p>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </Container>
  )
}

export default Landing
