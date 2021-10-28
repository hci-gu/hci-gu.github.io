import React, { useRef } from 'react'
import { Line } from '@ant-design/charts'
import styled from 'styled-components'
import Heading from './Heading'
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion'

import data from './data.json'
import theme from './theme.json'
import { tablet } from '../../../../utils/layout'

const Container = styled.div`
  width: 100%;
  margin: 2rem;

  display: flex;
  flex-direction: column;

  > h1 {
    margin: 0;
    margin-bottom: 1rem;
  }

  ${tablet()} {
    margin: 0.5rem 0;
  }
`

const ChartWrapper = styled.div`
  margin: 0 auto;
  width: 600px;
  height: 450px;
  background-color: #f5f5f5;
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 8px 8px 6px 1px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;

  ${tablet()} {
    transform: scale(0.6);
    margin-left: -25%;
    width: 150%;
  }
`

const LineChart = () => {
  const config = {
    theme,
    data,
    xField: 'hour',
    yField: 'value',
    smooth: true,
    animation: {
      appear: {
        animation: 'path-in',
        delay: 500,
        duration: 3500,
      },
    },
    yAxis: {
      min: 0,
      max: 800,
      label: {
        style: {
          fontSize: 18,
        },
      },
    },
    xAxis: {
      label: {
        autoHide: {
          type: 'equidistance',
          cfg: {
            minGap: 100,
          },
        },
        style: {
          fontSize: 18,
        },
      },
    },
    seriesField: 'series',
    legend: true,
  }

  return <Line {...config} />
}

const MemoizedLineChart = React.memo(LineChart)

const LineChartAnimtedShort = () => {
  const ref = useRef()
  const { fps } = useVideoConfig()
  const frame = useCurrentFrame()

  const opacity = interpolate(
    frame,
    [0, 1 * fps, 7 * fps, 7.5 * fps],
    [0, 1, 1, 0]
  )
  const springOpacity = spring({ fps, from: 0, to: 1, frame: opacity })
  const top = interpolate(frame, [0, 60], [0, 60], {
    extrapolateRight: 'clamp',
  })
  const springTop = spring({ fps, from: 200, to: 0, frame: top })

  return (
    <>
      <Container
        style={{
          opacity,
          transform: `translateY(${springTop}px)`,
        }}
      >
        <Heading />
        <ChartWrapper>
          <MemoizedLineChart parentRef={ref} />
        </ChartWrapper>
      </Container>
    </>
  )
}

export default LineChartAnimtedShort
