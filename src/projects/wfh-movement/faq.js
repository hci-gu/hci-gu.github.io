import React from 'react'
import styled from 'styled-components'

import faqList from './data/faq'

const Container = styled.div`
  margin: 0 auto;

  > p {
    text-align: justify;
  }
`

const FaqList = styled.ul`
  margin: 0;
  padding: 0;

  > li {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
  }
`

const FaqQuestionAndAnswer = ({ question, answer }) => (
  <li>
    <strong>{question}</strong>
    <span>{answer}</span>
  </li>
)

const Faq = () => {
  return (
    <Container>
      <h1>FAQ</h1>
      {/* <ul>{faqList.map(({ question }) => FaqQuestion(question))}</ul> */}

      <FaqList>{faqList.map(FaqQuestionAndAnswer)}</FaqList>
    </Container>
  )
}

export default Faq
