import React from 'react'
import styled from 'styled-components'
import { Steps } from 'antd'
import { isMobile, renderRichText } from '../utils/layout'
const { Step } = Steps

const Container = styled.div`
  > div {
    margin-top: 50px;
  }
`

const Dot = styled.div`
  margin-left: -6px;
  margin-top: -6px;
  width: 18px;
  height: 18px;
  background-color: #1b4079;
  border-radius: 50%;
`

const customDot = (dot, { status, index }) => <Dot></Dot>

const StepsContainer = ({ title, featuresCollection }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <div>
        <Steps
          current={-1}
          progressDot={customDot}
          style={{ marignTop: 25 }}
          direction={isMobile() ? 'vertical' : 'horizontal'}
        >
          {featuresCollection.items.map((f) => (
            <Step
              key={`Step_${f.title}`}
              title={f.title}
              description={<div>{renderRichText(f.description)}</div>}
            />
          ))}
        </Steps>
      </div>
    </Container>
  )
}

export default StepsContainer
