import styled from '@emotion/styled'
import { useSpring, animated } from 'react-spring'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { useMeasure } from '../../lib/utils/hooks'
import { tablet, renderRichText } from '../../lib/utils/layout'
import { useState } from 'react'

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    font-weight: 700;
  }
`

const SectionContainer = styled.div`
  margin: 25px auto;
  width: 750px;

  display: flex;
  flex-direction: column;
  transition: height 500ms ease-in-out;

  > h2 {
    font-size: 24px;
    font-weight: 500;
  }

  ${tablet()} {
    width: 100%;
  }
`

const ItemContainer = styled.div`
  margin-top: 10px;
  padding: 10px;
  padding-bottom: 0;
`

const Question = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  > strong {
    margin-left: 10px;
    font-size: 18px;
    font-weight: 400;
    color: #6c6c6c;
  }
`

const Answer = styled(animated.div)`
  padding: 10px 10px;
  padding-bottom: 0px;

  overflow: hidden;
`

const Divider = styled.div`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.05);
`

const FAQItem = ({ question, answer }) => {
  const [isOpen, setOpen] = useState(false)
  const [bind, { height: viewHeight }] = useMeasure()
  const { height } = useSpring({
    from: { height: 0 },
    to: { height: isOpen ? viewHeight + 20 : 0 },
  })
  return (
    <ItemContainer>
      <Question onClick={() => setOpen(!isOpen)}>
        {isOpen ? <MinusOutlined /> : <PlusOutlined />}
        <strong>{question}</strong>
      </Question>
      <Answer style={{ height }}>
        <div {...bind}>{renderRichText(answer)}</div>
      </Answer>
      <Divider style={{ marginBottom: 0, marginTop: 10 }} />
    </ItemContainer>
  )
}

const FAQSection = ({ section }) => {
  const items = section.faqItemsCollection.items
  return (
    <SectionContainer>
      <h2>{section.title}</h2>
      {items.map((item, i) => (
        <FAQItem {...item} key={`FAQ_Item_${i}`} />
      ))}
    </SectionContainer>
  )
}

const FAQ = ({ faq }) => {
  return (
    <Container>
      <h1>FAQ</h1>
      {faq.map((section, i) => (
        <FAQSection section={section} key={`FAQ_Section_${i}`} />
      ))}
      <Divider style={{ marginTop: 50 }} />
    </Container>
  )
}

export default FAQ
