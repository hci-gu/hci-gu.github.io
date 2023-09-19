import TextPage from '../../components/TextPage'
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
  const content = useCMSQuery(TEXT_PAGE_QUERY, '2qmRfkw2eLhhIVFOGWBhd8')

  if (!content) return null

  return <TextPage page={content} />
})
