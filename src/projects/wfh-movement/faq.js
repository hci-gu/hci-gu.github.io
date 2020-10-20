import React from 'react'
import styled from 'styled-components'
import Link from '../../components/Link'

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

const FaqQuestionAndAnswer = ({ question, answer, replace, link, twitter }) => {
  const parts = replace ? answer.split(replace) : [answer]
  if (replace) parts.splice(1, 0, replace)
  return (
    <li key={`Faq_${question}`}>
      <strong>{question}</strong>
      <span>
        {parts.map((part) => {
          if (part === replace) {
            return <Link {...link}>{replace}</Link>
          }
          return part
        })}
      </span>
    </li>
  )
}

const Faq = () => {
  return (
    <Container>
      <h1>FAQ</h1>
      <FaqList>{faqList.map(FaqQuestionAndAnswer)}</FaqList>
    </Container>
  )
}

export default Faq
