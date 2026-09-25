import { getCMSData, getFooter, REVALIDATE_SECONDS } from '../../lib/server/cms'
import styled from '@emotion/styled'
import { INDEX_QUERY, TEXT_PAGE_QUERY } from '../../lib/utils/queries'
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

export async function getStaticProps(context) {
  const { slug } = context.params

  const data = await getCMSData(
    TEXT_PAGE_QUERY,
    slug[0],
    context.locale,
    'slug'
  )

  if (data.items.length === 0) {
    return {
      notFound: true,
      revalidate: REVALIDATE_SECONDS,
    }
  }

  const { items } = data
  const item = items[0]
  const { content } = item

  return {
    revalidate: REVALIDATE_SECONDS,
    props: {
      footer: await getFooter(context.locale),
      content,
    },
  }
}

// Generate CMS routes on first request, then cache each path and locale.
export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' }
}
