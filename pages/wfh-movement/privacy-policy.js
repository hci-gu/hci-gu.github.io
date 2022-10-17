import { useQuery } from 'urql'
import { useRouter } from 'next/router'
import TextPage from '../../components/TextPage'
import { useLocale } from '../../lib/state'
import { useCMSQuery, withCMSClient } from '../../lib/utils/cms'

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

export default withCMSClient(() => {
  const content = useCMSQuery(TEXT_PAGE_QUERY, '72C8wbuNa19PpNOKGDOHG')

  if (!content) return null

  return <TextPage page={content.textPage} />
})
