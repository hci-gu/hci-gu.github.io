import React from 'react'
import { useRecoilValue } from 'recoil'
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion'
import styled from 'styled-components'
import { localeAtom } from '../../../../state'
import { tablet } from '../../../../utils/layout'

const Container = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #0f0f0f;

  > h1 {
    font-family: 'Poppins';
    color: #0f0f0f;
    padding: 0;
    margin: 0;
  }

  > h1 {
    line-height: 52px;
    font-size: 48px;
  }

  ${tablet()} {
    margin-top: 40px;
    > h1 {
      line-height: 40px;
      font-size: 36px;
    }
  }
`

const textForLanguage = (lang = 'en') => {
  switch (lang) {
    case 'sv':
      return (
        <>
          Har hemarbetet påverkat hur <br></br>mycket du rör på dig?
        </>
      )
    default:
      return (
        <>
          Has working from home affected <br></br>how much you move?
        </>
      )
  }
}

const Heading = () => {
  const locale = useRecoilValue(localeAtom)
  const { fps } = useVideoConfig()
  const frame = useCurrentFrame()
  const opacity = interpolate(
    frame,
    [0, fps * 2, fps * 7, fps * 8],
    [0, 1, 1, 0]
  )

  return (
    <Container>
      <h1 style={{ opacity }}>{textForLanguage(locale ? locale.value : '')}</h1>
    </Container>
  )
}

export default Heading
