import { useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { ScrollControls, useScroll, Scroll, useAspect } from '@react-three/drei'
import styled from '@emotion/styled'
import Phone from '../../components/rulla-pa/Phone'
import SmartWatch from '../../components/rulla-pa/Watch'
import Page from '../../components/rulla-pa/Page'
import InitialPage from '../../components/rulla-pa/InitialPage'
import { useLayoutBreakpoint } from '../../lib/utils/hooks'
import texts from '../../components/rulla-pa/texts'
import MobileLanding from '../../components/rulla-pa/mobile'

const Composition = () => {
  const { size } = useThree()
  const [width, height] = useAspect(size.width, size.height)
  const offset = width / 8
  console.log(width, offset)
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
      (offset * r1 + -offset * 2 * r1_2 + offset * r5) * zoom,
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
  width: 100vw;
  height: 100vh;
`

const Landing = () => {
  return <Container></Container>
}

const CanvasComponents = () => {
  return (
    <>
      <ScrollControls damping={6} pages={8} distance={1.5}>
        <Composition />
        <Scroll html style={{ width: '100%', zIndex: 10 }}>
          <InitialPage />
          {texts.map((t, i) => (
            <Page {...t} key={`PageText_${i}`} />
          ))}
          <h2
            style={{
              position: 'absolute',
              left: '0',
              width: '100vw',
              textAlign: 'center',
              fontSize: '8vw',
              top: '762.5vh',
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
    </>
  )
}

Landing.r3f = () => {
  return (
    <>
      <CanvasComponents />
    </>
  )
}

Landing.onlyCanvas = true
Landing.layout = (children) => {
  return <>{children}</>
}

export default Landing
