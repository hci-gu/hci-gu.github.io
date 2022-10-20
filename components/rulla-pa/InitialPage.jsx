import { ArrowDownOutlined } from '@ant-design/icons'
import styled from '@emotion/styled'

const Container = styled.div`
  > h1 {
    position: absolute;
    top: 40vh;
    font-size: 18vw;
    width: 100vw;
    text-align: center;
  }

  > span {
    position: absolute;
    top: 92.5vh;
    font-size: 1.25vw;
    width: 100vw;
    text-align: center;
    font-weight: 200;
  }
`

const InitialPage = () => {
  return (
    <Container>
      <h1>RullaPå</h1>
      <span>
        Scrolla ner <ArrowDownOutlined />
      </span>
    </Container>
  )
}

export default InitialPage
