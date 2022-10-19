import React from 'react'
import styled from '@emotion/styled'
import { mobile, renderRichText } from '../../../lib/utils/layout'
import { useLayoutBreakpoint } from '../../../lib/utils/hooks'

const Container = styled.div`
  > div {
    margin-top: 50px;

    ${mobile()} {
      align-items: center;
      > div {
        width: 60%;
      }
    }
  }
`

const Dot = styled.div`
  margin-left: -6px;
  margin-top: -6px;
  width: 100px;
  height: 18px;
  display: flex;
  justify-content: center;
  background-color: white;
  z-index: 2;

  > div {
    width: 18px;
    height: 18px;
    background-color: #1b4079;
    border-radius: 50%;
  }

  ${mobile()} {
    width: 36px;
    margin-top: 10px;
  }
`

const Steps = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 160px);
  justify-items: center;
  justify-content: space-between;

  ${mobile()} {
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;
  }
`

const Line = styled.div`
  position: absolute;

  width: calc(100% - 150px);
  height: 2px;
  border-bottom: 4px dashed rgba(27, 64, 121, 0.1);

  ${mobile()} {
    display: none;
  }
`

const Step = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  text-align: center;

  > div {
    :nth-of-type(even) {
      margin-top: 1rem;
    }
    > p {
      margin: 0;
      color: #00000073;
    }
  }

  ${mobile()} {
    flex-direction: row;
    justify-content: flex-start;
    text-align: justify;
  }
`

const StepsContainer = ({ title, featuresCollection }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <Steps>
        <Line />
        {featuresCollection?.items.map((f) => (
          <Step key={`Step_${f.title}`}>
            <Dot>
              <div />
            </Dot>
            <div>
              <strong>{f.title}</strong>
              {renderRichText(f.description)}
            </div>
          </Step>
        ))}
      </Steps>
    </Container>
  )
}

export default StepsContainer
