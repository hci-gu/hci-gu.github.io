import styled from '@emotion/styled'
import { INDEX_QUERY, TEXT_PAGE_QUERY } from '../../lib/utils/queries'
import { getCMSData } from '../api/cms/[page]'
import { middleContent, mobile, renderRichText } from '../../lib/utils/layout'
import Team from '../../components/Team'
import TextPage from '../../components/TextPage'

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
      <Content>{renderRichText(content)}</Content>
    </Container>
  )
}

export async function getServerSideProps(context) {
  const { slug } = context.query

  const data = await getCMSData(
    TEXT_PAGE_QUERY,
    slug[0],
    context.locale,
    'slug'
  )

  if (data.items.length === 0) {
    return {
      notFound: true,
    }
  }

  const { items } = data
  const item = items[0]
  const { content } = item

  return {
    props: {
      content,
    },
  }
}
