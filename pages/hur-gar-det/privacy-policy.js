import TextPage from '../../components/TextPage'
import { getCMSPageProps } from '../../lib/server/cms'

const TEXT_PAGE_QUERY = `
query($id:String!, $locale: String!) {
  textPage(id: $id, locale: $locale) {
   	name
    content {
      json
    }
  }
}
`

export default function Page({ content }) {
  return <TextPage page={content} />
}

export async function getStaticProps(context) {
  return getCMSPageProps(context, TEXT_PAGE_QUERY, '4veVCa4pHaOL5ufaFwUqct')
}
