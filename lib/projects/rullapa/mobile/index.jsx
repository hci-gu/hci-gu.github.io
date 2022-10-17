import React, { useState } from 'react'
import { Carousel } from 'antd'

import styled from 'styled-components'
import Phone from './components/Phone'
import texts from '../texts'

const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const PageContainer = styled.div`
  height: 250px;
  background-color: #fff;
`

const CarouselContainer = styled(Carousel)`
  border: 1px solid black;
`

const Page = ({ title, text }) => {
  return (
    <PageContainer>
      <h1>{title}</h1>
      <p>{text}</p>
    </PageContainer>
  )
}

const MobileLanding = () => {
  const [page, setPage] = useState(0)

  return (
    <Container>
      <Phone page={page} />
      <CarouselContainer afterChange={setPage}>
        {texts.map((t, i) => (
          <Page {...t} key={`PageText_${i}`} />
        ))}
      </CarouselContainer>
    </Container>
  )
}

export default MobileLanding
