import styled from '@emotion/styled'
import { INDEX_QUERY } from '../../lib/utils/queries'
import { getCMSData } from '../api/cms/[page]'
import { middleContent, mobile } from '../../lib/utils/layout'
import Team from '../../components/Team'

const Container = styled.div`
  font-family: 'Manrope';
  ${mobile()} {
    padding-top: 0;
  }
`

const Content = styled.div`
  ${middleContent()}
`

export default function ({ content }) {
  return (
    <Container>
      <Content>
        <Team {...content.team} />
      </Content>
    </Container>
  )
}

export async function getServerSideProps(context) {
  const data = await getCMSData(
    INDEX_QUERY,
    '5BaRlonhLZbVN59DVybNWF',
    context.locale
  )

  return {
    props: {
      content: data,
    },
  }
}
